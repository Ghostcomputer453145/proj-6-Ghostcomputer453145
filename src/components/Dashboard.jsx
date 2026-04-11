import React, { useState, useEffect } from "react";
import { themes } from "../themes";
import { fetchThemeData, filterThemeData } from "../services/api";
import { useNavigate } from "react-router-dom";
import Charts from "./Charts";
import booksBg from "../images/booksTheme.png";
import breweryBg from "../images/breweryTheme.png";

const themeBackgrounds = {
  booksTheme: booksBg,
  breweryTheme: breweryBg,
};

export default function Dashboard({ selectedTheme }) {
  const [data, setData] = useState([]);
  const [stats, setStats] = useState({});
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [yearRange, setYearRange] = useState([0, Infinity]);
  const [showCharts, setShowCharts] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedTheme) return;

    const load = async () => {
      const themeObj = themes[selectedTheme];
      const { data: fetched, stats: s } = await fetchThemeData(themeObj);
      setData(fetched);
      localStorage.setItem("cachedList", JSON.stringify(fetched));
      setStats(s);
      setFilter("all");
      setSearch("");

      if (selectedTheme === "booksTheme") {
        setYearRange([s.minYear, s.maxYear]);
      } else {
        setYearRange([0, Infinity]);
      }
    };

    load();
  }, [selectedTheme]);

  useEffect(() => {
    if (!selectedTheme) {
      document.body.style.background = "#111";
      return;
    }
    const bg = themeBackgrounds[selectedTheme];
    document.body.style.backgroundImage = `url(${bg})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
  }, [selectedTheme]);

  const filteredData = selectedTheme
    ? filterThemeData(themes[selectedTheme], data, search, filter, yearRange)
    : [];

  const filterOptions =
    selectedTheme && data.length
      ? selectedTheme === "booksTheme"
        ? [...new Set(data.map((d) => d.author))]
        : [...new Set(data.map((d) => d.type))]
      : [];

  const formatStatLabel = (key) => {
    const map = {
      totalBooks: "Total Books",
      uniqueAuthors: "Unique Authors",
      avgYear: "Average Year",
      totalBreweries: "Total Breweries",
      uniqueCities: "Unique Cities",
      uniqueTypes: "Unique Types",
      minYear: "Earliest Year",
      maxYear: "Latest Year",
    };
    return map[key] || key;
  };

  const goToDetail = (item) => {
    localStorage.setItem("selectedItem", JSON.stringify(item));
    navigate(`/details/${btoa(item.id)}`);
  };

  return (
    <div className="dashboard">

      {!selectedTheme ? (
        <div style={{
          textAlign: "center",
          marginTop: "80px",
          fontSize: "20px"
        }}>
          Select a theme to begin.
        </div>
      ) : (
        <>
          <div className="controls">

            <input
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">All</option>
              {filterOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>

            <button onClick={() => setShowCharts(prev => !prev)}>
              {showCharts ? "Hide Charts" : "Show Charts"}
            </button>

            {selectedTheme === "booksTheme" && stats.minYear && stats.maxYear && (
              <div className="slider-container">
                <label>
                  Year: {yearRange[0]} - {yearRange[1]}
                </label>

                <input
                  type="range"
                  min={stats.minYear}
                  max={stats.maxYear}
                  value={yearRange[0]}
                  onChange={(e) =>
                    setYearRange([+e.target.value, yearRange[1]])
                  }
                />

                <input
                  type="range"
                  min={stats.minYear}
                  max={stats.maxYear}
                  value={yearRange[1]}
                  onChange={(e) =>
                    setYearRange([yearRange[0], +e.target.value])
                  }
                />
              </div>
            )}
          </div>

          <div className="stats">
            {Object.entries(stats).map(([k, v]) => (
              <div className="stat-card" key={k}>
                <h2>{v}</h2>
                <p>{formatStatLabel(k)}</p>
              </div>
            ))}
          </div>

          <div style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap"
          }}>

            <div style={{ flex: "1 1 600px", minWidth: "0" }}>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>
                        {selectedTheme === "booksTheme"
                          ? "Author"
                          : "City / State"}
                      </th>
                      <th>
                        {selectedTheme === "booksTheme"
                          ? "Year"
                          : "Type"}
                      </th>
                      <th>Details</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredData.map((item) => (
                      <tr key={item.id} onClick={() => goToDetail(item)} style={{ cursor: "pointer" }}>
                        <td>{item.name}</td>
                        <td>{item.author || `${item.city}, ${item.state}`}</td>
                        <td>{item.year || item.type}</td>
                        <td>
                          <button onClick={() => goToDetail(item)}>🔗</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            </div>

            {showCharts && (
              <div style={{ flex: "1 1 500px" }}>
                <Charts data={filteredData} theme={selectedTheme} />
              </div>
            )}

          </div>
        </>
      )}
    </div>
  );
}
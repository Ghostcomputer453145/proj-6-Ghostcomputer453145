import React, { useState, useEffect } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import ThemeSelector from "./ThemeSelector";
import { themes } from "../themes";
import booksBg from "../images/booksTheme.png";
import breweryBg from "../images/breweryTheme.png";
import { fetchThemeData, filterThemeData } from "../services/api";

const themeBackgrounds = {
  booksTheme: booksBg,
  breweryTheme: breweryBg,
};

export default function Dashboard({ selectedTheme, setSelectedTheme }) {
  const [data, setData] = useState([]);
  const [stats, setStats] = useState({});
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedTheme) return;

    const loadData = async () => {
      setLoading(true);
      const themeObj = themes[selectedTheme];
      try {
        const { data, stats } = await fetchThemeData(themeObj);
        setData(data);
        setStats(stats);
      } catch (error) {
        setData([]);
        setStats({});
      }
      setSearch("");
      setFilter("all");
      setLoading(false);
    };

    loadData();
  }, [selectedTheme]);

  useEffect(() => {
    if (selectedTheme) {
      const bgUrl = themeBackgrounds[selectedTheme];
      document.body.style.backgroundImage = `url(${bgUrl})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.transition = "all 0.5s ease";
    } else {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundColor = "#111";
    }

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, [selectedTheme]);

  const filteredData = selectedTheme
    ? filterThemeData(themes[selectedTheme], data, search, filter)
    : [];

  const filterOptions = ["all", ...new Set(data.map((d) => d.field2).filter(Boolean))];

  return (
    <main>
      <ThemeSelector theme={selectedTheme} setTheme={setSelectedTheme} />

      {selectedTheme && (
        <>
          <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
          <Filters options={filterOptions} onSelect={setFilter} />
        </>
      )}

      {loading ? (
        <p style={{ textAlign: "center", fontSize: "20px", color: "#fff" }}>Loading data...</p>
      ) : (
        selectedTheme && (
          <div className="cards">
            {stats && Object.keys(stats).length > 0 &&
              Object.entries(stats).map(([key, value]) => (
                <Card key={key} title={key} value={value} />
              ))
            }
            {filteredData.map((item) => (
              <Card key={item.id} title={item.name} value={`${item.field1} | ${item.field2}`} />
            ))}
          </div>
        )
      )}
    </main>
  );
}
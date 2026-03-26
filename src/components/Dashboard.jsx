import React, { useState, useEffect } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import ThemeSelector from "./ThemeSelector";
import { themes } from "../themes";
import { fetchThemeData } from "../services/api";

export default function Dashboard() {
  const [selectedTheme, setSelectedTheme] = useState("binIPCheckerTheme");
  const [data, setData] = useState([]);
  const [stats, setStats] = useState({});
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

  const filteredData = data.filter((item) => {
    const name = item.name || "";
    const matchesSearch = name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || item.field2 === filter;
    return matchesSearch && matchesFilter;
  });

  const filterOptions = ["all", ...new Set(data.map((d) => d.field2).filter(Boolean))];

  return (
    <main>
      <h2 style={{ marginBottom: "16px" }}>Multi Data Dashboard</h2>
      <ThemeSelector theme={selectedTheme} setTheme={setSelectedTheme} />
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      <Filters options={filterOptions} onSelect={setFilter} />

      {loading ? (
        <p style={{ textAlign: "center", fontSize: "20px" }}>Loading data...</p>
      ) : (
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
      )}
    </main>
  );
}
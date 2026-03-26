import { useEffect, useState } from "react";
import { fetchData } from "../services/api";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import Card from "./Card";

function Dashboard({ theme }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchData(theme);
      setData(result);
      setFiltered(result);
    };

    loadData();
  }, [theme]);

  useEffect(() => {
    const filteredData = data.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(search.toLowerCase())
    );

    setFiltered(filteredData);
  }, [search, data]);

  return (
    <div>
      <SearchBar setSearch={setSearch} />
      <Filters data={data} setFiltered={setFiltered} />

      <h3>Total Items: {filtered.length}</h3>

      <div>
        {filtered.slice(0, 10).map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
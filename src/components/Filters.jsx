function Filters({ data, setFiltered }) {
  const handleFilter = () => {
    const filtered = data.filter((item) =>
      JSON.stringify(item).length > 100
    );
    setFiltered(filtered);
  };

  return <button onClick={handleFilter}>Apply Filter</button>;
}

export default Filters;
export const breweryTheme = {
  fetchUrl: "https://api.openbrewerydb.org/v1/breweries?per_page=50",
  mapData: (data) =>
    data.map((item) => ({
      id: item.id,
      name: item.name,
      field1: item.city,
      field2: item.brewery_type
    })),
  stats: (data) => ({
    total: data.length,
    cities: new Set(data.map((d) => d.field1)).size,
    types: new Set(data.map((d) => d.field2)).size
  }),
  filter: (data, search, category = "all") =>
    data.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) &&
        (category === "all" || item.field2 === category)
    )
};
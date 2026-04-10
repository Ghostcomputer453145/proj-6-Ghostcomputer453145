export const breweryTheme = {
  fetchUrl: "https://api.openbrewerydb.org/v1/breweries?per_page=200",

  mapData: (data) =>
    data.map((item) => ({
      id: item.id,
      name: item.name,
      city: item.city,
      state: item.state_province,
      type: item.brewery_type,
    })),

  stats: (data) => ({
    totalBreweries: data.length,
    uniqueCities: new Set(data.map(d => d.city)).size,
    uniqueTypes: new Set(data.map(d => d.type)).size,
  }),

  filter: (data, search, category = "all") =>
    data.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) &&
        (category === "all" || item.type === category)
    ),
};
export const weatherTheme = {
  fetchUrl: `https://api.weatherbit.io/v2.0/current?city=New%20York&key=${import.meta.env.VITE_WEATHERBIT_API_KEY}`,
  mapData: (data) => {
    if (!data) return [];
    return [{
      id: 1,
      name: data.data[0].city_name || "N/A",
      field1: data.data[0].country_code || "N/A",
      field2: data.data[0].temp || "N/A"
    }];
  },
  stats: (data) => ({total: data.length || 0, temp: data[0]?.field2 || 0}),
  filter: (data, search) =>
    data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
};
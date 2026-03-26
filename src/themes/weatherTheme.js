const API_KEY = import.meta.env.VITE_WEATHER_KEY

export const weatherTheme = {
  fetchUrl: `https://api.weatherbit.io/v2.0/current?city=Miami&key=${API_KEY}`,

  mapData: (data) =>
    data.data.map((item, i) => ({
      id: i,
      name: item.city_name,
      field1: item.temp,
      field2: item.weather.description
    })),

  stats: (data) => ({
    total: data.length,
    avgTemp:
      data.reduce((sum, d) => sum + d.field1, 0) / data.length,
    conditions: new Set(data.map((d) => d.field2)).size
  }),

  filter: (data) => data
}
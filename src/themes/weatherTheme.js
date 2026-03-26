export const weatherTheme = {
  fetchUrl: `https://api.weatherbit.io/v2.0/current?city=New%20York&key=${import.meta.env.VITE_WEATHERBIT_API_KEY}`,

  mapData: (data) => ({
    city: data.data[0].city_name,
    country: data.data[0].country_code,
    temp: data.data[0].temp,
    description: data.data[0].weather.description
  }),

  stats: (data) => ({
    temp: data.temp,
    city: data.city
  }),

  filter: (data, search) =>
    data.city.toLowerCase().includes(search.toLowerCase())
};
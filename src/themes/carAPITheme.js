export const carAPITheme = {
  fetchUrl: "https://car-api2.p.rapidapi.com/api/vin/1GTG6CEN0L1139305",
  fetchOptions: {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "car-api2.p.rapidapi.com"
    }
  },
  mapData: (data) => [{
    id: 1,
    name: data.make + " " + data.model,
    field1: data.year,
    field2: data.color
  }],
  stats: (data) => ({
    total: data.length
  }),
  filter: (data, search) =>
    data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
};
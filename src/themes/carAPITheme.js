export const carAPITheme = {
  fetchUrl: "https://car-api2.p.rapidapi.com/api/vin/1GTG6CEN0L1139305",
  fetchOptions: {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "car-api2.p.rapidapi.com"
    }
  },
  mapData: (data) => {
    if (!data) return [];
    return [{
    id: 1,
    name: data.make + " " + data.model  || "N/A",
    field1: data.year || "N/A",
    field2: data.color || "N/A"
  }];
  },
  stats: (data) => ({total: data.length || 0 }),
  filter: (data, search) =>
    data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
};
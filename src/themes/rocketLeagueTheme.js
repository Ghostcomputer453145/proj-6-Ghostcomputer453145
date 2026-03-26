export const rocketLeagueTheme = {
  fetchUrl: "https://rocket-league1.p.rapidapi.com/tournaments/asia-east",
  fetchOptions: {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "rocket-league1.p.rapidapi.com"
    }
  },
  mapData: (data) => data.slice(0,30).map((item,i)=>({
    id:i,
    name:item.name,
    field1:item.region,
    field2:item.startDate
  })),
  stats: (data) => ({
    total: data.length
  }),
  filter: (data, search) =>
    data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
};
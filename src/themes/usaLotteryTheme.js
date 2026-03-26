export const usaLotteryTheme = {
  fetchUrl: "https://usa-lottery-result-all-state-api.p.rapidapi.com/lottery-results/old/past-draws-dates?gameID=9",
  fetchOptions: {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "usa-lottery-result-all-state-api.p.rapidapi.com"
    }
  },
  mapData: (data) => data.slice(0,30).map((item,i)=>({
    id:i,
    name:item.drawDate,
    field1:item.winningNumbers.join(", "),
    field2:item.jackpot
  })),
  stats: (data) => ({
    total: data.length
  }),
  filter: (data, search) =>
    data.filter((item) => item.name.includes(search))
};
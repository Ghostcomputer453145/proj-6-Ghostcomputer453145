export const seekingAlphaTheme = {
  fetchUrl: "https://seeking-alpha.p.rapidapi.com/symbols/get-momentum?symbols=aapl,tsla",
  fetchOptions: {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "seeking-alpha.p.rapidapi.com"
    }
  },
  mapData: (data) => data.momentum.map((item,i)=>({
    id:i,
    name:item.symbol,
    field1:item.change,
    field2:item.price
  })),
  stats:(data)=>({ total:data.length }),
  filter:(data,search)=>data.filter((i)=>i.name.toLowerCase().includes(search.toLowerCase()))
};
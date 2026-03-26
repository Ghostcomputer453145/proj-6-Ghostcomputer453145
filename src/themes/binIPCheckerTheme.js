export const binIPCheckerTheme = {
  fetchUrl: "https://bin-ip-checker.p.rapidapi.com/?bin=448590",
  fetchOptions: {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "bin-ip-checker.p.rapidapi.com"
    }
  },
  mapData: (data) => [{
    id:1,
    name:data.bin,
    field1:data.brand,
    field2:data.type
  }],
  stats:(data)=>({ total:data.length }),
  filter:(data,search)=>data.filter((i)=>i.name.includes(search))
};
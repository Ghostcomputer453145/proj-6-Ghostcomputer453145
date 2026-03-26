export const binIPCheckerTheme = {
  fetchUrl: "https://bin-ip-checker.p.rapidapi.com/?bin=448590",
  fetchOptions: {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "bin-ip-checker.p.rapidapi.com"
    }
  },
  mapData: (data) => {
    if (!data) return [];
    return [{
        id: 1,
        name: data.bin || "N/A",
        field1: data.brand || "N/A",
        field2: data.type || "N/A"
    }];
  },
  stats: (data) => ({ total: data?.length || 0 }),
  filter:(data,search)=>data.filter((i)=>i.name.includes(search))
};
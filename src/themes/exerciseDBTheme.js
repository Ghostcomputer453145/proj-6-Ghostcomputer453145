export const exerciseDBTheme = {
  fetchUrl: "https://exercisedb.p.rapidapi.com/exercises/targetList",
  fetchOptions: {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
    }
  },
  mapData: (data) => data.map((item,i)=>({
    id:i,
    name:item,
    field1:"Target Exercise",
    field2:"N/A"
  })),
  stats:(data)=>({ total:data.length }),
  filter:(data,search)=>data.filter((i)=>i.name.toLowerCase().includes(search.toLowerCase()))
};
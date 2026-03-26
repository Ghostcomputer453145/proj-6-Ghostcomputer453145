export const moviesTVShowsTheme = {
  fetchUrl: "https://movies-and-tv-shows-streaming.p.rapidapi.com/shows/episode?id=1&sn=1&en=1",
  fetchOptions: {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "movies-and-tv-shows-streaming.p.rapidapi.com"
    }
  },
  mapData: (data) => [{
    id: data.items?.id || 1,
    name: data.items?.name,
    field1: data.items?.season,
    field2: data.items?.airdate
  }],
  stats:(data)=>({ total:data.length }),
  filter:(data,search)=>data.filter((i)=>i.name.toLowerCase().includes(search.toLowerCase()))
};
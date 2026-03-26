export const realTimeLensTheme = {
  fetchUrl: "https://real-time-lens-data.p.rapidapi.com/object-detection?url=https://thumbs.dreamstime.com/b/giraffe-zebra-1533191.jpg",
  fetchOptions: {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "real-time-lens-data.p.rapidapi.com"
    }
  },
  mapData: (data) => data.objects.map((item,i)=>({
    id:i,
    name:item.name,
    field1:item.probability,
    field2:item.box
  })),
  stats:(data)=>({ total:data.length }),
  filter:(data,search)=>data.filter((i)=>i.name.toLowerCase().includes(search.toLowerCase()))
};
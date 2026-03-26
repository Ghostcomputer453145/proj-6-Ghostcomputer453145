export const spotifyDownloaderTheme = {
  fetchUrl: "https://spotify-downloader9.p.rapidapi.com/downloadSong?songId=7jT3LcNj4XPYOlbNkPWNhU",
  fetchOptions: {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "spotify-downloader9.p.rapidapi.com"
    }
  },
  mapData: (data) => [{
    id:1,
    name:data.title || "Song",
    field1:data.artist || "Artist",
    field2:data.album || "Album"
  }],
  stats:(data)=>({ total:data.length }),
  filter:(data,search)=>data.filter((i)=>i.name.toLowerCase().includes(search.toLowerCase()))
};
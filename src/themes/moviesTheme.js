const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY

export const moviesTheme = {
  fetchUrl: "https://movies-and-tv-shows-streaming.p.rapidapi.com/episodes/1",

  fetchOptions: {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host":
        "movies-and-tv-shows-streaming.p.rapidapi.com"
    }
  },

  mapData: (data) => {
    const item = data.items

    return Array.from({ length: 10 }, (_, i) => ({
      id: i,
      name: item.name + " " + (i + 1),
      field1: `Season ${item.season}`,
      field2: `Rating: ${item.rating.average}`
    }))
  },

  stats: (data) => ({
    total: data.length,
    avgRating:
      data.reduce((sum, d) => sum + parseFloat(d.field2.split(": ")[1]), 0) /
      data.length,
    seasons: new Set(data.map((d) => d.field1)).size
  }),

  filter: (data, search) =>
    data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
}
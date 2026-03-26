const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY

export const recipesTheme = {
  fetchUrl: `https://api.spoonacular.com/recipes/complexSearch?number=20&apiKey=${API_KEY}`,

  mapData: (data) =>
    data.results.map((item) => ({
      id: item.id,
      name: item.title,
      field1: "Recipe",
      field2: item.id
    })),

  stats: (data) => ({
    total: data.length,
    avgID:
      data.reduce((sum, d) => sum + d.field2, 0) / data.length,
    maxID: Math.max(...data.map((d) => d.field2))
  }),

  filter: (data, search) =>
    data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
}
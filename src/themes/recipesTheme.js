export const recipesTheme = {
  fetchUrl: `https://api.spoonacular.com/recipes/complexSearch?number=30&apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`,
  mapData: (data) =>
    data.results.map((item) => ({
      id: item.id,
      name: item.title,
      field1: item.readyInMinutes,
      field2: item.servings
    })),
  stats: (data) => ({
    total: data.length,
    avgTime: Math.floor(data.reduce((sum, d) => sum + (d.field1 || 0), 0) / data.length) || 0,
    avgServings: Math.floor(data.reduce((sum, d) => sum + (d.field2 || 0), 0) / data.length) || 0
  }),
  filter: (data, search) =>
    data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
};
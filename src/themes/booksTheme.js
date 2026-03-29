export const booksTheme = {
  fetchUrl: "https://openlibrary.org/search.json?q=harry+potter",
  mapData: (data) =>
    data.docs.slice(0, 30).map((item, i) => ({
      id: i,
      name: item.title,
      field1: item.author_name?.[0] || "N/A",
      field2: item.first_publish_year || "N/A"
    })),
  stats: (data) => ({
    total: data.length,
    authors: new Set(data.map((d) => d.field1)).size,
    avgYear:
      Math.floor(data.reduce((sum, d) => sum + (d.field2 || 0), 0) / data.length) || 0
  }),
  filter: (data, search) =>
    data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
};
export const booksTheme = {
  fetchUrl:
    "https://openlibrary.org/search.json?title=the&limit=200&fields=title,author_name,first_publish_year,key,cover_edition_key",

  mapData: (data) => {
    if (!data.docs || !Array.isArray(data.docs)) return [];
    const seen = new Set();
    const mapped = [];
    for (const item of data.docs) {
      if (!item.title || seen.has(item.title)) continue;
      seen.add(item.title);
      mapped.push({
        id: item.key || item.cover_edition_key || Math.random(),
        name: item.title,
        author: item.author_name?.[0] || "Unknown",
        year: item.first_publish_year || null,
      });
      if (mapped.length >= 30) break;
    }
    return mapped;
  },

  stats: (data) => {
    const years = data.map(d => d.year).filter(Boolean);
    return {
      totalBooks: data.length,
      uniqueAuthors: new Set(data.map(d => d.author)).size,
      avgYear: years.length ? Math.floor(years.reduce((sum, y) => sum + y, 0) / years.length) : 0,
      minYear: years.length ? Math.min(...years) : 0,
      maxYear: years.length ? Math.max(...years) : 0,
    };
  },

  filter: (data, search, category = "all", yearRange = [0, Infinity]) => {
    const [minYear, maxYear] = yearRange;
    const searchLower = search.toLowerCase();
    return data.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchLower);
      const matchesCategory = category === "all" || item.author === category;
      const matchesYear = !item.year || (item.year >= minYear && item.year <= maxYear);
      return matchesSearch && matchesCategory && matchesYear;
    });
  },
};
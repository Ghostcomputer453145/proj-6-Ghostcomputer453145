export const booksTheme = {
  fetchUrl:
    "https://openlibrary.org/search.json?title=the&limit=200&fields=title,author_name,first_publish_year,key",

  mapData: async (data) => {
    if (!data.docs) return [];

    const seen = new Set();
    const mapped = [];

    for (const item of data.docs) {
      if (!item.title || seen.has(item.title)) continue;
      if (!item.key) continue;

      seen.add(item.title);

      try {
        const res = await fetch(`https://openlibrary.org${item.key}.json`);
        const detail = await res.json();

        if (!detail.description) continue;

        mapped.push({
          id: item.key,
          name: item.title,
          author: item.author_name?.[0] || "Unknown",
          year: item.first_publish_year || null,
          key: item.key
        });

        if (mapped.length >= 30) break;
      } catch {
        continue;
      }
    }

    return mapped;
  },

  stats: (data) => {
    const years = data.map(d => d.year).filter(Boolean);
    return {
      totalBooks: data.length,
      uniqueAuthors: new Set(data.map(d => d.author)).size,
      avgYear: years.length ? Math.floor(years.reduce((a, b) => a + b, 0) / years.length) : 0,
      minYear: years.length ? Math.min(...years) : 0,
      maxYear: years.length ? Math.max(...years) : 0,
    };
  },

  filter: (data, search, category = "all", yearRange = [0, Infinity]) => {
    const [minYear, maxYear] = yearRange;
    return data.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "all" || item.author === category) &&
      (!item.year || (item.year >= minYear && item.year <= maxYear))
    );
  },
};
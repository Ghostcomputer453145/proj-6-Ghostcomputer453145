const CACHE_KEY = "booksTheme_cache_v1";

export const booksTheme = {
  fetchUrl:
    "https://openlibrary.org/search.json?title=the&limit=200&fields=title,author_name,first_publish_year,key",

  mapData: async (data) => {
    if (!data.docs) return [];

    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch {
        localStorage.removeItem(CACHE_KEY);
      }
    }

    const seen = new Set();

    const cleaned = data.docs
      .filter(item => {
        if (!item.title || !item.key) return false;
        if (seen.has(item.title)) return false;
        seen.add(item.title);
        return true;
      })
      .slice(0, 30)
      .map(item => ({
        id: item.key,
        name: item.title,
        author: item.author_name?.[0] || "Unknown",
        year: item.first_publish_year || null,
        key: item.key
      }));

    localStorage.setItem(CACHE_KEY, JSON.stringify(cleaned));

    return cleaned;
  },

  stats: (data) => {
    const years = data.map(d => d.year).filter(Boolean);

    return {
      totalBooks: data.length,
      uniqueAuthors: new Set(data.map(d => d.author)).size,
      avgYear: years.length
        ? Math.floor(years.reduce((a, b) => a + b, 0) / years.length)
        : 0,
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
export const fetchThemeData = async (theme) => {
  try {
    const res = await fetch(theme.fetchUrl);
    const data = await res.json();
    const mapped = await theme.mapData(data);
    const stats = theme.stats(mapped);
    return { data: mapped, stats };
  } catch (err) {
    console.error(err);
    return { data: [], stats: {} };
  }
};

export const filterThemeData = (themeObj, data, search, category = "all", yearRange = [0, Infinity]) =>
  themeObj.filter(data, search, category, yearRange);
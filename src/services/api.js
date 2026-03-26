export const fetchThemeData = async (theme) => {
  try {
    const response = await fetch(theme.fetchUrl, theme.fetchOptions || {});
    const data = await response.json();

    const mappedData = theme.mapData(data);
    const stats = theme.stats(mappedData);

    return { data: mappedData, stats };
  } catch (error) {
    console.error("Error fetching theme data:", error);
    return { data: [], stats: {} };
  }
};

export const filterThemeData = (themeObj, data, search, category="all") => {
  try {
    return themeObj.filter(data, search, category);
  } catch {
    return themeObj.filter(data, search);
  }
};
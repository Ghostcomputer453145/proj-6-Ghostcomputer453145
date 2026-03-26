export const fetchThemeData = async (theme) => {
  try {
    const response = await fetch(theme.apiUrl, {
      headers: theme.headers || {},
    });
    const data = await response.json();
    return theme.parseData(data);
  } catch (error) {
    console.error(`Error fetching data for ${theme.name}`, error);
    return [];
  }
};
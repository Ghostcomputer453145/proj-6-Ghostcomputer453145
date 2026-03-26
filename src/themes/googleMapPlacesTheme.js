export const googleMapPlacesTheme = {
  fetchUrl: "https://google-map-places.p.rapidapi.com/maps/api/streetview?size=600x400&location=Chagrin%20Falls%2C%20OH",
  fetchOptions: {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "google-map-places.p.rapidapi.com"
    }
  },
  mapData: (data) => {
    if (!data) return [];
    return [{
      id: 1,
      name: "Street View" || "N/A",
      field1: data.url || "N/A",
      field2: data.location || "N/A"
    }];
  },
  stats: (data) => ({total: data.length || 0}),
  filter: (data, search) => data
};
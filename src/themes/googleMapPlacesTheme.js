export const googleMapPlacesTheme = {
  fetchUrl: "https://google-map-places.p.rapidapi.com/maps/api/streetview?size=600x400&location=Chagrin%20Falls%2C%20OH",
  fetchOptions: {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "google-map-places.p.rapidapi.com"
    }
  },
  mapData: (data) => [{
    id: 1,
    name: "Street View",
    field1: data.url || "N/A",
    field2: data.location || "N/A"
  }],
  stats: (data) => ({
    total: data.length
  }),
  filter: (data, search) => data
};
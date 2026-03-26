export const gamingTheme = {
  fetchUrl: "https://real-time-lens-data.p.rapidapi.com/detect",
  options: {
    method: "POST",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "real-time-lens-data.p.rapidapi.com",
      "Content-Type": "application/json"
    }
  },

  mapData: (data) => ({
    detections: data.data.detections,
    count: data.data.detection_count
  }),

  stats: (data) => ({
    totalObjects: data.count
  }),

  filter: (data, search) =>
    data.detections.filter((d) => d.label.toLowerCase().includes(search.toLowerCase()))
};
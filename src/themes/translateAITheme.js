export const translateAITheme = {
  fetchUrl: "https://translateai.p.rapidapi.com/google/translate/json",
  fetchOptions: {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "translateai.p.rapidapi.com"
    },
    body: JSON.stringify({
      origin_language: "en",
      target_language: "bn",
      json_content: { sampleText: "Hello World, AI Translation!" }
    })
  },
  mapData: (data) => [{
    id: 1,
    name: "Translation",
    field1: data.json_content?.sampleText,
    field2: data.translated_text || "N/A"
  }],
  stats: (data) => ({
    total: data.length
  }),
  filter: (data, search) =>
    data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
};
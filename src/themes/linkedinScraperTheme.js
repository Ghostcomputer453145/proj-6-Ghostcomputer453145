export const linkedinScraperTheme = {
  fetchUrl: "https://linkedin-data-api.p.rapidapi.com/get-company-by-domain?domain=apple.com",
  fetchOptions: {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "linkedin-data-api.p.rapidapi.com"
    }
  },
  mapData: (data) => [{
    id:1,
    name:data.name,
    field1:data.industry,
    field2:data.website
  }],
  stats:(data)=>({ total:data.length }),
  filter:(data,search)=>data.filter((i)=>i.name.toLowerCase().includes(search.toLowerCase()))
};
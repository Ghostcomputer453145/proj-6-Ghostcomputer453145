export const mobilePhoneSpecsTheme = {
  fetchUrl: "https://mobile-phone-specs-database.p.rapidapi.com/gsm/get-specifications-by-phone-custom-id/103693",
  fetchOptions: {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "mobile-phone-specs-database.p.rapidapi.com"
    }
  },
  mapData: (data) => [{
    id:1,
    name:data.data?.brand + " " + data.data?.phone_name,
    field1:data.data?.os,
    field2:data.data?.sim
  }],
  stats:(data)=>({ total:data.length }),
  filter:(data,search)=>data.filter((i)=>i.name.toLowerCase().includes(search.toLowerCase()))
};
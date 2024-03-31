import axios from "axios";


const BASE_URL='https://youtube138.p.rapidapi.com';


const options = {
  params: {
    //q: 'desp',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': '420634399bmsh2e9e2fde5968941p1a4cb4jsn484094813ad6',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

  
export const fetchDataFromApi=async (url)=>{
    const { data } = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}
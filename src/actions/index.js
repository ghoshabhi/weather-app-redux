import axios from 'axios';
const API_KEY = 'e7999facc01c75846966be81c5b04f21';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const REQUEST_URL = `${ROOT_URL}&q=${city},us`;

  const request = axios.get(REQUEST_URL);
  
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

import axios from "axios";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.weatherapi.com/v1";
export const getCurrentWeather = async (city) => {
  const response = await axios.get(`${BASE_URL}/current.json`, {
    params: { key: API_KEY, q: city },
  });
  return response.data;
};
export const getForecast = async (city) => {
  const response = await axios.get(`${BASE_URL}/forecast.json`, {
    params: { q: city, key: API_KEY, days: 5 },
  });
  return response.data;
};

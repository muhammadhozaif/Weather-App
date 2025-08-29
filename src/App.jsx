import React, { useState } from "react";
import { getCurrentWeather, getForecast } from "./services/weatherAPI";
function App() {
  const [city, setCity] = useState("Islamabad");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [forecast, setForcecast] = useState(null);
  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      let current = await getCurrentWeather(city);
      let forecastData = await getForecast(city);
      setWeather(current);
      setForcecast(forecastData.forecast.forecastDay);
    } catch (error) {
      console.error("Error fetching weather:", error);
    } finally {
      setLoading(false);
    }
  };
  return <></>;
}

export default App;

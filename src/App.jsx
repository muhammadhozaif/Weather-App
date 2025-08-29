import React, { useEffect, useState } from "react";
import { getCurrentWeather, getForecast } from "./services/weatherAPI";
import { Search } from "lucide-react";

function App() {
  const [city, setCity] = useState("London");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [forecast, setForcecast] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  //Fetching weather data
  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      let current = await getCurrentWeather(city);
      let forecastData = await getForecast(city);
      setWeather(current);
      setForcecast(forecastData.forecast.forecastday);
    } catch (error) {
      console.error("Error fetching weather:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchWeatherData();
  }, []);
  function setFormat(c, f) {
    return isCelsius ? `${c} °C` : `${f}°F`;
  }
  return <></>;
}

export default App;

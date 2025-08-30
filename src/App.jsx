import React, { useEffect, useState } from "react";
import { getCurrentWeather, getForecast } from "./services/weatherAPI";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import ForecastChart from "./components/ForecastChart";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  const [searchInput, setSearchInput] = useState("Islamabad");
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [forecast, setForcecast] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  // Fetching weather data
  const fetchWeatherData = async () => {
    if (searchInput === "") return;
    try {
      setLoading(true);
      let current = await getCurrentWeather(searchInput);
      let forecastData = await getForecast(searchInput);
      setWeather(current.current);
      setLocation(current.location);
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

  return (
    <div className="relative min-h-screen w-full text-white flex flex-col items-center p-8 bg-gradient-to-b from-indigo-800 via-indigo-600 to-indigo-400">
      {/* Overlay with subtle blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-lg"></div>
      <div className="relative z-10 w-full max-w-5xl">
        {/* App Title */}
        <h1 className="text-4xl font-bold text-white mb-6 text-center">
          WeatherWatch
        </h1>

        {/* Search Bar */}
        <SearchBar
          city={searchInput}
          setCity={setSearchInput}
          onSearch={fetchWeatherData}
        />

        {/* Loading state */}
        {loading && (
          <p className="text-center text-gray-300 mt-6 animate-pulse">
            Loading...
          </p>
        )}

        {/* Weather and Forecast */}
        {weather && (
          <>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
              <CurrentWeather
                city={location.name}
                weather={weather}
                isCelsius={isCelsius}
                toggleUnits={() => setIsCelsius(!isCelsius)}
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              <WeatherDetails weather={weather} isCelsius={isCelsius} />
              {forecast && (
                <ForecastChart data={forecast} isCelsius={isCelsius} />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

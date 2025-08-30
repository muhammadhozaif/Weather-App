import React, { useEffect, useState } from "react";
import { getCurrentWeather, getForecast } from "./services/weatherAPI";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import ForecastChart from "./components/ForecastChart";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  const [searchInput, setSearchInput] = useState("London");
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
      console.log(current);

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
    <div
      className="relative min-h-screen w-full text-white flex flex-col items-center p-6"
      style={{
        background: "linear-gradient(180deg, #1a1a1a 0%, #000000 100%)",
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      <div className="relative z-10 w-full max-w-5xl">
        <SearchBar
          city={searchInput}
          setCity={setSearchInput}
          onSearch={fetchWeatherData}
        />

        {loading && (
          <p className="text-center text-gray-300 mt-4">Loading...</p>
        )}

        {weather && (
          <>
            <CurrentWeather
              city={location.name}
              weather={weather}
              isCelsius={isCelsius}
              toggleUnits={() => setIsCelsius(!isCelsius)}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
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

import React from "react";

function CurrentWeather({ city, weather, isCelsius, toggleUnits }) {
  const temp = isCelsius ? `${weather.temp_c}°C` : `${weather.temp_f}°F`;

  return (
    <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 shadow-lg backdrop-blur-md text-white">
      <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-semibold mb-2">{city}</h1>
          <p className="text-5xl font-bold text-yellow-400">{temp}</p>
          <p className="text-xl mt-2 capitalize">{weather.condition.text}</p>
        </div>
        <button
          onClick={toggleUnits}
          className="mt-4 ml-3 md:mt-0 px-5 py-2 bg-white/30 rounded-xl text-lg font-semibold hover:bg-white/40 transition duration-200 ease-in-out"
        >
          Switch to {isCelsius ? "°F" : "°C"}
        </button>
      </div>
    </div>
  );
}

export default CurrentWeather;

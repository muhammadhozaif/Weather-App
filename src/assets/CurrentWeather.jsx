import React from "react";

function CurrentWeather({ city, weather, isCelsius, toggleUnits }) {
  const temp = isCelsius ? `${weather.temp_c}°C` : `${weather.temp_f}°F`;

  return (
    <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold">{city}</h1>
          <p className="text-4xl font-bold text-orange-400">{temp}</p>
          <p className="capitalize">{weather.condition.text}</p>
        </div>
        <button
          onClick={toggleUnits}
          className="px-3 py-1 bg-white/20 rounded-xl text-sm hover:bg-white/30 transition"
        >
          Switch to {isCelsius ? "°F" : "°C"}
        </button>
      </div>
    </div>
  );
}

export default CurrentWeather;

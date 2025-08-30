import React from "react";

export default function WeatherDetails({ weather }) {
  return (
    <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl transition-all duration-300 hover:shadow-2xl">
      <h2 className="text-3xl font-semibold text-white mb-6">
        Weather Details
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg text-white">
        <div className="flex justify-between text-sm sm:text-base">
          <span className="font-medium">Feels like:</span>
          <strong className="text-xl">{weather.feelslike_c}°C</strong>
        </div>
        <div className="flex justify-between text-sm sm:text-base">
          <span className="font-medium">Wind:</span>
          <strong className="text-xl">{weather.wind_kph} kph</strong>
        </div>
        <div className="flex justify-between text-sm sm:text-base">
          <span className="font-medium">Humidity:</span>
          <strong className="text-xl">{weather.humidity}%</strong>
        </div>
        <div className="flex justify-between text-sm sm:text-base">
          <span className="font-medium">UV Index:</span>
          <strong className="text-xl">{weather.uv}</strong>
        </div>
        <div className="flex justify-between text-sm sm:text-base">
          <span className="font-medium">Visibility:</span>
          <strong className="text-xl">{weather.vis_km} km</strong>
        </div>
        <div className="flex justify-between text-sm sm:text-base">
          <span className="font-medium">Pressure:</span>
          <strong className="text-xl">{weather.pressure_mb} hPa</strong>
        </div>
      </div>
    </div>
  );
}

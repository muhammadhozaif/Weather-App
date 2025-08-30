import React from "react";

export default function WeatherDetails({ weather }) {
  return (
    <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg grid grid-cols-2 gap-4 text-sm">
      <div>
        Feels like: <strong>{weather.feelslike_c}°C</strong>
      </div>
      <div>
        Wind: <strong>{weather.wind_kph} kph</strong>
      </div>
      <div>
        Humidity: <strong>{weather.humidity}%</strong>
      </div>
      <div>
        UV Index: <strong>{weather.uv}</strong>
      </div>
      <div>
        Visibility: <strong>{weather.vis_km} km</strong>
      </div>
      <div>
        Pressure: <strong>{weather.pressure_mb} hPa</strong>
      </div>
    </div>
  );
}

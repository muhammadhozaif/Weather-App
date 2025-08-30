import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ForecastChart({ data, isCelsius }) {
  const formatted = data.map((day) => ({
    date: new Date(day.date).toLocaleDateString("en-US", { weekday: "short" }),
    max_temp: isCelsius ? day.day.maxtemp_c : day.day.maxtemp_f,
    min_temp: isCelsius ? day.day.mintemp_c : day.day.mintemp_f,
  }));
  return (
    <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg">
      <h2 className="text-lg mb-4">5-Day Forecast</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={formatted}>
          <XAxis dataKey="date" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line type="monotone" dataKey="max_temp" stroke="#facc15" dot />
          <Line type="monotone" dataKey="min_temp" stroke="#60a5fa" dot />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ForecastChart;

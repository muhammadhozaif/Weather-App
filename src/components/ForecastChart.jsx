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
    <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-white mb-6">5-Day Forecast</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={formatted}>
          <XAxis dataKey="date" stroke="#ccc" fontSize={12} />
          <YAxis stroke="#ccc" fontSize={12} />
          <Tooltip
            contentStyle={{ backgroundColor: "#2c2c2c", color: "#fff" }}
          />
          <Line
            type="monotone"
            dataKey="max_temp"
            stroke="#facc15"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="min_temp"
            stroke="#60a5fa"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ForecastChart;

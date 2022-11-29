import React from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function Chart({ chartdata, title, chartType }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
    },
  };
  return (
    <div className="section">
      {chartType == "DOUGHNUT" && (
        <Doughnut className="chart" data={chartdata} options={options} />
      )}
      {chartType == "BAR" && (
        <Bar className="chart" data={chartdata} options={options} />
      )}
    </div>
  );
}

import React from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function BarChart({ chartdata }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Agents in the various LGAs",
      },
    },
  };
  return (
    <div className="section">
      <Doughnut className="chart" data={chartdata} options={options} />
    </div>
  );
}

import React from "react";
import { Bar } from "react-chartjs-2";

export default function BarChart(data, options) {
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}

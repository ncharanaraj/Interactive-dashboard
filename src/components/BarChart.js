import React from "react";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJs,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["A", "B", "C", "D", "E", "F"],
    datasets: [
      {
        label: "Bar Chart",
        data: [24, 25, 65, 59, 76, 27],
        backgroundColor: ["aqua", "aqua", "aqua"],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;

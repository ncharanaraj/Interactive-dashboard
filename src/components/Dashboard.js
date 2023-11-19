import React from "react";
import BarChart from "./BarChart";
import { Line } from "react-chartjs-2";

const Dashboard = () => {
  return (
    <>
      <div className="flex justify-between p-4">
        <div>
          <h1 className="font-bold">Interactive Dashboard</h1>
        </div>
        <div>
          <input type="date" />
        </div>
      </div>

      <div className="flex justify-between p-4">
        <div>
          <BarChart />
        </div>

        <div>
          <p className="font-medium">Line Chart</p>
          <Line />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

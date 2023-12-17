import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import { API_URL } from "../utils/constants";
import axios from "axios";

const Dashboard = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(API_URL);
      const {
        status,
        data: { data },
      } = response;

      if (status === 200) {
        setData(data);
      }
    } catch (error) {
      console.error("Couldn't get data", error);
    }
  };

  const handleBarClick = (index) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="flex justify-between p-4">
        <div>
          <h1 className="font-bold text-3xl">Interactive Dashboard</h1>
        </div>
        <div>{/* <input type="date" /> */}</div>
      </div>

      <div className="flex justify-evenly m-8 p-8 gap-8">
        <div className="w-full h-full">
          <BarChart onBarClick={handleBarClick} barData={data} />
        </div>

        <div className="w-full h-full">
          {selectedIndex !== null && (
            <LineChart lineData={data} selectedIndex={selectedIndex} />
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;

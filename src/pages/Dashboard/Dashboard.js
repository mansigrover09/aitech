import React from "react";

import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const data12 = {
  labels: ["Firefox", "Chrome", "Edge", "Opera", "IE"],
  datasets: [
    {
      data: [300, 50, 100, 75, 40],
      backgroundColor: ["#fca11a", "#fca11a", "#ffa11a", "#ffc11a", "#fbc40a"],

      // hoverBackgroundColor: [
      // '#fb7ca0','#fb638e','#f9a5bd','#fd2763','#fc497c','#fa2e68'
      // ]
    },
  ],
};

const data221 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Customers",
      backgroundColor: "rgba(251, 99, 142,1)",
      borderColor: "rgba(251, 99, 142,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(251, 99, 142,0.8)",
      hoverBorderColor: "rgba(251, 99, 142,1)",
      data: [255, 279, 140, 211, 116, 265, 119],
    },
  ],
};

const options12 = {
  legend: {
    display: true,
  },
};

const options221 = {
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        categoryPercentage: 0.6,
        barPercentage: 0.6,
        maxBarThickness: 4,
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        },
        ticks: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        categoryPercentage: 0.7,
        barPercentage: 0.7,
        maxBarThickness: 4,
        display: 1,
        gridLines: {
          color: "rgba(0, 0, 0, 0.01)",
        },
        ticks: {
          display: true,
        },
      },
    ],
  },
  maintainAspectRatio: false,
};

const Dashboard = () => {
  return (
    <>
      <h2 className="text-title text-lg md:text-2xl pb-2">Dashboard</h2>
      <div>
        {/* chart */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-4 flex flex-col justify-center items-center border border-gray-200 bg-white shadow-sm">
            <p className="text-gray-500 text-sm">Product Sales</p>

            <div className="chart p-5">
              <div
                className="chart-area"
                style={{ height: 90 + "px", width: 90 + "px" }}
              >
                <Doughnut height={200} data={data12} options={options12} />
              </div>
            </div>
            <p className="text-xl">4500 Sales</p>
            <p className="text-gray-500 text-xs py-2">Total 30% increase</p>
          </div>
          <div className="p-4 flex flex-col justify-center items-center border border-gray-200 bg-white shadow-sm">
            <p className="text-gray-500 text-sm">Monthly Earnings</p>

            <div className="chart p-5">
              <div
                className="chart-area"
                style={{ height: 90 + "px", width: 90 + "px" }}
              >
                <Doughnut height={200} data={data12} options={options12} />
              </div>
            </div>
            <p className="text-xl">$23k Earnings</p>
            <p className="text-gray-500 text-xs py-2">Total 20% increase</p>
          </div>
          <div className="p-4 flex flex-col justify-center items-center border border-gray-200 bg-white shadow-sm">
            <p className="text-gray-500 text-sm">vendors</p>

            <div className="chart p-5">
              <div
                className="chart-area"
                style={{ height: 90 + "px", width: 90 + "px" }}
              >
                <Doughnut height={200} data={data12} options={options12} />
              </div>
            </div>
            <p className="text-xl">320 Vendors</p>
            <p className="text-gray-500 text-xs py-2">Total 10% increase</p>
          </div>
          <div className="p-4 flex flex-col justify-center items-center border border-gray-200 bg-white shadow-sm">
            <p className="text-gray-500 text-sm">Customers</p>

            <div className="chart p-5">
              <div
                className="chart-area"
                style={{ height: 90 + "px", width: 90 + "px" }}
              >
                <Doughnut height={200} data={data12} options={options12} />
              </div>
            </div>
            <p className="text-xl">4500 Users</p>
            <p className="text-gray-500 text-xs py-2">Total 10% increase</p>
          </div>
        </div>

        <br />
        <br />
        {/* customers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="p-4 flex flex-col justify-center items-center border border-gray-200 bg-white shadow-sm col-span-2">
            <p className="text-gray-500 text-lg self-start">Customers</p>

            <div className="chart w-full p-5">
              <Bar data={data221} height={370} options={options221} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

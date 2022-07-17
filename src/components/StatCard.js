import React from "react";
import CountUp from "react-countup";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
const StatCard = ({ firstItem }) => {
  return (
    <div
      className={`flex justify-between items-center w-full md:w-1/2 h-[100px]  ${
        firstItem ? "bg-white" : "bg-[#E19133]"
      } p-4 rounded-md shadow-md`}
    >
      <div className="flex flex-col">
        <span className="font-bold text-sm">Weekly Target</span>
        <span
          className={`font-bold text-xs ${
            firstItem ? "text-[#E19133]" : "text-white"
          } pt-2`}
        >
          25% achieved
        </span>
      </div>
      <div className="h-[85%] border-l border-l-black ml-auto mr-[15%]" />
      <div className="h-[80px] w-[80px] relative ">
        <span
          className={`absolute top-[40%] right-[31%] font-bold text-xs ${
            firstItem ? "text-[#E19133]" : "text-black"
          }`}
        >
          <CountUp delay={1} end={25} />%
        </span>
        <Doughnut
          options={{
            cutout: 35,
            aspectRatio: 1,
            responsive: true,
            borderColor: "transparent",
            maintainAspectRatio: true,
            plugins: {
              tooltip: { enabled: false },
              legend: {
                display: false,
              },
            },
          }}
          data={{
            labels: ["Blue", "Yellow"],
            datasets: [
              {
                label: "My First Dataset",
                data: [25, 100],
                backgroundColor: [firstItem ? "#E19133" : "black", "#F2F2F2"],
                hoverOffset: 2,
              },
            ],
          }}
        />
      </div>
      {/* <img src={firstItem ? chartOrange : chartBlack} alt="" /> */}
    </div>
  );
};

export default StatCard;

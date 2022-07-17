import React from "react";
import CountUp from "react-countup";

const FiguresCard = ({ title, figure }) => {
  return (
    <div
      className="flex flex-col justify-center w-full md:w-[30%] h-[100px] rounded-md p-3"
      style={{
        background:
          "linear-gradient(102.36deg, #E19133 20.42%, rgba(225, 51, 51, 0.37) 99.88%)",
      }}
    >
      <span className="font-bold text-sm text-white/60">{title}</span>

      <span className="font-bold text-base text-white">
        <CountUp delay={1} separator="," end={figure} />
      </span>
    </div>
  );
};

export default FiguresCard;

import React from "react";

const TaskCard = ({ icon, title, detail }) => {
  return (
    <div className="flex space-x-2 w-full">
      <div
        className={`w-[50px] h-[50px] rounded-md ${
          title === "Twitter" ? "bg-[#5FB3F0]" : "bg-[#2F63E8]"
        } flex justify-center items-center`}
      >
        <img src={icon} alt="" className="w-[12px] h-[20px] object-cover" />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-base">{title}</span>
        <span className="text-black/50 text-[13px]">{detail}</span>
      </div>
    </div>
  );
};

export default TaskCard;

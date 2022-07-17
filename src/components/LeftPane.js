import React from "react";
import {
  BookmarkIcon,
  CalendarIcon,
  CheckboxIcon,
  ClockIcon,
  HomeIcon,
  SettingsIcon,
  AddIcon,
} from "../assets/index";

const LeftPane = () => {
  const pageNavItems = [
    {
      icon: HomeIcon,
      title: "Dashboard",
    },
    {
      icon: CalendarIcon,
      title: "Activity",
    },
    {
      icon: SettingsIcon,
      title: "Settings",
    },
  ];

  const postNavItems = [
    {
      icon: CheckboxIcon,
      title: "Published",
    },
    {
      icon: ClockIcon,
      title: "Today’s Scheduled",
    },
    {
      icon: BookmarkIcon,
      title: "Drafts",
    },
  ];
  return (
    <div className="hidden md:flex flex-col h-screen w-fit lg:w-[20%] bg-white py-10 px-6 space-y-12 sticky top-0 bottom-0 max-w-7xl">
      <div className="flex space-x-2 items-center">
        <div className="bg-[#b8926c] w-[50px] h-[50px] rounded-md p-2">
          <div className="bg-[#E19133] w-full h-full"></div>
        </div>
        <div className="hidden lg:flex flex-col">
          <span className="text-xs font-bold">OrangeWhale</span>
          <span className="text-xs">Growth & Marketing</span>
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        <nav className="flex flex-col px-3 space-y-7">
          {pageNavItems.map(({ icon, title }, i) => (
            <li key={i} className="flex space-x-5 items-center">
              <img src={icon} alt="" />
              <span
                className={`text-xs hidden lg:block ${
                  i > 0 ? "font-normal text-[#afafaf]" : "font-bold"
                }`}
              >
                {title}
              </span>
            </li>
          ))}
        </nav>
        <hr className="w-[70%] mx-auto border-[#cfcfcf]" />
        <div className=" hidden lg:flex justify-between items-center ">
          <span className="text-xs font-bold ">Posts</span>
          <img src={AddIcon} alt="" />
        </div>
        <nav className="flex flex-col px-3 space-y-5">
          {postNavItems.map(({ icon, title }, i) => (
            <li key={i} className="flex space-x-5 items-center">
              <img src={icon} alt="" />
              <span
                className={`text-xs hidden lg:block font-normal text-[#afafaf]`}
              >
                {title}
              </span>
            </li>
          ))}
        </nav>
        <hr className="w-[70%] mx-auto " />
      </div>
    </div>
  );
};

export default LeftPane;

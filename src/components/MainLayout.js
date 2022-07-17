import React from "react";
import { FacebookIcon, TwitterIcon, menuIcon, LogoutIcon } from "../assets";
import FiguresCard from "./FiguresCard";
import TaskCard from "./TaskCard";
import StatCard from "./StatCard";
import LogoutModal from "./LogoutModal";

const MainLayout = ({ open, handleClose, handleClickOpen }) => {
  const tasks = [
    {
      icon: FacebookIcon,
      title: "Facebook Ads",
      detail: "Gain atleast 50 visits through facebook ads",
    },
    {
      icon: TwitterIcon,
      title: "Twitter",
      detail: "Gain atleast 12,500 views on SET posts",
    },
    {
      icon: FacebookIcon,
      title: "Facebook",
      detail: "Promote the SET even on facebook with 5 posts",
    },
    {
      icon: FacebookIcon,
      title: "Facebook",
      detail: "Post even photos taken by Micheal Scott (Photographer)",
    },
  ];
  return (
    <>
      <div className="py-10 px-10  flex-1 flex flex-col justify-between space-y-8 max-w-7xl">
        <div className="flex justify-between items-center">
          <img
            src={menuIcon}
            alt=""
            className="w-7 h-7 hover:cursor-pointer md:hidden"
          />
          <img
            src={LogoutIcon}
            alt=""
            onClick={handleClickOpen}
            className="hover:cursor-pointer lg:hidden ml-auto"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <span className="font-bold text-base">May 2022 Performance</span>
          <div className="flex-col md:flex-row flex justify-between items-center space-y-6 md:space-y-0">
            <FiguresCard title={"VIEWS"} figure={7124568} />
            <FiguresCard title={"FOLLOWS"} figure={91344} />
            <FiguresCard title={"LIKES"} figure={654931} />
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <span className="font-bold text-base ">Statistics</span>
          <div className="flex-col md:flex-row flex justify-between items-center space-y-4 md:space-y-0 md:space-x-10">
            <StatCard firstItem />
            <StatCard />
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <span className="font-bold text-base">Monthly Tasks</span>
          <div className="bg-white rounded-lg shadow-xl h-fit py-6 px-5 space-y-5">
            {tasks.map(({ title, detail, icon }, i) => (
              <TaskCard key={i} title={title} detail={detail} icon={icon} />
            ))}
          </div>
        </div>
      </div>
      <LogoutModal open={open} handleClose={handleClose} />
    </>
  );
};

export default MainLayout;

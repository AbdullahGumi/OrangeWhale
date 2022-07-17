import React from "react";
import { BellIcon, LogoutIcon, photo } from "../assets/index";

const RightPane = ({ handleClickOpen }) => {
  return (
    <div className="hidden lg:flex flex-col h-screen w-fit bg-white py-10 px-6 space-y-12 sticky top-0 bottom-0  ">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xs font-bold">Hi John</span>
          <span className="text-xs font-bold text-[#7f7f7f]">
            Good morning!
          </span>
        </div>
        <div className="shadow rounded-md w-8 h-8 flex  p-1 hover:cursor-pointer">
          <img src={BellIcon} alt="" />
        </div>
      </div>
      <div className="flex flex-col space-y-7 items-center">
        <img
          src={photo}
          alt=""
          className="w-[150px] h-[150px] object-cover rounded-lg mx-auto"
        />
        <span className="text-xs font-bold text-[#7f7f7f]">
          Marketing Manager @ orangewhale
        </span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center">
          <span className="text-xs font-bold">736k</span>
          <span className="text-[10px] font-bold text-[#7f7f7f]">
            Followers
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-xs font-bold">76k</span>
          <span className="text-[10px] font-bold text-[#7f7f7f]">
            Following
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-xs font-bold">432</span>
          <span className="text-[10px] font-bold text-[#7f7f7f]">Posts</span>
        </div>
      </div>

      <div
        onClick={handleClickOpen}
        className="flex space-x-4 items-center mx-auto hover:cursor-pointer "
        style={{ marginTop: "auto" }}
      >
        <img src={LogoutIcon} alt="" />
        <span className="text-[#E13333] text-xs font-bold ">
          Log out of account
        </span>
      </div>
    </div>
  );
};

export default RightPane;

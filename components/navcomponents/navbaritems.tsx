import React from "react";
import HomeIconSVG from "./svg/Home";
import ShortsIconSVG from "./svg/shorts";
import LibraryIconSVG from "./svg/library";
import SubscriptionIcon from "./svg/subscription";
import ItemsMenuSVG from "./svg/itemsmenu";
import Hover from "../groupcomponents/hover";

const NavbarItems = () => {
  return (
    <>
      <div className="w-[5%] pt-3 hidden md:flex flex-col justify-start space-y-10 items-center h-screen bg-[#0F0F0F] text-white border-r border-white border-opacity-10 fixed z-10 left-0 top-0 ">
        <div className="homesvgcontainer group w-15 flex flex-col items-center p-2 rounded-md cursor-pointer hover:bg-white hover:bg-opacity-10 ">
          <div className="homesvg w-7 flex flex-col justify-center items-center ">
            <ItemsMenuSVG />
            <Hover text={"Menu"} />
          </div>
        </div>
        <div className="homesvgcontainer group w-15 flex flex-col items-center p-2 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-md">
          <div className="homesvg w-7 flex flex-col justify-center items-center">
            <HomeIconSVG />
            <Hover text={"Home"} />
          </div>
        </div>
        <div className="homesvgcontainer group w-15 flex flex-col items-center p-2 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-md">
          <div className="homesvg w-7 flex flex-col justify-center items-center">
            <ShortsIconSVG />
            <Hover text={"Shorts"} />
          </div>
        </div>
        <div className="homesvgcontainer group w-15 flex flex-col items-center p-2 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-md">
          <div className="homesvg w-7 flex flex-col justify-center items-center">
            <SubscriptionIcon />
            <Hover text={"Subscription"} />
          </div>
        </div>
        <div className="homesvgcontainer group w-15 flex flex-col items-center p-2 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-md">
          <div className="homesvg w-7 flex flex-col justify-center items-center">
            <LibraryIconSVG />
            <Hover text={"Library"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarItems;

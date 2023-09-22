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
      <div className="absolute top-0 left-0 pt-3 flex flex-col justify-start space-y-10 items-center w-[6%] h-screen bg-[#0F0F0F] text-white border-r border-white border-opacity-10">
        <div className="homesvgcontainer group w-15 flex flex-col items-center p-2 rounded-md cursor-pointer hover:bg-white hover:bg-opacity-10">
          <div className="homesvg w-7 flex flex-col justify-center items-center ">
            <ItemsMenuSVG />
            <Hover text={"Menu"}/>
          </div>
        </div>
        <div className="homesvgcontainer w-15 flex flex-col items-center p-2 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-md">
          <div className="homesvg w-7 group flex flex-col justify-center items-center">
            <HomeIconSVG />
            <Hover text={"Home"}/>
          </div>
        </div>
        <div className="homesvgcontainer group w-15 flex flex-col items-center p-2 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-md">
          <div className="homesvg w-7 flex flex-col justify-center items-center">
            <ShortsIconSVG />
            <Hover text={"Shorts"}/>
          </div>
        </div>
        <div className="homesvgcontainer group w-15 flex flex-col items-center p-2 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-md">
          <div className="homesvg w-7 flex flex-col justify-center items-center">
            <SubscriptionIcon />
            <Hover text={"Subscription"}/>
          </div>
        </div>
        <div className="homesvgcontainer group w-15 flex flex-col items-center p-2 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-md">
          <div className="homesvg w-7 flex flex-col justify-center items-center">
            <LibraryIconSVG />
            <Hover text={"Library"}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarItems;

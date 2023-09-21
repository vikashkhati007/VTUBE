import React from "react";
import HomeIconSVG from "./svg/Home";
import ShortsIconSVG from "./svg/shorts";
import LibraryIconSVG from "./svg/library";
import SubscriptionIcon from "./svg/subscription";
import ItemsMenuSVG from "./svg/itemsmenu";

const NavbarItems = () => {
  return (
    <>
      <div className="absolute top-0 left-0 pt-3 flex flex-col justify-start space-y-5 items-center w-39 h-screen bg-[#0F0F0F] text-white">
      <div className="homesvgcontainer w-15 flex flex-col items-center p-2 rounded-md cursor-pointer hover:bg-white hover:bg-opacity-10">
          <div className="homesvg w-7 ">
            <ItemsMenuSVG/>
          </div>
        </div>   
        <div className="homesvgcontainer w-15 flex flex-col items-center p-2 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-md">
          <div className="homesvg w-7 ">
            <HomeIconSVG />
          </div>
          <p className="text-xs">Home</p>
        </div>
        <div className="homesvgcontainer w-15 flex flex-col items-center p-2 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-md">
          <div className="homesvg w-7 ">
            <ShortsIconSVG />
          </div>
          <p className="text-xs">Shorts</p>
        </div>
        <div className="homesvgcontainer w-15 flex flex-col items-center p-2 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-md">
          <div className="homesvg w-7 ">
            <SubscriptionIcon />
          </div>
          <p className="text-[10px]">Subscriptions</p>
        </div>
        <div className="homesvgcontainer w-15 flex flex-col items-center p-2 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-md">
          <div className="homesvg w-7 ">
            <LibraryIconSVG />
          </div>
          <p className="text-xs">Library</p>
        </div>
      </div>
    </>
  );
};

export default NavbarItems;

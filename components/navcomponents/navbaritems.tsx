import React from "react";
import HomeIconSVG from "./svg/Home";
import ItemsMenuSVG from "./svg/itemsmenu";
import Hover from "../groupcomponents/hover";
import { MdSportsSoccer } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import Link from "next/link";

const NavbarItems = () => {
  return (
    <>
      <div className="w-[5%] pt-3 hidden md:flex flex-col justify-start space-y-10 items-center h-screen bg-[#0F0F0F] text-white border-r border-white border-opacity-10 fixed z-10 left-0 top-0 ">
        <div className="homesvgcontainer group w-15 flex flex-col items-center p-2 rounded-md cursor-pointer hover:bg-white hover:bg-opacity-10 ">
          <div
            typeof="button"
            className="homesvg w-7 flex flex-col justify-center items-center "
          >
            <ItemsMenuSVG />
            <Hover text={"Menu"} />
          </div>
        </div>
        <div className="homesvgcontainer group w-15 flex flex-col items-center p-2 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-md">
          <Link href={"/"}>
            <div className="homesvg w-7 flex flex-col justify-center items-center">
              <HomeIconSVG />
              <Hover text={"Home"} />
            </div>
          </Link>
        </div>
        <div className="homesvgcontainer group w-15 flex flex-col items-center p-2 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-md">
          <Link href={"/sports"}>
            <div className="homesvg w-7 flex flex-col justify-center items-center">
              <MdSportsSoccer className={"text-3xl"} />
              <Hover text={"Sports"} />
            </div>
          </Link>
        </div>
        <div className="homesvgcontainer group w-15 flex flex-col items-center p-2 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-md">
          <Link href={"/gaming"}>
            <div className="homesvg w-7 flex flex-col justify-center items-center">
              <SiYoutubegaming className={"text-3xl"} />
              <Hover text={"Gaming"} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarItems;

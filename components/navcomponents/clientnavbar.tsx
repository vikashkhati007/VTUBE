import Input from "./input";
import CreateICON from "./svg/create";
import NotificationIcon from "./svg/notification";
import HomeVideoContainer from "../HomeVideoContainer";
import Link from "next/link";
import { GoPerson } from "react-icons/go";
import Hover from "../groupcomponents/hover";

const ClientNavbar = () => {
  return (
    <div className="flex flex-col ">
      <div className="clientcontainer flex flex-row justify-around items-center w-full h-16 bg-[#0F0F0F] border-b border-white border-opacity-10">
        <div className="w-[6rem]">
          <h1 className="font-bold text-white text-3xl">
            <Link href={"/"}>
              <span className="logo">V</span>TUBE
            </Link>
          </h1>
        </div>
        <div>
          <Input />
        </div>
        <div className="itemscontainer flex flex-row justify-center items-center space-x-3">
          <div className="group flex flex-col justify-center items-center  w-11 p-2 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-full">
            <CreateICON />
            <Hover text={"Create"} />
          </div>
          <div className="group flex flex-col justify-center items-center w-11 p-2 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-full">
            <NotificationIcon />
            <Hover text={"Notification"} />
          </div>
          <Link href={"/signin"}>
            <div className="group flex flex-col justify-center items-center w-11 p-2 h-11 cursor-pointer text-3xl hover:border hover:border-opacity-10 hover:border-white bg-white bg-opacity-10 rounded-full">
              <GoPerson className="text-white" />
              <Hover text={"Profile"} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClientNavbar;

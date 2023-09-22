import Image from "next/image";
import YoutubeLogo from "./svg/youtubelogo";
import Input from "./input";
import CreateICON from "./svg/create";
import NotificationIcon from "./svg/notification";
import HeadItemsScroll from "./headitemsscroll";
import Link from "next/link";

const ClientNavbar = () => {
  return (
    <div className="flex w-[94vw] flex-col h-screen absolute right-0 top-0">
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
        <div className="itemscontainer flex flex-row space-x-3">
          <div className="w-11 p-2 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-full">
            <CreateICON />
          </div>
          <div className="w-11 p-2 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-full">
            <NotificationIcon />
          </div>
          <Link href={"/signin"}>
          <div className="w-20 font-bold bg-gradient-to-tr hover:border hover:border-opacity-50 hover:border-white h-10 m-auto from-[#C70039] to-[#dd3222] flex justify-center items-center cursor-pointer rounded-full">
            <button className="text-white"> Sign-In</button>
          </div>
          </Link>
        </div>
      </div>
      <div className="text-white w-full p-2">
        <HeadItemsScroll />
      </div>
    </div>
  );
};

export default ClientNavbar;

import Input from "./input";
import CreateICON from "./svg/create";
import NotificationIcon from "./svg/notification";
import Link from "next/link";
import Hover from "../groupcomponents/hover";
import UserAuthenticate from "../userauthenticate/User";

interface PropsType {
  width?: String;
}

const ClientNavbar = ({ width }: PropsType) => {

  return (
    <>
      <div
        className={`clientcontainer z-50 flex flex-row justify-around items-center h-16 bg-[#0F0F0F] border-b border-white border-opacity-10 w-full ${
          width ? width : "md:w-[95%]"
        } fixed top-0 right-0`}
      >
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
           <UserAuthenticate/>
        </div>
      </div>
    </>
  );
};

export default ClientNavbar;

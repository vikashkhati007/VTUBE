import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="sigincontainer w-full h-screen flex justify-center items-center text-white bg-custom-image bg-cover">
      <form className="rounded-3xl  w-[30rem] h-[30rem] flex flex-col justify-center items-center space-y-5 bg-gradient-to-b from-[#d62929] to-[#D32A3B] border border-white border-opacity-80">
        <h1 className="font-bold text-2xl">Login To Your Account</h1>
        <div className="inputcontainer w-full flex flex-col space-y-5 items-center justify-center">
          <input
            autoFocus
            className="rounded-md w-[70%] h-[2.5rem] outline-none px-2 text-white bg-opacity-10 bg-white border border-opacity-30 border-white placeholder:text-white"
            placeholder="Enter Your Email"
          ></input>
          <input
            className="rounded-md w-[70%] h-[2.5rem] outline-none px-2 text-white bg-opacity-10 bg-white border border-opacity-30 border-white placeholder:text-white"
            placeholder="Enter Your Password"
          ></input>
        </div>
        <div className="buttoncontainer w-full flex justify-center items-center h-[3rem]">
          <button className="bg-gradient-to-tr from- p-2 px-5 rounded-full font-bold hover:bg-none border border-white border-opacity-40 hover:border bg-white hover:text-red-600 hover:border-red-400">
            Login
          </button>
        </div>
        <Link className="hover:text-blue-700 hover:underline" href={"/signin"}>
        Create New Account
        </Link>
      </form>
    </div>
  );
};

export default page;

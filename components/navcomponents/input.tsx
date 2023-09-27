"use client";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { MdKeyboardVoice } from "react-icons/md";
import Hover from "../groupcomponents/hover";
import { useRouter } from "next/navigation"; // Changed from "next/navigation"
import Link from "next/link";

const Input = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const getUserQuery = (e:any) => {
    setQuery(e.target.value);
  };

  const userSubmitQuery = (e:any) => {
    if (e.key === "Enter") {
      router.push(`/search/${query}`);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-5 w-[37rem]">
      <div className="flex justify-end items-center w-[35rem]">
        <input
          onChange={getUserQuery}
          onKeyUp={userSubmitQuery}
          value={query}
          autoFocus
          className="bg-[#121212] w-full outline-none p-2 pl-[1rem] pr-[4rem] text-white border rounded-full border-white border-opacity-20"
          type="text"
          placeholder="Search"
        ></input>
        <div className="iconcontainer absolute border border-white border-opacity-20 h-10 w-14 flex justify-center items-center rounded-r-full cursor-pointer bg-[#222222]">
          <Link href={`/watch/${query}`}>
            <GoSearch className="text-white text-xl" />
          </Link>
        </div>
      </div>
      <div className="group flex flex-col justify-center items-center cursor-pointer bg-white bg-opacity-10 rounded-full p-2">
        <MdKeyboardVoice className="text-white text-2xl" />
        <Hover text={"Microphone"} />
      </div>
    </div>
  );
};

export default Input;

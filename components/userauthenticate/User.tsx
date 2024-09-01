"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Hover from "../groupcomponents/hover";
import { GoPerson } from "react-icons/go";

const UserAuthenticate = () => {
  const { data: session, status } = useSession();
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    if (status === "authenticated" && !authenticate) {
      setAuthenticate(true);
    }
  }, [status, authenticate]);

  if (status === "loading") {
    return (
      <div className="animate-pulse flex items-center justify-center w-11 h-11 rounded-full bg-gray-300">
      </div>
    ); 
  }

  return (
    <div>
      {authenticate ? (
        <div
          onClick={() => {
            signOut();
          }}
          className="group flex flex-col justify-center items-center w-11 p-[2px] h-11 cursor-pointer text-3xl hover:border hover:border-opacity-10 hover:border-white bg-white bg-opacity-10 rounded-full"
        >
          <Image
          className="rounded-full"
            src={session?.user?.image || ""}
            width={100}
            height={100}
            alt="profile"
          />
          <Hover text={session?.user?.name || ""} />
        </div>
      ) : (
        <div
          onClick={() => {
            signIn();
          }}
          className="group flex flex-col justify-center items-center w-11 p-2 h-11 cursor-pointer text-3xl hover:border hover:border-opacity-10 hover:border-white bg-white bg-opacity-10 rounded-full"
        >
          <GoPerson className="text-white" />
          <Hover text={"Profile"} />
        </div>
      )}
    </div>
  );
};

export default UserAuthenticate;

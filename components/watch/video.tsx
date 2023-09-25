import React from "react";
import Image from "next/image";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { TbShare3 } from "react-icons/tb";
import { LiaDownloadSolid } from "react-icons/lia";
const YoutubeWatchVideoContainer = () => {
  return (
    <>
      <div className="videocontainer  flex flex-col -z-10 gap-2 p-2 border border-white border-opacity-10 rounded-md ">
        <div>
          <video controls width={750} height={250} />
          <source src="movie.mp4" type="video/mp4" />
        </div>
        <div className="titlecotainer text-lg w-full px-2">
          <h1 className="boldfontstyle font-bold">Hello , This is My Sad Story</h1>
        </div>
        <div className="channelusercontainer w-full flex  p-2 items-center">

          <div className="leftcontainer w-full flex gap-2">
          <div className="imagecontainer w-11 h-11">
            <Image
              className="rounded-full"
              src={
                "https://yt3.ggpht.com/ytc/AGIKgqO8AFbjopb8KHLz-Lyudna1ZkntXwHsbNPA5W5-=s68-c-k-c0x00ffffff-no-rj"
              }
              width={50}
              height={40}
              alt="avatar"
            />
          </div>
            <div className="namecontainer px-2">
              <p className="text-lg boldfontstyle">The Music Matrix</p>
              <p className="text-xs opacity-50 subscribers">121 subscriber</p>
            </div>
            <div className="subscribecontainer cursor-pointer flex p-3 rounded-full bg-red-500 text-white text-sm border border-white border-opacity-10 ">
              <button className="font-semibold subscribers">Subscribe</button>
            </div>
          </div>
          <div className="rightcontainer w-full flex gap-2">
            <div className="likedislikecontainer w-32 flex justify-around gap-3 cursor-pointer bg-white bg-opacity-10 border border-white border-opacity-40 rounded-full items-center font-semibold">
              <AiOutlineLike className={"text-2xl"} />
              <AiOutlineDislike className={"text-2xl"} />
            </div>
            <div className="sharecontainer flex justify-center cursor-pointer items-center gap-2 border border-white border-opacity-30 rounded-full bg-white bg-opacity-10 p-2 px-3 font-semibold">
              <TbShare3  className={"text-2xl"} />
              <span >Share</span>
            </div>
            <div className="downloadcontainer flex justify-center items-center gap-2 border border-white border-opacity-30 rounded-full bg-white bg-opacity-10 p-2 cursor-pointer px-3 font-semibold">
              <LiaDownloadSolid className={"text-2xl"} />
              <span>Download</span>
            </div>
          </div>
        </div>
      </div>
      <div className="othervideocontainer"></div>
    </>
  );
};

export default YoutubeWatchVideoContainer;

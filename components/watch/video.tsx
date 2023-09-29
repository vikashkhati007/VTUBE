import React from "react";
import Image from "next/image";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlinePlus,
  AiOutlineCheck,
} from "react-icons/ai";
import { TbShare3 } from "react-icons/tb";
import { LiaDownloadSolid } from "react-icons/lia";
import Description from "./description";
import GetVideoURL from "@/youtubedata/getvideoUrl";
import GetVideoDetails from "@/youtubedata/getvideoDetails";


const YoutubeWatchVideoContainer = async ({ videoID }: any) => {
  const videodata = await GetVideoURL(videoID);
  const videodetails = await GetVideoDetails(videoID);
  //working on videodeatils
  const srcRegex = /src=["'](.*?)["']/;
  const match = videodata.items[0].player.embedHtml.match(srcRegex);
  const srcAttribute = match && match[1];

  console.log();

  return (
    <>
      <div className="videocontainer flex w-[60%] flex-col gap-2 p-2 border border-white border-opacity-10 rounded-md ">
        <div className="w-full h-96 bg-gray-300 rounded-lg shadow-md overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={`${srcAttribute}?autoplay=1&mute=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          
         </div>
        <div className="descriptioncontainer ">
          <div className="w-full p-2">
          <h1 className="font-bold text-lg"> </h1>
          </div>
        <div className="channelusercontainer w-full flex p-2 mb-3 items-center">
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
            <p className="text-lg boldfontstyle"></p>
            <p className="text-xs opacity-50 subscribers">121 subscriber</p>
          </div>
          <div className="subscribecontainer flex justify-center items-center rounded-full w-11  text-white text-sm border border-white border-opacity-30 bg-white bg-opacity-10 ">
            <AiOutlinePlus className={"text-2xl cursor-pointer"} />
          </div>
        </div>
        <div className="rightcontainer w-full flex gap-2">
          <div className="likedislikecontainer w-36 flex justify-around gap-3 cursor-pointer bg-white bg-opacity-10 border border-white border-opacity-40 rounded-full items-center font-semibold">
            <div className="flex justify-center items-center gap-1">
            <AiOutlineLike className={"text-2xl"} />
            <p>
            </p>
            </div>
            <AiOutlineDislike className={"text-2xl"} />
          </div>
          <div className="sharecontainer flex justify-center cursor-pointer items-center gap-2 border border-white border-opacity-30 rounded-full bg-white bg-opacity-10 p-2 px-3 font-semibold">
            <TbShare3 className={"text-2xl"} />
            <span>Share</span>
          </div>
          <div className="downloadcontainer flex justify-center items-center gap-2 border border-white border-opacity-30 rounded-full bg-white bg-opacity-10 p-2 cursor-pointer px-3 font-semibold">
            <LiaDownloadSolid className={"text-2xl"} />
            <span>Download</span>
          </div>
        </div>
      </div>
          <Description />
        </div>
      </div>
    </>
  );
};

export default YoutubeWatchVideoContainer;

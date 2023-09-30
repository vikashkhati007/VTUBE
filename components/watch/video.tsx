import React from "react";
import Image from "next/image";
import {
  AiOutlineLike,
} from "react-icons/ai";
import { TbShare3 } from "react-icons/tb";
import { LiaDownloadSolid } from "react-icons/lia";
import Description from "./description";
import GetVideoURL from "@/youtubedata/getvideoUrl";
import GetVideoDetails from "@/youtubedata/getvideoDetails";
import GetChannelDetails from "@/youtubedata/getchanneldetails";
import GetVideoComments from "@/youtubedata/getvideocomments";

const YoutubeWatchVideoContainer = async ({ videoID }: any) => {
  let videodata, videodetails, channelData, videocomment;

  try {
    videodata = await GetVideoURL(videoID);
    videodetails = await GetVideoDetails(videoID);
    channelData = await GetChannelDetails(
      videodetails?.items?.[0]?.snippet?.channelId || ""
    );
    videocomment = await GetVideoComments(videoID);
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle the error as needed (e.g., show an error message to the user)
    return null; // or any other appropriate action
  }
  function numberToShortString(number:any) {
    if (typeof number !== 'number') {
      return 'N/A'; // or any other appropriate fallback value
    }
  
    const suffixes = ["", "K", "M", "B", "T"];
    const suffixNum = Math.floor(("" + number).length / 3);
  
    let shortValue: any = parseFloat((suffixNum !== 0 ? (number / Math.pow(1000, suffixNum)) : number).toPrecision(2));
  
    if (typeof shortValue === 'number' && shortValue % 1 !== 0) {
      shortValue = shortValue.toFixed(1);
    }
  
    return shortValue + suffixes[suffixNum];
  }
  
 
  
  //working on videodeatils
  const srcRegex = /src=["'](.*?)["']/;
  const match = videodata.items[0].player.embedHtml.match(srcRegex);
  const srcAttribute = match && match[1];

  const channelTitle = channelData.items[0].snippet.title;
  const channelAvatarUrl = channelData.items[0].snippet.thumbnails.high.url;
  const subscriberCount = numberToShortString(channelData.items[0].statistics.subscriberCount);
  const viewCount = numberToShortString(channelData.items[0].statistics.viewCount);
  const likeCount = numberToShortString(videodetails.items[0].statistics.likeCount);
  const description = videodetails.items[0].snippet.description;
  const title = videodetails.items[0].snippet.title;
  
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
            <h1 className="font-bold text-lg">
              {title}
            </h1>
          </div>
          <div className="channelusercontainer w-full flex p-2 mb-3 items-center">
            <div className="leftcontainer w-full flex gap-2">
              <div className="imagecontainer w-11 h-11">
                <Image
                  className="rounded-full"
                  src={channelAvatarUrl}
                  width={50}
                  height={40}
                  alt="avatar"
                />
              </div>
              <div className="namecontainer px-2">
                <p className="text-sm boldfontstyle">{channelTitle}</p>
                <p className="text-xs opacity-50 subscribers">
                  {subscriberCount} subscriber
                </p>
              </div>
            </div>
            <div className="rightcontainer w-full flex gap-2">
              <div className="likedislikecontainer w-36 flex justify-around gap-3 cursor-pointer bg-white bg-opacity-10 border border-white border-opacity-40 rounded-full items-center font-semibold">
                <div className="flex justify-center items-center gap-1">
                  <AiOutlineLike className={"text-2xl"} />
                  <p>{likeCount}</p>
                </div>
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
          <Description
            text={description}
            viewCount={viewCount}
            comments={videocomment}
          />
        </div>
      </div>
    </>
  );
};

export default YoutubeWatchVideoContainer;

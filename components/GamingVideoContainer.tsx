"use client";
import getGamingVideos from "@/youtubedata/getgamingvideo";
import Video from "./Video";
import Link from "next/link";
const GamingVideoContainer = async () => {
  const youtubegamingvideos = await getGamingVideos(20);

  return (
    <>
      <div className="videocontainer flex flex-wrap items-center justify-around text-white border-b-2 border-white border-opacity-20 ">
        {youtubegamingvideos.map(async (d: any, index: any) => {
          return (
            <>
              <Link href={`/watch/${d.id}`}>
                <Video
                  key={d.id}
                  thumbnail={d.snippet.thumbnails.url}
                  videotitle={`${d.snippet.title.slice(0, 29) + "..."}`}
                  channelavatar={d.snippet.channelAvatar}
                  channelname={d.snippet.channelName}
                  videoviews={d.statistics.viewCount || ""} // Use the formatted views prop
                  videouploaddate={d.snippet.publishedAt}
                />
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default GamingVideoContainer;

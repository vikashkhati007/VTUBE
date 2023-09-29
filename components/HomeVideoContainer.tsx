"use client";
import Video from "./Video";
import Link from "next/link";
import youtube from "../youtubedata/gethomedata";
import getUserProfileData from "../youtubedata/userprofiledata";
const HomeVideoContainer = async () => {
  const youtubehomedata = await youtube();

  return (
    <div className="videocontainer flex flex-wrap items-center justify-around text-white border-b-2 border-white border-opacity-20 ">
      {youtubehomedata.items.map(async (d: any, index: any) => {
        const channelIds = youtubehomedata.items.map(
          (d: any) => d.snippet.channelId
        );
        const userdata = await getUserProfileData(channelIds);
        userdata?.map((u:any) => {

          console.log();
          // Safely parse the views count
          const views = parseInt(String(d.snippet.categoryId || "0"), 10);

          // Format the videoviews prop with abbreviations
          let formattedViews;

          if (views >= 1e9) {
            formattedViews = (views / 1e9).toFixed(1) + "B";
          } else if (views >= 1e6) {
            formattedViews = (views / 1e6).toFixed(1) + "M";
          } else if (views >= 1e3) {
            formattedViews = (views / 1e3).toFixed(1) + "K";
          } else {
            formattedViews = views.toString();
          }

          return (
            <>
              <Link key={d.id} href={`/watch/${d.id}`}>
                <Video
                  thumbnail={`${d.snippet.thumbnails.standard.url}`}
                  videotitle={`${d.snippet.title.slice(0, 29) + "..."}`}
                  channelavtar={`${""}`}
                  channelname={`${u.items[0].snippet.title}`}
                  videoviews={formattedViews || ""} // Use the formatted views prop
                  videouploaddate={`${d.snippet.publishedAt}`}
                />
              </Link>
            </>
          );
        });
      })}
    </div>
  );
};

export default HomeVideoContainer;

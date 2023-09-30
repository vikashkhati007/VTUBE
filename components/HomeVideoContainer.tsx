import Video from "./Video";
import Link from "next/link";
import fetchMostPopularVideos from "@/youtubedata/gethomedata";
const HomeVideoContainer = async () => {
  const youtubehomedata = await fetchMostPopularVideos();
  return (
    <div className="videocontainer flex flex-wrap items-center justify-around text-white border-b-2 border-white border-opacity-20 ">
      {youtubehomedata.map(async (d: any, index: any) => {
          // Safely parse the views count
          const views = parseInt(String("0"), 10);
          console.log();
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
  );
};

export default HomeVideoContainer;

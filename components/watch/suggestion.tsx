import Link from "next/link";
import SuggestVideo from "./suggestvideo";
import fetchMostRecentVideos from "@/youtubedata/gethomedata";
const SugestionVideoContainer = async () => {
  const youtubehomedata = await fetchMostRecentVideos(10);
  return (
    <>
      <div className="flex flex-col gap-2">
        {youtubehomedata.map((d: any) => {
          return (
            <Link href={`/watch/${d.id}`}>
              <SuggestVideo
                thumbnail={d.snippet.thumbnails.url}
                channelname={d.snippet.channelName}
                title={d.snippet.title}
                viewscount={d.statistics.viewCount}
                publisheddate={d.snippet.publishedAt}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default SugestionVideoContainer;

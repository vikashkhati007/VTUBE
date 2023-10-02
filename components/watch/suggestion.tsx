import Link from "next/link";
import SuggestVideo from "./suggestvideo";
import GetSuggestVideos from "@/youtubedata/suggestvideo";
const SugestionVideoContainer = async () => {
  const getsuggestedVideo = await GetSuggestVideos();
  return (
    <>
      <div className="flex flex-col gap-2">
        {getsuggestedVideo.map((d: any) => {
          return (
            <Link href={`/watch/${d.id}`}>
              <SuggestVideo
                key={d.id}
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

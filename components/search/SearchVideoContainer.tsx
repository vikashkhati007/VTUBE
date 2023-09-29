import GetQueryResults from "@/youtubedata/getqueryresults";
import VideoResult from "./ResultVideo";
import Link from "next/link";
const SearchVideoContainer = async (query:any) => {
  const querydata = await GetQueryResults(query);
  return (
    <>
      <div className="searchvidecontainer flex flex-col gap-5">
        {querydata.map((d: any) => {
          return (
            <Link href={`/watch/${d.id.videoId}`}>
              <VideoResult
                thumbnail={d.snippet.thumbnails.maxres.url?d.snippet.thumbnails.maxres.url:d.snippet.thumbnails.high.url}
                title={d.snippet.title}
                channelname={d.snippet.channelTitle}
                description={d.snippet.description.slice(0,100)}
                viewcount={"0"}
                channelID={d.snippet.channelId}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default SearchVideoContainer;

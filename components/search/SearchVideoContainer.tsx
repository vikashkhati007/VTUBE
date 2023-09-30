import GetQueryResults from "@/youtubedata/getqueryresults";
import VideoResult from "./ResultVideo";
import Link from "next/link";
const SearchVideoContainer = async (query:any) => {
  const querydata = await GetQueryResults(query);
  console.log(querydata);
  return (
    <>
      <div className="searchvidecontainer flex flex-col gap-5">
        {querydata.map((d: any) => {
          return (
            <Link href={`/watch/${d.id}`}>
              <VideoResult
                thumbnail={d.snippet.thumbnails.url}
                title={d.snippet.title}
                channelname={d.snippet.channelTitle}
                description={d.snippet.description.slice(0,100)}
                viewcount={d.statistics.viewCount}
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

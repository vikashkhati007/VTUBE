import GetChannelDetails from "@/youtubedata/getchanneldetails";
import Image from "next/image";

const VideoResult = async ({
  thumbnail,
  title,
  viewcount,
  channelname,
  description,
  channelID,
}: any) => {
  const channeldetails = await GetChannelDetails(channelID);
  
  return (
    <>
      <div className="flex w-full justify-center rounded-md gap-5 cursor-pointer text-white ">
        <div className="imagecontainer ">
          <Image
            className="rounded-md"
            src={thumbnail}
            width={360}
            height={201}
            alt="thumbnail"
          ></Image>
        </div>
        <div className="videodescriptioncontainer flex flex-col  gap-3 w-[60%] ">
          {channeldetails.items.map((d: any) => {
            return (
              <>
                <div key={d.id} className="uppercontainer">
                  <h1 className="text-lg">{title}</h1>
                  <p className="text-xs opacity-50">
                    {viewcount} views • {d.snippet.publishedAt} ago
                  </p>
                </div>
                <div key={d.id} className="channelcontainer flex w-full cursor-pointer items-center gap-2">
                  <Image
                    className="rounded-full"
                    src={d.snippet.thumbnails.high.url}
                    width={25}
                    height={25}
                    alt="profile"
                  />
                  <p className="text-xs opacity-60 hover:opacity-100">
                    {d.snippet.title}
                  </p>
                </div>
                <p className="text-xs opacity-40">{description}</p>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default VideoResult;

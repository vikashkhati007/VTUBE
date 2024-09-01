import Image from "next/image";

interface PropsType{
  thumbnail: string,
  title: string,
  channelname: string,
  viewscount: string,
  publisheddate: string
}

const timeAgo = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) return interval === 1 ? `${interval} year ago` : `${interval} years ago`;

  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) return interval === 1 ? `${interval} month ago` : `${interval} months ago`;

  interval = Math.floor(seconds / 86400);
  if (interval >= 1) return interval === 1 ? `${interval} day ago` : `${interval} days ago`;

  interval = Math.floor(seconds / 3600);
  if (interval >= 1) return interval === 1 ? `${interval} hour ago` : `${interval} hours ago`;

  interval = Math.floor(seconds / 60);
  if (interval >= 1) return interval === 1 ? `${interval} minute ago` : `${interval} minutes ago`;

  return "Just now";
};

const SuggestVideo = ({thumbnail, title, channelname, viewscount, publisheddate}:PropsType) => {
 
  const formattedDate = timeAgo(publisheddate);
  
  return (
    <div>
      <div className="videocontainer flex gap-2 justify-start p-2 border border-white border-opacity-20 rounded-lg cursor-pointer">
        <div className="thumbnailcontainer">
          <Image
          className="rounded-md"
            src={thumbnail}
            width={168}
            height={94}
            alt="thumbnail"
          />
        </div>
        <div className="videodetailscontainer break-word w-56 boldfontstyle">
          <h1 className="font-semibold text-[16px] text-sm">{title.slice(0,50)+ "..."} </h1>
          <p className="text-sm text-opacity-50 text-white">{channelname}</p>
          <div className="text-sm text-opacity-50 text-white">
            <p>{viewscount}</p>
            <span></span>
            <p>{formattedDate}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuggestVideo

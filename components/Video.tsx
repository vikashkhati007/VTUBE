import Image from "next/image";
import VerifiedIcon from "./navcomponents/svg/verified";

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

const Video = async ({
  thumbnail,
  videotitle,
  videoviews,
  videouploaddate,
  channelname,
  channelavatar,
}: any) => {
  const formattedDate = timeAgo(videouploaddate);

  return (
    <div className="videocontainer w-[380px] flex flex-col justify-center items-center my-4 gap-2 cursor-pointer">
      <Image
        className="rounded-lg "
        src={thumbnail}
        width={421}
        height={237}
        alt="thumbnail"
      />
      <div className="informationcontainer flex justify-start item-start space-x-2 p-1 w-full">
        <div className="imagecontainer w-14 flex justify-center items-start">
          <Image
            className="rounded-full"
            src={channelavatar}
            width={40}
            height={40}
            alt="avtar"
          />
        </div>
        <div className="paragraphcontainer flex flex-col space-y-1">
          <p className="text-[14.2px] text-left ">{videotitle}</p>
          <div className="channelinformation text-white text-opacity-70 flex flex-col">
            <div className="channelnamebadge flex space-x-1">
              <h4 className="text-xs cursor-pointer text-left">{channelname} </h4>
              <p className="w-[14px] h-[14px]">
                <VerifiedIcon />
              </p>
            </div>
            <div className="viewsandtimecontainer flex text-xs space-x-1 text-left">
              <p>{videoviews} views</p>
              <span>•</span>
              <p>{formattedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;

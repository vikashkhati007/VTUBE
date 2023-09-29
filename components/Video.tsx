import Image from "next/image";
import VerifiedIcon from "./navcomponents/svg/verified";

const Video = async ({
  thumbnail,
  channelID,
  videotitle,
  videoviews,
  videouploaddate,
  channelname
}: any)  => {
  // const data = await GetChannelTest(channelID);
  return (
    <div className="videocontainer w-[380px] flex flex-col justify-center items-center my-4 gap-2 cursor-pointer">
      <Image
        className="rounded-lg "
        src={thumbnail} // Remove template literals and interpolation
        width={421}
        height={237}
        alt="thumbnail"
      />
      <div className="informationcontainer flex justify-start item-start space-x-2 p-1 w-full">
        <div className="imagecontainer w-14 flex justify-center items-start">
          <Image
            className="rounded-full"
            src={""} // Remove template literals and interpolation
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
              <p>{videouploaddate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;

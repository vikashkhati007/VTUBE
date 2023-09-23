import Image from "next/image";
import VerifiedIcon from "./navcomponents/svg/verified";

const Video = () => {
  return (
    <>
      <div className="videocontainer w-[380px] flex flex-col justify-center items-center space-y-2">
        <Image
          className="rounded-lg border"
          src={
            "https://i.ytimg.com/vi/jN7mSXMruEo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjFuTwOyCYlvlNvbti00qV_bY0Kw"
          }
          width={421}
          height={237}
          alt="thumbnail"
        />
        <div className="informationcontainer flex justify-center item-start space-x-2 p-1 w-full">
          <div className="imagecontainer">
            <Image
              className="rounded-full"
              src={
                "https://yt3.ggpht.com/gKX6TEsMc0941hZ3g-jRSesHYTnxGBAq6c9ax9G_cMVAVeSWQaaSqomfXnxYjMwTkq2FgqtJ-g=s68-c-k-c0x00ffffff-no-rj"
              }
              width={40}
              height={40}
              alt="avtar"
            />
          </div>
          <div className="paragraphcontainer flex flex-col space-y-1">
            <span className="font-bold text-[14.2px] text-left">
              These Stupid Trucks are Literally Killing Us Please help
            </span>
            <div className="channelinformation text-white text-opacity-70 flex flex-col">
              <div className="channelnamebadge flex space-x-1">
                <h4 className="text-xs cursor-pointer text-left">The World of Boxing! </h4>
                <p className="w-[14px] h-[14px]">
                  <VerifiedIcon />
                </p>
              </div>
              <div className="viewsandtimecontainer flex text-xs space-x-1 text-left">
                <p>141K views</p>
                <span>•</span>
                <p>2 years ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Video

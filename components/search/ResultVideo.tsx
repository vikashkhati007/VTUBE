import Image from "next/image";

const VideoResult = () => {
  return (
    <>
   <div className="flex w-full justify-center rounded-md gap-3 cursor-pointer text-white ">
      <div className="imagecontainer ">
        <Image
          className="rounded-md"
          src={
            "https://i.ytimg.com/vi/HBNTOgSlLI4/hq720.jpg?sqp=-oaymwEpCNAFEJQDSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIGhACGAYgATgBQAE=&rs=AOn4CLBKQOj_fPgIEi_VVjc0U6PVoNHqYA"
          }
          width={360}
          height={201}
          alt="thumbnail"
        ></Image>
      </div>
      <div className="videodescriptioncontainer flex flex-col  gap-3 w-[60%] ">
        <div className="uppercontainer">
          <h1 className="text-lg">
            OUR FRIEND DUGGAN BOSS IS BACK | GTA 5 GAMEPLAY #289 | GTA V
          </h1>
          <p className="text-xs opacity-50">145 views • 19 hour ago</p>
        </div>
        <div className="channelcontainer flex w-full cursor-pointer items-center gap-2">
          <Image
            className="rounded-full"
            src={
              "https://yt3.ggpht.com/ytc/AOPolaT6Ao27fpeissDRn7qe2wLSegKDtlHeSJiipgjLzw=s68-c-k-c0x00ffffff-no-rj"
            }
            width={25}
            height={25}
            alt="profile"
          />
          <p className="text-xs opacity-60 hover:opacity-100">Channel Name</p>
        </div>
        <p className="text-xs opacity-40">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, assumenda, est repellendus laboriosam accusantium, fuga modi laudantium praesentium et quia deserunt eligendi cumque odit aspernatur nobis odio ullam doloribus veritatis?</p>
      </div>
    </div>
      </>
  )
}

export default VideoResult

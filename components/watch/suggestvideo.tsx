import Image from "next/image";

interface PropsType{
  thumbnail: string,
  title: string,
  channelname: string,
  viewscount: string,
  publisheddate: string
}
const SuggestVideo = ({thumbnail, title, channelname, viewscount, publisheddate}:PropsType) => {
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
          <h1 className="font-semibold text-[16px] text-sm">{title.slice(1,50)+ "..."} </h1>
          <p className="text-sm text-opacity-50 text-white">{channelname}</p>
          <div className="text-sm text-opacity-50 text-white">
            <p>{viewscount}</p>
            <span></span>
            <p>{publisheddate}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuggestVideo

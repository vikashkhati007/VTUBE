import Image from "next/image";

const SuggestVideo = () => {
  return (
    <div>
      <div className="videocontainer flex gap-2 justify-start items-center p-2 border border-white border-opacity-20 rounded-lg cursor-pointer">
        <div className="thumbnailcontainer">
          <Image
          className="rounded-md"
            src={
              "https://i.ytimg.com/vi/JFFq8xgBQZI/hqdefault.jpg?sqp=-oaymwEpCNACELwBSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIGhACGAYgATgBQAE=&rs=AOn4CLBERXTl6f7oQBudFx25BZqqZvA1pg"
            }
            width={168}
            height={94}
            alt="thumbnail"
          />
        </div>
        <div className="videodetailscontainer break-word w-56 boldfontstyle">
          <h1 className="font-semibold text-[16px]">Justine Bieber Love Is Last In This End , Before ... </h1>
          <p className="text-sm">Justine Bieber</p>
          <div className="viewscontainer text-xs">
            <p>29 Views</p>
            <span></span>
            <p>1 year ago</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuggestVideo

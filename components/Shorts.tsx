import Image from "next/image"

interface PropsType{
    thumbnail: String,
    title: String,
    shortsviews: String
}
const Shorts = ({thumbnail, title, shortsviews}: PropsType) => {
  return (
    <div className="text-white w-[210px]">
      <Image src={`${thumbnail}`}
      width={210}
      height={150}
      alt="shortsvideo"
      className="rounded-md cursor-pointer"
      />
      <div className="shortdescription mt-2 text-left">
        <p className=" font-semibold">{title}</p>
        <span className="text-sm text-white text-opacity-70">{shortsviews} views</span>
      </div>
    </div>
  )
}

export default Shorts

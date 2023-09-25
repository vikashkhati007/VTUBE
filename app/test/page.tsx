import Image from "next/image";

const page = async () => {
  const data = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?key=${process.env.NEXT_PUBLIC_YOUTUBE_API}&part=snippet&chart=mostPopular&maxResults=10`
  );
  const d = await data.json();
  
  return <div>
    {d.items.forEach((d:any, index:any)=>{
      return(
      <div id={index} className="imagecontainer bg-red-700 w-1/2 h-1/2">
        <Image src={d.snippet.thumbnails.maxres.url} width={267} height={150} alt="thumbanils"/>
      </div>
      )
    })}
  </div>;
};

export default page;

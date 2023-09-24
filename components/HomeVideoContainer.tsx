import Video from "./Video";
import data from "../youtube/HomeData.json";

const HomeVideoContainer = () => {
  return (
    <div className="videocontainer flex flex-wrap items-center justify-around text-white border-b-2 border-white border-opacity-20 ">
    {data.map((d, index) => {
  // Safely parse the views count
  const views = parseInt(String(d.video.stats?.views || '0'), 10);

  // Format the videoviews prop with abbreviations
  let formattedViews;

  if (views >= 1e9) {
    formattedViews = (views / 1e9).toFixed(1) + 'B';
  } else if (views >= 1e6) {
    formattedViews = (views / 1e6).toFixed(1) + 'M';
  } else if (views >= 1e3) {
    formattedViews = (views / 1e3).toFixed(1) + 'K';
  } else {
    formattedViews = views.toString();
  }

  return (
    <Video
      key={index}
      thumbnail={`${d.video.thumbnails[1]?.url}`}
      videotitle={`${d.video.title.slice(0, 29) + "..."}`}
      channelavtar={`${d.video.author.avatar[0]?.url}`}
      channelname={`${d.video.author.title}`}
      videoviews={formattedViews} // Use the formatted views prop
      videouploaddate={`${d.video.publishedTimeText}`}
    />
  );
})}


    </div>
  );
};

export default HomeVideoContainer;

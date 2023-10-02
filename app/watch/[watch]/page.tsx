import ClientNavbar from "@/components/navcomponents/clientnavbar";
import SugestionVideoContainer from "@/components/watch/suggestion";
import YoutubeWatchVideoContainer from "@/components/watch/video";
const page  = ({params}:any) => {
  return (
    <div>
      <div className="navbarcontainer">
        <ClientNavbar width={"w-full"} />
      </div>
      <div className="watchvideocontainer text-white w-full h-screen mt-20 flex justify-around items-start">
        <YoutubeWatchVideoContainer videoID={params.watch}/>
        <SugestionVideoContainer />
    </div>
    </div>
  );
};

export default page;

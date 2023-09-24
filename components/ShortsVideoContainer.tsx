import Shorts from "./Shorts";
import YoutubeShortICON from "./svg/youtubeshorts";

const ShortsVideoContainer = () => {
  return (
    <div className="border-b-2 border-white border-opacity-20 mb-10">
      <div className="shortcontainer w-full flex justify-center  my-5 items-center text-white">
        <div className="shortsiconcontainer w-7">
          <YoutubeShortICON />
        </div>
        <p className="text-lg font-bold">Shorts</p>
      </div>
      <div className="shortsvideos flex flex-wrap justify-around space-x-10 ">
        <Shorts
          thumbnail={
            "https://i.ytimg.com/vi/9jIctNOlixE/hq720.jpg?sqp=-oaymwEqCJUDENAFSFryq4qpAxwIARUAAIhC0AEB2AEB4gEMCBoQAhgGIAE4AUAB&rs=AOn4CLD0OqT9_oI_qda62dwTQ8sih_IFNg"
          }
          title={"Go To Africa or Die"}
          shortsviews={"288K"}
        />
        <Shorts
          thumbnail={
            "https://i.ytimg.com/vi/0Rb5fZQHlvU/oar2.jpg?sqp=-oaymwEqCJUDENAFSFqQAgHyq4qpAxkIARUAAIhC2AEB4gEMCBoQAhgGIAE4AUAB&rs=AOn4CLAQKM17EwBPUs-tOb9sVkYCsqGOJA"
          }
          title={"Remote Control Paper Plan"}
          shortsviews={"10M"}
        />
        <Shorts
          thumbnail={
            "https://i.ytimg.com/vi/806fX9saSu4/hq720.jpg?sqp=-oaymwEqCJUDENAFSFryq4qpAxwIARUAAIhC0AEB2AEB4gEMCBoQAhgGIAE4AUAB&rs=AOn4CLB0gLClPEkI4f2-AvSmBpSwbwK28w"
          }
          title={"Addicted to The Dance Reel of sanha and moonbin.."}
          shortsviews={"377K"}
        />
          <Shorts
          thumbnail={
            "https://i.ytimg.com/vi/806fX9saSu4/hq720.jpg?sqp=-oaymwEqCJUDENAFSFryq4qpAxwIARUAAIhC0AEB2AEB4gEMCBoQAhgGIAE4AUAB&rs=AOn4CLB0gLClPEkI4f2-AvSmBpSwbwK28w"
          }
          title={"Addicted to The Dance Reel of sanha and moonbin.."}
          shortsviews={"377K"}
        />
         <Shorts
          thumbnail={
            "https://i.ytimg.com/vi/806fX9saSu4/hq720.jpg?sqp=-oaymwEqCJUDENAFSFryq4qpAxwIARUAAIhC0AEB2AEB4gEMCBoQAhgGIAE4AUAB&rs=AOn4CLB0gLClPEkI4f2-AvSmBpSwbwK28w"
          }
          title={"Addicted to The Dance Reel of sanha and moonbin.."}
          shortsviews={"377K"}
        />
         
      </div>
    </div>
  );
};

export default ShortsVideoContainer;

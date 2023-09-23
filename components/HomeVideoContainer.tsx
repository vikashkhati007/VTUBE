import Video from "./Video";

const HomeVideoContainer = () => {
  return (
    <div className="flex p-2 justify-start items-start h-full w-full  border-b-4 border-b-white border-opacity-20 space-x-3">
      <div className="videocontainer">
        <Video />
      </div>
      <div className="videocontainer">
        <Video />
      </div>
      <div className="videocontainer">
        <Video />
      </div>
    </div>
  );
};

export default HomeVideoContainer;

import Image from "next/image";
import UserComments from "./usercomment";

const CommentBox = () => {
  return (
    <div className="w-full flex flex-col gap-2 mt-4 p-2">
      <h1 className="text-md"> 1900,2132 Comments</h1>
      <hr className="opacity-20 my-2"/>
      <div className="userprofile flex justify-around items-center gap-5 w-full ">
        <Image
        className="rounded-full"
          src={
            "https://yt3.ggpht.com/6KKf0h0XDFBxQcOb_3LcIPVSMOu5QxSMODbLVOZC7jHYs-jztNe_uBzf1ewCZvyMI53Oi7no=s88-c-k-c0x00ffffff-no-rj"
          }
          width={40}
          height={40}
          alt="profile"
        />
        <input placeholder="Enter Your Commment" className=" w-full bg-white bg-opacity-20 p-2 rounded-lg"/>
        <button className=" bg-white p-2 rounded-md text-black font-semibold">Submit</button>
      </div>
      <div className="usercommnets">
        <UserComments/>
        <UserComments/>
        <UserComments/>
      </div>
    </div>
  );
};

export default CommentBox;

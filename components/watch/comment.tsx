import Image from "next/image";
import UserComments from "./usercomment";
import { useSession } from "next-auth/react";
import { GoPerson } from "react-icons/go";

const CommentBox = (commentdata: any) => {
  const { data: session, status } = useSession();

  return (
    <div className="w-full flex flex-col gap-2 mt-4 p-2">
      <h1 className="text-md"> 1900,2132 Comments</h1>
      <hr className="opacity-20 my-2" />
      <div className="userprofile flex justify-around items-center gap-5 w-full ">
        {!session?.user?.image ? (
          <div className="border rounded-full py-2">
          <GoPerson className="text-white w-11 h-7" />
          </div>
        ) : (
          <Image
            className="rounded-full"
            src={session?.user?.image || ""}
            width={40}
            height={40}
            alt="profile"
          />
        )}
        <input
          placeholder="Enter Your Commment"
          className=" w-full bg-white bg-opacity-20 p-2 rounded-lg"
        />
        <button className=" bg-white p-2 rounded-md text-black font-semibold">
          Submit
        </button>
      </div>
      <div className="usercomments">
        {commentdata.commentdata.items.map((d: any) => (
          <UserComments
            key={d.id}
            avatar={d.snippet.topLevelComment.snippet.authorProfileImageUrl}
            username={d.snippet.topLevelComment.snippet.authorDisplayName}
            usercomment={d.snippet.topLevelComment.snippet.textOriginal}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentBox;

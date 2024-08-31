import React from "react";
import CommentBox from "./comment";
const Description = ({text, viewCount, comments}:any) => {
  return (
    <div>
      <div className={`topcontainer text-sm p-2 bg-white bg-opacity-10 rounded-md flex flex-col gap-2`}>
        {viewCount} views 23 Jul 2023
        <div className="description">
            {text}
        </div>
      </div>
        <CommentBox commentdata={comments}/>
    </div>
  );
};

export default Description;

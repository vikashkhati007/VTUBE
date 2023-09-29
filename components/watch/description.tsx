"use client"
import React, { useState } from "react";
import CommentBox from "./comment";
const Description = ({text, viewCount, comments}:any) => {
  const [showMore, setShowMore] = useState(false);

  const toggleDescription = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div className={`topcontainer text-sm p-2 bg-white bg-opacity-10 rounded-md flex flex-col gap-2 ${showMore ? "expanded" : "collapsed"}`}>
        {viewCount} views 23 Jul 2023
        <span className="text-blue-500"> #zaynmalik #lovelikethis #zayn</span>
        <div className="description">
          <p>
            {text}
          </p>
        </div>
        <button
          className="text-blue-500 cursor-pointer"
          onClick={toggleDescription}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
        <CommentBox commentdata={comments}/>

    </div>
  );
};

export default Description;

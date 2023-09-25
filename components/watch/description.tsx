"use client"
import React, { useState } from "react";
import CommentBox from "./comment";

const Description = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleDescription = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div className={`topcontainer text-sm p-2 bg-white bg-opacity-10 rounded-md flex flex-col gap-2 ${showMore ? "expanded" : "collapsed"}`}>
        9,239 views 23 Jul 2023
        <span className="text-blue-500"> #zaynmalik #lovelikethis #zayn</span>
        <div className="description">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum repellat nobis, repellendus vitae aut tempora esse provident quam odio natus ab ad architecto iusto expedita dolor perferendis? Praesentium, omnis explicabo. Fuga iusto exercitationem maiores eius culpa minima minus libero molestiae vero, dolor corrupti tenetur beatae debitis ab numquam voluptatibus? Atque.
          </p>
        </div>
        <button
          className="text-blue-500 cursor-pointer"
          onClick={toggleDescription}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
        <CommentBox/>

    </div>
  );
};

export default Description;

import React from "react";
import starLeft from "./../Media/StarLeft.png";
import starRight from "./../Media/StarRight.png";

export const ExtrasHeader = () => {
  return (
    <div className="flex flex-col justify-center items-center align-center">
      <div className="flex flex-row">
        <img
          alt="stars"
          src={starLeft}
          className="w-14 h-6 backdrop:lg:w-14 lg:h-14 mt-5"
        />
        <h1 className="text-2xl lg:text-6xl p-4 font-mono font-semibold text-black">
          Extras
        </h1>

        <img
          alt="stars"
          src={starRight}
          className="w-14 h-6 backdrop:lg:w-14 lg:h-14 mt-5"
        />
      </div>
      <div className="flex flex-col justify-center align-center items-center">
        <h1 className="text-xl lg:text-2xl p-4 font-mono font-semibold text-black">
          Available at checkout for all bouncers!
        </h1>
      </div>
    </div>
  );
};

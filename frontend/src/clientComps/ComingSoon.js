import React from "react";
import left from "./../Media/StarLeft.png";
import right from "./../Media/StarRight.png";


export const ComingSoon = () => {
  return (
    <div className="flex flex-col justify-center align-center items-center">
      <div className="flex flex-row justify-center align-center items-center mx-auto h-72">
        <img src={left} alt="leftstar" className="w-20 h-20" />
        <h1 className="text-3xl font-mono font-bold">COMING SOON</h1>
        <img src={right} alt="rightstar" className="w-20 h-20" />
      </div>
      
    </div>
  );
};

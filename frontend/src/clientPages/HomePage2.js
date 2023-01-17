import React from "react";
import ripHero from "./../Media/LeftHeroRip.png";
import gravity from "./../Media/Test.png";
import roundTop from "./../Media/RoundTop.png";
import { Button } from "antd";

export const HomePage = () => {
  return (
    <div>
      <div className="grid grid-cols-2 grid-rows-1 md:grid-cols-4 md:grid-rows-3 lg:grid-cols-6 lg:grid-rows-2 h-8/12">
        {/* Left Image */}
        <div className="h-1/2 col-span-1 row-span-1 md:col-span-2 md:row-span-2 lg:col-span-3 lg:row-span-3 lg:h5/12">
          <img class="h-auto w-10/12" src={ripHero}></img>
        </div>
        {/* Middle Overlap Slogan */}
        <div class="absolute top-60 left-96 z-10 ">
          <img class="h-auto w-8/12 invisible md:invisible lg:visible sm:invisible" src={gravity}></img>
        </div>
        {/* Right Round Top Image */}
        <div className=" h-1/2  lg:col-start-5 lg:col-span-2 lg:row-start-2 lg:-mt-36  md:row-start-2 md:col-start-4">
          <img class="h-auto w-auto visible  md:visable lg:visible" src={roundTop}></img>
        </div>
        {/* Center Text Top Image */}
        <div className="h-1/2 mt-14 col-start-2 row-start-1 lg:col-start-4 lg:row-start-2 lg:col-span-1 lg:mt-10 md:mt-0 lg:-ml-16 md:row-start-2 md:col-start-3">
          {" "}
          <h1 className="text-sm lg:text-lg p-2">
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable.
          </h1>
          <Button className="mt-2 lg:mt-6">View Rentals</Button>
        </div>
      </div>
    </div>
  );
};

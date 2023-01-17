import React from "react";
import ripHero from "./../Media/LeftHeroRip.png";
import gravity from "./../Media/Test.png";
import roundTop from "./../Media/RoundTop.png";
import { Button } from "antd";

export const HomePage = () => {
  return (
    <div>
      <div className="grid grid-cols-4 grid-rows-1 lg:grid-cols-7 lg:grid-rows-1 h-8/12">
        {/* Left Image */}
        <div className="h-1/2 col-span-2  row-span-1  lg:col-span-3 lg:row-span-3 lg:h5/12">
          <img class="h-auto w-10/12" src={ripHero}></img>
        </div>
        {/* Middle Overlap Slogan */}
        <div class="absolute top-40 left-96 z-10 ">
          <img
            class="h-auto w-8/12 invisible md:invisible lg:visible sm:invisible"
            src={gravity}
          ></img>
        </div>
        {/* Right Round Top Image */}
        <div className=" h-1/2  lg:col-start-6 lg:col-span-2 lg:row-start-1 lg:mt-48 ">
          <img
            class="h-auto w-auto invisible md:invisible lg:visible sm:invisible"
            src={roundTop}
          ></img>
        </div>
        {/* Center Text Top Image */}
        <div className="flex-1 flex p-5 flex-col justify-end h-1/2 col-start-3 row-start-1 col-span-2 mt-20 md:mt-20 lg:col-start-4 lg:row-start-1 lg:col-span-2 lg:mt-80 lg:p-5  ">
          {" "}
          <h1 className="text-xs lg:text-lg p-2">
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable.
          </h1>
          <Button className="mt-2 lg:mt-6 w-48">View Rentals</Button>
        </div>
      </div>
    </div>
  );
};

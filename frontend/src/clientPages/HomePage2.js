import React from "react";
import ripHero from "./../Media/LeftHeroRip.png";
import gravity from "./../Media/Test.png";
import roundTop from "./../Media/RoundTop.png";
import Castle from "./../Media/CastlePol.png";
import { Button } from "antd";

export const HomePage = () => {
  // Get the body element

  return (
    <div class="relative">
      {/* <div class="lg:block absolute top-30 right-24 z-10 max-w-screen-sm">
        <div class="flex gap-0">
          <img src={Castle} alt="image1" class="w-2/3 max-w-xs -mr-40" />
          <img src={Castle} alt="image2" class="w-2/3 max-w-xs -mr-40" />
          <img src={Castle} alt="image3" class="w-2/3 max-w-xs" />
        </div>
      </div> */}
      <div className="grid grid-cols-4 grid-rows-1 lg:grid-cols-7 lg:grid-rows-1 h-8/12">
        {/* Left Image */}
        <div className="h-1/2 col-span-2  row-span-1  lg:col-span-3 lg:row-span-3 lg:h5/12">
          <img class="h-auto w-12/12" src={ripHero}></img>
        </div>

        {/* Middle Overlap Slogan */}
        <div class="absolute lg:top-36 lg:w-auto lg:left-96 w-30 z-40  top-16 left-56">
          <img
            class="h-auto w-8/12 visible md:invisible lg:visible sm:visible"
            src={gravity}
          ></img>
        </div>
        {/* Right Round Top Image */}
        <div className="flex-1 flex p-5 flex-col lg:justify-end h-1/2 md:col-start-3 md:row-start-1 md:col-span-2 lg:mt-[21rem] lg:col-start-6 lg:col-span-2 lg:row-start-1 lg:row-span-1 md:mt-28">
          <img
            class="h-auto w-auto invisible md:visible lg:visible sm:invisible"
            src={roundTop}
          ></img>
        </div>
        {/* Center Text Top Image */}
        <div className="flex-1 flex p-5 mt-24 flex-col lg:justify-center md:justify-end md:h-full md:-mt-4 h-1/2 col-start-3 row-start-1 col-span-2 md:ml-20 lg:col-start-4 lg:row-start-1 lg:mt-28  lg:p-5 ">
          <div className="md:bg-opacity-70 md:bg-white md:w-48 md:rounded-xl w-full lg:w-72 lg:bg-opacity-0">
            <h1 className="text-[.5rem] lg:text-lg p-2 md:p-4">
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures.
            </h1>
            <Button className="mt-2 lg:mt-6 w-28 md:m-4">View Rentals</Button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

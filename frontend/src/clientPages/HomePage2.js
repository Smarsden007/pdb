import React from "react";
import ripHero from "./../Media/LeftHeroRip2.png";
import gravity from "./../Media/Test.png";
import roundTop from "./../Media/RoundTop.png";
import Castle from "./../Media/CastlePol2.png";
import { Button } from "antd";

export const HomePage = () => {
  // Get the body element

  return (
    <div class="relative">
      <div class=" absolute top-20 right-[32rem] z-10 w-36 invisible md:invisible lg:visible sm:invisible">
        <div class="flex gap-6">
          <img src={Castle} alt="image1" class="hover:scale-110" />
          <img src={Castle} alt="image1" class="hover:scale-110" />
          <img src={Castle} alt="image1" class="hover:scale-110" />
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-1 lg:grid-cols-9 lg:grid-rows-1 h-8/12">
        {/* Left Image */}
        <div className="object-top h-7/12 col-span-2  row-span-1  lg:col-span-4 lg:row-span-3 lg:h-6/12">
          <img class="lg:h-6/12 w-12/12" src={ripHero}></img>
        </div>

        {/* Middle Overlap Slogan */}
        <div class="absolute lg:top-36 lg:w-auto lg:left-96 w-30 z-40  top-16 left-56 md">
          <img
            class="h-auto w-8/12 visible md:visible lg:visible sm:visible"
            src={gravity}
          ></img>
        </div>
        {/* Right Round Top Image */}
        <div className="flex-1 flex p-5 flex-col lg:justify-end h-1/2 md:col-start-3 md:row-start-1 md:col-span-2 lg:mt-[19rem] lg:col-start-7 lg:col-span-3 lg:row-start-1 lg:row-span-2">
          <img
            class="h-auto w-auto invisible md:visible lg:visible sm:invisible"
            src={roundTop}
          ></img>
        </div>
        {/* Book now Tablet View */}
        <div className="absolute mb-28 bottom-0 left-[45vw] flex justify-center items-center invisible md:visible lg:invisible sm:invisible">
          <button className="bg-stone-500 text-white py-2 px-4 rounded-md hover:bg-white hover:border hover:border-stone-500 hover:text-stone-500">
            View Rentals
          </button>
        </div>
        {/* Center Text Top Image */}
        <div className="flex-1 flex p-5 mt-28 w-48 flex-col lg:justify-center md:justify-end  md:-mt-4  col-start-3 row-start-1 col-span-1 md:ml-20 lg:col-start-5 lg:ml-0 lg:row-start-1 lg:mt-48  sm:w-48 md:w-3/4 lg:w-80 lg:p-5 visible md:invisible lg:visible sm:visible">
          <div className="md:bg-opacity-70 md:bg-white  md:rounded-xl lg:bg-opacity-0" >
            <h1 className="text-[.35rem] lg:text-lg p-2 md:p-4">
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures.
            </h1>
            <Button className="lg:mt-4 w-28 md:m-4 ">View Rentals</Button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

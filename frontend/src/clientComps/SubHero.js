import React from "react";
import Tearleft from "./../Media/TearLeft.png";
import SubRight from "./../Media/SubRight.png";
import RightSide from "./../Media/Rightside.png";
import { Circles } from "./Circles";

export const SubHero = () => {
  return (
    <div class="grid lg:-mt-36 grid-cols-2  lg:gap-12 lg:grid-cols-3 lg:grid-rows-1 sm:grid-cols-2">
      {/* left */}
      <div class=" lg:col-start-1 lg:col-span-1 lg:row-span-3 visible md:visible lg:visible sm:visible">
        <img
          alt="tearpic"
          class="w-full h-auto lg:m-10 lg:max-h-fit p-1"
          src={Tearleft}
        />
      </div>
      <div className="col-start-1 row-start-1 lg:col-start-2 lg:row-start-1 lg:mt-5">
        <div>
          <img alt="cleaning" class="w-full m-2" src={RightSide} />
        </div>
        <div className="ml-10">
          <h1 className="text-[.5rem] md:text-lg lg:text-xl p-2 md:p-4">
          Elevate your next event with our chic and sophisticated white bounce houses. Create a complete and unforgettable experience with our in-house balloons and backdrops, perfectly coordinated to match your theme and enhance the ambiance.
          </h1>
          <h1 className="text-[.5rem] md:text-lg lg:text-xl p-2 md:p-4">
          At <span className="text-[#c0a58e]">Pouncy</span>,       cleanliness is always a top priority. We understand that the safety and health of your guests is paramount, which is why we take extra care to thoroughly sanitize every bounce house before delivery.
          </h1>
        </div>
      </div>
      {/* right */}
      <div class="col-start-2 row-start-1 lg:col-start-3 lg:col-span-1 lg:row-span-3 ">
        <img
          alt="paul"
          class="w-full lg:h-auto h-auto lg:mt-10 p-2"
          src={SubRight}
        />
      </div>
      <div className="col-start-2 row-start-2 flex flex-row align-center justify-center items-center m-14 lg:-mt-10 ">
        <Circles />
      </div>
    </div>
  );
};

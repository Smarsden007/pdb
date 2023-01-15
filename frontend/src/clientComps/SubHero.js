import React from "react";
import Tearleft from "./../Media/TearLeft.png";
import SubRight from "./../Media/SubRight.png";

export const SubHero = () => {
  return (
    <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 lg:gap-0 lg:-mt-24'>
    <div class='grid lg:col-start-1 lg:col-span-3'>
      <img class="h-auto w-11/12 lg:-ml-24" src={Tearleft} />
    </div>
       <div class='grid lg:col-start-4 lg:col-span-3 lg:col-end-7  lg:-mr-12'>
       <img class="h-auto w-9/12 " src={SubRight} />
     </div>
     </div>
  );
};

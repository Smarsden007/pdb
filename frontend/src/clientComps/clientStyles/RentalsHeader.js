import React from 'react'
import starLeft from "./../../Media/StarLeft.png";
import starRight from "./../../Media/StarRight.png";
import './../../App.css'
export const RentalsHeader = () => {
  return (
    <div>
         <div className="flex flex-row justify-center align-center items-center -mb-14 ">
          <img alt="stars" src={starLeft} className="w-14 h-14" />
          <h1 className="text-2xl lg:text-6xl lg:p-4 test-font-2 text-[#c0a58e]">RENTALS</h1>
          <img alt="stars" src={starRight} className="w-14 h-14" />

        </div>
    </div>
  )
}

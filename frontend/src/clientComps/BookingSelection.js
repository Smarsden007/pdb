import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import starLeft from "./../Media/StarLeft.png";
import starRight from "./../Media/StarRight.png";
import './../App.css'
 
export const BookingSelection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 items-center mx-auto p-6 lg:mb-48 lg:mt-20">
        <div>
          <Card className="auto">
            <div className="flex flex-col justify-center items-center ">
            <div className="flex flex-row justify-center">
              <img
                alt="stars"
                src={starLeft}
                className="w-14 h-14 backdrop:lg:w-14 lg:h-14"
              />
              <h1 className="text-2xl lg:text-2xl mt-2 text-black test-font-1">
                The Toddler
              </h1>

              <img
                alt="stars"
                src={starRight}
                className="w-14 h-14 backdrop:lg:w-14 lg:h-14"
              />
              
            </div>
            <p className="text-bold text-center font-mono font-bold">
                $150 4-HOURS | $250 6-HOURS
              </p>
              <p className="text-bold text-center font-mono font-bold">
                $350 8-HOURS
              </p>
              <p className="text-bold text-center">
                Requires 12' X 12' clearance
              </p>
              <p className="text-bold text-center">
                includes: shoe rack, 50-foot extesion cord, entrance turf
              </p>
              <p className="text-bold text-center font-mono font-bold">
                *FOR AGES 10 AND UNDER*
              </p>
            <Link to='/toddler-checkout'>
                <button className="bg-[#c0a58e] text-white rounded-lg w-36 h-12 hover:bg-white hover:border-[#c0a58e] hover:border-solid hover:border-4 hover:text-[#c0a58e] text-2xl">
                  Continue
                </button>
              </Link>
            </div>
          </Card>
        </div>
        <div>
          <Card className="auto">
            <div className="flex flex-col justify-center items-center ">
            <div className="flex flex-row justify-center">
              <img
                alt="stars"
                src={starLeft}
                className="w-14 h-14 backdrop:lg:w-14 lg:h-14"
              />
              <h1 className="text-2xl lg:text-2xl mt-2 text-black test-font-1">
                The Castle
              </h1>

              <img
                alt="stars"
                src={starRight}
                className="w-14 h-14 backdrop:lg:w-14 lg:h-14"
              />
              
            </div>
            <p className="text-bold text-center font-mono font-bold">
                $300 4-HOURS | $400 6-HOURS
              </p>
              <p className="text-bold text-center font-mono font-bold">
                $500 8-HOURS
              </p>
              <p className="text-bold text-center">
                Requires 12' X 12' clearance
              </p>
              <p className="text-bold text-center">
                includes: shoe rack, 50-foot extesion cord, entrance turf
              </p>
              <p className="text-bold text-center font-mono font-bold">
              *FOR ALL AGES*
              </p>
            <Link to='/castle-checkout'>
                <button className="bg-[#c0a58e] text-white rounded-lg w-36 h-12 hover:bg-white hover:border-[#c0a58e] hover:border-solid hover:border-4 hover:text-[#c0a58e] text-2xl">
                  Continue
                </button>
              </Link>
            </div>
          </Card>
        </div>
        <div>
          <Card className="auto">
            <div className="flex flex-col justify-center items-center ">
            <div className="flex flex-row justify-center">
              <img
                alt="stars"
                src={starLeft}
                className="w-14 h-14 backdrop:lg:w-14 lg:h-14"
              />
              <h1 className="text-2xl lg:text-2xl mt-2 text-black test-font-1">
                The Bastille
              </h1>

              <img
                alt="stars"
                src={starRight}
                className="w-14 h-14 backdrop:lg:w-14 lg:h-14"
              />
              
            </div>
            <p className="text-bold text-center font-mono font-bold">
                $300 4-HOURS | $400 6-HOURS
              </p>
              <p className="text-bold text-center font-mono font-bold">
                $500 8-HOURS
              </p>
              <p className="text-bold text-center">
                Requires 12' X 12' clearance
              </p>
              <p className="text-bold text-center">
                includes: shoe rack, 50-foot extesion cord, entrance turf
              </p>
              <p className="text-bold text-center font-mono font-bold">
                *FOR ALL AGES*
              </p>
            <Link to='/bastille-checkout'>
                <button className="bg-[#c0a58e] text-white rounded-lg w-36 h-12 hover:bg-white hover:border-[#c0a58e] hover:border-solid hover:border-4 hover:text-[#c0a58e] text-2xl">
                  Continue
                </button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

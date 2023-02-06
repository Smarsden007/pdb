import React from "react";
import { Link } from "react-router-dom";
import castle from "./../../Media/CastleRentalCard.png";
import toddler from "./../../Media/toddler.png";
import bastille from "./../../Media/bastille.png";
import './../../App.css'
import "./RentalCards.css";
export const RentalCards = () => {
  return (
    <div>
      <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-1 ">
        {/* Col1 */}
        <div className="flex flex-col justify-center items-center align-center">
          <div className=" flex flex-col justify-center align-center items-center border-solid border-4 rounded-[4rem] border-[#c0a58e]  w-72 lg:w-96 p-2 md:col-start-1 md:row-start-1 lg:col-start-1">
            <div className="text-center">
              <img alt="stars" src={toddler} />{" "}
              <p className="text-bold text-center font-mono font-bold">
                $150 4-HOURS | $250 6-HOURS
              </p>
              <p className="text-bold text-center font-mono font-bold">
                $350 8-HOURS
              </p>
              <p className="text-bold text-center p-4">
                Requires 10' X 10' clearance
              </p>
              <p className="text-bold text-center mx-auto w-56">
              includes: shoe rack, 50-foot extension cord, entrance turf
              </p>
              <p className="text-bold text-center font-mono font-bold p-6">
                *FOR AGES 10 AND UNDER*
              </p>
              <Link to="/toddler-checkout">
                <button className="bg-[#c0a58e] text-white rounded-2xl w-48 h-12 hover:bg-white hover:border-[#c0a58e] hover:border-solid hover:border-4 hover:text-[#c0a58e] font-bold text-3xl">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
          <h2 className="text-4xl text-center test-font-1">the toddler</h2>
        </div>

        {/* Col2 */}

        <div className="flex flex-col justify-center items-center align-center">
          <div className=" flex flex-col justify-center align-center items-center border-solid border-4 rounded-[4rem] border-[#c0a58e] w-72 lg:w-96 p-2 md:col-start-2 md:row-start-1 lg:col-start-2">
            <div className="text-center">
              <img alt="stars" src={bastille} />{" "}
              <p className="text-bold text-center font-mono font-bold">
                $300 4-HOURS | $400 6-HOURS
              </p>
              <p className="text-bold text-center font-mono font-bold">
                $500 6-HOURS
              </p>
              <p className="text-bold text-center p-4">
                Requires 14' X 14' clearance
              </p>
              <p className="text-bold text-center mx-auto w-56">
              includes: shoe rack, 50-foot extension cord, entrance turf
              </p>
              <p className="text-bold text-center font-mono font-bold p-6">
                *FOR ALL AGES*
              </p>
              <Link to="/bastille-checkout">
                <button className="bg-[#c0a58e] text-white rounded-2xl w-48 h-12 hover:bg-white hover:border-[#c0a58e] hover:border-solid hover:border-4 hover:text-[#c0a58e] font-bold text-3xl">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
          <h2 className="text-4xl text-center test-font-1">the bastille</h2>
        </div>
        {/* Col3 */}

        <div className="flex flex-col justify-center items-center align-center">
          <div className=" flex flex-col justify-center align-center items-center border-solid border-4 rounded-[4rem] border-[#c0a58e] w-72 lg:w-96 p-2 md:col-start-1 md:row-start-2 lg:col-start-3">
            <div className="text-center">
              <img alt="stars" src={castle} />{" "}
              <p className="text-bold text-center font-mono font-bold">
                $300 4-HOURS | $400 6-HOURS
              </p>
              <p className="text-bold text-center font-mono font-bold">
                $500 6-HOURS
              </p>
              <p className="text-bold text-center p-4">
                Requires 14' X 14' clearance
              </p>
              <p className="text-bold text-center mx-auto w-56">
              includes: shoe rack, 50-foot extension cord, entrance turf
              </p>
              <p className="text-bold text-center font-mono font-bold p-6">
                *FOR ALL AGES*
              </p>
              <Link to="/castle-checkout">
                <button className="bg-[#c0a58e] text-white rounded-2xl w-48 h-12 hover:bg-white hover:border-[#c0a58e] hover:border-solid hover:border-4 hover:text-[#c0a58e] font-bold text-3xl">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
          <h2 className="text-4xl text-center test-font-1">the  castle</h2>
        </div>
      </div>
    </div>
  );
};

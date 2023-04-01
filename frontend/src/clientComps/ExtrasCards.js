import React from "react";
import { Link } from "react-router-dom";
import fringe from "./../Media/fringe.png";
import balloons from "./../Media/balloons.png";
import vinyl from "./../Media/vinyl.png";
import backd from "./../Media/backd.png"
import './../App.css'
export const ExtrasCards = () => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 grid-rows-5 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 lg:gap-16 gap-8 ">
         
          <div className="flex flex-col justify-center items-center align-center ">
            <div className=" flex flex-col justify-center align-center items-center border-solid border-4 rounded-[4rem] border-[#c0a58e]  w-72 lg:w-96 p-2 md:col-start-1 md:row-start-1 lg:col-start-1 ">
              <div className="text-center">
                <div className="flex flex-col p-4">
                  <h1 className="test-font-1 text-4xl text-center">Vinyl</h1>

                  <img alt="stars" src={vinyl} className="w-48 mx-auto" />
                  <div className="p-2">
                    <p className="text-bold text-center font-mono font-bold">
                      Bastille & Castle:
                    </p>
                    <p>Large Text:$40</p>
                    <p>Full Theme Package:$75</p>
                  </div>
                  <div>
                    <p className="text-bold text-center font-mono font-bold">
                      Toddler:
                    </p>
                    <p>Large Text:$20</p>
                    <p>Custom Theme Package:$55</p>
                  </div>
                </div>
                <Link to='/checkout'>
                  <button className="bg-[#c0a58e] text-white rounded-lg w-48 h-12 m-4 hover:bg-white hover:border-[#c0a58e] hover:border-solid hover:border-4 hover:text-[#c0a58e]">
                    Continue to Booking
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center align-center">
            <div className=" flex flex-col justify-center align-center items-center border-solid border-4 rounded-[4rem] border-[#c0a58e]  w-72 lg:w-96 p-2 md:col-start-1 md:row-start-1 lg:col-start-2 lg:row-start-1">
              <div className="text-center">
                <div className="flex flex-col p-4">
                  <h1 className="test-font-1 text-4xl text-center">Balloon Garland</h1>

                  <img alt="stars" src={balloons} className="w-48 mx-auto" />
                  <div className="p-2">
                    <p className="text-bold text-center font-mono font-bold">
                      Bastille & Castle:
                    </p>
                    <p>Half Arch:$150</p>
                    <p>Full Arch:$250</p>
               
                  </div>
                  <div>
                    <p className="text-bold text-center font-mono font-bold">
                      Toddler:
                    </p>
                    <p>Half Arch:$100</p>
                    <p>Full Arch:$150</p>
                  </div>
                </div>
                <Link to='/checkout'>
                  <button className="bg-[#c0a58e] text-white rounded-lg w-48 h-12 m-4 hover:bg-white hover:border-[#c0a58e] hover:border-solid hover:border-4 hover:text-[#c0a58e]">
                    Continue to Booking
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center align-center">
            <div className=" flex flex-col justify-center align-center items-center border-solid border-4 rounded-[4rem] border-[#c0a58e]  w-72 lg:w-96 p-2 md:col-start-1 md:row-start-1 lg:col-start-3">
            <div className="text-center">
                <div className="flex flex-col p-4">
                  <h1 className="test-font-1 text-4xl text-center">Backdrops</h1>

                  <img alt="stars" src={backd} className="w-48 mx-auto" />
                  <div className="p-2">
                    <p className="text-bold text-center font-mono font-bold">
                      Trio 
                    </p>
                    <p>Solid Colors:$300 <br/>(Simple Message included)</p>
                    <p>Complex Letters/Custom Design:Start at $400</p>
                  </div>
                  <div>
                    <p className="text-bold text-center font-mono font-bold">
                     Doubles
                    </p>
                    <p>Solid Colors:$250 <br/>(Simple Message included)</p>
                    <p>Complex Letters/Custom Design:Start at $350</p>
                    <p>Delivery Fees Change Depending on Location and extras selected</p>
                  </div>
                </div>
                <Link to='/checkout'>
                  <button className="bg-[#c0a58e] text-white rounded-lg w-48 h-12 m-4 hover:bg-white hover:border-[#c0a58e] hover:border-solid hover:border-4 hover:text-[#c0a58e]">
                    Continue to Booking
                  </button>
                </Link>
              </div>
            </div>
          </div>


          <div className="flex flex-col justify-center items-center align-center">
            <div className=" flex flex-col justify-center align-center items-center border-solid border-4 rounded-[4rem] border-[#c0a58e]  w-72 lg:w-96 p-2 md:col-start-1 md:row-start-1 lg:col-start-1">
            <div className="text-center">
                <div className="flex flex-col p-4">
                  <h1 className="test-font-1 text-4xl text-center">Fringe Garland</h1>

                  <img alt="stars" src={fringe} className="w-48 mx-auto" />
                  <div className="p-2">
                    <p className="text-bold text-center font-mono font-bold">
                      Bastille & Castle:
                    </p>
                    <p>Custom:$50</p>
                    <p>In-house Garland:$40</p>
                  </div>
                  <div>
                    <p className="text-bold text-center font-mono font-bold">
                      Toddler:
                    </p>
                    <p>Custom:$35</p>
                    <p>In-house Garland:$25</p>
                  </div>
                </div>
                <Link to='/checkout'>
                  <button className="bg-[#c0a58e] text-white rounded-lg w-48 h-12 m-4 hover:bg-white hover:border-[#c0a58e] hover:border-solid hover:border-4 hover:text-[#c0a58e]">
                    Continue to Booking
                  </button>
                </Link>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
};

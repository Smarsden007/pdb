import React from "react";
import { Link } from "react-router-dom";
import fringe from "./../Media/fringe.png";
import balloons from "./../Media/balloons.png";
import vinyl from "./../Media/vinyl.png";
import photo from "./../Media/photo1.png";
import backd from "./../Media/backd.png"
export const ExtrasCards = () => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 grid-rows-6 lg:grid-cols-3 lg:grid-rows-2 lg:gap-16 gap-8">
         
          <div className="flex flex-col justify-center items-center align-center">
            <div className=" flex flex-col justify-center align-center items-center border-solid border-4 rounded-[4rem] border-[#c0a58e]  w-72 lg:w-96 p-2 md:col-start-1 md:row-start-1 lg:col-start-1">
              <div className="text-center">
                <div className="flex flex-col p-4">
                  <h1 className="cursive-text text-4xl text-center">Vinyl</h1>

                  <img alt="stars" src={vinyl} className="w-48 mx-auto" />
                  <div className="p-2">
                    <p className="text-bold text-center font-mono font-bold">
                      Bastille & Castle:
                    </p>
                    <li>Large Text:$40</li>
                    <li>Full Theme Package:$75</li>
                  </div>
                  <div>
                    <p className="text-bold text-center font-mono font-bold">
                      Toddler:
                    </p>
                    <li>Large Text:$20</li>
                    <li>Custom Theme Package:$55</li>
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
                  <h1 className="cursive-text text-4xl text-center">Balloon Garland</h1>

                  <img alt="stars" src={balloons} className="w-48 mx-auto" />
                  <div className="p-2">
                    <p className="text-bold text-center font-mono font-bold">
                      Bastille & Castle:
                    </p>
                    <li>Half Arch:$150</li>
                    <li>Full Arch:$250</li>
               
                  </div>
                  <div>
                    <p className="text-bold text-center font-mono font-bold">
                      Toddler:
                    </p>
                    <li>Half Arch:$100</li>
                    <li>Full Arch:$150</li>
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
                  <h1 className="cursive-text text-4xl text-center">Fringe Garland</h1>

                  <img alt="stars" src={fringe} className="w-48 mx-auto" />
                  <div className="p-2">
                    <p className="text-bold text-center font-mono font-bold">
                      Bastille & Castle:
                    </p>
                    <li>Custom:$50</li>
                    <li>In-house Garland:$40</li>
                  </div>
                  <div>
                    <p className="text-bold text-center font-mono font-bold">
                      Toddler:
                    </p>
                    <li>Custom:$35</li>
                    <li>In-house Garland:$25</li>
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
                  <h1 className="cursive-text text-4xl text-center">Photography</h1>

                  <img alt="stars" src={photo} className="w-48 mx-auto" />
                  <div className="p-2">
                    <p className="text-bold text-center font-mono font-bold">
                      Bastille & Castle:
                    </p>
                    <li>Large Text:$30</li>
                    <li>Custom Theme Package:$80</li>
                    <li>In-house Theme Package:$70</li>
                  </div>
                  <div>
                    <p className="text-bold text-center font-mono font-bold">
                      Toddler:
                    </p>
                    <li>Large Text:$20</li>
                    <li>Custom Theme Package:$80</li>
                    <li>In-house Theme Package:$70</li>
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
                  <h1 className="cursive-text text-4xl text-center">Backdrops</h1>

                  <img alt="stars" src={backd} className="w-48 mx-auto" />
                  <div className="p-2">
                    <p className="text-bold text-center font-mono font-bold">
                      Trio 
                    </p>
                    <li>Solid Colors:$200 <br/>(Simple Message included)</li>
                    <li>Complex Letters/Custom Design:Start at $300</li>
                  </div>
                  <div>
                    <p className="text-bold text-center font-mono font-bold">
                     Doubles
                    </p>
                    <li>Solid Colors:$150 <br/>(Simple Message included)</li>
                    <li>Complex Letters/Custom Design:Start at $250</li>
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

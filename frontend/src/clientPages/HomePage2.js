import React from "react";
import { Link } from "react-router-dom";
import ripHero from "./../Media/LeftHeroRip2.png";
import gravity from "./../Media/Test.png";
import roundTop from "./../Media/RoundTop.png";
import Castle from "./../Media/CastlePol.png";
import Bastille from "./../Media/BastillePol.png";
import Toddler from "./../Media/ToddlerPol.png";
import { Helmet } from "react-helmet-async";

export const HomePage = () => {
  // Get the body element

  return (
    
    <div class="relative">
      <Helmet>
              <title>Pouncy Parties</title>
              <meta name="description" content="Bring the excitement to your next event in Sonoma, Marin, or Napa County with our selection of luxury bouncers, backdrops, balloons and more. Shop now at Pouncy Parties."/>
              <link rel="canonical" href='/' />
            </Helmet>
      <div class=" absolute top-20 right-[16rem] z-10 w-[30rem] invisible md:invisible lg:visible sm:invisible">
        <div class="flex gap-4">
          <Link to="/rentals">
            <img src={Castle} alt="image1" class="hover:scale-110" />
          </Link>
          <Link to="/rentals">
            <img src={Bastille} alt="image2" class="hover:scale-110" />
          </Link>
          <Link to="/rentals">
            <img src={Toddler} alt="image3" class="hover:scale-110" />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-1 lg:grid-cols-9 lg:grid-rows-1 h-8/12">
        {/* Left Image */}
        <div className="object-top h-6/12 col-span-2  row-span-1  lg:col-span-4 lg:row-span-3 lg:h-6/12">
          <img alt="hero" class="lg:h-[100vh]  w-auto" src={ripHero}></img>
        </div>

        {/* Middle Overlap Slogan */}
        <div class="absolute lg:top-56 lg:w-auto lg:left-96  z-0  top-4 left-28 md ">
          <img
            alt="gravity"
            class="h-auto lg:w-8/12 w-80 visible md:visible lg:visible sm:visible"
            src={gravity}
          ></img>
        </div>
        {/* Right Round Top Image */}
        <div className="flex-1 flex p-5 flex-col lg:justify-end h-1/2 md:col-start-3 md:row-start-1 md:col-span-2 lg:mt-[21rem] lg:col-start-7 lg:col-span-3 lg:row-start-1 lg:row-span-2">
          <img
            alt="roundimage"
            class="h-auto w-auto invisible md:visible lg:visible sm:invisible"
            src={roundTop}
          ></img>
        </div>
        {/* Book now Tablet View */}
        <div className="absolute mb-28 bottom-0 left-[45vw] flex justify-center items-center invisible md:visible lg:invisible sm:invisible">
          <Link to="/rentals">
            <button className="bg-[#c0a58e] text-white rounded-2xl w-48 h-12 hover:bg-white hover:border-[#c0a58e] hover:border-solid hover:border-4 hover:text-[#c0a58e]">
              View Rentals
            </button>
          </Link>
        </div>
        {/* Center Text Top Image */}
        <div className="flex-1 flex p-5 mt-20 w-48 flex-col lg:justify-center md:justify-end  md:-mt-4  col-start-3 row-start-1 col-span-1 md:ml-20 lg:col-start-5 lg:ml-0 lg:row-start-1 lg:mt-48  sm:w-48 md:w-3/4 lg:w-80 lg:p-5 visible md:invisible lg:visible sm:visible">
          <div className="md:bg-opacity-70 md:bg-white  md:rounded-xl lg:bg-opacity-0">
            
            <h1 className="text-[.5rem] w-42 lg:text-2xl p-2 md:p-4">
              The All-White Luxury Bounce House Company! Our mission is to bring
              joy and excitement to every event, big or small, with our
              top-of-the-line, all-white bounce houses.
            </h1>
            <Link to="/rentals">
              <button className="bg-[#c0a58e] text-white rounded-lg lg:w-36 lg:h-12 lg:ml-4 w-28 h-8 hover:bg-white hover:border-[#c0a58e] hover:border-solid hover:border-4 hover:text-[#c0a58e]">
                View Rentals
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

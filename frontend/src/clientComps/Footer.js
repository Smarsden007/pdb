import React from "react";
import { Link } from "react-router-dom";
import { SocialsRow } from "./SocialsRow";
import logo from "./../Media/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#c0a58e] text-white p-1 lg:mt-14 mt-4  w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center lg:p-4">
          <img alt="logo" src={logo} />
        </div>
        <div className="flex justify-center my-6">
          <SocialsRow />
        </div>
        <div className="flex flex-col lg:mr-12">
          <div className="flex flex-row">
            <nav className="flex flex-col lg:mr-20 ">
              <Link to="/">
                <a
                  href="home"
                  className="px-2 text-white lg:text-xl transform hover:scale-125 hover:text-black"
                >
                  HOME
                </a>
              </Link>
              <Link to="/rentals">
                <a
                  href="#rentals"
                  className="px-2 text-white lg:text-xl transform hover:scale-125 hover:text-black"
                >
                  RENTALS
                </a>
              </Link>
              <Link to="/extras">
                <a
                  href="extras"
                  className="px-2 text-white lg:text-xl transform hover:scale-125 hover:text-black"
                >
                  EXTRAS
                </a>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { SocialsRow } from "./SocialsRow";
import logo from "./../Media/logo.png";

const Footer = () => {




  return (
    <footer className="bg-[#c0a58e] text-white p-1 mt-14 fixed bottom-0 w-full">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img alt="logo" src={logo} />
      </div>
      <div className="flex justify-center my-6">
        <SocialsRow />
      </div>
      <div className="flex flex-col">
      <div className="flex flex-row">
        <nav className="flex flex-col p-10">
          <a href="home" className="px-2 text-white hover:text-white">
            HOME
          </a>
          <a href="#rentals" className="px-2 text-white hover:text-white">
            RENTALS
          </a>
          <a href="extras" className="px-2 text-white hover:text-white">
            EXTRAS
          </a>
        </nav>
      </div>
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;

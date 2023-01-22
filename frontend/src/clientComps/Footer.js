import React from "react";
import { SocialsRow } from "./SocialsRow";
import logo from "./../Media/logo.png";

const Footer = () => {




  return (
    <footer className="bg-stone-500 text-white p-1 mt-14">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} />
        </div>
        <div className="flex justify-center my-6">
          <SocialsRow />
        </div>
        <div className="flex flex-col">
        <div className="flex flex-row">
          <nav className="flex flex-col p-10">
            <a href="#" className="px-2 text-white hover:text-white">
              HOME
            </a>
            <a href="#" className="px-2 text-white hover:text-white">
              RENTALS
            </a>
            <a href="#" className="px-2 text-white hover:text-white">
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
import React from "react";
import { SocialsRow } from "./SocialsRow";
import logo from "./../Media/logo.png";

const Footer = () => {
  return (
    <footer className="bg-stone-500 text-white p-1">
      <div className="flex justify-between items-center">
        <div className="flex items-center p-10">
          <img src={logo} />
        </div>
        <div className="flex justify-center my-6">
          <SocialsRow />
        </div>
        <div className="flex flex-col">
            <div className="flex flex-row justify-start px-12 -mb-5 text-xl font-bold">
                <h4> Links</h4>
            </div>
        <div className="flex flex-row">
          {" "}
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
          <nav className="flex flex-col p-10">
            <a href="#" className="px-2 text-white hover:text-white">
              POP-UPS
            </a>
            <a href="#" className="px-2 text-white hover:text-white">
              ABOUT
            </a>
            <a href="#" className="px-2 text-white hover:text-white">
              Contact
            </a>
          </nav>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

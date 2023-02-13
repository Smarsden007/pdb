import { Link } from "react-router-dom";
import React, { useState } from "react";
import { SocialsRow } from "./SocialsRow";
import { Divider } from "antd";
import { Background } from "./Background";
import Logo from "./../Media/logo.png";
import "./../clientComps/clientStyles/LogoRender.css";
import "./../clientComps/clientStyles/nav.css";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Background>
      <div
        class={`${
          isOpen
            ? "fixed top-0 left-0 w-full h-full bg-white z-50"
            : "bg-[#f8f5f2]"
        }`}
      >
        <div class="fixed top-0 z-10 bg-transparent w-full bg-[#f8f5f2]">
          <img
            src={Logo}
            alt="pouncylogo"
            className={`absolute top-0 left-0 overlap-y-auto m-4 w-48 logo ${
              isOpen ? "hide" : ""
            }`}
          />
          <nav class="container mx-auto flex justify-end bg-trasnparent">
            
              <label for="check" class="bar">
                <input id="check" type="checkbox" />

                <span class="top"></span>
                <span class="middle"></span>
                <span class="bottom"></span>
              </label>

              {/* {isOpen ? (
                 
                ) : (
                 
                )} */}
    

            <ul
              class={`text-right font-light text-2xl p-4 inline-flex ${
                isOpen ? "" : "hidden lg:flex justify-end mx-22"
              } lg:hidden`}
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                zIndex: "5",
                display: isOpen ? "block" : "none",
              }}
            >
              <Divider className="m-10" />

              <div className="grid grid-cols-2">
                <div className="gird col-start-2">
                  <Link onClick={() => setIsOpen(false)} to="/">
                    <li class="m-4  hover:text-[#c0a58e]">
                      <a href="home">HOME</a>
                    </li>
                  </Link>
                  <li class="m-4 hover:text-[#c0a58e]">
                    <Link onClick={() => setIsOpen(false)} to="/rentals">
                      <a href="rentals">RENTALS</a>
                    </Link>
                  </li>
                  <li class="m-4 hover:text-[#c0a58e]">
                    <Link onClick={() => setIsOpen(false)} to="/extras">
                      <a href="extra">EXTRAS</a>
                    </Link>
                  </li>
                  <li class="m-4 hover:text-[#c0a58e] ">
                    <Link to="/pop-ups" onClick={() => setIsOpen(false)}>
                      <a href="pop-ups">POP-UPS</a>
                    </Link>
                  </li>
                  <li class="m-4 hover:text-[#c0a58e] ">
                    <Link onClick={() => setIsOpen(false)} to="/partners">
                      <a href="partners">PARTNERS</a>
                    </Link>
                  </li>
                  <li class="m-4 hover:text-[#c0a58e] ">
                    <Link to="/checkout" onClick={() => setIsOpen(false)}>
                      <a href="book">BOOK</a>
                    </Link>
                  </li>
                </div>
                <div className="grid col-start-1 absolute top-0">
                  <li class="m-4 hover:text-black ">
                    <button onClick={() => setIsOpen(!isOpen)}>x</button>
                  </li>
                </div>
              </div>
              <div>
                <SocialsRow />
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </Background>
  );
};

import { Link } from "react-router-dom";
import React, { useState } from "react";
import { SocialsRow } from "./SocialsRow";
import { Divider } from "antd";
import Logo from './../Media/logo.png'

export const SubNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      class={`${
        isOpen ? "fixed top-0 left-0 w-full h-full bg-white z-50" : ""
      }`}
    >
      <div class="fixed top-0 z-10 bg-transparent w-full">
      <img src={Logo} alt='pouncylogo' className={`absolute top-0 left-0 z-50 overlap-y-auto m-4 w-28 logo lg:hidden ${isOpen ? 'hide' : ''}`}/>
        <nav class="container mx-auto flex justify-end">
          <div class="block lg:hidden mt-2 mr-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              class="flex items-center m-2 px-5 py-3 border  rounded text-beige-200 border-stone-500 hover:text-red-300 hover:border-red-300"
            >
              <svg
                class="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                )}
              </svg>
            </button>
          </div>

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
                <Link onClick={() => setIsOpen(false)} to='/home'>
                <li class="m-4  hover:text-stone-400">
                  <a href="home">HOME</a>
                </li>
                </Link>
                <li class="m-4 hover:text-stone-400 ">
                  <Link to='/rentals' onClick={() => setIsOpen(false)}>
                  <a href="rentals">RENTALS</a>
                  </Link>
                </li>
                <li class="m-4 hover:text-stone-400 ">
                  <Link to='/extras' onClick={() => setIsOpen(false)}>
                  <a href="extra">EXTRAS</a>
                  </Link>
                </li>
                <li class="m-4 hover:text-stone-400 ">
                  <Link to='/pop-ups' onClick={() => setIsOpen(false)}>
                  <a href="pop-ups">POP-UPS</a>
                  </Link>
                </li>
                <li class="m-4 hover:text-stone-400 ">
                  <Link to='/partners' onClick={() => setIsOpen(false)}>
                  <a href="partners">PARTNERS</a>
                  </Link>
                </li>
                <li class="m-4 hover:text-stone-400 ">
                  <Link to="/checkout" onClick={() => setIsOpen(false)}>
                    {" "}
                    <a href="book">BOOK</a>
                  </Link>
                </li>
              </div>
              <div className="grid col-start-1 absolute top-0">
                <li class="m-4 hover:text-slate-400 ">
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
  );
};

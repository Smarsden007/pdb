import { Link } from "react-router-dom";
import React, { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div class="fixed top-0 z-10 bg-transparent w-full">
        <nav class="container mx-auto flex justify-end">
          <div class="block lg:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              class="flex items-center m-5 px-3 py-2 border rounded text-beige-200 border-stone-500 hover:text-red-300 hover:border-red-300"
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
            }`}
          >
            <li class="m-4  hover:text-slate-400">
              <a href="#">HOME</a>
            </li>
            <li class="m-4 hover:text-slate-400 ">
              <a href="#">RENTALS</a>
            </li>
            <li class="m-4 hover:text-slate-400 ">
              <a href="extra">EXTRAS</a>
            </li>
            <li class="m-4 hover:text-slate-400 ">
              <a href="#">POP-UPS</a>
            </li>
            <li class="m-4 hover:text-slate-400 ">
              <a href="#">PARTNERS</a>
            </li>
            <li class="m-4 hover:text-slate-400 ">
             <Link to='/'> <a href="#">BOOK</a></Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

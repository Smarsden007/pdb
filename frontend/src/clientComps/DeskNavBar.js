import React from "react";
import { Link } from "react-router-dom";
export const DeskNavBar = () => {
  return (
    <div>
      <nav class="fixed top-10 right-16 w-1/2 h-12 text-[1.25rem] bg-white  py-1">
        <ul class="flex items-center">
        <li class="m-3  hover:text-slate-400">
                  <a href="#">HOME</a>
                </li>
                <li class="m-4 hover:text-black ">
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
                  <Link to="/">
                    {" "}
                    <a href="#">BOOK</a>
                  </Link>
                </li>
        </ul>
      </nav>
    </div>
  );
};
import React from "react";
import { Link } from "react-router-dom";
import logo from './../Media/logo.png'
export const DeskNavBar = () => {
  return (
    <div className="relative">
    <div className="fixed top-0 left-0 m-4 z-50">
      <img src={logo} alt="Logo" className="w-auto h-auto" />
    </div>
    <nav class="fixed top-0 right-0 w-1/2 h-12 text-1.25rem bg-f8f5f2 py-1 z-50">
      <ul class="flex items-center">
        <Link to="/">
          <li class="m-3 hover:text-slate-400">
            <a href="home">HOME</a>
          </li>
        </Link>
        <Link to="/rentals">
          <li class="m-4 hover:text-black ">
            <a href="rentals">RENTALS</a>
          </li>
        </Link>
        <Link to="/extras">
          <li class="m-4 hover:text-slate-400 ">
            <a href="extra">EXTRAS</a>
          </li>
        </Link>
        <Link to="/pop-ups">
          <li class="m-4 hover:text-slate-400 ">
            <a href="pop-ups">POP-UPS</a>
          </li>
        </Link>
        <Link to="/partners">
          <li class="m-4 hover:text-slate-400 ">
            <a href="partners">PARTNERS</a>
          </li>
        </Link>{" "}
        <Link to="/checkout">
          <li class="m-4 hover:text-slate-400 ">
            {" "}
            <a href="book">BOOK</a>
          </li>
        </Link>
      </ul>
    </nav>
  </div>
  );
};

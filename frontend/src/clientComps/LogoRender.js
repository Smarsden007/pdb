import React from "react";
import { Link } from "react-router-dom";
import logo from "./../Media/logo.png";
import './clientStyles/LogoRender.css'
const Logo = () => {
  return (
    <Link to="/">
      <div class="logo-container" style={{ backgroundColor: "white",}}>
        <img src={logo} className="logo" />
      </div>
    </Link>
  );
};

export default Logo;

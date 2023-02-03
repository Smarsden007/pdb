import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export const SocialsRow = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex mx-auto">
        <a
          href="https://www.facebook.com/pouncyparties/"
          className="text-2xl lg:text-4xl mx-4 hover:text-black  transform hover:scale-125"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/pouncyparties"
          className="text-2xl lg:text-4xl mx-4 hover:text-black  transform hover:scale-125"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.tiktok.com/@pouncyparties"
          className="text-2xl lg:text-4xl mx-4 hover:text-black  transform hover:scale-125"
        >
          <FaTiktok />
        </a>
      </div>
    </div>
  );
};

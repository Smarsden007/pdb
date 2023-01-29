import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export const SocialsRow = () => {
  return (
    <div className="flex flex-col justify-center p-4">
      <div className="flex mx-auto">
        <a
          href="https://www.facebook.com"
          className="text-2xl lg:text-4xl mx-4"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com"
          className="text-2xl lg:text-4xl mx-4"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.instagram.com"
          className="text-2xl lg:text-4xl mx-4"
        >
          <FaTiktok />
        </a>
      </div>
    </div>
  );
};

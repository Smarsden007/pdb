import React from 'react'
import {  FaFacebook, FaInstagram } from "react-icons/fa";

export const SocialsRow = () => {
    return (
        <div className="flex flex-col justify-center">
              <div className='flex mx-auto m-1'>
            <h2>Follow Us!</h2>
          </div>
        <div className='flex mx-auto'>
          <a href="https://www.facebook.com" className="text-2xl mx-4">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com" className="text-2xl mx-4">
            <FaInstagram />
          </a>
          </div>
        
        </div>
      );
}

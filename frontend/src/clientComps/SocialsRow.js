import React from 'react'
import {  FaFacebook, FaInstagram,FaTiktok } from "react-icons/fa";

export const SocialsRow = () => {
    return (
        <div className="flex flex-col justify-center">
              <div className='flex mx-auto m-1'>
            <h2 className='text-xl'>Follow Us!</h2>
          </div>
        <div className='flex mx-auto'>
          <a href="https://www.facebook.com" className="text-4xl mx-4">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com" className="text-4xl mx-4">
            <FaInstagram />
          </a>
          <a href="https://www.instagram.com" className="text-4xl mx-4">
            <FaTiktok />
          </a>
          </div>
        
        </div>
      );
}

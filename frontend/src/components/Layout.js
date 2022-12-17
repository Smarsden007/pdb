import React from 'react';
import { Navbar } from './Navbar';

 export const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      {children}
    </div>
  );
};


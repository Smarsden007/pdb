import React from 'react';
import Row from './../Media/2CircRow.png';
import Col from './../Media/2CircCol.png';

export const Circles = () => {
    
  return (
    <div>
    <div className="lg:hidden flex flex-row justify-center">
    <img src={Col} alt="Small" className="block w-28 md:w-48 md:mt-8 custom" />
  </div>
  <div className="hidden mb-8 lg:block">
    <img src={Row} alt="Large" className="block custom" />
  </div>
  </div>
  );
};


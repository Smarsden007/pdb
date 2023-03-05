import React from 'react';

const BalloonCarousel = ({ balloons, onSelect }) => {
  return (
    <div className="flex items-center space-x-4 overflow-x-scroll">
      {balloons.map((balloon, index) => (
        <img
          key={index}
          src={balloon}
          alt={`Balloon ${index}`}
          className="h-20 cursor-pointer hover:opacity-75"
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
};

export default BalloonCarousel;

import React from 'react';

export const Selectedballoons = ({ selectedBalloons }) => {
  return (
    <div>
      <h2>Selected Balloons:</h2>
      <ul>
        {selectedBalloons.map(balloon => (
          <li key={balloon.id}>
            <span>{balloon.color}</span>
            <span>{balloon.size}</span>
            <span>{balloon.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

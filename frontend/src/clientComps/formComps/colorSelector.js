import React, { useState } from "react";

const ColorSelector = ({ handleSelection }) => {
  const options = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    { value: "yellow", label: "Yellow" },
    { value: "purple", label: "Purple" },
  ];
  const [selectedColors, setSelectedColors] = useState([]);

  return (
    <div>
    <label>Select up to 3 colors:</label>
    {options.map((option) => (
      <div key={option.value}>
        <input
          type="checkbox"
          value={option.value}
          checked={selectedColors.includes(option.value)}
          onChange={(e) => {
            if (!e.target.checked) {
              setSelectedColors((prevColors) =>
                prevColors.filter((color) => color !== e.target.value)
              );
            } else {
              if (selectedColors.length < 3) {
                setSelectedColors([...selectedColors, e.target.value]);
              }
            }
          }}
          disabled={selectedColors.length === 3}
        />
        <label>{option.label}</label>
      </div>
    ))}
    <div>
      {selectedColors.map((color) => (
        <div key={color}>
          <p style={{ color: color }}>{color}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ColorSelector;

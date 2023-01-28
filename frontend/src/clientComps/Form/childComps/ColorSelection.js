import React, { useState } from "react";

const ColorSelectorq = ({ handleSelection }) => {
  const [selectedColors, setSelectedColors] = useState([]);

  const handleColorSelection = (e) => {
    if (selectedColors.length < 3) {
      setSelectedColors([...selectedColors, e.target.value]);
    }
  };

  const handleSubmit = () => {
    handleSelection(selectedColors);
  };

  return (
    <div>
      <label>Select Colors:</label>
      <div>
        <input
          type="checkbox"
          value="red"
          onChange={handleColorSelection}
        />
        <label>Red</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="blue"
          onChange={handleColorSelection}
        />
        <label>Blue</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="green"
          onChange={handleColorSelection}
        />
        <label>Green</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="yellow"
          onChange={handleColorSelection}
        />
        <label>Yellow</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="orange"
          onChange={handleColorSelection}
        />
        <label>Orange</label>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ColorSelector;

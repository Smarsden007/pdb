import React, { useState } from "react";

const ThemeDropDown = (props) => {
  const [selectedOption, setSelectedOption] = useState("toddler");
  const [price, setPrice] = useState(100);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    switch (event.target.value) {
      case "toddler":
        setPrice(100);
        break;
      case "bouncer2":
        setPrice(200);
        break;
      case "bouncer3":
        setPrice(300);
        break;
      default:
        setPrice(0);
    }
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleChange}>
        <option value="toddler">Bouncer 1</option>
        <option value="bouncer2">Bouncer 2</option>
        <option value="bouncer3">Bouncer 3</option>
      </select>
      <p>Selected Option: {selectedOption}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default ThemeDropDown;

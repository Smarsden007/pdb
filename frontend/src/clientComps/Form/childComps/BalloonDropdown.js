import React, { useState } from "react";
import balloons from "./Balloons.js";

const BalloonDropdown = ({ onColorsSelected }) => {
  const [balloon1, setBalloon1] = useState("");
  const [balloon2, setBalloon2] = useState("");
  const [balloon3, setBalloon3] = useState("");

  const handleSelect1 = (e) => {
    setBalloon1(e.target.value);
    onColorsSelected([e.target.value, balloon2, balloon3]);
  };

  const handleSelect2 = (e) => {
    setBalloon2(e.target.value);
    onColorsSelected([balloon1, e.target.value, balloon3]);
  };

  const handleSelect3 = (e) => {
    setBalloon3(e.target.value);
    onColorsSelected([balloon1, balloon2, e.target.value]);
  };

  return (
    <div>
      <div className="flex flex-row">
        <select value={balloon1} onChange={handleSelect1}>
          <option value="">Select a balloon</option>
          {balloons.map((balloon) => (
            <option key={balloon.name} value={balloon.name}>
              {balloon.name}
            </option>
          ))}
        </select>
        <img
          className="w-14 h-14"
          src={balloons.find((balloon) => balloon.name === balloon1)?.color}
          alt=""
        />
      </div>
      <div className="flex flex-row">
        <select value={balloon2} onChange={handleSelect2}>
          <option value="">Select a balloon</option>
          {balloons.map((balloon) => (
            <option key={balloon.name} value={balloon.name}>
              {balloon.name}
            </option>
          ))}
        </select>
        <img
          className="w-14 h-14"
          src={balloons.find((balloon) => balloon.name === balloon2)?.color}
          alt=""
        />
      </div>
      <div className="flex flex-row">
        <select value={balloon3} onChange={handleSelect3}>
          <option value="">Select a balloon</option>
          {balloons.map((balloon) => (
            <option key={balloon.name} value={balloon.name}>
              {balloon.name}
            </option>
          ))}
        </select>
        <img
          className="w-14 h-14"
          src={balloons.find((balloon) => balloon.name === balloon3)?.color}
          alt=""
        />
      </div>
    </div>
  );
};

export default BalloonDropdown;

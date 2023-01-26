import React, { useState, useEffect } from "react";
import { Checkbox, Grid } from "antd";

const colors = ["red", "green", "blue", "yellow", "purple"];

function ColorSelection() {
  const [selectedColors, setSelectedColors] = useState([]);

  const handleColorSelect = (color) => {
    if (selectedColors.length < 3) {
      setSelectedColors([...selectedColors, color]);
    } else {
      alert("You can only select 3 colors");
    }
  };

  return (
    <Grid className="color-selection" container>
      {colors.map((color) => (
        <Grid className="color-box" key={color} item xs={4}>
          <Checkbox
            className={`bg-${color}-500 text-white h-12 w-12 rounded-full`}
            onChange={() => handleColorSelect(color)}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default ColorSelection;

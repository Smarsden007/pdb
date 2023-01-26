import React, { useState } from "react";
import { Radio, Divider, Select } from "antd";
import { Typography, Button } from "antd";

const { Title } = Typography;

const { Option } = Select;
const prices = {
  "half-arch": 125,
  "full-arch": 175,
};
function ColorSelector(props) {
  const [selectedColors, setSelectedColors] = useState([0]);
  const [selectedArch, setSelectedArch] = useState("");

  const [price, setPrice] = useState("");

  


      const handleColorChange = (e) => {
        const newSelection = e.target.value;
        if (selectedColors.length < 3) {
          setSelectedColors([...selectedColors, newSelection]);
          props.handleSelection(selectedColors);
        }
    };
    

  const handleReset = () => {
    setSelectedColors([]);
    setSelectedArch("");
    setPrice("");
  };
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
  return (
    <div>
    <Radio.Group onChange={handleColorChange} value={selectedColors}>
      {colors.map((color, index) => (
        <Radio
        value={color}
        key={color}
        style={{ backgroundColor: color, padding: '14px', borderRadius:'100%'}}
        disabled={
          selectedColors.length >= 3 && !selectedColors.includes(color)
        }
      >
      </Radio>
      
      ))}
    </Radio.Group>
  <Button onClick={handleReset} style={{ marginTop: "1rem" }}>
    Reset
  </Button>
</div>

  );
}
export default ColorSelector;

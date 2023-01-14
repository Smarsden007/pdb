import React, { useState } from "react";
import { Radio, Divider, Select } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

const { Option } = Select;

function ColorSelector(props) {
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedArch, setSelectedArch] = useState("");

  const handleColorChange = (e) => {
    const newSelection = e.target.value;
    if (selectedColors.length < 3) {
      setSelectedColors([...selectedColors, newSelection]);
      props.handleSelection(selectedColors, selectedArch);
    }
  };

  const handleArchChange = (value) => {
    setSelectedArch(value);
    props.handleSelection(selectedColors, value);
  };

  const handleReset = () => {
    setSelectedColors([]);
  };
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
  return (
    <div>
      <Title level={3}>Would you like balloons?</Title>
      <Divider />
      <Select defaultValue="Select an option" onChange={handleArchChange}>
        <Option value="none">No thanks</Option>
        <Option value="half-arch">Half-arch</Option>
        <Option value="full-arch">Full-arch</Option>
      </Select>
      {selectedArch !== "none" && selectedArch !== "" ? (
        <Divider>Select 3 colors</Divider>
      ) : null}
      {selectedArch === "half-arch" ||
      (selectedArch === "full-arch" && selectedArch !== "none") ? (
        <Radio.Group onChange={handleColorChange} value={selectedColors}>
          {colors.map((color, index) => (
            <Radio
              value={color}
              key={color}
              className={`color-${color}`}
              disabled={
                selectedColors.length >= 3 && !selectedColors.includes(color)
              }
            >
              <div className="color-circle"></div>
            </Radio>
          ))}
        </Radio.Group>
      ) : null}
      {selectedArch !== "none" && selectedColors.length > 0 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
}
export default ColorSelector;

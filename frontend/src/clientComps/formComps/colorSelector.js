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
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedArch, setSelectedArch] = useState("");

  const [price, setPrice] = useState("");

  const handleArchChange = (value) => {
    setSelectedArch(value);
    if (props.selectedBouncer === "bouncer1") {
      if (value === "half-arch") {
        setPrice(prices["half-arch"]);
      } else if (value === "full-arch") {
        setPrice(prices["full-arch"]);
      }
    } else if (props.selectedBouncer === "bouncer2") {
      if (value === "half-arch") {
        setPrice(prices["half-arch"] + 50);
      } else if (value === "full-arch") {
        setPrice(prices["full-arch"] + 75);
      }
    } else if (props.selectedBouncer === "bouncer3") {
      if (value === "half-arch") {
        setPrice(prices["half-arch"] + 50);
      } else if (value === "full-arch") {
        setPrice(prices["full-arch"] + 75);
      }
    }
    props.handleSelection(selectedColors, value, price)
    };

  const halfArchPrice =
    props.selectedBouncer === "bouncer1"
      ? prices["half-arch"]
      : props.selectedBouncer === "bouncer2"
      ? prices["half-arch"] + 50
      : prices["half-arch"] + 75;
  const fullArchPrice =
    props.selectedBouncer === "bouncer1"
      ? prices["full-arch"]
      : props.selectedBouncer === "bouncer2"
      ? prices["full-arch"] + 50
      : prices["full-arch"] + 75;

  const handleColorChange = (e) => {
    const newSelection = e.target.value;
    if (selectedColors.length < 3) {
      setSelectedColors([...selectedColors, newSelection]);
      props.handleSelection(selectedColors, selectedArch, price)
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
    <Title style={{ marginTop: "1rem", marginBottom: "-1rem" }} level={3}>
    Balloons
    </Title>
    <Divider style={{ marginBottom: ".5rem" }} />
    <Select
    style={{ width: "10rem" }}
    defaultValue="Select an option"
    onChange={handleArchChange}
    >
    <Option value="none">No thanks</Option>
    <Option value="half-arch">Half-arch - ${halfArchPrice}</Option>
    <Option value="full-arch">Full-arch - ${fullArchPrice}</Option>
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
          {color}
        </Radio>
      ))}
    </Radio.Group>
  ) : null}

  <Button onClick={handleReset} style={{ marginTop: "1rem" }}>
    Reset
  </Button>
</div>

  );
}
export default ColorSelector;

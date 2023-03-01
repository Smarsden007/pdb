import React, { useState } from "react";
import Balloon from "./Balloon";
import { Divider } from "antd";

function BalloonList(props) {
  const { balloons, onSelectionChange } = props;
  const [selectedBalloons, setSelectedBalloons] = useState([]);

  const handleBalloonSelect = (color) => {
    const index = selectedBalloons.indexOf(color);
    if (index === -1) {
      // color not already selected, add it to the list
      const newSelectedBalloons = [...selectedBalloons, color];
      setSelectedBalloons(newSelectedBalloons);
      onSelectionChange(newSelectedBalloons);
    } else {
      // color already selected, remove it from the list
      const newSelectedBalloons = selectedBalloons.filter(
        (c) => c !== color
      );
      setSelectedBalloons(newSelectedBalloons);
      onSelectionChange(newSelectedBalloons);
    }
  };

  return (
    <div className="overflow-y-scroll max-h-48 w-48">
      {balloons.map((balloon) => (
        <Balloon
          key={balloon.color}
          color={balloon.color}
          name={balloon.name}
          isSelected={selectedBalloons.includes(balloon.color)}
          onSelect={handleBalloonSelect}
        />
      ))}
      <Divider/>
    </div>
  );
}

export default BalloonList;

import React, { useState } from "react";
import Balloon from "./Balloon";
import { Divider } from "antd";

function BalloonList(props) {
  const { balloons, onSelectionChange } = props;
  const [selectedBalloons, setSelectedBalloons] = useState([]);

  const handleBalloonSelect = (color) => {
    const selectedBalloon = balloons.find((balloon) => balloon.color === color);
    const index = selectedBalloons.indexOf(selectedBalloon);
    if (index === -1 && selectedBalloons.length < 3) {
      // balloon not already selected and less than 3 selected, add it to the list
      const newSelectedBalloons = [...selectedBalloons, selectedBalloon];
      setSelectedBalloons(newSelectedBalloons);
      onSelectionChange(newSelectedBalloons);
    } else if (index !== -1) {
      // balloon already selected, remove it from the list
      const newSelectedBalloons = selectedBalloons.filter(
        (balloon) => balloon !== selectedBalloon
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

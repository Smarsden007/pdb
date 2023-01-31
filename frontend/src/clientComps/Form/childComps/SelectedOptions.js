import { Divider,Typography } from "antd";
import React from "react";
const { Title } = Typography;

function SelectedOptionsList({
  selectedDuration,
  selectedBalloons,
  selectedVinyl,
  selectedGenerator,
  selectedGarland,
  selectedDelivery,
  selectedBackdrop,
  selectedDate,
}) {
  return (
    <div>
      <Title level={3}>Selected Options</Title>
      <ul>
        <Divider className="m-0 border-[#c0a58e]" />
        {selectedDuration.value !== "No Thank You" && (
          <li className="flex flex-row justify-between w-48">
            <p>{selectedDuration.value}</p>
            <p> ${selectedDuration.price}</p>
          </li>
        )}
        <Divider className="m-0 border-[#c0a58e]" />
        {selectedBalloons.value !== "No Thank You" && (
          <li className="flex flex-row justify-between w-48">
            <p>{selectedBalloons.value}</p>
            <p> ${selectedBalloons.price}</p>
          </li>
        )}
         <Divider className="m-0 border-[#c0a58e]" />
        {selectedBackdrop.value !== "No Thank You" && (
          <li className="flex flex-row justify-between w-48">
            <p>{selectedBackdrop.value}</p>
            <p> ${selectedBackdrop.price}</p>
          </li>
        )}
        <Divider className="m-0 border-[#c0a58e]" />
        {selectedVinyl.value !== "No Thank You" && (
          <li className="flex flex-row justify-between w-48">
            <p>{selectedVinyl.value}</p>
            <p> ${selectedVinyl.price}</p>
          </li>
        )}
        <Divider className="m-0 border-[#c0a58e]" />

        {selectedGarland.value !== "No Thank You" && (
          <li className="flex flex-row justify-between w-48">
            <p>{selectedGarland.value}</p>
            <p> ${selectedGarland.price}</p>
          </li>
        )}
        <Divider className="m-0 border-[#c0a58e]" />
        {selectedGenerator.value !== "No Thank You" && (
          <li className="flex flex-row justify-between w-48">
            <p>{selectedGenerator.value}</p>
            <p> ${selectedGenerator.price}</p>
          </li>
        )}

        <Divider className="m-0 border-[#c0a58e]" />
        {selectedDelivery.value !== "No Thank You" && (
          <li className="flex flex-row justify-between w-48">
            <p>{selectedDelivery.value}</p>
            <p> ${selectedDelivery.price}</p>
          </li>
        )}
        <Divider className="m-0 border-[#c0a58e]" />
        
      </ul>
    </div>
  );
}
export default SelectedOptionsList;

import { Divider } from "antd";
import React from "react";

function SelectedOptionsList({
  selectedOption1,
  selectedOption2,
  selectedOption3,
  selectedOption4,
}) {
  return (
    <div>
      <h3>Selected Options</h3>
      <ul>
        {selectedOption1.value !== "No Thank You" && (
          <li className="flex flex-row justify-between w-48">
            <p>{selectedOption1.value}</p>
            <p> ${selectedOption1.price}</p>
          </li>
        )}
        <Divider className="m-0" />
        {selectedOption2.value !== "No Thank You" && (
          <li className="flex flex-row justify-between w-48">
            <p>{selectedOption2.value}</p>
            <p> ${selectedOption2.price}</p>
          </li>
        )}
        <Divider className="m-0" />

        {selectedOption3.value !== "No Thank You" && (
          <li className="flex flex-row justify-between w-48">
            <p>{selectedOption3.value}</p>
            <p> ${selectedOption3.price}</p>
          </li>
        )}
        <Divider className="m-0" />

        {selectedOption4.value !== "No Thank You" && (
          <li className="flex flex-row justify-between w-48">
            <p>{selectedOption4.value}</p>
            <p> ${selectedOption4.price}</p>
          </li>
        )}
        <Divider className="m-0" />
      </ul>
    </div>
  );
}
export default SelectedOptionsList;

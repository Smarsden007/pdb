import React, { useState } from 'react';
import { Select } from 'antd';

const { Option } = Select;

const BalloonSelection = ({ handlePriceSelect }) => {
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [selectedOption, setSelectedOption] = useState("Select a duration");

  function handleBalloonSelection(event) {
    const price = event.target.value;
    const option = event.target.options[event.target.selectedIndex].text;
    setSelectedPrice(price);
    setSelectedOption(option);
    handlePriceSelect(price, option);
  }

  return (
    <>
      <select onChange={handleBalloonSelection}>
        <option value={0}>Select a duration</option>
        <option value={50}>1 day</option>
        <option value={100}>2 days</option>
        <option value={150}>3 days</option>
      </select>
    </>
  );
}
export default BalloonSelection;

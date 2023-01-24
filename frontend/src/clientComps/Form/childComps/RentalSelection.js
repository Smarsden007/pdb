import React, { useState } from "react";
import { Select } from "antd";

const { Option } = Select;

export const RentalSelection = ({ prices, selectedBouncer, handleOptionChange }) => {
const [selectedOption, setSelectedOption] = useState("default");

const options = Object.keys(prices[selectedBouncer]);

return (
    <div>
        <Select value={selectedOption} onChange={handleOptionChange}>
            <Option value="default" default disabled>
                Please Make a Selection
            </Option>
            {options.map((option) => (
                <Option value={option}>
                    {option} - ${prices[selectedBouncer][option]}
                </Option>
            ))}
        </Select>
    </div>
);
            }
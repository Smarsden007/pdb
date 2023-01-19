import React from "react";
import { Typography } from "antd";
import { RentalDetails } from "../clientComps/RentalDetails";
const { Title } = Typography;

export const Rentals = () => {
  return (
    <div>
    <div className="text-bolder">
      <h1 className="text-6xl p-4">Rentals</h1>
    </div>
    <div>
        <RentalDetails />
    </div>
    </div>
  );
};

import React from "react";

import { RentalCards } from "../clientComps/clientStyles/RentalCards";
import { RentalsHeader } from "../clientComps/clientStyles/RentalsHeader";

export const Rentals = () => {
  return (
    <div>
      <div className="flex flex-col text-center mt-10 w-full align-center justify-center items-center">
        <RentalsHeader />
      </div>
      <div>
        <RentalCards />
      </div>
    </div>
  );
};

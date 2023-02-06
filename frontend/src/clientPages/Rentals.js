import React from "react";

import { RentalCards } from "../clientComps/clientStyles/RentalCards";
import { RentalsHeader } from "../clientComps/clientStyles/RentalsHeader";
import { Helmet } from "react-helmet-async";

export const Rentals = () => {
  return (
    <div className="">
         <Helmet>
        <title>Bounce House Rentals</title>
        <meta
          name="description"
          content="All white luxury bouncers with a blank canvas!"
        />
        <link rel="canonical" href="/extras" />
      </Helmet>
      <div className="flex flex-col text-center p-24 w-full align-center justify-center items-center">
        <RentalsHeader />
      </div>
      <div>
        <RentalCards />
      </div>
    </div>
  );
};

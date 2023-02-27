import React from "react";
import { ExtrasCards } from "../clientComps/ExtrasCards";
import { ExtrasHeader } from "../clientComps/ExtrasHeader";
import { Helmet } from "react-helmet-async";
import { BalloonSelector } from "../clientComps/Form/childComps/BalloonSelector";
import BalloonList from "../clientComps/Balloon/BalloonList";
import shim from './../Media/Balloon PNG/Shimpink.png'

const balloons = [
  { name: "Cameo", color: shim },
  { name: "Babypink", color: shim },
  { name: "Shimpink", color: shim }, 
  { name: "Cameo", color: shim },
  { name: "Babypink", color: shim },
  { name: "Shimpink", color: shim }, { name: "Cameo", color: shim },
  { name: "Babypink", color: shim },
  { name: "Shimpink", color: shim },  
];

export const Extras = () => {
  const handleSelectionChange = (selectedBalloons) => {
    console.log("Selected balloons:", selectedBalloons);
  };
  return (
    <div>
      <Helmet>
        <title>Party Extras</title>
        <meta
          name="description"
          content="Balloons, Fringe Garland, Backdrops, Photography and Custom Vinyl"
        />
        <link rel="canonical" href="/extras" />
      </Helmet>
      <div className="flex flex-col text-center pt-20 w-full align-center justify-center items-center">
        <ExtrasHeader />
      </div>
      <div>
        <BalloonSelector />
        <ExtrasCards />
        <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Choose 3 Balloons</h1>
      <BalloonList balloons={balloons} onSelectionChange={handleSelectionChange} />
    </div>      </div>
    </div>
  );
};

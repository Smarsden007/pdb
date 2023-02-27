import React from "react";
import { ExtrasCards } from "../clientComps/ExtrasCards";
import { ExtrasHeader } from "../clientComps/ExtrasHeader";
import { Helmet } from "react-helmet-async";
import { BalloonSelector } from "../clientComps/Form/childComps/BalloonSelector";
export const Extras = () => {
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
      </div>
    </div>
  );
};

import React from "react";
import { PartnersHeader } from "../clientComps/PartnersHeader";
import { PartnerSquares } from "../clientComps/PartnerSquares";
import { Helmet } from "react-helmet-async";

export const Partners = () => {
  return (
    <div>
      <Helmet>
        <title>Party Partners</title>
        <meta
          name="description"
          content="We are all about keeping it local here."
        />
        <link rel="canonical" href="/partners" />
      </Helmet>
      <div className="flex flex-col text-center pt-20 w-full align-center justify-center items-center">
        <PartnersHeader />
      </div>
      <div>
        <PartnerSquares />
      </div>
    </div>
  );
};

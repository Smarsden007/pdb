import React from 'react'
import { ExtrasCards } from '../clientComps/ExtrasCards'
import { ExtrasHeader } from '../clientComps/ExtrasHeader'
import { Helmet } from "react-helmet-async";

export const Extras = () => {
  return (
    <div>
      <Helmet>
              <title>Party Extras</title>
              <meta
                name="description"
                content="Balloons, Fringe Garland, Backdrops, Photography and Custom Vinyl"
              />
            </Helmet>
        <div className="flex flex-col text-center pt-20 w-full align-center justify-center items-center">
        <ExtrasHeader/>
      </div>
      <div>
        <ExtrasCards />
        </div>
    </div>
  )
}

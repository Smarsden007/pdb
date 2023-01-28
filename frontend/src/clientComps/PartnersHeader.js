import React from 'react'
import starLeft from './../Media/StarLeft.png'
import starRight from './../Media/StarRight.png'

export const PartnersHeader = () => {
  return (
<div>
         <div className="flex flex-row">
          <img alt='stars' src={starLeft} className="w-14 h-14 mt-5" />
          <h1 className="text-6xl p-4 font-mono font-semibold text-black">PARTNERS</h1>
          <img alt='stars' src={starRight} className="w-14 h-14 mt-5" />

        </div>
    </div>  )
}

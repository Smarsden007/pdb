import React from 'react'
import { PartnersHeader } from '../clientComps/PartnersHeader'
import { PartnerSquares } from '../clientComps/PartnerSquares'

export const Partners = () => {
  return (
    <div>
           <div className="flex flex-col text-center mt-10 w-full align-center justify-center items-center">
        <PartnersHeader/>
      </div>
    <div>
        <PartnerSquares />

    </div>
    </div>
  )
}

import React from 'react'
import { ExtrasCards } from '../clientComps/ExtrasCards'
import { ExtrasHeader } from '../clientComps/ExtrasHeader'

export const Extras = () => {
  return (
    <div>
        <div className="flex flex-col text-center pt-20 w-full align-center justify-center items-center">
        <ExtrasHeader/>
      </div>
      <div>
        <ExtrasCards />
        </div>
    </div>
  )
}

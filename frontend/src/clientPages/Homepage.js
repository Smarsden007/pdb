import React from 'react'
import ripHero from './../Media/LeftHeroRip.png'
export const Homepage = () => {
  return (
    <div>
        <div class='grid grid-cols-6'>
            {/* imageholder left */}
           <div>
            <img src={ripHero} />
           </div>
        </div>
    </div>
  )
}

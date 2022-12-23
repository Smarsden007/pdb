import React from 'react'
import { Navbar } from '../components/Navbar'
import Registration from '../components/Registration'

export const Register = () => {
  return (
    <div class="grid grid-cols-10 grid-rows-2 overflow-hidden	">

    <div class="col-span-2 row-span-2">
      <Navbar />
    </div>
    <div class='col-span-8 row-span-2 overflow-hidden	' >
        <Registration />
         </div>
  </div>
  )
}

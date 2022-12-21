import React from 'react'
import { BookingsView } from '../components/BookingsView'
import { Navbar } from '../components/Navbar'

export const Bookings = () => {
  return (
    <div class="grid grid-cols-10 grid-rows-2 overflow-hidden	">

    <div class="col-span-2 row-span-2">
      <Navbar />
    </div>
    <div class='col-span-8 row-span-2 overflow-hidden	' >
      <BookingsView />
         </div>
  </div>
  )
}

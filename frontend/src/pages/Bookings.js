import React from 'react'
// import { BookingsTable } from '../components/BookingPagination'
import { Navbar } from '../components/Navbar'

export const Bookings = () => {
  return (
    <div class="grid grid-cols-10 grid-rows-2 overflow-hidden	">

    <div class="col-span-2 row-span-2">
      <Navbar />
    </div>
    <div class='col-span-8 row-span-2 overflow-hidden	' >
    <div class='w-12/12 mt-10'>
        <h3 class="text-6xl  font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 m-4 py-2">
          Bookings
        </h3>
        </div>
        {/* <BookingsTable /> */}
         </div>
  </div>
  )
}

import React from "react";
import { Navbar } from "../components/Navbar";
import { useState } from "react";
import { useQuery } from 'react-query';
import axios from 'axios';
import { DashView } from "../components/DashView";


export const Dashboard = ()=> {
  const [bookings, setBookings] = useState();
  

  const { data, error, isLoading } = useQuery(
    'bookings',
    async () => {
      const response = await axios.get('http://localhost:5000/api/bookings');
      // convert the data from an object to an array
      const bookingsArray = Object.values(response.data.bookings);
      setBookings(bookingsArray)
      return bookingsArray;
    }
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }


  return (
    <div class="grid grid-cols-10 grid-rows-2">

      <div class="col-span-2 row-span-2">
        <Navbar />
      </div>
      <div class='col-span-8'>
      {bookings && bookings.map(booking => (
  <tr key={booking.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th
      scope="row"
      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >{booking.fulll_name} </th>
    <td class="py-4 px-6">{booking.park}</td>
    <td class="py-4 px-6">{booking.piad}</td>
    <td class="py-4 px-6">$1999</td>
  </tr>      ))}      </div>
    </div>
  );
};



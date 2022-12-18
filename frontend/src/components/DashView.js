import React from "react";
import { useState,useEffect } from "react";
import { useQuery } from 'react-query';
import axios from 'axios';



// function countBouncer(bookings) {
//   let count = 0;
//   for (let i = 0; i < bookings.length; i++) {
//     if (bookings[i].bouncer === true) {
//       count++;
//     }
//   }
//   console.log(count)
//   return count;
// }

export const DashView = () => {
  const [bookings, setBookings] = useState();
  // const [bouncerCount, setBouncerCount] = useState(0);
  // useEffect(() => {
  //   setBouncerCount(countBouncer(bookings));
  // }, [bookings]);

  const { data, error, isLoading } = useQuery(
    'bookings',
    async () => {
      const response = await axios.get('http://localhost:5000/api/bookings');
      // convert the data from an object to an array
      const bookingsArray = Object.values(response.data.bookings);
      console.log(bookings)
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
    <div class="">
      <div className="grid grid-cols-4">
        <div class="col-span-4">
          <h1 class=" p-6 font-extrabold text-transparent text-5xl py-10 bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Welcome,User_From_DataBase
          </h1>
        </div>
      </div>
      <div class="grid  grid-cols-5 my-4">
        <a
          href="#"
          class="block w-40 h-40 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            CASTLE
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400 text-center text-4xl">
            42
          </p>
        </a>

        <a
          href="#"
          class="block w-40 h-40 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            CASTLW
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400 text-center text-4xl">
            42
          </p>
        </a>

        <a
          href="#"
          class="block w-40 h-40 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            CASTLW
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400 text-center text-4xl">
          {/* {bouncerCount} */}
          </p>
        </a>

        <a
          href="#"
          class="block w-40 h-40 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            CASTLW
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400 text-center text-4xl">
            42
          </p>
        </a>

        <a
          href="#"
          class="block w-40 h-40 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            CASTLW
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400 text-center text-4xl">
            42
          </p>
        </a>
      </div>
      <div class="grid grid-cols-5 my-16 h-72">
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg col-span-2 w-10/12 p-10">
          <h5 class=" p-1 font-extrabold text-transparent text-2xl py-2 bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            To-Do
          </h5>
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Task
                </th>
                <th scope="col" class="py-3 px-6">
                  Status
                </th>
                <th scope="col" class="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Clean Bouncer
                </th>
                <td class="py-4 px-6">Sliver</td>

                <td class="py-4 px-6">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="overflow-x-auto relative shadow-md sm:rounded-lg col-span-3 w-11/12 p-10">
          <h5 class=" p-1 font-extrabold text-transparent text-2xl py-2 bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Recent Bookings
          </h5>
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Name
                </th>
                <th scope="col" class="py-3 px-6">
                  Address
                </th>
                <th scope="col" class="py-3 px-6">
                  Phone#
                </th>
                <th scope="col" class="py-3 px-6">
                  Bouncer
                </th>
                <th scope="col" class="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
            {bookings && bookings.map(booking => (
              <tr key={booking.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                 {booking.fulll_name}
                </th>
                <td class="py-4 px-6">{booking.delivery_ad}</td>
                <td class="py-4 px-6">{booking.phone}</td>
                <td class="py-4 px-6">${booking.bouncer}</td>
                <td class="py-4 px-6">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>))} 
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { TodoModal } from "./TodoModal";
// import { useMutation } from "react-query";
import { Spinner } from "./Spinner";
import { Link } from "react-router-dom";
import { FourteenDayBooking, MTDincome, SevenDayBooking, YTDincome } from "./DashboardCards.js/YTDincome";
import { TaskView } from "./TasksView";

export const DashView = () => {
  const [bookings, setBookings] = useState();
  // const token = localStorage.getItem('token');
  // const payload = jwtDecode(token);
  // const [formData, setFormData] = useState({ task: '', dueDate: '' })

  // const [mutate, { status }] = useMutation(async (input) => {
  //   const response = await fetch('/api/endpoint', {
  //     method: 'POST',
  //     body: JSON.stringify(input),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   return response.json()
  // })
  // const [bouncerCount, setBouncerCount] = useState(0);
  // useEffect(() => {
  //   setBouncerCount(countBouncer(bookings));
  // }, [bookings]);

  const { data, error, isLoading } = useQuery("bookings", async () => {
    const response = await axios.get("http://localhost:5000/api/recent-bookings");
    // convert the data from an object to an array
    const bookingsArray = Object.values(response.data.bookings);
    console.log(bookings);
    setBookings(bookingsArray);
    return bookingsArray;
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }
  let bastilleCounter = 0;
  for (let i = 0; i < data?.length; i++) {
    if (data[i].bouncer === "Bastille") bastilleCounter++;
  }
  console.log(bastilleCounter);

  return (
    <div class="">
      <div className="grid grid-cols-4">
        <div class="col-span-4">
          <h1 class=" p-6 font-extrabold text-transparent text-5xl py-10 bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            {/* {payload.full_name}! */}
          </h1>
        </div>
      </div>
      <div class="grid  grid-cols-5 my-4">
       <YTDincome />
       <MTDincome />
       <SevenDayBooking />
        <FourteenDayBooking />
        

        <div
          class="hover:scale-110 block w-40 h-40 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            BASTILLE
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400 text-center text-4xl">
            {bastilleCounter}
          </p>
        </div>
      </div>
      <div class="grid grid-cols-5 mt-16 h-72">
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg col-span-2 w-10/12 p-10">
          <h5 class=" p-1 font-extrabold text-transparent text-2xl py-2 bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            To-Do
          </h5>
          <div class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <TaskView />
          </div>
          <TodoModal class="m-20" text="Add Task" />
        </div>

        <div class="overflow-x-auto relative shadow-md sm:rounded-lg col-span-3 w-11/12 p-10">
          <h5 class=" p-1 font-extrabold text-transparent text-2xl py-2 bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Recent Bookings
          </h5>
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
           <Link to='/bookings'>
            <tbody >
              {bookings &&
                bookings.map((booking) => (
                  <tr
                    key={booking.id}
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white "
                    >
                      {booking.fulll_name}
                    </th>
                    <td class="py-1 px-1">{booking.delivery_ad}</td>
                    <td class="py-1 px-1">{booking.phone}</td>
                    <td class="py-1 px-1">{booking.name}</td>
                    <td class="py-1 px-1">
                    </td>
                  </tr>
                ))}
            </tbody>
            </Link>
          </table>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Spinner } from "./Spinner";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { parseISO } from "date-fns";
export const RecentBookings = () => {
  const [bookings, setBookings] = useState();
  const { data, error, isLoading } = useQuery("bookings", async () => {
    const response = await axios.get(
      "http://localhost:5000/api/recent-bookings"
    );
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
  return (
    <div>
      <h5 class=" p-1 font-extrabold text-transparent text-2xl py-2 bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
        Recent Bookings
      </h5>
      <div class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <div>
            {bookings &&
              bookings.map((booking) => {
                const date = booking.rent_date;
                const dateObject = parseISO(date);
                const formattedDate = dateObject.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                });
                console.log(formattedDate); // Output: "03/01/2022"
                return (
                  <div
                    key={booking.id}
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 rounded-md grid grid-cols-6 gap-8 p-2 m-4 hover:scale-105 dark:hover:bg-gray-700"
                  >
                    <p class="py-1 px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white text-xs ">
                      {booking.fulll_name}
                    </p>
                    <p class="py-1 px-2 text-xs whitespace-nowrap">
                      {booking.delivery_ad}
                    </p>
                    <p class="py-1 px-2 text-xs whitespace-nowrap">
                      {booking.phone}
                    </p>
                    <p class="py-1 px-2 text-xs whitespace-nowrap">
                      {booking.name}
                    </p>
                    <p class="py-1 px-2 text-xs whitespace-nowrap">
                      {formattedDate}
                    </p>
                    <button class="py-1 px-2 text-xs whitespace-nowrap text-white">View</button>
                  </div>
                );
              })}
          </div>
      </div>
    </div>
  );
};

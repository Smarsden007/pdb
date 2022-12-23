import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export const YTDincome = () => {
  const [totalCost, setTotalCost] = useState(null);

  const getTotalCost = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/ytd-income");
      setTotalCost(res.data.total_cost);
    } catch (err) {
      console.error(err.response.data);
    }
  };
  useEffect(() => {
    getTotalCost();
  }, []);

  return (
    <div>
      <a
        href="#"
        class="hover:scale-110  block w-40 h-40 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          YTD Income
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 text-center text-4xl">
          {totalCost ? (
            <p class="text-lg">${totalCost}</p>
          ) : (
            <p class="text-lg">Loading...</p>
          )}
        </p>
      </a>
    </div>
  );
};

export const MTDincome = () => {
  const [totalCost, setTotalCost] = useState(null);

  const getTotalCostForCurrentMonth = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/mtd-income");
      setTotalCost(res.data.totalCost);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  useEffect(() => {
    getTotalCostForCurrentMonth();
  }, []);

  return (
    <div>
      <a
        href="#"
        class="hover:scale-110  block w-40 h-40 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          MTD Income
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 text-center text-4xl">
          {totalCost ? (
            <p class="text-lg">${totalCost}</p>
          ) : (
            <p class="text-lg">Loading...</p>
          )}{" "}
        </p>
      </a>
    </div>
  );
};

export const SevenDayBooking = () => {
    const [count, setCount] = useState(null);

  const countBookingsWithin7Days = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/weekly-bookings');
      setCount(res.data.count);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  useEffect(() => {
    countBookingsWithin7Days();
  }, []);
  return (
    <div>
      <a
        href="#"
        class="hover:scale-110 block w-40 h-40 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <p class="text-lg font-normal text-gray-700 dark:text-gray-400 text-center">
        {count !== null ? (
        <p>There are {count} bookings within the next 7 days</p>
      ) : (
        <p>Loading bookings within the next 7 days...</p>
      )}
        </p>
      </a>
    </div>
  );
};
export const FourteenDayBooking = () => {
    const [count, setCount] = useState(null);

  const countBookingsWithin14Days = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/biweekly-bookings');
      setCount(res.data.count);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  useEffect(() => {
    countBookingsWithin14Days();
  }, []);
  return (
    <div>
      <a
        href="#"
        class="hover:scale-110 block w-40 h-40 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <p class="text-lg font-normal text-gray-700 dark:text-gray-400 text-center">
        {count !== null ? (
        <p>There are {count} bookings within the next 14 days</p>
      ) : (
        <p>Loading bookings within the next 14 days...</p>
      )}
        </p>
      </a>
    </div>
  );
};

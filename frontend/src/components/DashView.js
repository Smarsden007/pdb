import React from "react";
import { TodoModal } from "./TodoModal";
import {
  FourteenDayBooking,
  MTDincome,
  SevenDayBooking,
  UnPaid,
  YTDincome,
} from "./DashboardCards.js/YTDincome";
import { TaskView } from "./TasksView";
import { RecentBookings } from "./RecentBookings";
import { DashboardWelcome } from "./DashboardWelcome";

export const DashView = () => {
  return (
    <div class="ml-2">
      <div className="grid grid-cols-4">
        <div class="col-span-4">
          <h1 class=" p-6 font-extrabold text-transparent text-5xl py-10 bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"><DashboardWelcome /></h1>
        </div>
      </div>
      <div class="grid  grid-cols-5 my-4">
        <YTDincome />
        <MTDincome />
        <SevenDayBooking />
        <FourteenDayBooking />
        <UnPaid />
      </div>
      <div class="grid grid-cols-5 mt-16 h-36 w-12/12">
        <div class=" relative shadow-md  drop-shadow-xl sm:rounded-lg col-span-2 h-72 w-10/12 p-10">
          <div class="p-1 -mt-4">
            <h5 class="fixed p-1 font-extrabold text-transparent text-2xl py-2 bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              To-Do
            </h5>
            <div class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <TaskView />
            </div>
            <TodoModal text="Add Task" />
          </div>
        </div>
        <div class="overflow-y-auto relative  drop-shadow-xl shadow-md sm:rounded-lg col-span-3  w-11/12 p-10 -mt-4">
          <RecentBookings />
        </div>
      </div>
    </div>
  );
};

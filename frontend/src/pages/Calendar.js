import React from "react";
import { Navbar } from "../components/Navbar";

import { CalendarView } from "../components/CalenderView";


export const Calendar = ()=> {
  
  return (
    <div class="grid grid-cols-10 grid-rows-2 overflow-hidden">

      <div class="col-span-2 row-span-2 overflow-hidden">
        <Navbar />
      </div>
      <div class='col-span-8 row-span-2	' >
        <div class="overflow-hidden">
        <CalendarView />
        </div>
           </div>
    </div>
  );
};



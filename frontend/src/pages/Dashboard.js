import React from "react";
import { Navbar } from "../components/Navbar";

import { DashView } from "../components/DashView";


export const Dashboard = ()=> {
  
  return (
    <div class="grid grid-cols-10 grid-rows-2">

      <div class="col-span-2 row-span-2">
        <Navbar />
      </div>
      <div class='col-span-8 row-span-2'>
        <DashView />
           </div>
    </div>
  );
};



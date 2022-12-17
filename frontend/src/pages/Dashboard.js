import React from "react";
import { Navbar } from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from 'axios';



export const Dashboard = ()=> {





  const [bookings, setBookings] = useState([]);

  const apiUrl = 'http://localhost:5000/api/bookings';

const getAllBook = async () => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        status: 'confirmed'
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

useEffect(() => {
  getAllBook().then(response => {
    setBookings(response.data);
  });
}, []);
  

  // counts all Db entries
  const countEntries = bookings => {
    return bookings.length;
  };



  //simplify tailwind styles below- backloged item
const tdStyle = "py-4 px-6"


  return (
    <div class="grid grid-cols-6 ">
      <div className="col-span-1 row-span-2">
        <Navbar />
      </div>
      <div className="col-span-5">
        <div>
        
          <h1 class="ml-20 p-6 font-extrabold text-transparent text-5xl py-10 bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Welcome,User_From_DataBase
          </h1>
          
        </div>
        <div class="grid grid-cols-4">
          <div>
            <div class="flex justify-center">
              <div class="w-40 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
                  YTD
                </h5>
                <p class="text-gray-700 text-base mb-4">10</p>
              </div>
            </div>
          </div>
          <div>
            <div class="flex justify-center">
              <div class="w-40 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
                  MTD
                </h5>
                <p class="text-gray-700 text-base mb-4">10</p>
              </div>
            </div>
          </div>
          <div>
            <div class="flex justify-center">
              <div class="w-40 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
                  Toddler
                </h5>
                <p class="text-gray-700 text-base mb-4">10</p>
              </div>
            </div>
          </div>
          <div>
            <div class="flex justify-center">
              <div class=" w-40 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
                  Castle
                </h5>
                <p class="text-gray-700 text-base mb-4">10</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div class="flex justify-center my-14">
                <div class="block p-5 rounded-lg shadow-lg bg-white">
                  <div class="">
                    <h3 class=" p-6 font-extrabold text-transparent text-5xl py-10 bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                      Recent Bookings
                    </h3>
                    <div class="block p-5 rounded-lg shadow-lg bg-white overflow-y-auto h-32">
                    
                    <table class="text-xs text-left text-gray-500 dark:text-gray-400 rounded">
                      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-lg">
                        <tr>
                          <th scope="col" class="py-3 px-6">
                            Product name
                          </th>
                          <th scope="col" class="py-3 px-6">
                            Color
                          </th>
                          <th scope="col" class="py-3 px-6">
                            Category
                          </th>
                          <th scope="col" class="py-3 px-6">
                            Price
                          </th>
                        </tr>
                      </thead>
            
                      <tbody>
                     

                      
                      {bookings && bookings.map(booking => (
                        <tr key={booking.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >{booking.fulll_name} </th>
                          <td class="py-4 px-6">{booking.park}</td>
                          <td class="py-4 px-6">{booking.piad}</td>
                          <td class="py-4 px-6">$1999</td>
                        </tr>      ))}

                      </tbody>
                    </table>
                    </div>
                  </div>
                  <button class='m-2 border p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-white'>View All</button>

                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

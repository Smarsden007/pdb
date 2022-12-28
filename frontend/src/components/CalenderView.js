// import React, { useState, useEffect } from "react";
// import styled from "styled-components";

// const StyledDiv = styled.div`
//   height: 100px;
//   width: 100px;
//   background-color: ${(props) => (props.isRented ? "red" : "#4a5568")};
//   border-radius: 0.25rem;
//   border: 1px solid purple;
//   margin: .5rem;
// `;
// export const CalendarView = () => {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
//   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
//   const [rentalDates, setRentalDates] = useState([]);

//   const month = months[currentMonth];
//   const year = currentYear;

//   const previousMonth = () => {
//     // Update the current month and year to the previous month
//     if (currentMonth === 0) {
//       setCurrentMonth(11);
//       setCurrentYear(currentYear - 1);
//     } else {
//       setCurrentMonth(currentMonth - 1);
//     }
//   };

//   const nextMonth = () => {
//     // Update the current month and year to the next month
//     if (currentMonth === 11) {
//       setCurrentMonth(0);
//       setCurrentYear(currentYear + 1);
//     } else {
//       setCurrentMonth(currentMonth + 1);
//     }
//   };

//   // Use an effect hook to fetch the rental dates from the database when the component mounts
//   // or when the current month or year changes
//   useEffect(() => {
//     async function fetchRentalDates() {
//       const response = await fetch(
//         `http://localhost:5000/api/rental_dates?month=${currentMonth}&year=${currentYear}`
//       );
//       const rentalDates = await response.json();
//       console.log("tessss", rentalDates);
//       const rentalDatesObjects = rentalDates.map(
//         (rentalDate) => new Date(rentalDate.rental_date)
//       );
//       setRentalDates(rentalDatesObjects);
//       console.log(rentalDates);
//     }

//     fetchRentalDates();
//   }, [currentMonth, currentYear]);

//   // Get the number of days in the current month
//   const daysInMonth = new Date(year, currentMonth + 1, 0).getDate();

//   // Generate an array of days for the current month
//   const days = [...Array(daysInMonth).keys()].map((i) => i + 1);

//   // Split the days into weeks (each week is an array of 7 days)
//   const weeks = [];
//   while (days.length > 0) {
//     weeks.push(days.splice(0, 7));
//   }

//   return (
//     <div class="mb-10 mt-8 ml-44">
//       <div class=' grid grid-cols-3 w-3/5 ml-16 justify-center	'>
//         <button class="outline rounded bg-gradient-to-r from-purple-500 to-pink-500 p-2 ml-3 mb-3 text-xs text-white  hover:text-black m-5" onClick={previousMonth}>Previous</button>
//         <span class='font-extrabold	 p-2 mb-3 m-5 justify-center	'>
//           {month} {year}
//         </span>
//         <button class="outline rounded bg-gradient-to-r from-purple-500 to-pink-500 p-2 ml-3 mb-3 text-xs text-white hover:text-black m-5" onClick={nextMonth}>Next</button>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>Sun</th>
//             <th>Mon</th>
//             <th>Tue</th>
//             <th>Wed</th>
//             <th>Thu</th>
//             <th>Fri</th>
//             <th>Sat</th>
//           </tr>
//         </thead>
//         <tbody >
//           {weeks.map((week, index) => (
//             <tr key={index}>
//               {week.map((day, index) => {
//             const isRented = rentalDates.some((rentalDate) => {
//               const date = new Date(Date.parse(rentalDate.rental_date));
//               return (
//                 date.getMonth() === currentMonth &&
//                 date.getFullYear() === currentYear &&
//                 date.getDate() === day
//               );
//             });
            
            
//             return (
//               <td class='hover:scale-110 m-8' key={day}>
//               <StyledDiv  isRented={isRented}><p class='p-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 h-8'>{day}</p></StyledDiv></td>
//             );
            
//               })}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

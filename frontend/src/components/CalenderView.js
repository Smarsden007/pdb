import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";

const StyledCalendar = styled(Calendar)`
  
  .react-calendar__tile {
    width: 6rem;
    height: 10rem;
    text-align: left;
    border: 1px solid #a0a096;
    border-radius: .25rem;
    padding: .25rem;
    margin: .45rem;
  }
  .react-calendar__navigation__arrow {
    font-size: 1.5rem;
    color: pink;
    padding: 2rem;
  }
  .react-calendar__day-number {
    color: red;
    font-weight: bold;
    text-align: left;
  }
  .data-tile {
    background-color: red;
  }
 
  /* .react-calendar__tile--active {
  background: #006edc;
  color: white;
} */

.react-calendar__month-view__weekdays__weekday {
    font-size: 16px;
    color: rgb(15, 70, 15);
}
.react-calendar__month-view__weekNumbers {
  font-weight: bold;

}
.react-calendar--selectRange .react-calendar__tile--hover {
  background-color: #e6e6e6;
}
`;


export const CalendarView = () => {
  const [bookings, setBookings] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // Fetch the bookings data from the back-end server
    fetch("http://localhost:5000/api/bookings")
      .then((response) => response.json())
      .then(({ bookings }) => {
        console.log(bookings);
        setBookings(bookings);
        console.log(bookings, "aslodjalosdjhdsh");
      });
  }, []);

  const handleChange = (date) => {
    setDate(date);
  };
 
  
  return (
    <div>
    <div >
    <StyledCalendar
      onChange={handleChange}
      value={date}
      tileContent={({ date, view }) => {
        const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, "");
        const bookingsOnDate = bookings.filter(
          (booking) =>
            booking.rent_date.slice(0, 10).replace(/-/g, "") === formattedDate
        );
      
        console.log(bookingsOnDate);
        return bookingsOnDate.length > 0 ? (
            <ul className="text-left text-xs">
              {bookingsOnDate.map((booking) => {
               
                return (
                  <li key={booking.id}>
                    {booking.fulll_name} - Paid: {booking.paid ? "Yes" : "No"}  Bouncer: {booking.bouncer}
                  </li>
                );
              })}
            </ul>
          ) : null;
          
      }
    }      
    />
    </div>
    </div>
  );
  
};

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";

const StyledCalendar = styled(Calendar)`
  .react-calendar {
    width: 350px;
    max-width: 60%;
    max-height: 80vh;
    background: white;
    border: 1px solid #a0a096;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
    margin: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-calendar--doubleView {
    width: 80px;
  }
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: 1.5rem;
  }
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none; 
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    display: flex;
  justify-content: center;
  height: 34px;
  margin-bottom: 0rem;
  background-color: white;
  }
  .react-calendar__navigation button {
    min-width: 154px;
    min-height: 40px;
    background: linear-gradient(to right, #ff0000, #0000ff);
    margin: .5rem;
    border-radius: 0.5rem;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #006edc;
    border-radius: 0.5rem;
  }
  .react-calendar__navigation button[disabled] {
    background-color: #f0f0f0;
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: thin;
    font-size: 1.25em;
    padding: 1rem;
    margin-top: 2rem;
    margin-left: 0rem;
    text-decoration: underline;
  }
  .react-calendar__month-view__weekdays__weekday {
    text-decoration: none;
  }
  .react-calendar__month-view__weekNumbers {
    font-weight: bold;
    padding: 0.5rem;
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    padding: calc(1.75em / 1.75) calc(1.5em / 1.75);
  }
  .react-calendar__month-view__days__day--weekend {
    color: #d10000;
    padding: 0.5rem;
  }
  .react-calendar__month-view__days {
   padding: 0.5rem;
    color: white;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #a9d4ff;
    padding: 0.5rem;
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }
  .react-calendar__tile {
    display: flex;
    align-items: flex-start;
    max-width: 100%;
    text-align: left;
    background: #0A2239;
    border-radius: 0.75rem;
    width: 1rem !important;
    border: white;
    border-style: solid;
    border-width: 0.5rem;
    height: 7rem;
    padding: 0.5rem;
  }
  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #e6e6e6;
  }
  .react-calendar__tile--now {
    background: #ffff76;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #ffffa9;
  }
  .react-calendar__tile--hasActive {
    background: #76baff;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #a9d4ff;
  }
  .react-calendar__tile--active {
    background: #006edc;
    color: white;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #1087ff;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }
`;

export const CalendarView = () => {
  const [bookings, setBookings] = useState([]);
  const [date, setDate] = useState(new Date());
  const [currentBookingId, setCurrentBookingId] = useState(null);
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
    <div style={{ marginLeft: "8rem", marginTop: "3rem" }}>
      <div style={{ width: "60vw", height: "90vh", overflowY: "scroll" }}>
        <div style={{ width: "60vw", overflowY: "scroll" }}>
          <StyledCalendar
            onChange={handleChange}
            value={date}
            tileContent={({ date, view }) => {
              const formattedDate = date
                .toISOString()
                .slice(0, 10)
                .replace(/-/g, "");
              const bookingsOnDate = bookings.filter(
                (booking) =>
                  booking.rent_date.slice(0, 10).replace(/-/g, "") ===
                  formattedDate
              );
              console.log(bookingsOnDate);
              return bookingsOnDate.length > 0 ? (
                <div>
                  <div className=" text-xs">
                    {bookingsOnDate.map((booking) => {
                      return (
                        <div key={booking.id}>
                          <button
                            data-popover-target="popover-default"
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xs px-2 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onMouseEnter={() => setCurrentBookingId(booking.id)}
                            onMouseLeave={() => setCurrentBookingId(null)}
                          >
                            {booking.fulll_name}/{booking.bouncer}
                          </button>
                          {currentBookingId === booking.id && (
                            <div>
                              <div
                                data-popover
                                id="popover-default"
                                role="tooltip"
                                class="absolute z-50 top-50 left-50 bottom-50 py-2 px-4 bg-white text-xs rounded-md shadow-md dark:bg-gray-800 dark:text-gray-100 "
                              >
                                <p>
                                  Rental Time: {booking.rental_time} <br />
                                  Balloons: {booking.balloons
                                    ? "Yes"
                                    : "No"}{" "}
                                  <br />
                                  Generator: {booking.generator
                                    ? "Yes"
                                    : "No"}{" "}
                                  <br />
                                  Phone: {booking.phone} <br />
                                  Internal Notes: {booking.int_notes}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : null;
            }}
          />
        </div>
      </div>
    </div>
  );
};

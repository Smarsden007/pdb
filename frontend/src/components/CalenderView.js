import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";

const StyledCalendar = styled(Calendar)`
  .react-calendar {
    width: 350px;
    max-width: 80%;
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
    background: #0a2239;
    margin: 0.5rem;
    border-radius: 0.5rem;
    color: white;
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
    flex-direction: column;
    align-items: flex-start;
    max-width: 100%;
    text-align: left;
    background: #0a2239;
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
    <div style={{ marginLeft: "2rem", marginTop: "1rem" }}>
      <div style={{ width: "80vw", height: "90vh", overflowY: "scroll" }}>
        <div style={{ width: "70vw", overflowY: "scroll" }}>
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
                      const fulll_name = booking.fulll_name;
                      const firstWord = fulll_name.split(" ")[0];
                      return (
                        <div class="flex items-center w-40" key={booking.id}>
                          <button
                            data-popover-target="popover-default"
                            type="button"
                            className="text-white  focus:outline-nonerounded-lg text-xs text-left  whitespace-nowrap inline-flex"
                            onMouseEnter={() => setCurrentBookingId(booking.id)}
                            onMouseLeave={() => setCurrentBookingId(null)}
                          >
                            <div class="inline-flex">
                              {firstWord}/
                              {booking.bouncer === "bouncer1"
                                ? "🏰"
                                : booking.bouncer === "bouncer2"
                                ? "🏯"
                                : "👶"}
                              {booking.paid ? (
                                <svg
                                  style={{ fill: "green" }}
                                  class="w-4 h-4"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              ) : (
                                <svg
                                  style={{ fill: "red" }}
                                  class="w-4 h-4 "
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              )}
                              {booking.delivery_fee ? (
                                <svg
                                  style={{ fill: "pink" }}
                                  class="w-4 h-4 "
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
                                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"></path>
                                </svg>
                              ) : null}
                            </div>
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

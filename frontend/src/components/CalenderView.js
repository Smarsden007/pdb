import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";

const StyledCalendar = styled(Calendar)`
  .react-calendar__month-view__days {
    overflow-y: scroll;
    height: 70vh;
    margin-bottom: 5rem,

  }

  .react-calendar__tile {
    width: 2.5rem;
    height: 8.5rem;
    text-align: left;
    border: 1px solid #a0a096;
    border-radius: 0.25rem;
    padding: 0.25rem;
    margin: 0.45rem;
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
    top: 0;
    left: 0;
    position: absolute;
  }
  .data-tile {
    background-color: red;
  }

  /* .react-calendar__tile--active {
  background: #006edc;
  color: white;
} */
  .popover-default[data-popover]:hover {
    opacity: 1;
  }
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
    <div style={{ overflowY: "scroll" }}>
      <div style={{ overflowY: "scroll" }}>
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
                <div className="text-left text-xs">
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
                          {booking.fulll_name}/
                          {booking.bouncer}
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
                              Balloons: {booking.balloons ? "Yes" : "No"} <br />
                              Generator: {booking.generator ? "Yes" : "No"}{" "}
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
  );
};

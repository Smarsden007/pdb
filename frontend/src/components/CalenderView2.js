import React, { useState, useEffect } from "react";
import { Calendar, Popover } from "antd";

export const CalendarView2 = () => {
  const [bookings, setBookings] = useState([]);
  const [date, setDate] = useState(new Date());
  const [currentBookingId, setCurrentBookingId] = useState(null);

  useEffect(() => {
    // Fetch the bookings data from the back-end server
    fetch("http://localhost:5000/api/bookings")
      .then((response) => response.json())
      .then(({ bookings }) => {
        setBookings(bookings);
      });
  }, []);

  const handleChange = (date) => {
    setDate(date);
  };

  const onPanelChange = (value) => {
    setDate(value);
  };

  return (
<Calendar
  value={date}
  onChange={handleChange}
  onPanelChange={onPanelChange}
  dateCellRender={(value) => {
    const formattedDate = value
      .toISOString()
      .slice(0, 10)
      .replace(/-/g, "");
    const bookingsOnDate = bookings.filter(
      (booking) =>
        booking.rent_date.slice(0, 10).replace(/-/g, "") === formattedDate
    );

    if (bookingsOnDate.length > 0) {
      return bookingsOnDate.map((booking) => {
        return (
          <Popover
            key={booking.id}
            content={
              <div>
                Rental Time: {booking.rental_time} <br />
                Balloons: {booking.balloons ? "Yes" : "No"} <br />
                Generator: {booking.generator ? "Yes" : "No"} <br />
                Phone: {booking.phone} <br />
                Internal Notes: {booking.int_notes}
              </div>
            }
            trigger="hover"
          >
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xs px-2 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {booking.fulll_name}
              <br />
              {booking.bouncer}
            </button>
          </Popover>
        );
      });
    }
  }}
/>
  )
}
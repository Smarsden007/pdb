import React, { useState } from "react";
import axios from "axios";

export const EditBookings = (props) => {
  const [booking, setBooking] = useState(props.booking);

  if (!booking) {
    // added this line
    return null;
  }

  const handleChange = (event) => {
    setBooking({
      ...booking,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put("pdb-backend-production.up.railway.app/api/bookings/:id", booking)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input
          type="text"
          name="full_name"
          value={booking.full_name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={booking.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="text"
          name="phone"
          value={booking.phone}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Delivery Address:
        <input
          type="text"
          name="delivery_ad"
          value={booking.delivery_ad}
          onChange={handleChange}
        />
      </label>
      <br />
      {/* Add other input fields for the rest of the booking properties */}
      <button type="submit">Save Changes</button>
    </form>
  );
};

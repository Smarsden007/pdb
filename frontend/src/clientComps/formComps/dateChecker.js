import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./dateChecker.css";
import {  Divider, Select, Typography } from "antd";
const { Title } = Typography;

function DateChecker({ handleSelect1, selectedDate1 }) {
  const [bookedDates, setBookedDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedBouncer, setSelectedBouncer] = useState("bouncer1");

  useEffect(() => {
    async function fetchBookedDates() {
      const response = await fetch(
        `http://localhost:5000/api/check-availability/${selectedBouncer}`
      );
      const bookedDates = await response.json();
      const dates = bookedDates.map((date) => date.rent_date.slice(0, 10));
      setBookedDates(dates);
    }
    fetchBookedDates();
  }, [selectedBouncer]);

  const handleChange = (date) => {
    setSelectedDate(date);
  };

  const handleSelect = (date) => {
    if (bookedDates.includes(new Date(date).toISOString().slice(0, 10))) {
        alert("This date is already booked, please select another date.");
        setSelectedDate(new Date());
    } else {
        setSelectedDate(date);
        handleSelect1(date);
    }
};


  const handleBouncerChange = (value) => {
    setSelectedBouncer(value);
  };

  return (
    <div class="flex flex-col">
      <div class="flex flex-start	mt-3 ml-3">
        {" "}
        <Title level={3}>Select Your Bouncer</Title>
      </div>
      <Divider />
      <div class="flex flex-start	m-3">
        <Select
          style={{ width: "10rem" }}
          value={selectedBouncer} onChange={handleBouncerChange}>
          <option value="bouncer1">Toddler</option>
          <option value="bouncer2">Classic Castle</option>
          <option value="bouncer3">Bastille</option>
        </Select>
      </div>
      <div class="flex flex-start	">
        <Calendar
          className="custom-cal"
          onChange={handleChange}
          onClickDay={handleSelect}
          value={selectedDate}
          tileDisabled={({ date }) =>
            bookedDates.includes(new Date(date).toISOString().slice(0, 10))
          }
        />
      </div>
    </div>
  );
}

export default DateChecker;

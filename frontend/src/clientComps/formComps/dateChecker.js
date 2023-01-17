import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./dateChecker.css";
import { Divider, Input, Select, Typography } from "antd";
const { Title } = Typography;

function DateChecker({ handleSelect1, selectedDate1, handleOptionSelect }) {
  const [bookedDates, setBookedDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedBouncer, setSelectedBouncer] = useState("default");
  const [hasSelection, setHasSelection] = useState(false);
  const [isCalendarDisabled, setIsCalendarDisabled] = useState(true);
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
    if (isCalendarDisabled) return;

    if (bookedDates.includes(new Date(date).toISOString().slice(0, 10))) {
      alert("This date is already booked, please select another date.");
      setSelectedDate(new Date());
    } else {
      setSelectedDate(date);
      handleSelect1(date);
      handleOptionSelect(selectedBouncer);
      setHasSelection(true);
    }
  };

  const handleBouncerChange = (value) => {
    if (value !== "") {
      setSelectedBouncer(value);
      setIsCalendarDisabled(false);
    }
  };

  return (
    <div class="flex flex-col">
      <>
        <div class="flex flex-start	mt-3 ml-3">
          <Title style={{ marginBottom: "-1rem" }} level={3}>
            Select Your Bouncer
          </Title>
        </div>
        <Divider style={{ marginBottom: "-.25rem" }} />
        <div class="flex flex-start	m-3">
          <Select
            style={{ width: "10rem" }}
            value={selectedBouncer}
            onChange={handleBouncerChange}
          >
            <option value="default" default disabled>
              Please Make a Selection
            </option>
            <option value="bouncer1">Toddler</option>
            <option value="bouncer2">Classic Castle</option>
            <option value="bouncer3">Bastille</option>
          </Select>
        </div>
        <div class="flex flex-start	">
          {!isCalendarDisabled ? (
            <Calendar
              className="custom-cal"
              onChange={handleChange}
              onClickDay={(date) => {
                handleSelect(date);
              }}
              value={selectedDate}
              tileDisabled={({ date }) =>
                bookedDates.includes(new Date(date).toISOString().slice(0, 10))
              }
            />
          ) : null}
        </div>
        {!isCalendarDisabled ? (
          <div class="flex flex-row">
            <p style={{  margin: "1rem" }}>Selected Date:</p>
            <Input
              style={{  margin: "1rem", textAlign: "center" }}
              type="text"
              value={selectedDate.toLocaleDateString()}
              readOnly
            />
          </div>
        ) : null}
      </>
    </div>
  );
}

export default DateChecker;

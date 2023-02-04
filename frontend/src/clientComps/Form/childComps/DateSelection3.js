import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import "./DateSelection.css";
import { Divider, Typography } from "antd";
const { Title } = Typography;

function DateSelection2({ handleSelect1, selectedDate1, handleOptionSelect }) {
  const [bookedDates, setBookedDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedBouncer, setSelectedBouncer] = useState("bouncer3");

  const [isCalendarDisabled, setIsCalendarDisabled] = useState(true);
  useEffect(() => {
    async function fetchBookedDates() {
      const response = await fetch(
        `https://pdb-backend-production.up.railway.app/api/check-availability/bouncer3`
      );
      const bookedDates = await response.json();
      const dates = bookedDates.map((date) => date.selected_date.slice(0, 10));
      setBookedDates(dates);
    }
    fetchBookedDates();
  }, [selectedBouncer]);

  const handleChange = (date) => {
    setSelectedDate(date);
  };

  console.log(isCalendarDisabled)

  const handleBouncerChange = (value) => {
    if (value !== "") {
      setSelectedBouncer(value);
      setIsCalendarDisabled(false);
      handleOptionSelect(selectedBouncer); // call the callback function with the selected bouncer
    }
  };

 
  return (
    <div class="flex flex-col">
      <>
        <div class="flex flex-start	mt-3 ml-3">
          <Title style={{ marginBottom: "-1rem" }} level={3}>
            The Bastille
          </Title>
        </div>
        <Divider style={{ marginBottom: "-.25rem" }} />
        <div className="ml-3">
          <p className="text-bold text-left">Requires 14' X 14' clearance</p>
          <p className="text-bold text-left">
            includes: shoe rack, 50-foot extesion cord, entrance turf
          </p>
          <p className="text-bold text-left font-mono font-bold">
            *FOR ALL AGES*
          </p>
        </div>
        <div class="flex flex-start	mt-3 ml-3">
          <Title style={{ marginBottom: "-1rem" }} level={3}>
            Select a Date{" "}
          </Title>
        </div>
        <Divider style={{ marginBottom: "-.25rem" }} />
        <div class="flex flex-start	m-3">
          <input
            value="bouncer3"
            type="hidden"
            onChange={handleBouncerChange}
          />
        </div>
  <div className="flex flex-row justify-start ml-3">
            <div className="w-6 h-6 mr-2 bg-[#c0a58e]"/> = <p>Booked</p>
          </div>
        <div class="flex flex-col	align-center justify-center items-center">
          <Calendar
            className="custom-cal w-full"
            onChange={handleChange}
            onClickDay={(date) => {
              handleSelect1(date);
            }}
            value={selectedDate}
            tileDisabled={({ date }) => {
              return bookedDates.includes(
                date.toISOString().slice(0, 10)
              );
              
            }}
            
            
          
          />
          
        </div>
      
      </>
    </div>
  );
}

export default DateSelection2;

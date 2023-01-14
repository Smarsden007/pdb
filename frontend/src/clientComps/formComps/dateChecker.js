import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './dateChecker.css'
function CheckoutForm() {
  const [bookedDates, setBookedDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedBouncer, setSelectedBouncer] = useState('bouncer1');
  
  useEffect(() => {
    async function fetchBookedDates() {
      const response = await fetch(`http://localhost:5000/api/check-availability/${selectedBouncer}`);
      const bookedDates = await response.json();
      const dates = bookedDates.map((date)=> date.rent_date.slice(0,10));
      setBookedDates(dates);
      
    }
    fetchBookedDates();
  }, [selectedBouncer]);

  const handleChange = date => {
    setSelectedDate(date);
  };

  const handleSelect = date => {
    if (bookedDates.includes(new Date(date).toISOString().slice(0, 10)))
    {
      alert('This date is already booked, please select another date.');
      setSelectedDate(new Date());
    } else {
      setSelectedDate(date);
    }
  };


  const handleBouncerChange = event => {
    setSelectedBouncer(event.target.value);
  };

  return (
    <div >
      <select value={selectedBouncer} onChange={handleBouncerChange}>
        <option value="bouncer1">Toddler</option>
        <option value="bouncer2">Classic Castle</option>
        <option value="bouncer3">Bastille</option>
      </select>
      <Calendar
        className='custom-cal'
        onChange={handleChange}
        onClickDay={handleSelect}
        value={selectedDate}
        tileDisabled={({ date }) => bookedDates.includes(new Date(date).toISOString().slice(0, 10))}

    
        />
    </div>
  );
}

export default CheckoutForm;

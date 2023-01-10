import { useState, useEffect } from 'react';
import DatePicker from 'react-date-picker';

export const DateChecker = () => {
  const [bookedDates, setBookedDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    // Fetch the booked dates from the API
    async function fetchBookedDates() {
      const response = await fetch('http://localhost:5000/api/bookings');
      const bookedDates = await response.json();
      setBookedDates(bookedDates);
    }

    fetchBookedDates();
  }, []);

  const isDateDisabled = date => {
    // Check if the date is in the bookedDates array
    return bookedDates.includes(date);
  }

  return (
    <DatePicker
      value={selectedDate}
      onChange={setSelectedDate}
      isDisabled={isDateDisabled}
    />
  );
}

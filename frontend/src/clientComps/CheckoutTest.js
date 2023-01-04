import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

function CheckoutTest() {
  const stripe = useStripe();
  const elements = useElements();
  const [rentals, setRentals] = useState([
    {
      price: 1000, // $10.00
      duration: 3, // 3 days
      startDate: '',
      addOn1: false,
      addOn2: false,
    },
  ]);

  const handleAddRental = () => {
    setRentals([
      ...rentals,
      {
        price: 1000, // $10.00
        duration: 3, // 3 days
        startDate: '',
        addOn1: false,
        addOn2: false,
      },
    ]);
  };

  const handleRemoveRental = (index) => {
    setRentals(rentals.filter((_, i) => i !== index));
  };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    setRentals(
      rentals.map((rental, i) =>
        i === index ? { ...rental, [name]: value } : rental
      )
    );
  };

  const handleCheckboxChange = (event, index) => {
    const { name, checked } = event.target;
    setRentals(
      rentals.map((rental, i) =>
        i === index ? { ...rental, [name]: checked } : rental
      )
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log('Error:', error);
    } else {
      const response = await fetch('http://localhost:5000/api/charge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          rentals,
        }),
      });
      const result = await response.json();

      if (result.error) {
        console.log('Error:', result.error);
      } else {
        console.log('Success:', result.message);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {rentals.map((rental, index) => (
        <div key={index}>
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={rental.startDate}
            onChange={(event) => handleInputChange(event, index)}
          />
          <br />
          <label htmlFor="duration">Duration (days)</label>
          <input
            type="number"
            name="duration"
            value={rental.duration}
            onChange={(event) => handleInputChange(event, index)}
          />
          <br />
          <label htmlFor="addOn1">
            Add-on 1 ($5.00)
            <input
              type="checkbox"
              name="addOn1"
              checked={rental.addOn1}
              onChange={(event) => handleCheckboxChange(event, index)}
            />
          </label>
          <br />
          <label htmlFor="addOn2">
            Add-on 2 ($10.00)
            <input
              type="checkbox"
              name="addOn2"
              checked={rental.addOn2}
              onChange={(event) => handleCheckboxChange(event, index)}
            />
          </label>
          <br />
          {index > 0 && (
            <button onClick={() => handleRemoveRental(index)}>
              Remove Rental
            </button>
          )}
        </div>
      ))}
      <button onClick={handleAddRental}>Add Rental</button>
      <br />
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
}

export default CheckoutTest;



import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Checkbox } from 'antd';
import CheckoutForm from "./formComps/dateChecker";

function CheckoutTest() {
  const stripe = useStripe();
  const elements = useElements();
  const generateOrderNumber = () => {
    const timestamp = Date.now();
    const randomNumber = Math.floor(Math.random() * 100000);
    return `${timestamp}-${randomNumber}`;
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [orderNumber, setOrderNumber] = useState(generateOrderNumber());
  const [rentals, setRentals] = useState([
    {
      price: 1000, // $10.00
      duration: 3, // 3 days
      startDate: "",
      addOn1: false,
      addOn2: false,
      amount: 0, // initial amount is 0
    },
  ]);

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const rental = rentals[index];
    let amount = rental.price; // initialize amount to rental.price
    if (name === "duration") {
      const duration = Number(value);
      const hourlyRate = 300; // $300 per hour
      amount = duration * hourlyRate;
    } else if (name === "addOn1") {
      if (value) {
        amount += 500; // add $5.00 for add-on 1
      }
    } else if (name === "addOn2") {
      if (value) {
        amount += 1000; // add $10.00 for add-on 2
      }
    }
    setRentals(
      rentals.map((rental, i) =>
        i === index
          ? { ...rental, [name]: value, amount: Number(amount) }
          : rental
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
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log("Error:", error);
    } else {
      const response = await fetch("http://localhost:5000/api/charge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          rentals,
          orderNumber,
          firstName,
          lastName
        }),

      });

      const result = await response.json();
    if (result.error) {
        console.log("Error:", result.error);
    } else {
        console.log("Success:", result.message);
        alert(result.message);
    }
};
  };
  const colorOptions = [  { label: 'Red', value: 'red' },  { label: 'Blue', value: 'blue' },  { label: 'Green', value: 'green' },  { label: 'Yellow', value: 'yellow' },  { label: 'Purple', value: 'purple' },];

  const [selectedColors, setSelectedColors] = useState([]);
  
  function handleColorChange(checkedValues) {
    setSelectedColors(checkedValues);
  }
  return (
    <div class="w-1/2 rounded bg-slate-400 p-2">
      <form class="m-10" onSubmit={handleSubmit} type="submit">
        {rentals.map((rental, index) => (
          <div key={index}>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />

            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
            <Checkbox.Group
  options={colorOptions}
  onChange={handleColorChange}
  value={selectedColors}
  style={{ width: '100%' }}
  max={3}
/>
<CheckoutForm />
            <label class="p-2" htmlFor="startDate">
              Start Date
            </label>
            
            <input
              class="p-2"
              type="date"
              name="startDate"
              value={rental.startDate}
              onChange={(event) => handleChange(event, index)}
            />
            <br />
            <label htmlFor="duration">Duration</label>
            <select
              name="duration"
              value={rental.duration}
              onChange={(event) => handleChange(event, index)}
            >
              <option value="4">4 hours ($300.00)</option>
              <option value="6">6 hours ($400.00)</option>
              <option value="8">8 hours ($600.00)</option>
            </select>

            <br />
            <label class="p-2" htmlFor="addOn1">
              Add-on 1 ($5.00)
              <input
                class="p-2"
                type="checkbox"
                name="addOn1"
                checked={rental.addOn1}
                onChange={(event) => handleCheckboxChange(event, index)}
              />
            </label>
            <br />
            <label class="p-2" htmlFor="addOn2">
              Add-on 2 ($10.00)
              <input
                class="p-2"
                type="checkbox"
                name="addOn2"
                checked={rental.addOn2}
                onChange={(event) => handleCheckboxChange(event, index)}
              />
            </label>
            <br />
          </div>
        ))}

        <br />
        <CardElement />
        <button type="submit">Pay</button>
      </form>
    </div>
  );
}

export default CheckoutTest;

import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import DateChecker from "./formComps/dateChecker";
import ColorSelector from "./formComps/colorSelector";
import { Button, Divider, Input, Select, TimePicker, Typography } from "antd";

const { Title } = Typography;
function CheckoutTest() {
  const stripe = useStripe();
  const elements = useElements();
  const generateOrderNumber = () => {
    const timestamp = Date.now();
    const randomNumber = Math.floor(Math.random() * 100000);
    return `${timestamp}-${randomNumber}`;
  };
  const [colors, setColors] = useState([]);
  const [arch, setArch] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedDate1, setSelectedDate1] = useState(null);
  const handleSelect1 = (date) => {
    setSelectedDate1(date);
  };
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
    }
 else if (name === "addOn1") {
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
          lastName,
        }),
      });

      const result = await response.json();
      if (result.error) {
        console.log("Error:", result.error);
      } else {
        console.log("Success:", result.message);
        alert(result.message);
      }
    }
  };
  const onChange = (time, timeString) => {
    console.log(time, timeString);
  };
  const handleColorSelection = (selectedColors, selectedArch) => {
    setColors(selectedColors);
    setArch(selectedArch);
  };
  return (
    <div class="p-2">
      <Divider style={{ backgroundColor: "#F3D9B1" }} />
      <form class="m-10" onSubmit={handleSubmit} type="submit">
        {rentals.map((rental, index) => (
          <div key={index}>
            <div class="grid grid-cols-2 grid-rows-1 gap-2 md:grid-cols-4 lg:grid-cols-6">
              <div class="col-start-1 col-span-2  md:col-span-4 md:w-full lg:col-span-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md ">
                <DateChecker
                  handleSelect1={handleSelect1}
                  selectedDate1={selectedDate1}
                />
                <Input style={{textAlign:'center'}}  disabled />
              </div>
              <div class="col-start-1 col-span-2 md:col-span-4 lg:col-end-5 lg:col-span-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <div>
                  <Title level={3}>Event Start Time</Title>
                  <Divider />
                  <TimePicker use12Hours format="h:mm a" onChange={onChange} />
                </div>

                <Title level={3}>Please select rental length</Title>
                <Divider />
                <Select
                  name="duration"
                  value={rental.duration}
                  onChange={(event) => handleChange(event, index)}
                >
                  <option value="4">4 hours ($300.00)</option>
                  <option value="6">6 hours ($400.00)</option>
                  <option value="8">8 hours ($600.00)</option>
                </Select>

                <ColorSelector
                  colors={colors}
                  setColors={setColors}
                  arch={arch}
                  setArch={setArch}
                />

                <br />
                <Divider />

                <label class="p-2" htmlFor="addOn1">
                  Generator ($50.00)
                  <input
                    class="p-2"
                    type="checkbox"
                    name="addOn1"
                    checked={rental.addOn1}
                    onChange={(event) => handleCheckboxChange(event, index)}
                  />
                </label>
                <br />
                <label className="p-2" htmlFor="addOn2">
                  Vinyl Decal 12" x 24" ($10.00)
                  <input
                    className="p-2"
                    type="checkbox"
                    name="addOn2"
                    checked={rental.addOn2}
                    onChange={(event) => handleCheckboxChange(event, index)}
                  />
                </label>

                {rental.addOn2 ? (
                  <p style={{ fontSize: ".95rem", margin: ".5rem" }}>
                    Please email photo examples to hello@pouncyparties.com
                  </p>
                ) : null}
                <br />
              </div>
              <div class="col-start-1 col-span-2  md:col-span-4 lg:col-end-7 lg:col-span-2 h-46 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md ">
                <label htmlFor="firstName">First Name:</label>
                <Input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                />
                <label htmlFor="lastName">Last Name:</label>
                <Input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />
                <label htmlFor="lastName">Email:</label>
                <Input
                  type="Email"
                  id="Email"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />
                <label htmlFor="firstName">Delivery Address:</label>
                <Input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                />
                <label htmlFor="lastName">Phone Number:</label>
                <Input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />
                <Divider />
                <div class="">
                  <CardElement />
                  <Button
                    style={{
                      backgroundColor: "blue",
                      marginTop: "2rem",
                      marginLeft: ".5rem",
                    }}
                    type="primary"
                  >
                    Pay
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
}

export default CheckoutTest;

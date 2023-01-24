import React, { useState, useEffect } from "react";
import moment from "moment";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import DateChecker from "./formComps/dateChecker";
import ColorSelector from "./formComps/colorSelector";
import { Button, Divider, Input, Select, TimePicker, Typography } from "antd";
const { Option } = Select;
const { Title } = Typography;
function CheckoutTest() {
  const stripe = useStripe();
  const elements = useElements();
  const generateOrderNumber = () => {
    const timestamp = Date.now();
    const randomNumber = Math.floor(Math.random() * 100000);
    return `${timestamp}-${randomNumber}`;
  };
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedArch, setSelectedArch] = useState("");
  const [colors, setColors] = useState([]);
  const [arch, setArch] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedBouncer, setSelectedBouncer] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isConfirmed2, setIsConfirmed2] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("");
  const [themePrice, setThemePrice] = useState();
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [total, setTotal] = useState(0);
  const [addOn1, setAddOn1] = useState(false);
  const [colorPrice, setColorPrice] = useState(0);

  const handleDurationSelect = (value) => {
    setSelectedDuration(value);
    setTotal(calculateTotal(selectedBouncer, value));
  };

  const handleSelect1 = (date) => {
    setSelectedDate1(date);
  };

  const handleOptionSelect = (bouncer) => {
    setSelectedBouncer(bouncer);
    switch (bouncer) {
      case "bouncer1":
        setRentals(
          rentals.map((rental, i) =>
            i === 0 ? { ...rental, price: 1500 } : rental
          )
        );

        setThemePrice(50);
        break;
      case "bouncer2":
        setRentals(
          rentals.map((rental, i) =>
            i === 0 ? { ...rental, price: 2000 } : rental
          )
        );

        setThemePrice(75);
        break;
      case "bouncer3":
        setRentals(
          rentals.map((rental, i) =>
            i === 0 ? { ...rental, price: 2500 } : rental
          )
        );

        setThemePrice(100);
        break;
      default:
        setRentals(
          rentals.map((rental, i) =>
            i === 0 ? { ...rental, price: 1000 } : rental
          )
        );

        setThemePrice(50);
    }
  };

  const [orderNumber, setOrderNumber] = useState(generateOrderNumber());
  const [rentals, setRentals] = useState([
    {
      price: 1000, // $10.00
      duration: 3, // 3 days
      startDate: "",
      addOn1: false,
      addOn2: false,
      addOn3: false,
      amount: 0, // initial amount is 0
    },
  ]);

  const handleCheckboxChange = (event, index) => {
    setRentals(
      rentals.map((rental, i) =>
        i === index ? { ...rental, addOn1: event.target.checked } : rental
      )
    );
    setTotal(
      calculateTotal(
        selectedBouncer,
        selectedDuration,
        selectedTheme,
        selectedPrice,
        event.target.checked
      )
    );
  };

  //Bouncer and Date selected Captured Here.//
  const handleConfirm = () => {
    setIsConfirmed2(true);
    console.log(`Selected bouncer: ${selectedBouncer}`);
    console.log(`Selected date: ${selectedDate1}`);
  };
  useEffect(() => {
    const total = calculateTotal(
      selectedBouncer,
      selectedDuration,
      selectedTheme,
      colorPrice
    );
    setTotal(total);
  }, [selectedBouncer, selectedDuration, selectedTheme, colorPrice]);

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
  const handleSelection = (selectedColors, selectedArch, price) => {
    // set the selected colors and arch in state
    setColors(selectedColors);
    setArch(selectedArch);
    setSelectedPrice(price);
    // call the calculateTotal function with all the necessary values
    setTotal(
      calculateTotal(
        selectedBouncer,
        selectedDuration,
        selectedTheme,
        selectedPrice,
        addOn1,
        selectedColors,
        selectedArch,
        selectedPrice
      )
    );
  };
  //drop down values//
  const prices = {
    bouncer1: {
      4: 100,
      6: 200,
      8: 300,
    },
    bouncer2: {
      4: 300,
      6: 400,
      8: 600,
    },
    bouncer3: {
      4: 300,
      6: 400,
      8: 600,
    },
  };
  const deliveryRegions = {
    sonomaCounty: "Free",
    marinCounty: 15,
    napaCounty: 20,
  };
  const themeOptions = [
    <Option key="theme1" value="theme1">
      Super Man - $10
    </Option>,
    <Option key="theme2" value="theme2">
      Safari - $20
    </Option>,
    <Option key="theme3" value="theme3">
      Batman - $30
    </Option>,
  ];

  const themePrices = {
    theme1: 20,
    theme2: 25,
    theme3: 30,
  };

  const handleReset = () => {
    setSelectedDate1(null);
    setSelectedBouncer("");
    setIsConfirmed2(false);
  };
  const handleDeliveryRegionChange = (event, index) => {
    const selectedRegion = event.target.value;
    const deliveryPrice = deliveryRegions[selectedRegion];
    // set the delivery price for the selected region
    setRentals(
      rentals.map((rental, i) =>
        i === index ? { ...rental, deliveryPrice } : rental
      )
    );
  };
  const handleThemeSelect = (value) => {
    setSelectedTheme(value);
    calculateTotal(selectedBouncer, selectedDuration, value);
  };
  const handleRentalLengthChange = (value) => {
    setSelectedDuration(value);
    setSelectedPrice(bouncerPrices[value]);
  };
  const bouncerPrices = prices[selectedBouncer] || {};
  const calculateTotal = (
    selectedBouncer,
    selectedDuration,
    selectedTheme,
    selectedPrice,
    addOn1
  ) => {
    let total = 0;
    if (selectedBouncer && selectedDuration) {
      total += prices[selectedBouncer][selectedDuration];
    }
    if (selectedTheme) {
      total += themePrices[selectedTheme];
    }
    if (selectedPrice) {
      total += selectedPrice;
    }
    if (addOn1) {
      total += 50;
    }
    console.log(total);
    return total;
  };

  return (
    <div class="p-2">
      <Divider style={{ backgroundColor: "#F3D9B1" }} />
      <form class="m-10" onSubmit={handleSubmit} type="submit">
        {rentals.map((rental, index) => (
          <div key={index}>
            <div class="grid grid-cols-2 grid-rows-1 gap-2 md:grid-cols-2 lg:grid-cols-6">
              <div class="col-start-1 col-span-2  md:grid-span-full lg:col-span-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md ">
                {isConfirmed2 ? (
                  <div>
                    {" "}
                    <Title
                      style={{ marginTop: "1rem", marginBottom: "-1rem" }}
                      level={3}
                    >
                      Bouncer Details:
                    </Title>
                    <Divider style={{ marginBottom: ".5rem" }} />
                    <Title
                      style={{
                        textAlign: "left",
                        padding: "1rem",
                        fontWeight: "lighter",
                      }}
                      level={2}
                    >
                      You selected the{" "}
                      <span style={{ fontWeight: "bold" }}>
                        {selectedBouncer}
                      </span>{" "}
                      on{" "}
                      <span style={{ fontWeight: "bold" }}>
                        {moment(selectedDate1).format("MMM Do, YYYY")}
                      </span>{" "}
                    </Title>{" "}
                    <Title level={5}>Please continue with checkout.</Title>
                    <Divider />
                    <div class="flex flex-row justify-end">
                      <Button onClick={handleReset}>Reset</Button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <DateChecker
                      onSelect={handleSelect1}
                      disabled={isConfirmed}
                      handleOptionSelect={handleOptionSelect}
                      handleSelect1={handleSelect1}
                      selectedDate1={selectedDate1}
                      setIsConfirmed={setIsConfirmed}
                    />

                    {selectedBouncer && selectedDate1 ? (
                      <Button onClick={handleConfirm}>Confirm</Button>
                    ) : null}
                  </div>
                )}
              </div>
              <div class="col-start-1 col-span-2 md:grid-span-full lg:col-end-5 lg:col-span-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <div class="mt-3">
                  <Title style={{ marginBottom: "-1rem" }} level={3}>
                    Start Time
                  </Title>
                  <Divider style={{ marginBottom: ".5rem" }} />
                  <TimePicker
                    style={{ width: "10rem" }}
                    use12Hours
                    format="h:mm a"
                    onChange={onChange}
                  />
                </div>

                <Title
                  style={{ marginTop: "1rem", marginBottom: "-1rem" }}
                  level={3}
                >
                  Rental Length
                </Title>
                <Divider style={{ marginBottom: ".5rem" }} />
                <Select
                  style={{ width: "10rem" }}
                  name="duration"
                  defaultValue="Select an option"
                  onChange={handleDurationSelect}
                >
                  <Option value="4">4 hours (${bouncerPrices["4"]}.00)</Option>
                  <Option value="6">6 hours (${bouncerPrices["6"]}.00)</Option>
                  <Option value="8">8 hours (${bouncerPrices["8"]}.00)</Option>
                </Select>

                <ColorSelector
                  colorPrice={colorPrice}
                  setColors={setColors}
                  arch={arch}
                  setArch={setArch}
                  handleSelection={handleSelection}
                  handleRentalLengthChange={handleRentalLengthChange}
                  selectedBouncer={selectedBouncer}
                  calculateTotal={calculateTotal}
                />

                <br />

                <Title
                  style={{ marginTop: "1rem", marginBottom: "-1rem" }}
                  level={3}
                >
                  Vinyl Theme
                </Title>
                <Divider style={{ marginBottom: ".5rem" }} />
                <div class="flex flex-col">
                  <Select
                    onChange={(value) => {
                      handleThemeSelect(value);
                      setSelectedPrice(value);
                      calculateTotal(
                        selectedBouncer,
                        selectedDuration,
                        value,
                        selectedPrice,
                        rental.addOn1
                      );
                    }}
                    defaultValue="Select an option"
                  >
                    {themeOptions.map((themeOption) => (
                      <Option value={themeOption.key}>
                        {themeOption.props.children}
                      </Option>
                    ))}
                  </Select>

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
                </div>
                <br />
                <Title
                  style={{ marginTop: "1rem", marginBottom: "-1rem" }}
                  level={3}
                >
                  Add-ons
                </Title>
                <Divider style={{ marginBottom: ".5rem" }} />
                <label class="p-2" htmlFor="addOn1">
                  Generator ($50.00)
                  <input
                    class="p-2"
                    type="checkbox"
                    name="addOn1"
                    checked={rental.addOn1}
                    onChange={(event) => {
                      handleCheckboxChange(event, index);
                      calculateTotal(
                        selectedBouncer,
                        selectedDuration,
                        selectedTheme,
                        selectedPrice,
                        rental.addOn1
                      );
                    }}
                  />
                </label>

                <br />

                {rental.addOn2 ? (
                  <p style={{ fontSize: ".95rem", margin: ".5rem" }}>
                    Please email photo/text example to hello@pouncyparties.com
                  </p>
                ) : null}
                <br />
              </div>
              <div class="col-start-1 col-span-2  md:grid-span-full lg:col-end-7 lg:col-span-2 h-46 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md ">
                <div class="mt-3">
                  <Title
                    style={{ marginTop: "1rem", marginBottom: "-1rem" }}
                    level={3}
                  >
                    Delivery Details
                  </Title>
                  <Divider style={{ marginBottom: ".5rem" }} />
                  <div class="flex flex-row">
                    <div class="flex flex-col m-1">
                      <label htmlFor="firstName">First Name:</label>
                      <Input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                      />
                    </div>
                    <div class="flex flex-col m-1">
                      <label htmlFor="lastName">Last Name:</label>
                      <Input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                      />
                    </div>
                  </div>

                  <label htmlFor="lastName">Email:</label>
                  <Input
                    type="Email"
                    id="Email"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                  <div class="flex flex-col m-0">
                    <label className="flex flex-col" htmlFor="deliveryRegion">
                      Select Delivery Region:
                      <Select
                        style={{ margin: "0rem" }}
                        name="deliveryRegion"
                        id="deliveryRegion"
                        onChange={(event) =>
                          handleDeliveryRegionChange(event, index)
                        }
                      >
                        <option value="sonomaCounty">
                          Sonoma County - Free
                        </option>
                        <option value="marinCounty">Marin County - $75</option>
                        <option value="napaCounty">Napa County - $100</option>
                      </Select>
                    </label>
                  </div>
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
                </div>
                <Divider />
                <div class="">
                  <p>Total cost: ${total}</p>

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
                <div class="mt-12">
                  <Title level={5}>
                    Questions? Call or text us at{" "}
                    <a href="tel:+1234567890">707-238-1111</a>
                  </Title>
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

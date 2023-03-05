import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./../Form/childComps/DateSelection.css";
import moment from "moment";
import { Button, Divider, TimePicker, Typography } from "antd";
import DateSelection from "./childComps/DateSelection";
import SelectedOptionsList from "./childComps/SelectedOptions";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Radio } from "antd";

import Babyblue from "./../../Media/Balloon PNG/Babyblue.png";
import Babypink from "./../../Media/Balloon PNG/Babypink.png";
import Black from "./../../Media/Balloon PNG/Black.png";
import Blue from "./../../Media/Balloon PNG/Blue.png";
import Blueslate from "./../../Media/Balloon PNG/Blueslate.png";
import Blush from "./../../Media/Balloon PNG/Blush.png";
import Burntorange from "./../../Media/Balloon PNG/Burntorange.png";
import Cameo from "./../../Media/Balloon PNG/Cameo.png";
import Canyonrose from "./../../Media/Balloon PNG/Canyonrose.png";
import Clear from "./../../Media/Balloon PNG/Clear.png";
import Cocoa from "./../../Media/Balloon PNG/Cocoa.png";
import Coral from "./../../Media/Balloon PNG/Coral.png";
import Crystalbburgandy from "./../../Media/Balloon PNG/Crystalbburgandy.png";
import Crystalemerald from "./../../Media/Balloon PNG/Crystalemerald.png";
import Crystalmagenta from "./../../Media/Balloon PNG/Crystalmagenta.png";
import Crystalred from "./../../Media/Balloon PNG/Crystalred.png";
import Crystalsaphire from "./../../Media/Balloon PNG/Crystalsaphire.png";
import Crystaltangerine from "./../../Media/Balloon PNG/Crystaltangerine.png";
import Crystalyellow from "./../../Media/Balloon PNG/Crystalyellow.png";
import Empowermint from "./../../Media/Balloon PNG/Empowermint.png";
import Evergreen from "./../../Media/Balloon PNG/Evergreen.png";
import Fog from "./../../Media/Balloon PNG/Fog.png";
import Goldenrod from "./../../Media/Balloon PNG/Goldenrod.png";
import Green from "./../../Media/Balloon PNG/Green.png";
import Greysmoke from "./../../Media/Balloon PNG/Greysmoke.png";
import Hotpink from "./../../Media/Balloon PNG/Hotpink.png";
import Lavender from "./../../Media/Balloon PNG/Lavender.png";
import Limegreen from "./../../Media/Balloon PNG/Limegreen.png";
import Metalicsilver from "./../../Media/Balloon PNG/Matalicsilver.png";
import Metalicblue from "./../../Media/Balloon PNG/Metalicblue.png";
import Metalicforest from "./../../Media/Balloon PNG/Metalicforest.png";
import Metalicfusia from "./../../Media/Balloon PNG/Metalicfusia.png";
import Metalicgold from "./../../Media/Balloon PNG/Metalicgold.png";
import Metalicgrape from "./../../Media/Balloon PNG/Metalicgrape.png";
import Metalicgreen from "./../../Media/Balloon PNG/Metalicgreen.png";
import Metaliclilac from "./../../Media/Balloon PNG/Metaliclilac.png";
// import Metalicmidnight from "./../../../Media/Balloon PNG/Metalicmidnight.png";
import Metalicrose from "./../../Media/Balloon PNG/Metalicrose.png";
import Metalicseafoam from "./../../Media/Balloon PNG/Metalicseafoam.png";
import Metalicskyblue from "./../../Media/Balloon PNG/Metalicskyblue.png";
import Metalicstarfire from "./../../Media/Balloon PNG/Metalicstarfire.png";
import Metalicteal from "./../../Media/Balloon PNG/Metalicteal.png";
import Metalicwhite from "./../../Media/Balloon PNG/Metalicwhite.png";
import Metalicyellow from "./../../Media/Balloon PNG/Metalicyellow.png";
import Mustard from "./../../Media/Balloon PNG/Mustard.png";
import Navy from "./../../Media/Balloon PNG/Navy.png";
import Orange from "./../../Media/Balloon PNG/Orange.png";
import Pink from "./../../Media/Balloon PNG/Pink.png";
import Plumpurple from "./../../Media/Balloon PNG/Plumpurple.png";
import Purple from "./../../Media/Balloon PNG/Purple.png";
import Red from "./../../Media/Balloon PNG/Red.png";
import Sangria from "./../../Media/Balloon PNG/Sangria.png";
import Seafoam from "./../../Media/Balloon PNG/Seafoam.png";
import Shimpink from "./../../Media/Balloon PNG/Shimpink.png";
import Stone from "./../../Media/Balloon PNG/Stone.png";
import Teal from "./../../Media/Balloon PNG/Teal.png";
import Turquoise from "./../../Media/Balloon PNG/Turquoise.png";
import White from "./../../Media/Balloon PNG/White.png";
import Willow from "./../../Media/Balloon PNG/Willow.png";
import Yellow from "./../../Media/Balloon PNG/Yellow.png";
import BalloonSelector from "./childComps/BalloonDropdown";
const { Title } = Typography;

const options0 = [
  { value: "4-Hours", price: 150 },
  { value: "6-Hours", price: 250 },
  { value: "8-Hours", price: 350 },
];
const options1 = [
  { value: "No Thank You", price: 0 },
  { value: "Half Arch", price: 100 },
  { value: "Full Arch", price: 150 },
];

const options2 = [
  { value: "No Thank You", price: 0 },
  { value: "Large Text", price: 20 },
  { value: "Custom Theme", price: 55 },
];

const options3 = [
  { value: "No Thank You", price: 0 },
  { value: "Generator", price: 50 },
];

const options4 = [
  { value: "No Thank You", price: 0 },
  { value: "Custom", price: 35 },
  { value: "In-house Garland", price: 25 },
];
const options5 = [
  { value: "No Thank You", price: 0 },
  { value: "East Bay", price: 75 },
  { value: "North Peninsula", price: 50 },
  { value: "San Jose", price: 100 },
  { value: "San Pablo Bay", price: 75 },
  { value: "South Bay", price: 80 },
  { value: "Stanislaus", price: 100 },
];
const options6 = [
  { value: "No Thank You", price: 0 },
  { value: "Solid-Double", price: 150 },
  { value: "Solid-Trio", price: 200 },
  { value: "Complex-Double", price: 250 },
  { value: "Complex-Trio", price: 300 },
];

function ToddlerForm() {
  //Date Selection
  const [errors, setErrors] = useState({});

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedBouncer, setSelectedBouncer] = useState("bouncer1");
  //Master State for Total
  const [selectedOptionDelivery, setDeliveryOption] = useState("");
  const [selectedDuration, setSelectedOption0] = useState(options0[0]);
  const [selectedBalloons, setSelectedOption1] = useState(options1[0]);
  const [selectedVinyl, setSelectedOption2] = useState(options2[0]);
  const [selectedGenerator, setSelectedOption3] = useState(options3[0]);
  const [selectedGarland, setSelectedOption4] = useState(options1[0]);
  const [selectedDelivery, setSelectedOption5] = useState(options5[0]);
  const [selectedBackdrop, setSelectedOption6] = useState(options6[0]);

  const [total, setTotal] = useState(0);
  const [selectedColors, setSelectedColors] = useState([]);
  //billing Details
  const [phone, setPhone] = useState("");
  const [billingName, setBillingName] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [billingCity, setBillingCity] = useState("");
  const [billingState, setBillingState] = useState("");
  const [billingZip, setBillingZip] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [billingEmail, setBillingEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("stripe");

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();
  const generateOrderNumber = () => {
    const timestamp = Date.now();
    const randomNumber = Math.floor(Math.random() * 100);
    return `${timestamp}-${randomNumber}`;
  };
  // const options = [
  //   { value: "red", label: "Red" },
  //   { value: "green", label: "Green" },
  //   { value: "blue", label: "Blue" },
  //   { value: "yellow", label: "Yellow" },
  //   { value: "purple", label: "Purple" },
  // ];
  useEffect(() => {
    let newTotal = 0;

    console.log("### setting total");

    newTotal += selectedDuration ? selectedDuration.price : 0;
    newTotal += selectedBalloons ? selectedBalloons.price : 0;
    newTotal += selectedVinyl ? selectedVinyl.price : 0;
    newTotal += selectedGenerator ? selectedGenerator.price : 0;
    newTotal += selectedGarland ? selectedGarland.price : 0;
    newTotal += selectedDelivery ? selectedDelivery.price : 0;
    newTotal += selectedBackdrop ? selectedBackdrop.price : 0;

    console.log("### setting total", newTotal);
    setTotal(newTotal);
  }, [
    selectedDuration,
    selectedBalloons,
    selectedVinyl,
    selectedGenerator,
    selectedGarland,
    selectedDelivery,
    selectedBackdrop,
  ]);
  const handlePayLaterSubmit = async (event) => {
    event.preventDefault();
    const time = new Date(selectedTime).toLocaleTimeString();
    const orderNumber = generateOrderNumber();
    setOrderNumber(orderNumber);
    const bookingData = {
      billingEmail: billingEmail,
      selectedDuration: selectedDuration.value,
      selectedBalloons: selectedBalloons.value,
      selectedVinyl: selectedVinyl.value,
      selectedGenerator: selectedGenerator.value,
      selectedGarland: selectedGarland.value,
      selectedDelivery: selectedDelivery.value,
      selectedDate: selectedDate,
      selectedTime: time,
      selectedColors: selectedColors,
      selectedOptionDelivery: selectedOptionDelivery,
      billingName: billingName,
      billingAddress: billingAddress,
      billingCity: billingCity,
      billingState: billingState,
      orderNumber: orderNumber,
      bouncerName: selectedBouncer,
      total_cost: total,
      phone: phone,
    };
    try {
      const response = await axios.post(
        "https://pdb-backend-production.up.railway.app/api/booking",
        bookingData
      );
      console.log(response.data);
      setOrderPlaced(true);
      console.log(orderPlaced);
      navigate(`/success/${orderNumber}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleColorsSelected = (colors) => {
    console.log(colors); // log the selected colors
    setSelectedColors(colors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!selectedDate) {
      newErrors.selectedDate = "Reservation date is required";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Submit the form to the API here
      console.log("Form is valid!", selectedDate);
    }
    const orderNumber = generateOrderNumber();
    setOrderNumber(orderNumber);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        name: billingName,
        email: billingEmail,
        address: {
          line1: billingAddress,
          city: billingCity,
          state: billingState,
          postal_code: billingZip,
        },
      },
    });

    if (!error) {
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post(
          "https://pdb-backend-production.up.railway.app/api/charge",
          {
            amount: total * 100, //convert to cents
            paymentMethodId: id,
            orderNumber,
          }
        );
        console.log(data, "test");
        const time = new Date(selectedTime).toLocaleTimeString();
        const selectedColorNames = selectedColors.map((color) => color.name);

        const bookingData = {
          billingEmail: billingEmail,
          selectedDuration: selectedDuration.value,
          selectedBalloons: selectedBalloons.value,
          selectedVinyl: selectedVinyl.value,
          selectedGenerator: selectedGenerator.value,
          selectedGarland: selectedGarland.value,
          selectedDelivery: selectedDelivery.value,
          selectedDate: selectedDate,
          selectedTime: time,
          selectedColors: selectedColorNames,
          selectedOptionDelivery: selectedOptionDelivery,
          billingName: billingName,
          billingAddress: billingAddress,
          billingCity: billingCity,
          billingState: billingState,
          orderNumber: orderNumber,
          bouncerName: selectedBouncer,
          total_cost: total,
          phone: phone,
        };
        await axios.post(
          "https://pdb-backend-production.up.railway.app/api/booking",
          bookingData
        );
        setOrderPlaced(true);
        console.log(orderPlaced);
        navigate(`/success/${orderNumber}`);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleDeliveryChange = (e) => {
    setDeliveryOption(e.target.value);
    if (e.target.value === "no") {
      setSelectedOption5(options5[0]); // set the default value for selectedOption5
    }
  };
  const handleOptionSelect = (bouncer) => {
    setSelectedBouncer(bouncer);
  };

  const balloons = [
    { name: "Cameo", color: Cameo },
    { name: "Baby Pink", color: Babypink },
    { name: "Shim Pink", color: Shimpink },
    { name: "Pink", color: Pink },
    { name: "Canyon Rose", color: Canyonrose },
    { name: "Coral", color: Coral },
    { name: "Hot Pink", color: Hotpink },
    { name: "Metalic Fuchia", color: Metalicfusia },
    { name: "Crystal Magenta", color: Crystalmagenta },
    { name: "Crystal Burgundy", color: Crystalbburgandy },
    { name: "Sangria", color: Sangria },
    { name: "Red", color: Red },
    { name: "Crystal Red", color: Crystalred },
    { name: "Metalic Starfire", color: Metalicstarfire },
    { name: "Metalic Rose Gold", color: Metalicrose },
    { name: "Burnt Orange", color: Burntorange },
    { name: "Orange", color: Orange },
    { name: "Crystal Tangerine", color: Crystaltangerine },
    { name: "Metalic Yellow", color: Metalicyellow },
    { name: "Crystal Yellow", color: Crystalyellow },
    { name: "Yellow", color: Yellow },
    { name: "Golden Rod", color: Goldenrod },
    { name: "Mustard", color: Mustard },
    { name: "Metalic Gold", color: Metalicgold },
    { name: "Blush", color: Blush },
    { name: "Lime Green", color: Limegreen },
    { name: "Green", color: Green },
    { name: "Metalic Green", color: Metalicgreen },
    { name: "Crystal Emerald", color: Crystalemerald },
    { name: "Metalic Forest", color: Metalicforest },
    { name: "Evergreen", color: Evergreen },
    { name: "Willow", color: Willow },
    { name: "Empower Mint", color: Empowermint },
    { name: "Metalic Teal", color: Metalicteal },
    { name: "Teal", color: Teal },
    { name: "Metalic Seafoam", color: Metalicseafoam },
    { name: "Turquoise", color: Turquoise },
    { name: "Metalic Skyblue", color: Metalicskyblue },
    { name: "Baby Blue", color: Babyblue },
    { name: "Blue Slate", color: Blueslate },
    { name: "Blue", color: Blue },
    { name: "Metalic Blue", color: Metalicblue },
    { name: "Crystal Saphire", color: Crystalsaphire },
    { name: "Navy", color: Navy },
    { name: "Seafoam", color: Seafoam },
    { name: "Metalic Lilac", color: Metaliclilac },
    { name: "Lavender", color: Lavender },
    { name: "Plum Purple", color: Plumpurple },
    { name: "Metalic Grape", color: Metalicgrape },
    { name: "Crystal Purple", color: Purple },
    { name: "Clear", color: Clear },
    { name: "White", color: White },
    { name: "Metalic White", color: Metalicwhite },
    { name: "Fog", color: Fog },
    { name: "Metalic Silver", color: Metalicsilver },
    { name: "Grey Smoke", color: Greysmoke },
    { name: "Black", color: Black },
    { name: "Stone", color: Stone },
    { name: "Cocoa", color: Cocoa },
  ];

  //Master State Console- Delete before DEPLOY!!
  console.log(
    selectedDuration,
    selectedBalloons,
    selectedVinyl,
    selectedGenerator,
    selectedGarland,
    selectedDelivery,
    selectedDate,
    selectedTime,
    selectedOptionDelivery,
    selectedTime,
    billingName,
    billingAddress,
    billingCity,
    billingState,
    orderNumber,
    billingEmail,
    selectedBouncer,
    selectedColors
  );

  return (
    <div class="p-2 flex flex-col justify-center items-center align-center">
      <form
        class="m-10 mt-32"
        type="submit"
        onSubmit={
          paymentMethod === "stripe" ? handleSubmit : handlePayLaterSubmit
        }
      >
        <div>
          <div class="grid grid-cols-1 grid-rows-3 gap-2 lg:grid-cols-3 lg:grid-rows-1 ">
            {/* Left */}
            <div class="col-start-1 lg:col-start-1  max-w-sm p-6 bg-white border-4 border-[#c0a58e] rounded-lg shadow-md ">
              <DateSelection
                handleSelect1={setSelectedDate}
                handleOptionSelect={handleOptionSelect}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
              {selectedDate && (
                <p>
                  Reservation Date: {moment(selectedDate).format("MM/DD/YYYY")}
                </p>
              )}
              {errors.selectedDate && <p>{errors.selectedDate}</p>}
              <div>
                <Title className="m-0 p-0" level={3}>
                  Start Time
                </Title>
                <p className="mt-2 mb-2 text-red-500">*Required Field*</p>
                <Divider className="m-0" />
                <TimePicker
                  use12Hours
                  format="h:mm a"
                  onChange={(time) => setSelectedTime(time)}
                  value={selectedTime}
                  okButtonProps={{ style: { background: "red" } }}
                  required
                />
              </div>

              <div>
                <Title className="m-0 p-0" level={3}>
                  Duration
                </Title>
                <Divider className="m-0" />

                <select
                  className="w-48 mt-2 mb-3 border border-[#c0a58e] rounded"
                  onChange={(e) =>
                    setSelectedOption0(options0[e.target.selectedIndex])
                  }
                >
                  {options0.map((option) => (
                    <option key={option.value} value={option}>
                      {option.value}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Middle I need to see if this works or not */}
            <div class="row-start-2 lg:col-start-2 lg:row-start-1 max-w-sm p-6 bg-white border-4 border-[#c0a58e] rounded-lg shadow-md">
              <div>
                <Title level={3}>Outside of Marin,Napa or Sonoma County?</Title>
                <p className="mt-2 mb-2 text-red-500">*Required Field*</p>
                <Divider className="m-0" />
                <Radio.Group
                  onChange={handleDeliveryChange}
                  value={selectedOptionDelivery}
                  className="mb-4"
                >
                  <Radio value={"yes"}>Yes</Radio>
                  <Radio value={"no"}>No</Radio>
                </Radio.Group>
                {selectedOptionDelivery === "yes" ? (
                  <select
                    className="w-48 border border-[#c0a58e] rounded"
                    onChange={(e) =>
                      setSelectedOption5(options5[e.target.selectedIndex])
                    }
                  >
                    {options5.map((option) => (
                      <option key={option.value} value={option}>
                        {option.value}
                      </option>
                    ))}
                  </select>
                ) : null}
              </div>
              <div>
                <Title className="m-0 p-0" level={3}>
                  Vinyl
                </Title>
                <Divider className="m-0" />
                <select
                  className="w-48 mt-2 mb-3 border border-[#c0a58e] rounded"
                  onChange={(e) =>
                    setSelectedOption2(options2[e.target.selectedIndex])
                  }
                >
                  {options2.map((option) => {
                    return (
                      <option key={option.value} value={option}>
                        {option.value}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <Title className="m-0 p-0" level={3}>
                  Fringe Garland
                </Title>
                <Divider className="m-0" />
                <select
                  className="w-48 mt-2 mb-3 border border-[#c0a58e] rounded"
                  onChange={(e) =>
                    setSelectedOption4(options4[e.target.selectedIndex])
                  }
                >
                  {options4.map((option) => (
                    <option key={option.value} value={option}>
                      {option.value}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <Title className="m-0 p-0" level={3}>
                  Balloons
                </Title>
                <Divider className="m-0" />
                <select
                  className="w-48 mt-2 mb-3 border border-[#c0a58e] rounded"
                  onChange={(e) =>
                    setSelectedOption1(options1[e.target.selectedIndex])
                  }
                >
                  {options1.map((option) => (
                    <option key={option.value} value={option}>
                      {option.value}
                    </option>
                  ))}
                </select>
              </div>
              {selectedBalloons.price === 100 ||
              selectedBalloons.price === 150 ? (
                <div>
                  <BalloonSelector onColorsSelected={handleColorsSelected} />
                </div>
              ) : null}
              <div>
                <Title className="m-0 p-0" level={3}>
                  Back Drop
                </Title>
                <Divider className="m-0" />
                <select
                  className="w-48 mt-2 mb-3 border border-[#c0a58e] rounded"
                  onChange={(e) =>
                    setSelectedOption6(options6[e.target.selectedIndex])
                  }
                >
                  {options1.map((option) => (
                    <option key={option.value} value={option}>
                      {option.value}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <Title className="m-0 p-0" level={3}>
                  Need power for a remote location?
                </Title>
                <Divider className="m-0" />
                <select
                  className="w-48 mt-2 mb-3 border border-[#c0a58e] rounded"
                  onChange={(e) =>
                    setSelectedOption3(options3[e.target.selectedIndex])
                  }
                >
                  {options3.map((option) => (
                    <option key={option.value} value={option}>
                      {option.value}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Right */}
            <div class="row-start-3 lg:col-start-3 lg:row-start-1 h-46 max-w-sm p-6 bg-white border-4 border-[#c0a58e] rounded-lg shadow-md ">
              <div class="mt-3">
                <div class="flex flex-col">
                  <div class="flex flex-col m-1">
                    <div>
                      <SelectedOptionsList
                        selectedDuration={selectedDuration}
                        selectedBalloons={selectedBalloons}
                        selectedVinyl={selectedVinyl}
                        selectedGenerator={selectedGenerator}
                        selectedGarland={selectedGarland}
                        selectedDelivery={selectedDelivery}
                        selectedBackdrop={selectedBackdrop}
                      />

                      {selectedBalloons.price === 100 ||
                      selectedBalloons.price === 150 ? (
                        <div className="flex flex-row">
                          <p>Selected Balloons: {selectedColors.join(", ")}</p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div class="flex flex-col m-1">
                    <p className="text-xl">Your Sub Total:$ {total}</p>
                    <p className="mt-2 mb-2 text-red-500">
                      *Please complete all text boxes*
                    </p>

                    <div className="flex flex-row justify-between mb-2 ">
                      <label>Name: </label>
                      <input
                        className="border-[#c0a58e] border-2 p-2 rounded w-36 lg:w-48"
                        type="text"
                        value={billingName}
                        onChange={(e) => setBillingName(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-row justify-between mb-2 ">
                      <label>Phone: </label>
                      <input
                        className="border-[#c0a58e] border-2 p-2 rounded w-36 lg:w-48"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-row justify-between mb-2">
                      <label>Email: </label>
                      <input
                        className="border-[#c0a58e] border-2 p-2 rounded w-36 lg:w-48"
                        type="email"
                        value={billingEmail}
                        onChange={(e) => setBillingEmail(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-row justify-between mb-2">
                      <label>Address:</label>
                      <input
                        className="border-[#c0a58e] border-2 p-2 rounded w-36 lg:w-48"
                        type="text"
                        value={billingAddress}
                        onChange={(e) => setBillingAddress(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-row justify-between mb-2">
                      <label>City:</label>
                      <input
                        className="border-[#c0a58e] border-2 p-2 rounded w-36 lg:w-48"
                        type="text"
                        value={billingCity}
                        onChange={(e) => setBillingCity(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-row justify-between mb-2">
                      <label>State:</label>
                      <input
                        className="border-[#c0a58e] border-2 p-2 rounded w-36 lg:w-48"
                        type="text"
                        value={billingState}
                        onChange={(e) => setBillingState(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-row justify-between mb-2">
                      <label>Zip:</label>
                      <input
                        className="border-[#c0a58e] border-2 p-2 rounded w-36 lg:w-48"
                        type="text"
                        value={billingZip}
                        onChange={(e) => setBillingZip(e.target.value)}
                      />
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="stripe"
                        checked={paymentMethod === "stripe"}
                        onChange={handlePaymentMethodChange}
                      />
                      Pay with Stripe
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="payLater"
                        checked={paymentMethod === "payLater"}
                        onChange={handlePaymentMethodChange}
                      />
                      Pay Later
                    </div>
                    {paymentMethod === "stripe" && (
                      <div>
                        <CardElement className="mt-10" />
                      </div>
                    )}
                    {!selectedDate ||
                    !selectedTime ||
                    !selectedOptionDelivery ||
                    !billingName ||
                    !billingAddress ||
                    !billingEmail ||
                    !billingCity ||
                    !billingState ||
                    !billingZip ? (
                      <p>
                        Please fill out all required fields before submitting.
                      </p>
                    ) : (
                      <button
                        style={{
                          backgroundColor: "#c0a58e",
                          marginTop: "2rem",
                          marginLeft: ".5rem",
                          borderRadius: ".25rem",
                        }}
                        type="submit"
                      >
                        {paymentMethod === "stripe" ? "Pay" : "Submit"}
                      </button>
                    )}
                  </div>
                </div>

                <div class="flex flex-col m-0">
                  <div></div>
                </div>
              </div>
              <div class="">
                <div class="mt-12">
                  <Title level={5}>
                    Questions? Call or text us at{" "}
                    <a href="tel:+17072382741">707-238-2741</a>
                  </Title>
                </div>
              </div>
              <div class="mt-12"></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToddlerForm;

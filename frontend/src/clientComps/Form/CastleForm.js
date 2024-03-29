import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./../Form/childComps/DateSelection.css";
import moment from "moment";
import { Divider, TimePicker, Typography } from "antd";
import DateSelection2 from "./childComps/DateSelection2";
import SelectedOptionsList from "./childComps/SelectedOptions";
// import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Radio } from "antd";
import BalloonDropdown from "./childComps/BalloonDropdown";
const { Title } = Typography;

const options0 = [
  { value: "4-Hours", price: 300 },
  { value: "6-Hours", price: 400 },
  { value: "8-Hours", price: 500 },
];
const options1 = [
  { value: "No Thank You", price: 0 },
  { value: "Half Arch", price: 150 },
  { value: "Full Arch", price: 250 },
];

const options2 = [
  { value: "No Thank You", price: 0 },
  { value: "Large Text", price: 40 },
  { value: "Custom Theme", price: 75 },
];

const options3 = [
  { value: "No Thank You", price: 0 },
  { value: "Generator", price: 50 },
];

const options4 = [
  { value: "No Thank You", price: 0 },
  { value: "Custom", price: 50 },
  { value: "In-house Garland", price: 40 },
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
  { value: "Solid-Double", price: 250 },
  { value: "Solid-Trio", price: 300 },
  { value: "Complex-Double", price: 350 },
  { value: "Complex-Trio", price: 400 },
];
function CastleForm() {
  //Date Selection
  const [selectedDate, setSelectedDate] = useState(null);
  const [errors, setErrors] = useState({});
  console.log(setErrors)
  const [selectedBouncer, setSelectedBouncer] = useState("bouncer2");
  //Master State for Total
  const [selectedOptionDelivery, setDeliveryOption] = useState("");
  const [selectedDuration, setSelectedOption0] = useState(options0[0]);
  const [selectedBalloons, setSelectedOption1] = useState(options1[0]);
  const [selectedVinyl, setSelectedOption2] = useState(options2[0]);
  const [selectedGenerator, setSelectedOption3] = useState(options3[0]);
  const [selectedGarland, setSelectedOption4] = useState(options1[0]);
  const [selectedDelivery, setSelectedOption5] = useState(options5[0]);
  const [selectedBackdrop, setSelectedOption6] = useState(options6[0]);
  const [phone, setPhone] = useState("");

  // const handlePaymentMethodChange = (event) => {
  //   setPaymentMethod(event.target.value);
  // };
  const [total, setTotal] = useState(0);
  const [selectedColors, setSelectedColors] = useState([]);
  //billing Details
  const [billingName, setBillingName] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [billingCity, setBillingCity] = useState("");
  const [billingState, setBillingState] = useState("");
  const [billingZip, setBillingZip] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [billingEmail, setBillingEmail] = useState("");
  // const [paymentMethod, setPaymentMethod] = useState("stripe");
  const navigate = useNavigate();

  // const stripe = useStripe();
  // const elements = useElements();
  const generateOrderNumber = () => {
    const timestamp = Date.now();
    const randomNumber = Math.floor(Math.random() * 100);
    return `${timestamp}-${randomNumber}`;
  };
console.log(orderNumber)
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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   let newErrors = {};

  //   if (!selectedDate) {
  //     newErrors.selectedDate = "Reservation date is required";
  //   }

  //   setErrors(newErrors);
  //   if (Object.keys(newErrors).length === 0) {
  //     // Submit the form to the API here
  //     console.log("Form is valid!", selectedDate);
  //   }
  //   const orderNumber = generateOrderNumber();
  //   setOrderNumber(orderNumber);
  //   const { error, paymentMethod } = await stripe.createPaymentMethod({
  //     type: "card",
  //     card: elements.getElement(CardElement),
  //     billing_details: {
  //       name: billingName,
  //       email: billingEmail,
  //       address: {
  //         line1: billingAddress,
  //         city: billingCity,
  //         state: billingState,
  //         postal_code: billingZip,
  //       },
  //     },
  //   });

  //   if (!error) {
  //     const { id } = paymentMethod;
  //     try {
  //       const { data } = await axios.post(
  //         "https://pdb-backend-production.up.railway.app/api/charge",
  //         {
  //           amount: total * 100, //convert to cents
  //           paymentMethodId: id,
  //           orderNumber,
  //           option1: selectedBalloons.value,
  //           option2: selectedBalloons.value,
  //         }
  //       );
  //       console.log(data, "test");
  //       const time = new Date(selectedTime).toLocaleTimeString();
  //       const selectedColorNames = selectedColors.map((color) => color.name);
  //       const bookingData = {
  //         billingEmail: billingEmail,
  //         selectedDuration: selectedDuration.value,
  //         selectedBalloons: selectedBalloons.value,
  //         selectedVinyl: selectedVinyl.value,
  //         selectedGenerator: selectedGenerator.value,
  //         selectedGarland: selectedGarland.value,
  //         selectedDelivery: selectedDelivery.value,
  //         selectedDate: selectedDate,
  //         selectedTime: time,
  //         selectedColors: selectedColorNames,
  //         selectedOptionDelivery: selectedOptionDelivery,
  //         billingName: billingName,
  //         billingAddress: billingAddress,
  //         billingCity: billingCity,
  //         billingState: billingState,
  //         orderNumber: orderNumber,
  //         bouncerName: selectedBouncer,
  //         total_cost: total,
  //         phone: phone,
  //       };
  //       await axios.post(
  //         "https://pdb-backend-production.up.railway.app/api/booking",
  //         bookingData
  //       );
  //       setOrderPlaced(true);
  //       console.log(orderPlaced);
  //       navigate(`/success/${orderNumber}`);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  // };

  const handleDeliveryChange = (e) => {
    setDeliveryOption(e.target.value);
    if (e.target.value === "no") {
      setSelectedOption5(options5[0]); // set the default value for selectedOption5
    }
  };
  const handleOptionSelect = (bouncer) => {
    setSelectedBouncer(bouncer);
  };

  return (
    <div class="p-2 flex flex-col justify-center items-center align-center">
      <form
        class="m-10 mt-32"
        type="submit"
        onSubmit={
          handlePayLaterSubmit
        }
      >
        <div>
          <div class="grid grid-cols-1 grid-rows-3 gap-2 lg:grid-cols-3 lg:grid-rows-1 ">
            {/* Left */}
            <div class="col-start-1 lg:col-start-1  max-w-sm p-6 bg-white border-4 border-[#c0a58e] rounded-lg shadow-md ">
              <DateSelection2
                handleSelect1={setSelectedDate}
                handleOptionSelect={handleOptionSelect}
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
                  className="mb-6"
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
              {selectedBalloons.price === 150 ||
              selectedBalloons.price === 250 ? (
                <div>
                  <BalloonDropdown onColorsSelected={handleColorsSelected} />
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
                <Title className="m-0 p-0" level={5}>
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
                      {selectedDate && (
                        <p>
                          Selected date:{" "}
                          {moment(selectedDate).format("MM/DD/YYYY")}
                        </p>
                      )}

                      {selectedBalloons.price === 150 ||
                      selectedBalloons.price === 250 ? (
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
                        Please fill out all required fields before continuing.
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
                       Submit
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

export default CastleForm;

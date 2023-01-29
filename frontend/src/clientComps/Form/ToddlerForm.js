import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./../Form/childComps/DateSelection.css";
import moment from "moment";

// import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import {
  
  Divider,
  TimePicker,
  Typography,
} from "antd";
import DateSelection from "./childComps/DateSelection";
import SelectedOptionsList from "./childComps/SelectedOptions";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Radio } from "antd";


const { Title } = Typography;

const options0 = [
  { value: "4-Hours", price: 100 },
  { value: "6-Hours", price: 200 },
  { value: "8-Hours", price: 300 },
  { value: "Photo-Shoot", price: 300 },
];
const options1 = [
  { value: "No Thank You", price: 0 },
  { value: "Half Arch", price: 125 },
  { value: "Full Arch", price: 175 },
];

const options2 = [
  { value: "No Thank You", price: 0 },
  { value: "Safari", price: 75 },
  { value: "Princess", price: 75 },
  { value: "Custom Design", price: 100 },
];

const options3 = [
  { value: "No Thank You", price: 0 },
  { value: "Generator", price: 50 },
];

const options4 = [
  { value: "No Thank You", price: 0 },
  { value: "Green Ambre", price: 30 },
  { value: "Pink and Silver", price: 40 },
  { value: "Rainbow", price: 50 },
];
const options5 = [
  { value: "No Thank You", price: 0 },
  { value: "East Bay", price: 30 },
  { value: "South Bay", price: 40 },
  { value: "Test Bay", price: 50 },
];
const options6 = [
  { value: "No Thank You", price: 0 },
  { value: "Double Pannel", price: 100 },
  { value: "3 Pannels", price: 125 },
];
function Form() {
  //Date Selection
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedBouncer, setSelectedBouncer] = useState("default");
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
  const [billingName, setBillingName] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [billingCity, setBillingCity] = useState("");
  const [billingState, setBillingState] = useState("");
  const [billingZip, setBillingZip] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [billingEmail, setBillingEmail] = useState("");

  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();
  const generateOrderNumber = () => {
    const timestamp = Date.now();
    const randomNumber = Math.floor(Math.random() * 100);
    return `${timestamp}-${randomNumber}`;
  };
  const options = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    { value: "yellow", label: "Yellow" },
    { value: "purple", label: "Purple" },
  ];
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
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderNumber = generateOrderNumber();
    setOrderNumber(orderNumber);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        name: billingName,
        email:billingEmail,
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
        const { data } = await axios.post("http://localhost:5000/api/charge", {
          
          amount: total * 100, //convert to cents
          paymentMethodId: id,
          orderNumber,
          option1: selectedBalloons.value,
          option2: selectedBalloons.value,
        }
        );
        console.log(data,'test')
        const time = new Date(selectedTime).toLocaleTimeString();

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
          bouncerName: selectedBouncer.value
        };
        await axios.post("http://localhost:5000/api/booking", bookingData);
        setOrderPlaced(true);
        console.log(orderPlaced)
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
    selectedColors,
    selectedOptionDelivery,
    selectedTime,
    billingName,
    billingAddress,
    billingCity,
    billingState,
    orderNumber,
    billingEmail
  );

  return (
    <div class="p-2 flex flex-col justify-center items-center align-center">
      <form class="m-10" type="submit" onSubmit={handleSubmit}>
        <div>
          <div class="grid grid-cols-1 grid-rows-3 gap-2 lg:grid-cols-3 lg:grid-rows-1 ">
            {/* Left */}
            <div class="col-start-1 lg:col-start-1  max-w-sm p-6 bg-white border-4 border-[#c0a58e] rounded-lg shadow-md ">
              <DateSelection
                handleSelect1={setSelectedDate}
                handleOptionSelect={handleOptionSelect}
              />
              {selectedDate && (
                <p>
                  Reservation Date: {moment(selectedDate).format("MM/DD/YYYY")}
                </p>
              )}
            </div>

            {/* Middle I need to see if this works or not */}
            <div class="row-start-2 lg:col-start-2 lg:row-start-1 max-w-sm p-6 bg-white border-4 border-[#c0a58e] rounded-lg shadow-md">
              <div>
                <Title className="m-0 p-0" level={3}>
                  Start Time
                </Title>
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
              {selectedBalloons.price === 125 ||
              selectedBalloons.price === 175 ? (
                <div>
                  <label>Select up to 3 colors:</label>
                  {options.map((option) => (
                    <div key={option.value}>
                      <input
                        type="checkbox"
                        value={option.value}
                        checked={selectedColors.includes(option.value)}
                        onChange={(e) => {
                          if (!e.target.checked) {
                            setSelectedColors((prevColors) =>
                              prevColors.filter(
                                (color) => color !== e.target.value
                              )
                            );
                          } else {
                            if (selectedColors.length < 3) {
                              setSelectedColors([
                                ...selectedColors,
                                e.target.value,
                              ]);
                            }
                          }
                        }}
                        disabled={selectedColors.length === 3}
                      />
                      <label>{option.label}</label>
                    </div>
                  ))}
                  <button
                    className="bg-[#c0a58e] text-white p-1 rounded"
                    onClick={() => {
                      setSelectedOption1(options1[0]);
                      setSelectedColors([]);
                    }}
                  >
                    Cancel
                  </button>
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
              <div>
                <Title level={5}>Outside of Marin,Napa or Sonoma County?</Title>
                <Divider className="m-0" />
                <Radio.Group
                  onChange={handleDeliveryChange}
                  value={selectedOptionDelivery}
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

                      {selectedBalloons.price === 125 ||
                      selectedBalloons.price === 175 ? (
                        <div className="flex flex-row">
                          <p>Balloon Colors:</p>
                          {selectedColors.map((color) => (
                            <div className="flex flex-row" key={color}>
                              <p className="pr-1" style={{ color: color }}>
                                {color},
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div class="flex flex-col m-1">
                    <p className="text-xl">Your Sub Total:$ {total}</p>
                    <div className="flex flex-row justify-between mb-2 ">
                      <label>Name: </label>
                      <input
                        className="border-[#c0a58e] border-2 p-2 rounded w-36"
                        type="text"
                        value={billingName}
                        onChange={(e) => setBillingName(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-row justify-between mb-2">
                      <label>Email: </label>
                      <input
                        className="border-[#c0a58e] border-2 p-2 rounded w-36"
                        type="email"
                        value={billingEmail}
                        onChange={(e) => setBillingEmail(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-row justify-between mb-2">
                      <label>Address:</label>
                      <input
                        className="border-[#c0a58e] border-2 p-2 rounded w-36"
                        type="text"
                        value={billingAddress}
                        onChange={(e) => setBillingAddress(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-row justify-between mb-2">
                      <label>City:</label>
                      <input
                        className="border-[#c0a58e] border-2 p-2 rounded w-36"
                        type="text"
                        value={billingCity}
                        onChange={(e) => setBillingCity(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-row justify-between mb-2">
                      <label>State:</label>
                      <input
                        className="border-[#c0a58e] border-2 p-2 rounded w-36"
                        type="text"
                        value={billingState}
                        onChange={(e) => setBillingState(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-row justify-between mb-2">
                      <label>Zip:</label>
                      <input
                        className="border-[#c0a58e] border-2 p-2 rounded w-36"
                        type="text"
                        value={billingZip}
                        onChange={(e) => setBillingZip(e.target.value)}
                      />
                    </div>
                    <CardElement className="mt-10" />
                    <button
                      style={{
                        backgroundColor: "#c0a58e",
                        marginTop: "2rem",
                        marginLeft: ".5rem",
                        borderRadius: ".25rem",
                      }}
                      type="submit"
                    >
                      Pay
                    </button>
                  </div>
                </div>

                <div class="flex flex-col m-0">
                  <div></div>
                </div>
              </div>
              <div class=""></div>
              <div class="mt-12"></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;

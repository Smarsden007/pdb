import React, { useState, useEffect } from "react";
import axios from "axios";
import moment, { duration } from "moment";
// import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Button, Select, Typography } from "antd";
import DateSelection from "./childComps/DateSelection";
import SelectedOptionsList from "./childComps/SelectedOptions";
import ColorSelector from "../formComps/colorSelector";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const { Option } = Select;
const { Title } = Typography;

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
  { value: "option1", price: 20 },
  { value: "option2", price: 30 },
  { value: "option3", price: 40 },
  { value: "option4", price: 50 },
];

function Form() {
  //Date Selection
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedBouncer, setSelectedBouncer] = useState("default");
  //Master State for Total
  const [selectedOption1, setSelectedOption1] = useState(options1[0]);
  const [selectedOption2, setSelectedOption2] = useState(options2[0]);
  const [selectedOption3, setSelectedOption3] = useState(options3[0]);
  const [selectedOption4, setSelectedOption4] = useState(options1[0]);
  const [total, setTotal] = useState(0);
  const [selectedColors, setSelectedColors] = useState([]);
  const stripe = useStripe();
  const elements = useElements();
  const generateOrderNumber = () => {
    const timestamp = Date.now();
    const randomNumber = Math.floor(Math.random() * 100000);
    return `${timestamp}-${randomNumber}`;
  };
  useEffect(() => {
    let newTotal = 0;
    console.log("### setting total");
    newTotal += selectedOption1 ? selectedOption1.price : 0;
    newTotal += selectedOption2 ? selectedOption2.price : 0;
    newTotal += selectedOption3 ? selectedOption3.price : 0;
    newTotal += selectedOption4 ? selectedOption4.price : 0;
    console.log("### setting total", newTotal);
    setTotal(newTotal);
    console.log(total);
  }, [selectedOption1, selectedOption2, selectedOption3, selectedOption4]);

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
          total,
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
  const handleSelect1 = (date) => {
    setSelectedDate(date);
  };

  const handleOptionSelect = (bouncer) => {
    setSelectedBouncer(bouncer);
  };
  const handleSelectedColors = (colors) => {
    setSelectedColors(colors);
  };
  return (
    <div class="p-2">
      <form class="m-10" type="submit" onSubmit={handleSubmit}>
        <div>
          <div class="grid grid-cols-2 grid-rows-1 gap-2 md:grid-cols-2 lg:grid-cols-6">
            {/* Left */}
            <div class="col-start-1 col-span-2  md:grid-span-full lg:col-span-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md ">
              <DateSelection
                handleSelect1={handleSelect1}
                handleOptionSelect={handleOptionSelect}
              />
            </div>

            {/* Middle */}
            <div class="col-start-1 col-span-2 md:grid-span-full lg:col-end-5 lg:col-span-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
              <select
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

              <select
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
              <select
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
              {selectedOption1.price === 125 ||
              selectedOption1.price === 175 ? (
                <ColorSelector handleSelection={handleSelectedColors} />
              ) : null}
            </div>

            {/* Right */}
            <div class="col-start-1 col-span-2  md:grid-span-full lg:col-end-7 lg:col-span-2 h-46 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md ">
              <div class="mt-3">
                <div class="flex flex-col">
                  <div class="flex flex-col m-1">
                    <div>
                      <SelectedOptionsList
                        selectedOption1={selectedOption1}
                        selectedOption2={selectedOption2}
                        selectedOption3={selectedOption3}
                        selectedOption4={selectedOption4}
                      />
                    </div>
                  </div>
                  <div class="flex flex-col m-1">
                    <div>
                      Selected Balloon colors:
                      <ul>
                        {selectedColors.map((color) => (
                          <li key={color}>{color}</li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-xl">Your Sub Total:$ {total}</p>
                    <CardElement className="mt-10" />
                    <button
                      style={{
                        backgroundColor: "blue",
                        marginTop: "2rem",
                        marginLeft: ".5rem",
                      }}
                      type = 'submit'
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

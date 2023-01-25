import React, { useState, useEffect } from "react";
import moment, { duration } from "moment";
// import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Select, Typography } from "antd";
import DateSelection from "./childComps/DateSelection";
import RentalSelection from "./childComps/DurationSelection";
import DurationSelection from "./childComps/DurationSelection";
import BalloonSelection from "./childComps/BalloonSelection";
const { Option } = Select;
const { Title } = Typography;
function Form() {
  //Date Selection
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedBouncer, setSelectedBouncer] = useState("default");
  //Master State for Total
  const [selectedOption1, setSelectedOption1] = useState({});
  const [selectedOption2, setSelectedOption2] = useState({});
  const [selectedOption3, setSelectedOption3] = useState({});
  const [selectedOption4, setSelectedOption4] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let newTotal = 0;
    if (Object.keys(selectedOption1).length > 0) newTotal += selectedOption1.price;
    if (Object.keys(selectedOption2).length > 0) newTotal += selectedOption2.price;
    if (Object.keys(selectedOption3).length > 0) newTotal += selectedOption3.price;
    if (Object.keys(selectedOption4).length > 0) newTotal += selectedOption4.price;
    setTotal(newTotal);
    console.log(total)
  }, [selectedOption1, selectedOption2, selectedOption3, selectedOption4]);


  const options1 = [
    { value: "option1", price: 10 },
    { value: "option2", price: 20 },
  ];
  const options2 = [
    { value: "option1", price: 15 },
    { value: "option2", price: 25 },
    { value: "option3", price: 30 },
  ];
  const options3 = [
    { value: "option1", price: 5 },
    { value: "option2", price: 10 },
  ];
  // const options4 = [
  //   {value: "option1", price: 20},
  //   {value: "option2", price: 30},
  //   {value: "option3", price: 40},
  //   {value: "option4", price: 50},
  // ];

  const handleSelect1 = (date) => {
    setSelectedDate(date);
  };

  const handleOptionSelect = (bouncer) => {
    setSelectedBouncer(bouncer);
  };

  return (
    <div class="p-2">
      <form class="m-10" type="submit">
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
                  setSelectedOption1(
                    options1.find((option) => option.value === e.target.value)
                  )
                }
              >
                <option value={{}}>Select an option</option>
                {options1.map((option) => (
                  <option key={option.value} value={option}>
                    {option.value}
                  </option>
                ))}
              </select>
              <select onChange={(e) => setSelectedOption2(e.target.value)}>
                <option value={{}}>Select an option</option>
                {options2.map((option) => (
                  <option key={option.value} value={option}>
                    {option.value}
                  </option>
                ))}
              </select>
              <select onChange={(e) => setSelectedOption3(e.target.value)}>
                <option value={{}}>Select an option</option>
                {options3.map((option) => (
                  <option key={option.value} value={option}>
                    {option.value}
                  </option>
                ))}
              </select>
            </div>

            {/* Right */}
            <div class="col-start-1 col-span-2  md:grid-span-full lg:col-end-7 lg:col-span-2 h-46 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md ">
              <div class="mt-3">
                <div class="flex flex-row">
                  <div class="flex flex-col m-1">
                    {" "}
                    <div>Total: {total}</div>
                  </div>
                  <div class="flex flex-col m-1"></div>
                </div>

                <div class="flex flex-col m-0"></div>
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

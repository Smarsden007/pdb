import React, { useState } from "react";
import moment from "moment";
// import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import {  Select, Typography } from "antd";
import DateSelection from "./childComps/DateSelection";
import { RentalSelection } from "./childComps/RentalSelection";
const { Option } = Select;
const { Title } = Typography;
function Form() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedBouncer, setSelectedBouncer] = useState("default");
  const [selectedOption, setSelectedOption] = useState("default");

  //Pricing:
  const [prices, setPrices] = useState({
    bouncer1: { option1: 100, option2: 150, option3: 200 },
    bouncer2: { option1: 150, option2: 200, option3: 250 },
    bouncer3: { option1: 200, option2: 250, option3: 300 },
  });
  const [addOnPrices, setAddOnPrices] = useState({
    balloons: { halfArch: 125, fullArch: 175 },
    vinyl: { theme1: 75, theme2: 75, theme3: 75, theme4: 75 },
    addOn3: 20,
    addOn4: 25,
  });

  const handleSelect1 = (date) => {
    setSelectedDate(date);
  };

  const handleOptionSelect = (bouncer) => {
    setSelectedBouncer(bouncer);
  };
  const handleOptionChange = (value) => {
    setSelectedOption(value);
}

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
            <RentalSelection
    prices={prices}
    selectedBouncer={selectedBouncer}
    handleOptionChange={handleOptionChange}
/>

              
            </div>

            {/* Right */}
            <div class="col-start-1 col-span-2  md:grid-span-full lg:col-end-7 lg:col-span-2 h-46 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md ">
              <div class="mt-3">
                <div class="flex flex-row">
                  <div class="flex flex-col m-1"></div>
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

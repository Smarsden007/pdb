import React, { useState } from "react";
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
  const [totalPrice, setTotalPrice] = useState(0);
  //Drop Down Selections
  //-Duration-//
  const [durationPrice, setDurationPrice] = useState(0);
  const [durationSelection, setDurationSelection] =
    useState("Select a duration");
  //-Balloons-//
  const [balloonPrice, setBalloonPrice] = useState(0);
  const [balloonSelection, setBalloonSelection] = useState("Select an option");
  

  //Child Comp Handlers
  function handleChild1PriceSelection(price, option) {
    setDurationPrice(price);
    setDurationSelection(option);
    setTotalPrice((prev) => prev.durationPrice + prev.balloonPrice);
  }

  
  function handleChild2PriceSelection(price,option) {
    setBalloonPrice(price);
    setBalloonSelection(option);
    setTotalPrice((prev) => prev.durationPrice + prev.balloonPrice);
  }





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
              <DurationSelection
                handlePriceSelect={handleChild1PriceSelection}
              />
              <BalloonSelection 
              handlePriceSelect={handleChild2PriceSelection}
              />
            </div>

            {/* Right */}
            <div class="col-start-1 col-span-2  md:grid-span-full lg:col-end-7 lg:col-span-2 h-46 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md ">
              <div class="mt-3">
                <div class="flex flex-row">
                  <div class="flex flex-col m-1">
                    <p className="text-3xl">{totalPrice}</p>
                    <p>{durationSelection}</p>
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

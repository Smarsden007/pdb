import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Form from "../clientComps/Form/ToddlerForm";
import left from "./../Media/StarLeft.png";
import right from "./../Media/StarRight.png";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

export const Checkout = () => {
  return (
    <div>
      <div className="flex flex-row text-center -mb-10 pt-24 w-full align-center justify-center items-center">
        <img alt="stars" src={left} className="w-14 h-14" />
        <h1 className="text-6xl p-4 font-mono font-semibold text-black">
          CHECK-OUT
        </h1>
        <img alt="stars" src={right} className="w-14 h-14" />
      </div>
      <div>
        <Elements stripe={stripePromise}>
          <Form />
        </Elements>
      </div>
    </div>
  );
};

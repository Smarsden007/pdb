import React from "react";
import ToddlerForm from "./Form/ToddlerForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

export const ToddlerMasterCheckout = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <ToddlerForm />
      </Elements>
    </div>
  );
};

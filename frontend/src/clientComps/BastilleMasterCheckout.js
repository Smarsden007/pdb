import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import BastilleForm from "./Form/BastilleForm";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

export const BastilleMasterCheckout = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <BastilleForm />
      </Elements>
    </div>
  );
};

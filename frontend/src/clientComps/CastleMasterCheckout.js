import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CastleForm from "./Form/CastleForm";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

export const CastleMasterCheckout = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CastleForm />
      </Elements>
    </div>
  );
};

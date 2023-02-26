import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import left from "./../Media/StarLeft.png";
import right from "./../Media/StarRight.png";
import { BookingSelection } from "../clientComps/BookingSelection";
import { Helmet } from "react-helmet-async";
import './../App.css'
import { BalloonSelector } from "../clientComps/Form/childComps/BalloonSelector";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

export const Checkout = () => {
  return (
    <div>
       <Helmet>
        <title>Party Extras</title>
        <meta
          name="description"
          content="Book your bounce house now! Make a selection from our rentals and secure your date!"
        />
        <link rel="canonical" href="/checkout" />
      </Helmet>
      <div className="flex flex-row text-center -mb-10 pt-24 w-full align-center justify-center items-center">
        <img alt="stars" src={left} className="w-14 h-14" />
        <h1 className="text-2xl p-4 text-black test-font-2">
          Make a Selection
        </h1>
        <img alt="stars" src={right} className="w-14 h-14" />
      </div>
      <div>
        <Elements stripe={stripePromise}>
          <BookingSelection/>
        </Elements>
        <BalloonSelector />

      </div>
    </div>
  );
};

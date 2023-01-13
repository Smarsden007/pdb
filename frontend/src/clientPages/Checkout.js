import React from 'react'
import CheckoutTest from '../clientComps/CheckoutTest'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { OptionSelector } from '../clientComps/formComps/FormIntro';
import { DateChecker } from '../clientComps/formComps/dateChecker';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);



export const Checkout = () => {
  return (
    <div>Checkout
        <div>
            <Elements stripe={stripePromise}>
            <CheckoutTest />
            </Elements>
        </div>
    </div>
  )
}

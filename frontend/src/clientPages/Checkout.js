import React from 'react'
import CheckoutTest from '../clientComps/CheckoutTest'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe(process.env.STRIPE_SECRET_KEY);


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

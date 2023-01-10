import React from 'react'
import CheckoutTest from '../clientComps/CheckoutTest'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { OptionSelector } from '../clientComps/formComps/FormIntro';
import { DateChecker } from '../clientComps/formComps/dateChecker';

const stripePromise = loadStripe('pk_test_51MMODnEcHniquDkZiiLSRymT1Jo9Yfur8Ee1Zo7293n09EO7a1FolylvVIhJYWiupbvfPutibgutYg5Gob4nlkw7006gysP783');



export const Checkout = () => {
  return (
    <div>Checkout
        <div>
            <Elements stripe={stripePromise}>
            <CheckoutTest />
            <DateChecker />
            <OptionSelector />
            
            </Elements>

        </div>
    </div>
  )
}

import React from "react";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from "./Payment";


const PUBLIC_KEY = "pk_live_51OOZPDSHIkgqMVTrQJvzV6AzuSxjsy1oeixu4gH8DrFk76YhfbyEkytUqtsa3LQRXLTq0bL9qvJtGOhwB03mj9VA00Qerh3Wh6";

const stripeTestPromise = loadStripe(PUBLIC_KEY);


const StripeContainer =()=>{

    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}

export default StripeContainer;
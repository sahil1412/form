import { useState } from "react";
import StripeCheckout from 'react-stripe-checkout';
import apiCollections from "../../API/addUser.api";

const  PaymentForm=(props)=>{
const Stripe_Publishable = "pk_test_51OOZPDSHIkgqMVTrjTiPAEsNw87Q7XV52c7KjpNXoThLbmPJhbdShVgy1OssKhANqUeF0CiIZqEZpEhvxAZCny7900vSB2wCjX";


const onToken = (token) =>{
    // console.log(token);
    apiCollections.makePayment(token)
    .then((data)=>{
        if(data.data.success)
        {
        //   setMessage(data.data.message)
          props.status(data.data);
          console.log(data.data.message);
        }
        else
        {
        //   setMessage(data.data.message);
        props.status(data.data);
         console.log(data.data.message);
        }
      });
}
    return (
      <>
      <StripeCheckout
        token={onToken}
        name="Payment Gateway"
        currency="INR"
        amount={50000}
        allowRememberMe
        stripeKey={Stripe_Publishable}
        >
            <button type="button" class="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600">Make Payment</button>
            </StripeCheckout>
      </>
    )
}


export default PaymentForm;
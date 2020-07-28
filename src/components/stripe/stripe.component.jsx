import React from 'react';

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_foO8iBnVl5PKFGgbNYnvs0pd";

    const onToken = token =>{
        console.log(token);
        alert('Payment Success')
    }

    return(
        <StripeCheckout 
        label='Pay Now'
        name='Crown Clothing Db'
        billingAddress
        shippingAddress
        image = "https://svgshare.com/i/CUz.svg"
        description={`Your Total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton
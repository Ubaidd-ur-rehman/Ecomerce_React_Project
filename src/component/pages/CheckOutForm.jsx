import React from "react";
import { useStripe } from "@stripe/react-stripe-js";

const CheckOutForm = () => {
  const handleClick = () => {
    // Redirect to Stripe Payment Link
    window.location.href = "https://buy.stripe.com/test_6oEeWP7QL2oM1DWbII";
  };

  // return <button onClick={handleClick}>Checkout</button>;
};

export default CheckOutForm;

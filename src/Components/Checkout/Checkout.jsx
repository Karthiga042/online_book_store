import React from "react";
import checkout from '../Assets/checkout.gif';
import './Checkout.css';
import { Link } from "react-router-dom";

const Checkout = () =>
{
    return(
        <div className="checkout">
            <img src={checkout} alt="" />
            <h1>Your Order has Been Placed Successfully!!</h1>
            <h5>Within moments you will receive a notification 
     with the receipt of your purchase and track 
                every step of your order
            </h5>
            <Link to="/"><button>Finish Order</button></Link>
        </div>
    )
}
export default Checkout;
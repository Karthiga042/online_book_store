import React from "react";
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.jpg';
import { Link } from "react-router-dom";

const Offers=()=>
{
    return(
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers for you</h1>
                <p>ONLY ON BESTSELLERS PRODUCTS</p>
            <Link to="\bestsellers"> <button>Check Now</button></Link>   
            </div>
            <div className="offers-right">
            <Link to="/bestsellers">   <img src={exclusive_image} alt="" /></Link> 
            </div>
        </div>
    )
}
export default Offers

import React from "react";
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.jpg';

const Offers=()=>
{
    return(
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers for you</h1>
                <p>ONLY ON BESTSELLERS PRODUCTS</p>
            <a href="\bestsellers"> <button>Check Now</button></a>   
            </div>
            <div className="offers-right">
            <a href="/bestsellers">   <img src={exclusive_image} alt="" /></a> 
            </div>
        </div>
    )
}
export default Offers
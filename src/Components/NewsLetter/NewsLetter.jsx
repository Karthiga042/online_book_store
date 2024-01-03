import React from "react";
import './NewsLetter.css';
import { Link } from "react-router-dom";

const NewsLetter=()=>
{
    return(
        <div className="newsletter">
            <h1>Get Exclusive Offers on Your Email</h1>
            <p>Subscribe to our NewsLetter and Stay Updated</p>
            <div>
                <input type="email" placeholder="Your Email Id"/>
                <Link to ="/login"><button>Subscribe</button></Link>
            </div>
        </div>
    )
}
export default NewsLetter
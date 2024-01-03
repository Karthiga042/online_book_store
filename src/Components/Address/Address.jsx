import React from "react";
import './Address.css';
import { Link } from "react-router-dom";

const Address = () =>
{
    return(
        <div className="address">
            <div className="name">
                <input type="text" placeholder="First Name"/>
                <input type="text" id="second" placeholder="Last Name"/>
            </div>
            <input type="text" id="add" placeholder="Phone Number"/>
            <input type="email" id="add" placeholder="Email Address"/>
            <div className="pin-state-city">
            <input type="text" placeholder="Pincode" />
            <input type="text" id="sec" placeholder="State" />
            <input type="text" id="sec" placeholder="City" />
            </div>
            <input type="text" id="add" placeholder="House No., Building Name " />
            <input type="text" id="add" placeholder="Road Name, Area, Colony" />
            <div className="type-address">
            <Link to='/checkout'><button>Save Address & Continue</button></Link>
            </div>
        </div>
    )
}
export default Address;
import React from "react";
import allbanner from '../Assets/all_banners.jpg';
import './Header.css';

function Header()
{
    return(
            <div className="all-banner">
                <img src={allbanner} alt="" />
            </div>
    )
}
export default Header
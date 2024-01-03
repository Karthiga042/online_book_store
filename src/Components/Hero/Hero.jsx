import React from 'react';
import './Hero.css';
// import hand_icon from '../Assets/hand_icon.png'
// import arrow_icon from '../Assets/arrow_icon.png'
import hero_image from '../Assets/hero_image.jpg'

const Hero=()=>
{
    return(
        <div className='hero-right'>
            {/* <div className='hero-left'>
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                <div className="hand-hand-icon">
                    <img src={hand_icon} alt="" />
                </div>
                <p> New Collections of Books</p>
            </div>
            <div className='hero-latest-button'>
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
            </div>
            <div className='hero-right'> */}
            <a href="/newarrivals"><img src={hero_image} alt="" /></a> 
            </div>
        // </div>
    )
}
export default Hero
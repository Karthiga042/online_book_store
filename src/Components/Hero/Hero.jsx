import React from 'react';
import './Hero.css';
// import hand_icon from '../Assets/hand_icon.png'
// import arrow_icon from '../Assets/arrow_icon.png'
import hero_image from '../Assets/hero_image.jpg'
import { Link } from 'react-router-dom';

const Hero=()=>
{
    return(
        <div className='hero-right'>
            <Link to="/newarrivals"><img src={hero_image} alt="" /></Link> 
            </div>
    )
}
export default Hero

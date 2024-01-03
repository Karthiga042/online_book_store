import React from 'react';
import './CSS/Signup.css';

const Signup=()=>
{
    return(
        <div className='signup'>
            <div className='signup-container'>
                <h1>Sign Up</h1>
            <div className='signup-fields'>
             <input type="text" placeholder='Your Name'/>
             <input type="email" placeholder='Email Address'/>
             <input type="password" placeholder='Password'/>
             <a href='/'><button>Continue</button></a>
            <p className='signup-login'>
                Already have an account?
            <a href='/login'>   <span>  Login Here</span>  </a> 
            </p>
            </div>
            <div className='signup-agree'>
                <input type="checkbox" name='' id=''/>
                <p>By Continuing, I Agree to the Terms of Use & Privacy Policy</p>
            </div>    
            </div>
        </div>
    );
}
export default Signup
import React from 'react';
import './CSS/Login.css';

const Login=()=>
{
    return(
        <div className='login'>
            <div className='login-container'>
                <h1>Login</h1>
            <div className='login-fields'>
             <input type="email" placeholder='Email Address'/>
             <input type="password" placeholder='Password'/>
            <a href="/"><button>Continue</button></a>
            <p className='login-login'>
                Create an account?
            <a href='/signup'> <span>  Click Here</span>  </a>  
            </p>
            </div>
            <div className='login-agree'>
                <input type="checkbox" name='' id=''/>
                <p>By Continuing, I Agree to the Terms of Use & Privacy Policy</p>
            </div>    
            </div>
        </div>
    );
}
export default Login
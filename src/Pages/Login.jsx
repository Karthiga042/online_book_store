import React from 'react';
import './CSS/Login.css';
import { useState } from 'react';

const Login=()=>
{
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleUsernameChange = (e) => {
    const newUsername = e.target.value;

    setIsUsernameValid(/^[a-zA-Z0-9_]+$/.test(newUsername) && newUsername.length >= 5);

    setUsername(newUsername);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;

    setIsPasswordValid( /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-zA-Z0-9]).{8,}$/.test(newPassword));

    setPassword(newPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (isUsernameValid && isPasswordValid) {
      alert('Login successful!');
    } else {
      alert('Invalid username or password. Please check the fields.');
    }
  };

    return(
        <div className='login'>
            <div className='login-container'>
                <h1>Login</h1>
            <div className='login-fields'>
            <form onSubmit={handleLogin}>
        <div>
          <input type="text"id="username" placeholder="Username" value={username} onChange={handleUsernameChange} className={isUsernameValid ? '' : 'invalid'}/>
          {!isUsernameValid && <p className="error-message">Username must be alphanumeric characters.</p>}
        </div>
        <div>
        <input type="password" id="password" placeholder="Password" value={password} onChange={handlePasswordChange} className={isPasswordValid ? '' : 'invalid'}/>
          {!isPasswordValid && <p className="error-message">Password must contain at least one special character.</p>}
        </div>
        <button type='submit'>Continue</button>
        </form>
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


import React, { useState } from 'react';
import './CSS/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleUsernameChange = (e) => {
    const newUsername = e.target.value;

    const isValidUsername = /^[a-zA-Z0-9_]+$/.test(newUsername) && newUsername.length >= 5;
    setIsUsernameValid(isValidUsername);

    setUsername(newUsername);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;

    const isValidPassword = /^(?=.*[!@#$%^&*_(),.?":{}|<>])(?=.*[a-zA-Z0-9]).{8,}$/.test(newPassword);
    setIsPasswordValid(isValidPassword);

    setPassword(newPassword);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail);
    setIsEmailValid(isValidEmail);

    setEmail(newEmail);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (isUsernameValid && isPasswordValid && isEmailValid) {
      alert('Registered Successfully!');
    } else {
      alert('Invalid username, password, or email. Please check the fields.');
    }
  };

  return (
    <div className='login'>
      <div className='login-container'>
        <h1>Signup</h1>
        <div className='login-fields'>
          <form onSubmit={handleLogin}>
            <div>
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                className={isUsernameValid ? '' : 'invalid'}
              />
              {!isUsernameValid && <p className="error-message">Username must contain only alphanumeric characters.</p>}
            </div>
            <div>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                className={isPasswordValid ? '' : 'invalid'}
              />
              {!isPasswordValid && <p className="error-message">Password must contain at least one special character.</p>}
            </div>
            <div>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                className={isEmailValid ? '' : 'invalid'}
              />
              {!isEmailValid && <p className="error-message">Enter a valid email address.</p>}
            </div>
            <button type="submit">Continue</button>
          </form>
          <p className='login-login'>
            Create an account?
            <a href='/signup'> <span>  Click Here</span>  </a>
          </p>
        </div>
        <div className='login-agree'>
          <input type="checkbox" name='' id='' />
          <p>By Continuing, I Agree to the Terms of Use & Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Login;

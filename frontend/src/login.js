import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (username === '' || password === '') {
      setErrorMessage('Please fill in both fields.');
      return;
    }

    // Add logic to handle login here, for example an API call to verify credentials
    alert('Login successful!');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={handleUsernameChange} 
            placeholder="Enter your username" 
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={handlePasswordChange} 
            placeholder="Enter your password" 
          />
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;


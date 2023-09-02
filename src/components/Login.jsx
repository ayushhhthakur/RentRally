import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here, e.g., making an API request to the backend
    const userData = {
      email,
      password,
    };

    // Send the 'userData' object to your server for authentication
  };

  return (
    <>
    <div className='form'>
      <h1>Login</h1>
      <form>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button className='loginbtn' onClick={handleLogin}>Log In</button>
      </form>
      <p>
        Not have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
    </>
  );
};

export default Login;

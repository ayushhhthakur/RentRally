import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data.message); // Log the response message

      // Handle successful login, e.g., redirect to another page
    } catch (error) {
      console.error(error);
      // Handle error, e.g., display an error message
    }
  };

  return (
    <Wrapper>
      <body>
        <form className="form">
          <p className="title">Login </p>
          <p className="message">Welcome Back</p>
          <label>
            <input
              required=""
              placeholder="Email"
              type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            <input
              required=""
              placeholder="Password"
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button className="submit" type="button" onClick={handleLogin}>
            Submit
          </button>
          <p className="signin">
            Don't have an account?{' '}
            <Link to="/register" onClick={handleRegisterClick}>
              Sign Up
            </Link>{' '}
          </p>
        </form>
      </body>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
  }

  form {
    width: 450px;
    padding: 36px;
    background-color: #fff;
    border-radius: 8px;
  }
`;

export default Login;

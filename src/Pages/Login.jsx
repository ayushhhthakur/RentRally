import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import backgroundImage from '../assets/bg.jpg';
const Login = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    // Redirect to the Signin page
    navigate('/register');
  };

  return (
    <Wrapper>
      <body>
      <form className="form">
      <p className="title">Login </p>
      <p className="message">Welcome Back</p>
      <label>
        <input required="" placeholder="Email" type="email" className="input" />
      </label>

      <label>
        <input required="" placeholder="Password" type="password" className="input" />
      </label>

      <button className="submit">Submit</button>
      <p className="signin">
        Dont have an account?{' '}
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

form{
  width: 450px;
  padding: 36px;
  background-color:#fff;
  border-radius:8px;
  }

`;

export default Login;

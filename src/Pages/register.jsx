import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignInClick = () => {
    navigate('/login');
  };

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, password, confirmPassword }),
      });

      const data = await response.json();
      console.log(data.message); // Log the response message

      // Handle successful registration, e.g., redirect to login page
    } catch (error) {
      console.error(error);
      // Handle error, e.g., display an error message
    }
  };

  return (
    <Wrapper>
      <body>
        <form className="form">
          <p className="title">Register </p>
          <p className="message">Signup now and get full access to our app. </p>
          <div className="flex">
            <label>
              <input
                required=""
                placeholder="First Name"
                type="text"
                className="input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>

            <label>
              <input
                required=""
                placeholder="Last Name"
                type="text"
                className="input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
          </div>

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

          <label>
            <input
              required=""
              placeholder="Confirm Password"
              type="password"
              className="input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>

          <button className="submit" type="button" onClick={handleRegister}>
            Submit
          </button>
          <p className="signin">
            Already have an account?{' '}
            <Link to="/login" onClick={handleSignInClick}>
              Sign in
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
`;

export default Register;

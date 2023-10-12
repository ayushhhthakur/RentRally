import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Register = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    // Redirect to the Signin page
    navigate('/Login');
  };

  return (
    <Wrapper>
      <body>
        <form className="form">
          <p className="title">Register </p>
          <p className="message">Signup now and get full access to our app. </p>
          <div className="flex">
            <label>
              <input required="" placeholder="Firstnme" type="text" className="input" />
            </label>

            <label>
              <input required="" placeholder="Lastname" type="text" className="input" />
            </label>
          </div>

          <label>
            <input required="" placeholder="Email" type="email" className="input" />
          </label>

          <label>
            <input required="" placeholder="Password" type="password" className="input" />
          </label>

          <label>
            <input required="" placeholder="Confirm Password" type="password" className="input" />
          </label>

          <button className="submit">Submit</button>
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

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Function to handle password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value === confirmPassword) {
      setIsButtonDisabled(false);
      setError('');
    } else {
      setIsButtonDisabled(true);
      setError('Passwords do not match');
    }
  };

  // Function to handle confirm password change
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value === password) {
      setIsButtonDisabled(false);
      setError('');
    } else {
      setIsButtonDisabled(true);
      setError('Passwords do not match');
    }
  };

  const handleRegister = () => {
    // Check if the passwords match (additional check in case user submits with disabled button)
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Validate email format (you can use a regular expression for more complex validation)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Invalid email format');
      return;
    }

    // Implement your registration logic here, e.g., making an API request to the backend
    const userData = {
      username,
      email,
      password,
    };

    // Send the 'userData' object to your server for registration
  };

  return (
    <>
      <div className="form">
        <h1>Register</h1>
        <form>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
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
              onChange={handlePasswordChange}
            />
          </label>
          <br />
          <label>
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </label>
          <br />
          <button className="registerbtn" onClick={handleRegister} disabled={isButtonDisabled}>
            Register
          </button>
          {error && <p className="error">{error}</p>}
        </form>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </>
  );
};

export default Register;

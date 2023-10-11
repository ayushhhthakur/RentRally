// Login.js
import React, { useState } from 'react';
import {
  LoginContainer,
  Title,
  Form,
  Label,
  Input,
  SubmitButton,
  ErrorMessage,
} from './LoginStyles';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      // Simple validation
      if (!username || !password) {
        setError('Please enter both username and password.');
        return;
      }

      // Assuming you have a server endpoint for login
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        console.log(data.message);
        setError('');
      } else {
        // Login failed
        setError(data.message);
      }
    } catch (error) {
      console.error('Login failed:', error.message);
      setError('An error occurred while logging in.');
    }
  };

  return (
    <LoginContainer>
      <Title>Login</Title>
      <Form>
        <Label>
          Username:
          <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Label>
        <br />
        <Label>
          Password:
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Label>
        <br />
        <SubmitButton type="button" onClick={handleLogin}>
          Login
        </SubmitButton>
      </Form>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </LoginContainer>
  );
};

export default Login;

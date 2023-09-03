import React from 'react';

const Register = () => {
  return (
    <div style={styles.container}>
      <div style={styles.centerContent}>
        <h1 style={styles.heading}>Coming Soon</h1>
        <p style={styles.description}>
          We are working on something amazing! Please check back later.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // Makes the container take up the full viewport height
  },
  centerContent: {
    textAlign: 'center',
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  description: {
    fontSize: '18px',
  },
};

export default Register;

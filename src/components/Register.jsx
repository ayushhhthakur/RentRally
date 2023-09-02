import React from 'react';
import './Register.scss'; // Import your CSS file here if needed

const Register = () => {
  return (
    <div className="container">
      <header className="row text-center">
        <div className="col logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Goodreads_logo.svg/2560px-Goodreads_logo.svg.png"
            alt="goodreads-logo"
          />
        </div>
      </header>
      <main className="main row">
        <div className="left col">
          <img
            src="https://img.freepik.com/premium-vector/young-woman-enjoy-sitting-reading-book-hygge-concept-vector-illustration_194708-2078.jpg"
            alt="girl-reading-a-book"
          />
        </div>
        <div className="right col">
          <form className="sign-up">
            <h4>Find your next favorite book!</h4>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Create a password"
              />
            </div>
            <button type="submit" className="btn submit-btn">Create account</button>
          </form>
          <p className="hr-lines"> OR </p>
          <div className="social-sign-up">
            <button className="btn social"><i className="fab fa-google"></i> Sign up with Google</button>
          </div>
          <div className="sign-in">
            <p>Already have an account? <a href="#">Log in</a></p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;

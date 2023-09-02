import React, { useState } from 'react';
import './Navbar.css'
import '../App.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">Rent a Ride</a>
        </div>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="/">Home</a>
            </li>
            <li className="navbar-item">
              <a href="/vehicles">Vehicles</a>
            </li>
            <li className="navbar-item">
              <a href="/pricing">Pricing</a>
            </li>
            <li className="navbar-item">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="navbar-toggle" onClick={toggleNavbar}>
          <div className={`bar ${isOpen ? 'open' : ''}`} />
          <div className={`bar ${isOpen ? 'open' : ''}`} />
          <div className={`bar ${isOpen ? 'open' : ''}`} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

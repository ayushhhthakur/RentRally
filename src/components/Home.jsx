import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import carImage from '../assets/hyundai/creta.png';

const Home = () => {
  const navigate = useNavigate();

  const handleBookCarClick = () => {
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div className="home-container">
      <div className="home-text">
        <h1>Rent your first car on Rent a Ride today</h1>
        <p>Choose from a wide range of vehicles for your journey.</p>
        <div className="button-container">
          <button className="book-button" onClick={handleBookCarClick}>
            Book Car
          </button>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
      <div className="car-image">
        <img src={carImage} alt="Car" />
      </div>
    </div>
  );
};

export default Home;

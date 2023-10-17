import React from 'react';
import { RENT_CAR_DATA } from './RentCars.js';
import styled from 'styled-components';

const Cars = () => {
    return (
        <Wrapper>
            <div className="cars-container">
                {RENT_CAR_DATA.map((car, index) => (
                    <div key={index} className="car-card">
                        <img src={car.image} alt={car.name} className="car-image" />
                        <div className="car-details">
                            <h3>{car.name}</h3>
                            <p>Price: {car.price}</p>
                            <p>{car.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 80px); /* Adjusted to accommodate the Navbar height, assuming it's 80px */
    margin: 0;
    background-color: #f0f0f0;
    
    .cars-container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center; /* Align the container's content in the center horizontally */
    }

    .car-card {
        border: 1px solid #ccc;
        padding: 10px;
        width: 300px; /* Adjust the width as needed */
        text-align: center;
    }

    .car-card:hover {
        border-color: #4CAF50;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        transform: scale(1.05);
        transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s; 
    }
    
    .car-image {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
    }
`;

export default Cars;

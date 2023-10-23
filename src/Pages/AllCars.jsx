import React, { useState } from "react";
import { RENT_CAR_DATA } from '../components/RentCars';
import styled from 'styled-components';
import HeroPages from '../components/HeroPages';

const AllCarsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -10px; /* Add negative margin for spacing between boxes */
`;

const CarCard = styled.div`
  width: calc(25% - 20px); /* Set the width for 4 boxes in one row with spacing */
  margin: 10px; /* Add spacing around each box */
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CarImage = styled.img`
  width: 100%;
  height: auto;
`;

const CarCaption = styled.div`
  padding: 10px;
  text-align: center;
}`;

const CarName = styled.h3`
  font-size: 18px;
  margin: 0;
`;

const CarPrice = styled.p`
  margin: 5px 0;
`;

const CarDescription = styled.p`
  margin: 5px 0;
`;

const BookButton = styled.button`
  /* Define your button styles here */
  background-color: #0074d9;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  /* Add hover effect */
  &:hover {
    background-color: #0056b3;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  margin-right: 10px;
  background-image: url('/search-icon.png'); /* Add the path to your search icon image */
  background-position: 95% center;
  background-repeat: no-repeat;
`;

function AllCars() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredCars = RENT_CAR_DATA.filter(car =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort the filtered cars by price (from low to high)
  filteredCars.sort((a, b) => parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', '')));

  return (
    <>
      <HeroPages name="Vehicles" />
      <div className="search__text">
        <h1>Search for cars</h1>
      </div>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search for cars"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchContainer>
      <AllCarsContainer>
        {filteredCars.map((car, index) => (
          <CarCard key={index}>
            <CarImage src={car.image} alt={car.name} />
            <CarCaption>
              <CarName>{car.name}</CarName>
              <CarPrice>Price: ₹{car.price}</CarPrice>
              <CarDescription>{car.description}</CarDescription>
              <BookButton>Book now</BookButton>
            </CarCaption>
          </CarCard>
        ))}
      </AllCarsContainer>
    </>
  );
}

export default AllCars;

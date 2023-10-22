import React, { useState } from "react";
import { RENT_CAR_DATA } from '../components/RentCars';
import styled from 'styled-components';
import HeroPages from '../components/HeroPages';

const AllCarsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CarCard = styled.div`
  width: 30%;
  margin: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CarImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const CarDetails = styled.div`
  margin-top: 10px;
`;

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
            <CarDetails>
              <CarName>{car.name}</CarName>
              <CarPrice>Price: {car.price}</CarPrice>
              <CarDescription>{car.description}</CarDescription>
            </CarDetails>
          </CarCard>
        ))}
      </AllCarsContainer>
    </>
  );
}

export default AllCars;

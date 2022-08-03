import React, { createContext, useEffect, useState } from "react";

// Import data
import { housesData } from "../data";

// Create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState(["Property type (any)"]);
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  // return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    // remove duplication
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];
    // set Countries
    setCountries(uniqueCountries);
  }, [houses]);

  // return all Properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    // remove duplication
    const uniqueProperties = ["Location (any)", ...new Set(allProperties)];
    // set Countries
    setProperties(uniqueProperties);
  }, [houses]);

  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        setCountries,
        property,
        setProperty,
        properties,
        setProperties,
        price,
        setPrice,
        houses,
        setHouses,
        loading,
        handleClick
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;

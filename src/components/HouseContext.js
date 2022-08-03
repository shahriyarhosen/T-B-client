import React, { createContext, useState } from "react";

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

  return (
    <HouseContext.Provider value={
      {country, 
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
      loading,}
    }>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;

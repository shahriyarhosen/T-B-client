// Import data
import { housesData } from "../../data";
import { SearchFunction } from "./searchFunction";

const initialSate = {
  houses: housesData,
  country: "Location (any)",
  countries: [],
  property: "Property type (any)",
  properties: [],
  price: "Price range (any)",
  loading: false,
  SearchFunction,
};

const reducerFunction = (state = initialSate, action) => {
  switch (action.type) {
    case "HOUSES":
      return { ...state, houses: housesData };
    case "COUNTRY":
      return { ...state, country: action.payload };
    case "COUNTRIES":
      return { ...state, countries: action.payload };
    case "PROPERTY":
      return { ...state, property: action.payload };
    case "PROPERTIES":
      return { ...state, properties: action.payload };
    case "PRICE":
      return { ...state, price: action.payload };
    case "LOADING":
      return { ...state, loading: action.payload };
    case "SEARCH":
      return { ...state, SearchFunction: SearchFunction() };

    default:
      return state;
  }
};

export default reducerFunction;

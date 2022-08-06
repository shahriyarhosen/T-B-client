import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { countriesAction } from "../actions";

const AllCountry = () => {
  const { houses } = useSelector((state) => state.reducerFunction);
  const dispatch = useDispatch();

  // return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });

    // remove duplication
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];
    // // set Countries
    dispatch(countriesAction(uniqueCountries));
  }, []);

  return;
};

export default AllCountry;

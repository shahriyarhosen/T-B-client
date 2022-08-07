import { useSelector, useDispatch } from "react-redux";
import { housesAction, loadingAction } from "../actions";

export const SearchFunction = () => {
  const { houses, price, country, property } = useSelector(
    (state) => state.reducerFunction
  );
  const dispatch = useDispatch();

  console.log(houses, price, country, property);

  dispatch(loadingAction(true));
  // check the string if includes '(any)'
  const isDefault = (str) => {
    return str.split(" ").includes("(any)");
  };

  // get first string (price) and parse it to number
  const minPrice = parseInt(price.split(" ")[0]);
  // get last string (price) and parse it to number
  const maxPrice = parseInt(price.split(" ")[2]);

  const newHouses = houses.filter((house) => {
    const housePrice = parseInt(house.price);

    // all values are selected
    if (
      house.country === country &&
      house.type === property &&
      housePrice >= minPrice &&
      housePrice <= maxPrice
    ) {
      return house;
    }
    // all values are default
    if (isDefault(country) && isDefault(property) && isDefault(price)) {
      return house;
    }
    // country is not default
    if (!isDefault(country) && isDefault(property) && isDefault(price)) {
      return house.country === country;
    }
    // property is not default
    if (!isDefault(property) && isDefault(country) && isDefault(price)) {
      return house.type === property;
    }
    // price is not default
    if (!isDefault(price) && isDefault(country) && isDefault(property)) {
      if (housePrice >= minPrice && housePrice <= maxPrice) {
        return house;
      }
    }
    // country and property is not default
    if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
      return house.country === country && house.type === property;
    }
    // country and price is not default
    if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
      if (housePrice >= minPrice && housePrice <= maxPrice) {
        return house.country === country;
      }
    }
    // property and price is not default
    if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
      if (housePrice >= minPrice && housePrice <= maxPrice) {
        return house.type === property;
      }
    }
  });

  setTimeout(() => {
    return (
      newHouses.length < 1
        ? dispatch(housesAction([]))
        : dispatch(housesAction(newHouses)),
      dispatch(loadingAction(false))
    );
  }, 1000);
};

//  default SearchFunction;

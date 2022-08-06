import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { propertiesAction } from "../actions";

const AllProperties = () => {
  const { houses } = useSelector((state) => state.reducerFunction);
  const dispatch = useDispatch();

  // return all Properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    // remove duplication
    const uniqueProperties = ["Location (any)", ...new Set(allProperties)];

    // set Properties
    dispatch(propertiesAction(uniqueProperties));
    console.log(uniqueProperties)
  }, []);
  return;
};

export default AllProperties;

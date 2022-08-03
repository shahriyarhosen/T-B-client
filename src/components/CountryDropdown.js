import React, { useContext, useState } from "react";

// import icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

// import headless ui
import { Menu } from "@headlessui/react";

// import house context
import { HouseContext } from "./HouseContext";

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  console.log(country);
  return <Menu as="div" >CountryDropdown</Menu>;
};

export default CountryDropdown;

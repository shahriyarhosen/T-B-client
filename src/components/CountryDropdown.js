import React, { useContext, useState } from "react";

// import icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

// import headless ui
import { Menu } from "@headlessui/react";

// import house context
import { HouseContext } from "./HouseContext";

// react redux
import { useSelector, useDispatch } from "react-redux";
import { countryAction } from "../Store/actions";

const CountryDropdown = () => {
  const { country, countries } = useSelector(
    (state) => state.reducerFunction
  );
  const dispatch = useDispatch();

  // const { country, setCountry, countries } = useContext(HouseContext);

  console.log("countryDropdown:", [ country, countries]);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className=" dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left "
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{country}</div>
          <div className="text-[13px]">Select your Place</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {countries.map((country, index) => {
          return (
            <Menu.Item
              as="li"
              key={index}
              onClick={() => dispatch(countryAction(country))}
              // onClick={() => setCountry(country)}
              className="cursor-pointer hover:text-violet-700 transition"
            >
              {country}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;

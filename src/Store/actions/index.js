export const housesAction = (value) => {
  return { type: "HOUSES", payload: value };
};

export const countryAction = (value) => {
  return { type: "COUNTRY", payload: value };
};

export const countriesAction = (value) => {
  return { type: "COUNTRIES", payload: value };
};

export const propertyAction = (value) => {
  return { type: "PROPERTY", payload: value };
};

export const propertiesAction = (value) => {
  return { type: "PROPERTIES", payload: value };
};

export const priceAction = (value) => {
  return { type: "PRICE", payload: value };
};

export const loadingAction = (value) => {
  return { type: "LOADING", payload: value };
};

export const SearchAction = (value) => {
  return { type: "SEARCH", payload: value };
};

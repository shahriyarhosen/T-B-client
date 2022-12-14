import React from "react";
// Import Routes & Route
import { Route, Routes } from "react-router-dom";

// Import Components
import Footer from "./components/Footer";
import Header from "./components/Header";

// Import Pages
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import AllCountry from "./Store/reducers/allCountries";
import AllProperties from "./Store/reducers/allProperties";

const App = () => {
  return (
    <section className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
      <Footer />
      <AllCountry />
      <AllProperties />
    </section>
  );
};

export default App;

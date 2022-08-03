import React from "react";

// Import Components
import Banner from "../components/Banner";
import HouseList from "../components/HouseList";

const Home = () => {
  return (
    <section className="min-h-[1800px]">
      <Banner />
      <HouseList />
    </section>
  );
};

export default Home;

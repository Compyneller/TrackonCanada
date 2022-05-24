import React from "react";
import AboutUs from "../Components/AboutUs/AboutUs";
import Dashboard from "../Components/Dashboard/Dashboard";
import Mission from "../Components/Mission/Mission";
import NavBar from "../Components/NavBar/NavBar";
import Values from "../Components/Values/Values";
import Vission from "../Components/Vission/Vission";

const Home = () => {
  return (
    <>
      <Dashboard />
      <AboutUs />
      <Mission />
      <Vission />
      <Values />
    </>
  );
};

export default Home;

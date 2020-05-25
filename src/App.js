import React from "react";
import Navbar from "./components/Navbar";
import DateBuilder from "./components/DateBuilder";
import WeatherData from "./components/WeatherData";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <DateBuilder />
      <WeatherData />
    </div>
  );
};

export default App;

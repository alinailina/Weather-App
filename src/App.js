import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import FormCC from "./components/FormCC";
import Weather from "./components/Weather";

import Axios from "axios";

const App = () => {
  const [weather, setWeather] = useState([]);

  const URL =
    "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e6eddbde44c60e0fcdf74262613d9617";

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    await Axios.get(URL).then((response) => {
      setWeather(response.data);
    });
  };

  console.log(weather);

  return (
    <div className="App">
      <main>
        <Navbar />
        {/*<Form getWeather={getWeather} /> */}
        <FormCC getWeather={getWeather} />
        <Weather />
      </main>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import Axios from "axios";

// Children
import Form from "./Form";
import WeatherOutput from "./WeatherOutput";

const Data = () => {
  const [weather, setWeather] = useState("");

  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const API_KEY = "e6eddbde44c60e0fcdf74262613d9617";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    await Axios.get(URL).then((response) => {
      setWeather(response.data);
    });
  };

  //console.log(weather);

  return (
    <div>
      <Form getWeather={getWeather} />
      <WeatherOutput {...weather.main} />
    </div>
  );
};

export default Data;

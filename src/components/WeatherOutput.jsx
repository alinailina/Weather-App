import React from "react";

const WeatherOutput = ({ temp, feels_like, humidity, pressure }) => {
  return (
    <div className="output">
      <p>
        {" "}
        Tempreture: <span>{temp}</span>
      </p>
      <p>
        {" "}
        Feels like: <span>{feels_like}</span>
      </p>
      <p>
        {" "}
        Humidity: <span>{humidity}</span>
      </p>
      <p>
        Pressure: <span>{pressure}</span>
      </p>
    </div>
  );
};

export default WeatherOutput;

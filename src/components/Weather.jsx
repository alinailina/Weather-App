import React from "react";

const Weather = ({ weather }) => {
  console.log(weather);
  // i need to get to this -
  // console.log(weather.main);
  // and then descructure these values -
  const { temp, feels_like, humidity, pressure } = weather;

  return (
    <div>
      <p>
        {" "}
        Tempreture <span>{temp}</span>
      </p>
      <p>
        {" "}
        Feels like <span>{feels_like}</span>
      </p>
      <p>
        {" "}
        Humidity <span>{humidity}</span>
      </p>
      <p>
        {" "}
        Pressure <span>{pressure}</span>
      </p>
    </div>
  );
};

export default Weather;

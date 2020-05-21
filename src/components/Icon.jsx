import React from "react";

const Icon = ({ weather }) => {
  console.log(weather);

  // i need to get to this -
  // console.log(weather.weather);

  // and then descructure icon  -
  // const { icon } = weather.weather;
  return (
    <div>
      <img
        src="http://openweathermap.org/img/wn/10d@2x.png"
        alt="weather-icon"
      />
    </div>
  );
};

export default Icon;

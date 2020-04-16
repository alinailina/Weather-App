import React, { useState } from "react";

const Form = ({ getWeather }) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleCountry = () => {
    console.log("hello");
  };

  console.log(city);

  return (
    <div>
      <form onSubmit={getWeather}>
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => handleCity}
        />
        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={country}
          onChange={() => handleCountry}
        />
        <input type="submit" value="Get weather" />
      </form>
    </div>
  );
};

export default Form;

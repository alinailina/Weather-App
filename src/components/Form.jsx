import React, { useState } from "react";

const Form = (props) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  return (
    <form onSubmit={props.getWeather}>
      <label>City:</label>
      <input
        type="text"
        name="city"
        value={city}
        onChange={(e) => handleCity(e)}
      />
      <label>Country:</label>
      <input
        type="text"
        name="country"
        value={country}
        onChange={(e) => handleCountry(e)}
      />
      <input type="submit" value="Get weather" />
    </form>
  );
};

export default Form;

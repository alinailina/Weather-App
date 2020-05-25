import React, { useState } from "react";

const Form = (props) => {
  const [city, setCity] = useState("");

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  return (
    <form onSubmit={props.getWeather}>
      <label>
        City:
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => handleCity(e)}
        />
      </label>

      <input type="submit" value="Get weather" />
    </form>
  );
};

export default Form;

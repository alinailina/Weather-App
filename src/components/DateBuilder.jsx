import React from "react";

const DateBuilder = () => {
  const formatDate = (d) => {
    console.log(d.getDay());

    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    let day = days[d.getDay()].substring(0, 3);
    let month = months[d.getMonth()];
    let date = d.getDate();
    let year = d.getFullYear();

    return `${day} ${month} ${date}, ${year}`;
  };

  return <h2>Today: {formatDate(new Date())}</h2>;
};

export default DateBuilder;

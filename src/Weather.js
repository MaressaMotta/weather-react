import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  function displayWeather(response) {
    // eslint-disable-next-line no-template-curly-in-string
    alert("The weather in New York is ${response.data.main.temp}°C");
  }
  let apiKey = "31fe610defa048ce46128f578b9c1411";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
  return <Audio height="100" width="100" color="grey" ariaLabel="loading" />;
}

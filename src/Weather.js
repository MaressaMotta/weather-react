import React, { useState } from "react";
import axios from "axios";

import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  // eslint-disable-next-line no-template-curly-in-string
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "31fe610defa048ce46128f578b9c1411";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={updateCity} />
      <button type="Submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div className="description">
        {form} 
        <h2>
          {" "}
          {Math.round(weather.temperature)}°C in {city}
        </h2>

        <ul>
          <li> {weather.description}</li>
          <li> Humidity: {weather.humidity}%</li>
          <li> Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="gold"
        size="55"
        animate={true}
      />
    );
  }
}

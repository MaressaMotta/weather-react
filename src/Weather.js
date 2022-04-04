import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import ReactAnimatedWeather from "react-animated-weather";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);

  const [weather, setWeather] = useState({ ready: false });

  function displayWeather(response) {
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      city: response.data.name,
    });
  }
  function search() {
    let apiKey = "31fe610defa048ce46128f578b9c1411";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  // eslint-disable-next-line no-template-curly-in-string
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={updateCity} />
      <button type="Submit" className="w-100">
        Search
      </button>
    </form>
  );

  if (weather.ready) {
    return (
      <div className="description">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city.."
            onChange={updateCity}
          />
          <button type="Submit" className="w-100">
            Search
          </button>
        </form>
        <WeatherInfo data={setWeather} />
        <WeatherForecast coordinates={weather.coordinates} />
        <ul>
          <li>
            <FormattedDate date={setWeather.date} />
          </li>
          </ul>
      </div>
    );
  } else {
    search();
    return (
      <div className="icon mb-5">
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="gold"
          size="55"
          animate={true}
        />
        {form}
      </div>
    );
  }
}

import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";




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
      icon: response.data.weather[0].icon,
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
        <form  onSubmit={handleSubmit}
        className="search-form">
          <input
            type="search"
            placeholder="Enter a city.."
            className="form-control"
            autoFocus="on"
            onChange={updateCity}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </form>
        <WeatherInfo data={weather} />
        <WeatherForecast coordinates={weather.coordinates} />
        
      </div>
    );
  } else {
    search();
    return "Loading...";
        
  }
}

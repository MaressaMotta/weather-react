import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";


export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        It's{" "}
        <span className="temperature">
          {Math.round(props.data.temperature)}°C
        </span>{" "}
        in {props.data.city}
      </h1>
      <br />
      
        
         <div className="temperature-container d-flex ">
        <WeatherIcon code={props.data.icon} size={72} />
      
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {props.data.wind} km/h</li>
      </ul>
</div>
     
      
      <hr />
    </div>
  );
}

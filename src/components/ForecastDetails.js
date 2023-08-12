import React from "react";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, temperature, humidity, wind } = forecast;

  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <div className="forecast-details__stats">
        <h2>{formattedDate}</h2>
        <p>Max Temperature: {temperature.max}&deg;C</p>
        <p>Min Temperature: {temperature.min}&deg;C</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind Speed: {wind.speed} km/h</p>
        <p>Wind Direction: {wind.direction}</p>
      </div>
    </div>
  );
}

export default ForecastDetails;

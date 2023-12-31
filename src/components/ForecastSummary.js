import React from "react";
import "../styles/ForecastSummaries.css";
import iconData from "../data/iconData.json";

function ForecastSummary({ date, description, icon, temperature, onSelect }) {
  const weatherCode = `${icon.slice(0, 1)}00`;
  const formattedDate = new Date(date).toDateString();
  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{formattedDate}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <img src={iconData[weatherCode]} alt={description} />
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}&deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
      <button type="button" className="button" onClick={() => onSelect(date)}>
        More details
      </button>
    </div>
  );
}

export default ForecastSummary;

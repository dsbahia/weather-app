import "../styles/App.css";
import React, { useState } from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

function App({ forecasts, location }) {
  const [selectedDate, setSelectedDate] = useState(forecasts[0].date);
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate,
  );
  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries
        forecasts={forecasts}
        setSelectedDate={setSelectedDate}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
      <button type="button" onClick={() => console.log("Testing")}>
        More details
      </button>
    </div>
  );
}

export default App;

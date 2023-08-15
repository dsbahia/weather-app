import "../styles/App.css";
import React, { useState, useEffect } from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import getForecast from "../requests/getForecast";
import SearchForm from "./searchForm";

function App() {
  const [location, setLocation] = useState({
    city: "",
    country: "",
  });

  const [forecasts, setForecasts] = useState([]);
  const [selectedDate, setSelectedDate] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation, setErrorMessage);
  }, []);

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate,
  );

  const [searchText, setSearchText] = useState("");

  const handleCitySearch = () => {
    getForecast(
      setSelectedDate,
      setForecasts,
      setLocation,
      setErrorMessage,
      searchText,
    );
  };

  return (
    <div className="weather-app">
      <LocationDetails
        city={location.city}
        country={location.country}
        errorMessage={errorMessage}
      />
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
      />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
}

export default App;

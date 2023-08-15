import axios from "axios";

function getForecast(setSelectedDate, setForecasts, setLocation, searchText) {
  let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";
  if (searchText) {
    endpoint += `?city=${searchText}`;
  }
  axios.get(endpoint).then((response) => {
    setSelectedDate(response.data.forecasts[0].date);
    setForecasts(response.data.forecasts);
    setLocation(response.data.location);
  });
}

export default getForecast;

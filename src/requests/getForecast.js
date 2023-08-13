import axios from "axios";

function getForecast(setSelectedDate, setForecasts, setLocation) {
  axios
    .get("https://cmd-shift-weather-app.onrender.com/forecast")
    .then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    });
}

export default getForecast;

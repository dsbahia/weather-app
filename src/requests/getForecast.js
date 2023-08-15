import axios from "axios";

function getForecast(
  setSelectedDate,
  setForecasts,
  setLocation,
  setErrorMessage,
  searchText,
) {
  let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";
  if (searchText) {
    endpoint += `?city=${searchText}`;
  }
  axios
    .get(endpoint)
    .then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
      setErrorMessage("");
    })
    .catch((error) => {
      const errorMessages = {
        404: "City Not Found",
        500: "Server Error",
      };

      const defaultErrorMessage = "An error occurred";

      const errorMessage = error.response
        ? errorMessages[error.response.status] || defaultErrorMessage
        : defaultErrorMessage;

      setErrorMessage(errorMessage);
    });
}

export default getForecast;

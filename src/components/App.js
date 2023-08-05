import "../styles/App.css";
import React from "react";
import LocationDetails from "./LocationDetails";
import data from "../data/forecast.json";

function App() {
  const { city, country } = data.location;

  return <LocationDetails city={city} country={country} />;
}

export default App;

import React from "react";

function LocationDetails({ city, country }) {
  return (
    <h1>
      {city}, {country}
    </h1>
  );
}

export default LocationDetails;

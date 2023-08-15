import React from "react";
import PropTypes from "prop-types";
import "../styles/LocationDetails.css";

function LocationDetails({ city, country, errorMessage }) {
  return (
    <div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {city && country && (
        <h1>
          {city}, {country}
        </h1>
      )}
    </div>
  );
}

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};

LocationDetails.defaultProps = {
  errorMessage: "",
};

export default LocationDetails;

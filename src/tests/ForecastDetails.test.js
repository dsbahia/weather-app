import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../components/ForecastDetails";

describe("ForecastDetails", () => {
  it("renders forecast details correctly", () => {
    const forecast = {
      date: "2023-08-13",
      temperature: { max: 28, min: 18 },
      humidity: 60,
      wind: { speed: 15, direction: "NE" },
    };
    const { getByText } = render(<ForecastDetails forecast={forecast} />);

    expect(getByText("Max Temperature: 28°C")).toBeInTheDocument();
    expect(getByText("Min Temperature: 18°C")).toBeInTheDocument();
    expect(getByText("Humidity: 60%")).toBeInTheDocument();
    expect(getByText("Wind Speed: 15 km/h")).toBeInTheDocument();
    expect(getByText("Wind Direction: NE")).toBeInTheDocument();
  });
});

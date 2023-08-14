import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = {
    forecasts: [
      {
        date: 1111111,
        description: "Stub description",
        icon: 800,
        temperature: {
          min: 12,
          max: 22,
        },
      },
      {
        date: 2222222,
        description: "Another stub description",
        icon: 700,
        temperature: {
          min: 15,
          max: 25,
        },
      },
    ],
    onForecastSelect: jest.fn(),
  };

  it("matches snapshot", () => {
    const { asFragment } = render(
      <ForecastSummaries
        forecasts={validProps.forecasts}
        onForecastSelect={validProps.onForecastSelect}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct number of ForecastSummary instances", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries forecasts={validProps.forecasts} />,
    );

    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});

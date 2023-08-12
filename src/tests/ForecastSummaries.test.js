import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = [
    {
      date: 1111111,
      description: "Stub description",
      icon: "stubIcon",
      temperature: {
        min: 12,
        max: 22,
      },
    },
    {
      date: 2222222,
      description: "Another stub description",
      icon: "anotherStubIcon",
      temperature: {
        min: 15,
        max: 25,
      },
    },
  ];

  it("matches snapshot", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct number of ForecastSummary instances", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries forecasts={validProps} />,
    );

    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});

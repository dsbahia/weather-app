import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 1111111,
    description: "Test Description",
    icon: "testIcon",
    temperature: {
      min: 10,
      max: 20,
    },
  };
  it("renders forecast summary", () => {
    const { rendered } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />,
    );
    expect(rendered).toMatchSnapshot();
  });
});

import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import App from "../components/App";

describe("App", () => {
  it("renders correctly", async () => {
    const mockData = {
      data: {
        location: {
          city: "City",
          country: "Country",
        },
        forecasts: [
          {
            date: 11111111,
            temperature: {
              max: 20,
              min: 10,
            },
            wind: {
              speed: 10,
              direction: "n",
            },
            humidity: 20,
            description: "Description",
            icon: 700,
          },
        ],
      },
    };
    jest.spyOn(axios, "get").mockResolvedValue(mockData);

    const { asFragment } = render(<App />);

    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });
});

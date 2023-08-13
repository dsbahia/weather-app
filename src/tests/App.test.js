import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  it("renders App component correctly", () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    render(<App />);
    const h1Element = screen.getByText(/Manchester, UK/i);
    expect(h1Element).toBeInTheDocument();
  });
});

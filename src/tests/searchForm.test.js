import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../components/searchForm";

describe("SearchForm", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<SearchForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});

import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MyComponent from "../components/MyComponent";

afterEach(cleanup);

describe("something", () => {
  test("renders", () => {
    const { asFragment } = render(<MyComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});

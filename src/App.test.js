import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders UserTable", () => {
  const { getByText } = render(<App />);
  const header = getByText(/Welcome to the Users Table/i);
  expect(header).toBeInTheDocument();
});

test("renders Loading", () => {
  const { getByText } = render(<App />);
  const loader = getByText(/Users are loading/i);
  expect(loader).toBeInTheDocument();
});

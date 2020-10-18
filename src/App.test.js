import React from "react";
import { render } from "@testing-library/react";
import App from "./App";



test("renders Loading", () => {
  const { getByText } = render(<App />);
  const loader = getByText(/Users are loading/i);
  expect(loader).toBeInTheDocument();
});

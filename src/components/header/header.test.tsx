import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./header";
import { describe } from "node:test";

describe("Header", () => {
  test("renders correctly", () => {
    render(<Header />);
  });
});

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Hero from "./hero";
import { describe } from "node:test";

describe("Hero", () => {
  test("renders correctly", () => {
    render(<Hero />);
  });
});

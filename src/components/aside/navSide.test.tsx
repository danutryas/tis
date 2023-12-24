import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavSide from "./navSide";
import { describe } from "node:test";

describe("NavSide", () => {
  test("renders correctly", () => {
    render(<NavSide />);
  });
});

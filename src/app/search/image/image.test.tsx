import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ImagePage from "./page";
import { describe } from "node:test";

describe("Image-Page", () => {
  test("renders correctly", () => {
    render(<ImagePage />);
  });
});

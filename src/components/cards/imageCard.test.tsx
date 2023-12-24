import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ImageCard from "./imageCard";
import { describe } from "node:test";

describe("ImageCard", () => {
  test("renders correctly", () => {
    render(<ImageCard />);
  });
});

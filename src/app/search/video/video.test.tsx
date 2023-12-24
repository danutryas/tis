import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import VideoPage from "./page";
import { describe } from "node:test";

describe("Video-Page", () => {
  test("renders correctly", () => {
    render(<VideoPage />);
  });
});

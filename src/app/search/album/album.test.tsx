import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AlbumPage from "./page";
import { describe } from "node:test";

describe("Album-Page", () => {
  test("renders correctly", () => {
    render(<AlbumPage />);
  });
});

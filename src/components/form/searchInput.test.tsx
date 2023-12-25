import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SearchInput from "./searchInput";
import { describe } from "node:test";

describe("SearchInput", () => {
  test("renders correctly", () => {
    render(<SearchInput placeholder="Search..." />);
  });
});

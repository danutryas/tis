import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FormInput from "./formInput";
import { describe } from "node:test";

describe("SearchInput", () => {
  test("renders correctly", () => {
    render(<FormInput id="" label="Username" />);
  });
});

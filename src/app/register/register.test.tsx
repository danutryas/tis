import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Register from "./page";
import { describe } from "node:test";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("Register", () => {
  test("renders correctly", () => {
    render(<Register />);
  });
});

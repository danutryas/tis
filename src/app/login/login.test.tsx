import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Login from "./page";
import { describe } from "node:test";
// const useRouter = jest.spyOn(require("next/router"), "useRouter");

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("Login", () => {
  test("renders correctly", () => {
    render(<Login />);
  });
});

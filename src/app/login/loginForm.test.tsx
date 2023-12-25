import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import LoginForm from "./loginForm";
import { describe } from "node:test";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
}));

describe("Login", () => {
  test("SignIn Correctly", async () => {
    (signIn as jest.Mock).mockResolvedValue({
      error: null,
      ok: true,
      status: 200,
      url: "http://localhost:3000/login",
    });

    const { getByLabelText, getByText } = render(<LoginForm />);

    const usernameInput = getByLabelText("Username") as HTMLInputElement;
    const passwordInput = getByLabelText("Password") as HTMLInputElement;

    fireEvent.change(usernameInput, { target: { value: "admin" } });
    fireEvent.change(passwordInput, { target: { value: "password1234" } });
    fireEvent.click(getByText("Sign in"));

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledWith("credentials", {
        username: "admin",
        password: "password1234",
        redirect: false,
      });
    });
  });
  test("Invalid Usename/Password", async () => {
    (signIn as jest.Mock).mockResolvedValue({
      error: "Username/Password Salah",
      ok: false,
      status: 401,
      url: null,
    });

    const { getByLabelText, getByText } = render(<LoginForm />);

    const usernameInput = getByLabelText("Username") as HTMLInputElement;
    const passwordInput = getByLabelText("Password") as HTMLInputElement;

    fireEvent.change(usernameInput, { target: { value: "admin" } });
    fireEvent.change(passwordInput, { target: { value: "admin" } });
    fireEvent.click(getByText("Sign in"));

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledWith("credentials", {
        username: "admin",
        password: "admin",
        redirect: false,
      });
    });
  });
});

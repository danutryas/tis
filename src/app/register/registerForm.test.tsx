import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import RegisterForm from "./registerForm";
import { describe } from "node:test";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Axios from "../api/axios";

// const useRouter = jest.spyOn(require("next/router"), "useRouter");

// const [data, setData] = useState({
//   username: "admin",
//   password: "password1234",
// });

// jest.spyOn(React, "useState").mockImplementationOnce(() => setData(data));

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("http://localhost:8000/api/auth/signup", () => ({
  post: jest.fn(),
}));

describe("RegisterForm", () => {
  it("submits the form with correct data", async () => {
    // Mock the Axios.post function to return a success response
    (Axios.post as jest.Mock).mockResolvedValue({
      status: 200,
    });

    render(<RegisterForm />);

    // Get input fields
    const usernameInput = screen.getByLabelText("Username");
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const confirmPasswordInput = screen.getByLabelText("Confirm Password");

    // Type in valid credentials
    fireEvent.change(usernameInput, { target: { value: "validUsername" } });
    fireEvent.change(emailInput, {
      target: { value: "validEmail@example.com" },
    });
    fireEvent.change(passwordInput, { target: { value: "validPassword" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "validPassword" },
    });

    // Submit the form
    fireEvent.click(screen.getByText("Register New Account"));

    // Wait for the Axios.post function to be called
    await waitFor(() => {
      expect(Axios.post).toHaveBeenCalledWith("/api/auth/signup", {
        name: "validUsername", // Adjust the property names based on your actual implementation
        username: "validUsername",
        email: "validEmail@example.com",
        password: "validPassword",
      });
    });

    // You can also assert other expectations based on the response
    // For example, check if a success message is displayed
    expect(screen.getByText("Success Message")).toBeInTheDocument();
  });

  // Add more test cases as needed
});

import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import RegisterForm from "./registerForm";
import { describe } from "node:test";
import React from "react";
import axios from "axios";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("axios");

describe("RegisterForm", () => {
  it("submits the form with correct data", async () => {
    // Mock the Axios.post function to return a success response
    (axios.post as jest.Mock).mockImplementation(() =>
      Promise.resolve({
        error: null,
        ok: false,
        status: 201,
        message: "User registered successfully!",
      })
    );

    render(<RegisterForm />);

    // Get input fields
    const nameInput = screen.getByLabelText("Name");
    const usernameInput = screen.getByLabelText("Username");
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const confirmPasswordInput = screen.getByLabelText("Confirm Password");

    // Type in valid credentials
    fireEvent.change(nameInput, { target: { value: "Danu Tryas" } });
    fireEvent.change(usernameInput, { target: { value: "danutryas" } });
    fireEvent.change(emailInput, {
      target: { value: "danutryas@gmail.com" },
    });
    fireEvent.change(passwordInput, { target: { value: "password1234" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "password1234" },
    });

    // Submit the form
    fireEvent.click(screen.getByText("Register New Account"));

    // Wait for the Axios.post function to be called
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        "http://localhost:8000/api/auth/signup",
        {
          name: "Danu Tryas",
          username: "danutryas",
          email: "danutryas@gmail.com",
          password: "password1234",
        }
      );
    });

    // You can also assert other expectations based on the response
    // For example, check if a success message is displayed
    // expect(screen.getByText("Success Message")).toBeInTheDocument();
  });

  // Add more test cases as needed
  it("Username Already exists", async () => {
    // Mock the Axios.post function to return a success response
    (axios.post as jest.Mock).mockImplementation(() =>
      Promise.resolve({
        data: {
          error: "Validation Error",
          ok: false,
          status: 400,
          message: "Username is already exists.",
        },
      })
    );

    render(<RegisterForm />);

    // Get input fields
    const nameInput = screen.getByLabelText("Name");
    const usernameInput = screen.getByLabelText("Username");
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const confirmPasswordInput = screen.getByLabelText("Confirm Password");

    // Type in valid credentials
    fireEvent.change(nameInput, { target: { value: "user 01" } });
    fireEvent.change(usernameInput, { target: { value: "user" } });
    fireEvent.change(emailInput, {
      target: { value: "user1@gmail.com" },
    });
    fireEvent.change(passwordInput, { target: { value: "password1234" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "password1234" },
    });

    // Submit the form
    fireEvent.click(screen.getByText("Register New Account"));

    // Wait for the Axios.post function to be called
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        "http://localhost:8000/api/auth/signup",
        {
          name: "user 01",
          username: "user",
          email: "user1@gmail.com",
          password: "password1234",
        }
      );
    });
  });
  it("Email Already exists", async () => {
    // Mock the Axios.post function to return a success response
    (axios.post as jest.Mock).mockImplementation(() =>
      Promise.resolve({
        data: {
          error: "Validation Error",
          ok: false,
          status: 400,
          message: "Email is already exists.",
        },
      })
    );

    render(<RegisterForm />);

    // Get input fields
    const nameInput = screen.getByLabelText("Name");
    const usernameInput = screen.getByLabelText("Username");
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const confirmPasswordInput = screen.getByLabelText("Confirm Password");

    // Type in valid credentials
    fireEvent.change(nameInput, { target: { value: "user 01" } });
    fireEvent.change(usernameInput, { target: { value: "user1" } });
    fireEvent.change(emailInput, {
      target: { value: "user@gmail.com" },
    });
    fireEvent.change(passwordInput, { target: { value: "password1234" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "password1234" },
    });

    // Submit the form
    fireEvent.click(screen.getByText("Register New Account"));

    // Wait for the Axios.post function to be called
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        "http://localhost:8000/api/auth/signup",
        {
          name: "user 01",
          username: "user1",
          email: "user@gmail.com",
          password: "password1234",
        }
      );
    });

    // You can also assert other expectations based on the response
    // For example, check if a success message is displayed
    // expect(screen.getByText("Success Message")).toBeInTheDocument();
  });

  it("Email Already exists", async () => {
    // Mock the Axios.post function to return a success response
    (axios.post as jest.Mock).mockImplementation(() =>
      Promise.resolve({
        data: {
          error: "Validation Error",
          ok: false,
          status: 400,
          message: "Email is already exists.",
        },
      })
    );

    render(<RegisterForm />);

    // Get input fields
    const nameInput = screen.getByLabelText("Name");
    const usernameInput = screen.getByLabelText("Username");
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const confirmPasswordInput = screen.getByLabelText("Confirm Password");

    // Type in valid credentials
    fireEvent.change(nameInput, { target: { value: "user 01" } });
    fireEvent.change(usernameInput, { target: { value: "user1" } });
    fireEvent.change(emailInput, {
      target: { value: "user@gmail.com" },
    });
    fireEvent.change(passwordInput, { target: { value: "password1234" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "password1234" },
    });

    // Submit the form
    fireEvent.click(screen.getByText("Register New Account"));

    // Wait for the Axios.post function to be called
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        "http://localhost:8000/api/auth/signup",
        {
          name: "user 01",
          username: "user1",
          email: "user@gmail.com",
          password: "password1234",
        }
      );
    });
    // You can also assert other expectations based on the response
    // For example, check if a success message is displayed
    // expect(screen.getByText("Success Message")).toBeInTheDocument();
  });
});

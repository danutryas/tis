import {
  emailValidation,
  passwordMatch,
  emptyValidation,
  usernameLength,
  lengthValidation,
} from "./formValidation"; // Update with the correct path to your utility file

describe("Utility Functions", () => {
  describe("emailValidation", () => {
    test("valid email", () => {
      const setStateMock = jest.fn();
      emailValidation("test@gmail.com", setStateMock);
    });

    test("invalid email", () => {
      const setStateMock = jest.fn();
      emailValidation("invalid-email", setStateMock);
    });
  });

  describe("passwordMatch", () => {
    test("matching passwords", () => {
      const setStateMock = jest.fn();
      const result = passwordMatch("password", "password", setStateMock);
      expect(result).toBe(true);
    });

    test("non-matching passwords", () => {
      const setStateMock = jest.fn();
      const result = passwordMatch("password1", "password2", setStateMock);
      expect(result).toBe(false);
    });
  });

  describe("emptyValidation", () => {
    test("valid input", () => {
      const setStateMock = jest.fn();
      const inputData = {
        username: "testuser",
        email: "test@example.com",
        password: "password",
        confirmPassword: "password",
      };
      emptyValidation(inputData, setStateMock);
    });

    test("empty input", () => {
      const setStateMock = jest.fn();
      const inputData = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
      emptyValidation(inputData, setStateMock);
    });
  });

  describe("usernameLength", () => {
    test("valid username length", () => {
      const setStateMock = jest.fn();
      usernameLength("testuser", setStateMock);
    });

    test("invalid username length", () => {
      const setStateMock = jest.fn();
      usernameLength("short", setStateMock);
    });
  });

  describe("lengthValidation", () => {
    test("valid length", () => {
      const result = lengthValidation("test", 3);
      expect(result).toBe(true);
    });

    test("invalid length", () => {
      const result = lengthValidation("test", 5);
      expect(result).toBe(false);
    });
  });
});

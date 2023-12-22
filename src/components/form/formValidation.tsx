import { InputForm } from "@/app/register/page";
import { PasswordData, RegisterData } from "@/app/register/registerForm";
import { Dispatch, SetStateAction } from "react";

export const emailValidation = (
  data: string,
  setState: Dispatch<SetStateAction<InputForm>>
) => {
  const emailRegex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (emailRegex.test(data)) {
    setState((errors) => ({
      ...errors,
      email: "",
    }));
  } else {
    setState((errors) => ({
      ...errors,
      email: "Masukkan email dengan benar",
    }));
  }
};

export const passwordMatch = (
  password: String,
  confirmPassword: String,
  setState: Dispatch<SetStateAction<PasswordData>>
) => {
  if (password === confirmPassword) {
    setState((errors) => ({
      ...errors,
      password: "",
      confirmPassword: "",
    }));
    return true;
  }
  setState((errors) => ({
    ...errors,
    password: "Kata Sandi tidak sama",
    confirmPassword: "Kata Sandi tidak sama",
  }));
  return false;
};

export const emptyValidation = (
  inputData: RegisterData | PasswordData,
  setState:
    | Dispatch<SetStateAction<RegisterData>>
    | Dispatch<SetStateAction<PasswordData>>
) => {
  for (const key in inputData) {
    if (
      inputData.hasOwnProperty(key) &&
      inputData[key as keyof (RegisterData | PasswordData)] === ""
    ) {
      setState((errors: any) => ({
        ...errors,
        [key]: `${key} is required`,
      }));
    } else {
      setState((errors: any) => ({
        ...errors,
        [key]: "",
      }));
    }
  }
};

export const usernameLength = (
  username: string,
  setState: Dispatch<SetStateAction<InputForm>>
) => {
  if (username.length < 5) {
    setState((errors) => ({
      ...errors,
      username: "Username minimal 5 karakter",
    }));
  }
};

export const lengthValidation = (data: string, minLength: number) => {
  return data.length >= minLength;
};

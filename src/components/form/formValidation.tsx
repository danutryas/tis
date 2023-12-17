import { InputForm } from "@/app/register/page";
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
  password: string,
  confirmPassword: string,
  setState: Dispatch<SetStateAction<InputForm>>
) => {
  if (password === confirmPassword) {
    setState((errors) => ({
      ...errors,
      password: "",
      confirmPassword: "",
    }));
  } else {
    setState((errors) => ({
      ...errors,
      password: "Kata Sandi tidak sama",
      confirmPassword: "Kata Sandi tidak sama",
    }));
  }
};

export const emptyValidation = (
  inputData: InputForm,
  setState: Dispatch<SetStateAction<InputForm>>
) => {
  for (const key in inputData) {
    if (
      inputData.hasOwnProperty(key) &&
      inputData[key as keyof InputForm] === ""
    ) {
      setState((errors) => ({
        ...errors,
        [key]: `${key} is required`,
      }));
    } else {
      setState((errors) => ({
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

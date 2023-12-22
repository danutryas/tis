"use client";
import Link from "next/link";
import "../../styles/login.scss";
import FormInput from "@/components/form/input";
import { ChangeEvent, useState } from "react";
import {
  emailValidation,
  emptyValidation,
  passwordMatch,
  usernameLength,
} from "@/components/form/formValidation";
import RegisterForm from "./registerForm";
// import {
//   FacebookSVG,
//   InstagramSVG,
//   TwitterSVG,
// } from "../../../public/images/icons";

export interface InputForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const defaultInput: InputForm = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  // const [inputError, setInputError] = useState<InputForm>(defaultInput);
  // const [inputData, setInputData] = useState<InputForm>(defaultInput);

  // const onSubmit = () => {
  //   formValidation();
  //   emptyValidation(inputData, setInputError);
  // };

  // const formValidation = () => {
  //   emailValidation(inputData.email, setInputError);
  //   passwordMatch(inputData.password, inputData.confirmPassword, setInputError);
  //   usernameLength(inputData.username, setInputError);
  // };

  // const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
  //   setInputData((data) => ({ ...data, [e.target.name]: e.target.value }));
  // };

  return (
    <section className="min-h-screen flex items-stretch text-white ">
      <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center background object-bottom	object-cover">
        <div className="absolute bg-black opacity-70 inset-0 z-0"></div>
        <div className="w-full px-24 z-10">
          <h1 className="text-5xl font-bold text-left tracking-wide">
            Keep it special
          </h1>
          <p className="text-3xl my-4">
            Elevate the Ordinary, Preserve the Extraordinary. Capture Your
            Personal Memories in a Unique Way, Anywhere.
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-[#161616]">
        <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center background object-bottom object-cover">
          <div className="absolute bg-black opacity-70 inset-0 z-0"></div>
        </div>
        <div className="w-full py-6 z-20">
          <h1 className="mt-6 mb-8 font-bold text-lg tracking-wider">
            REGISTER
          </h1>
          <RegisterForm />
        </div>
      </div>
    </section>
  );
};

export default Register;

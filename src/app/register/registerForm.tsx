import {
  emptyValidation,
  lengthValidation,
  passwordMatch,
} from "../../components/form/formValidation";
import FormInput from "../../components/form/formInput";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
// import Axios from "../api/axios";

export interface RegisterData {
  name: string;
  username: string;
  email: string;
}
const defaultValueRegisterData: RegisterData = {
  name: "",
  username: "",
  email: "",
};

export interface PasswordData {
  password: string;
  confirmPassword: string;
}

const defaultValuePasswordData: PasswordData = {
  password: "",
  confirmPassword: "",
};

const RegisterForm = () => {
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const [isValid, setIsValid] = useState<boolean>(false);
  // data
  const [registerData, setRegisterData] = useState<RegisterData>(
    defaultValueRegisterData
  );
  const [dataError, setDataError] = useState<RegisterData>(
    defaultValueRegisterData
  );
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  // password
  const [password, setPassword] = useState<PasswordData>(
    defaultValuePasswordData
  );
  const [passwordError, setPasswordError] = useState<PasswordData>(
    defaultValuePasswordData
  );
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const checkEmpty = (obj: any) => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value: string = obj[key];
        if (value === "") return false;
      }
    }
    return true;
  };

  const formValidation = () => {
    passwordMatch(
      password.password,
      password.confirmPassword,
      setPasswordError
    );
    if (!lengthValidation(password.password, 8)) {
      setPasswordError((error) => ({
        ...error,
        password: "Password harus lebih dari 8 karakter",
      }));
    } else {
      setPasswordError((error) => ({
        ...error,
        password: "",
      }));
    }

    if (!lengthValidation(registerData.username, 5)) {
      setDataError((error) => ({
        ...error,
        username: "Username harus lebih dari 5 huruf",
      }));
    } else {
      setDataError((error) => ({
        ...error,
        username: "",
      }));
    }
    emptyValidation(registerData, setDataError);
    emptyValidation(password, setPasswordError);
  };

  const onSubmit = async () => {
    formValidation();
    if (isValid) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/auth/signup",
          {
            ...registerData,
            password: password.password,
          }
        );
        console.log(response.data);
        setError(response.data.message);
        if (response.data.ok) {
          // redirect to profile page
          setDataError(defaultValueRegisterData);
          setError("");
          router.push("/login");
        }
      } catch (e: any) {
        setError(e.response.data.message);
      }
    } else {
      setError("Please Fill all the Data");
    }
  };

  useEffect(() => {
    if (checkEmpty(dataError) || checkEmpty(passwordError)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [dataError, passwordError]);

  return (
    <>
      {error !== "" ? (
        <div className="bg-red-200 text-red-800 font-bold py-3 mb-2 rounded-md w-2/3 mx-auto text-sm">
          {error}
        </div>
      ) : null}
      <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
        <div className="pb-2 pt-4">
          <FormInput
            id="name"
            required
            label="Name"
            placeholder="john doe"
            autoComplete="name"
            error={dataError.username}
            onChange={(e) => onChangeInput(e)}
          />
        </div>
        <div className="pb-2 pt-4">
          <FormInput
            id="username"
            required
            label="Username"
            placeholder="johndoe"
            autoComplete="username"
            error={dataError.username}
            onChange={(e) => onChangeInput(e)}
          />
        </div>
        <div className="pb-2 pt-4">
          <FormInput
            id="email"
            required
            label="Email"
            type="email"
            placeholder="johndoe@company.com"
            autoComplete="email"
            error={dataError.email}
            onChange={(e) => onChangeInput(e)}
          />
        </div>
        <div className="pb-2 pt-4">
          <FormInput
            id="password"
            type="password"
            required
            label="Password"
            placeholder="********"
            error={passwordError.password}
            onChange={(e) => onChangePassword(e)}
          />
        </div>
        <div className="pb-2 pt-4">
          <FormInput
            id="confirmPassword"
            type="password"
            required
            label="Confirm Password"
            placeholder="********"
            error={passwordError.confirmPassword}
            onChange={(e) => onChangePassword(e)}
          />
        </div>
        <div className="px-4 pb-2 pt-8">
          <button
            type="button"
            onClick={onSubmit}
            className="text-gray-900 font-bold bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Register New Account
          </button>
          <p className="text-gray-700 text-sm mt-2">
            Already have an account?{" "}
            <Link href="/login" className="text-pink-400 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;

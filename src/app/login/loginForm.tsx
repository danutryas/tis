import FormInput from "../../components/form/formInput";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEventHandler, SyntheticEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";

interface LoginData {
  username: string;
  password: string;
}

const defaultValueLoginData: LoginData = {
  username: "",
  password: "",
};

const LoginForm = () => {
  const { toast } = useToast();
  const [error, setError] = useState<string>("");
  const [loginData, setLoginData] = useState<LoginData>(defaultValueLoginData);
  const router = useRouter();

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData((data) => ({ ...data, [e.target.name]: e.target.value }));
    setError("");
  };

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await signIn("credentials", {
        username: loginData.username,
        password: loginData.password,
        redirect: false,
      });
      if (response?.status === 401) {
        toast({
          description: response.error,
          variant: "destructive",
        });
      } else if (response?.status === 201) {
        router.push("/");
      }
      console.log(response);
    } catch (e: any) {
      console.log(e);
    }
  };

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
            id="username"
            required
            label="Username"
            placeholder="johndoe"
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
            onChange={(e) => onChangeInput(e)}
          />
        </div>
        <div className="px-4 pb-2 pt-8">
          <button
            type="button"
            className="text-gray-900 font-bold  bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800  rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={(e: SyntheticEvent) => onSubmit(e)}
          >
            Sign in
          </button>
          <p className="text-gray-700 text-sm mt-2">
            Don't have an account?{" "}
            <Link href="/register" className="text-pink-400 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default LoginForm;

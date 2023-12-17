import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  label: string;
  error?: string;
}

const FormInput = ({
  type = "text",
  id,
  placeholder,
  required = false,
  label,
  error,
  ...inputProps
}: InputProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className={`block mb-2 text-sm font-medium  text-left ${
          error
            ? "text-red-700 dark:text-red-500"
            : "text-gray-900 dark:text-white"
        }`}
      >
        {label}
      </label>
      <input
        {...inputProps}
        type={type}
        id={id}
        name={id}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md ${
          error
            ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 dark:text-red-500  dark:border-red-500"
            : "focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        } block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400   outline-none`}
        placeholder={placeholder}
        required={required}
      />
      {error ? (
        <p className=" text-sm text-red-600 dark:text-red-500 text-left">
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default FormInput;

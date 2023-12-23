import { InputHTMLAttributes } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

interface SearchInput extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  onSubmit?: () => void;
}

const SearchInput = ({ placeholder, onChange, onSubmit }: SearchInput) => {
  return (
    <div className="w-1/2 flex h-12 mx-auto">
      <input
        type="text"
        placeholder={placeholder}
        className="py-2 px-6 border-2 border-gray-200 dark:border-gray-700 w-full rounded-l-full"
        onChange={onChange}
      />
      <div
        className="border-2 border-gray-700 h-12 flex items-center justify-center pl-6 pr-4 border-l-0 rounded-r-full bg-gray-200"
        onClick={onSubmit}
      >
        <SearchOutlinedIcon className="" />
      </div>
    </div>
  );
};

export default SearchInput;

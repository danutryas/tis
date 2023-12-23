"use client";
import ImageCard from "@/components/cards/imageCard";
import SearchInput from "@/components/form/searchInput";
import { ChangeEvent, useEffect, useState } from "react";

const SearchAlbum = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [datas, setDatas] = useState();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  useEffect(() => {
    console.log(userInput);
  }, [userInput]);

  return (
    <div className="">
      <SearchInput
        placeholder="Search Albums... "
        onChange={(e) => onChange(e)}
      />
      <div className="w-full mt-20 flex gap-6">
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </div>
  );
};

export default SearchAlbum;

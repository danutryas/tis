"use client";
import ImageCard from "@/components/cards/imageCard";
import SearchInput from "@/components/form/searchInput";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";

const SearchVideo = () => {
  const [userInput, setUserInput] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const onSubmit = async () => {
    try {
      const response = await axios.get("https://images-api.nasa.gov/search", {
        params: {
          q: userInput,
          media_type: "video",
        },
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(userInput);
  }, [userInput]);

  return (
    <div className="">
      <SearchInput
        placeholder="Search Videos... "
        onChange={(e) => onChange(e)}
        onSubmit={onSubmit}
      />
      <div className="w-full mt-20 flex gap-6">
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </div>
  );
};

export default SearchVideo;

"use client";
import ImageCard from "@/components/cards/imageCard";
import SearchInput from "@/components/form/searchInput";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { DataCard, defaultValueDataCard } from "../image/page";

const SearchVideo = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [datas, setDatas] = useState<DataCard[]>([defaultValueDataCard]);

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
      setDatas(response.data.collection.items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(userInput);
  }, [userInput]);

  return (
    <div className="container mx-auto">
      <SearchInput
        placeholder="Search Videos... "
        onChange={(e) => onChange(e)}
        onSubmit={onSubmit}
      />
      <div className="w-full mt-20 grid gap-y-8 gap-x-6 grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 justify-items-start">
        {datas[0] !== defaultValueDataCard
          ? datas.map((data) => <ImageCard data={data} />)
          : null}
      </div>
    </div>
  );
};

export default SearchVideo;

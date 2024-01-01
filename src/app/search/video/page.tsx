"use client";
import ImageCard from "../../../components/cards/imageCard";
import SearchInput from "../../../components/form/searchInput";
import axios from "axios";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { DataCard, defaultValueDataCard } from "../image/page";
import { ApodContext } from "@/context/apodContext";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";

const SearchVideo = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [datas, setDatas] = useState<DataCard[]>([defaultValueDataCard]);

  const { apod } = useContext(ApodContext);

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

  const { isLoading } = useQuery({
    queryKey: ["q-video"],
    queryFn: async () => {
      const response = await axios.get("https://images-api.nasa.gov/search", {
        params: {
          q: apod.title,
          media_type: "video",
        },
      });
      setDatas(response.data.collection.items);
      return response.data.collection.items;
    },
  });

  return (
    <div className="container mx-auto">
      <SearchInput
        placeholder="Search Videos... "
        onChange={(e) => onChange(e)}
        onSubmit={onSubmit}
      />
      <div className="w-full mt-20 grid gap-y-8 gap-x-6 grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 justify-items-start">
        {!isLoading ? (
          datas && datas[0] !== defaultValueDataCard ? (
            datas.map((data, index) => <ImageCard data={data} key={index} />)
          ) : null
        ) : (
          <div className="text-center col-start-2 w-full">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default SearchVideo;

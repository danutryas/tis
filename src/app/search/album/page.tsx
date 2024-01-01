"use client";
import ImageCard from "../../../components/cards/imageCard";
import SearchInput from "../../../components/form/searchInput";
import axios from "axios";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { DataCard, defaultValueDataCard } from "../image/page";
import { ApodContext } from "@/context/apodContext";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

const ALBUMS = ["Summer Series", "Apollo"];

const SearchAlbum = () => {
  const searchParams = useSearchParams();

  const [userInput, setUserInput] = useState<string>("");
  const [datas, setDatas] = useState<DataCard[]>([defaultValueDataCard]);
  //   const { apod } = useContext(ApodContext);
  const search = searchParams?.get("q");

  console.log(search);
  //   console.log(apod);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const onSearch = async () => {
    try {
      const response = await axios.get(
        "https://images-api.nasa.gov/album/" + userInput
      );
      setDatas(response.data.collection.items);
    } catch (e) {
      console.log(e);
    }
  };

  const onSearchValue = async (value: string) => {
    try {
      const response = await axios.get(
        "https://images-api.nasa.gov/album/" + value
      );
      setDatas(response.data.collection.items);
    } catch (e) {
      console.log(e);
    }
  };

  const onButtonAlbumClick = async (albumName: string) => {
    setUserInput(albumName);
    onSearchValue(albumName);
  };

  const { isLoading } = useQuery({
    queryKey: ["q-video"],
    queryFn: async () => {
      const response = await axios.get("https://images-api.nasa.gov/search", {
        params: {
          q: search ? search.replace("-", " ") : ALBUMS[0],
          media_type: "video",
        },
      });
      setDatas(response.data.collection.items);
      return "";
    },
  });

  return (
    <div className="container mx-auto">
      <SearchInput
        placeholder="Search by Albums... "
        onChange={(e) => onChange(e)}
        onSubmit={onSearch}
        value={search ? search.replace("-", " ") : ""}
      />
      <div className="w-full mt-20 flex gap-6 flex-col">
        <div className="flex gap-4">
          {ALBUMS.map((album, index) => (
            <button
              className="px-4 py-2 border border-gray-400 rounded-xl"
              onClick={() => onButtonAlbumClick(album)}
              key={index}
            >
              {album}
            </button>
          ))}
        </div>
        <div className="grid gap-y-8 gap-x-6 grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 justify-items-start">
          {!isLoading ? (
            datas && datas[0] !== defaultValueDataCard ? (
              datas.map((data, index) => <ImageCard data={data} key={index} />)
            ) : null
          ) : (
            <div className="text-center col-start-2 w-full">Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchAlbum;

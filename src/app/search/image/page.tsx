"use client";
import ImageCard from "../../../components/cards/imageCard";
import SearchInput from "../../../components/form/searchInput";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";

export interface Data {
  description: "";
  description_508?: string;
  title: string;
  photographer: string;
  keywords: string[];
  location: string;
  nasa_id: string;
  media_type: string;
  date_created: string;
  center: string;
  secondary_creator?: string;
  album?: string[];
}

export interface Link {
  href: string;
  rel: string;
  render: string;
}

export interface DataCard {
  data: Data[];
  href: string;
  links: Link[];
}

const defaultValueData: Data = {
  description: "",
  description_508: "",
  title: "",
  photographer: "",
  keywords: [""],
  album: [""],
  location: "",
  nasa_id: "",
  media_type: "",
  date_created: "",
  center: "",
  secondary_creator: "",
};

export const defaultValueDataCard: DataCard = {
  data: [defaultValueData],
  href: "",
  links: [{ href: "", rel: "", render: "" }],
};

const SearchImage = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [datas, setDatas] = useState<DataCard[]>([defaultValueDataCard]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  useEffect(() => {
    console.log(datas);
  }, [datas]);

  const onSubmit = async () => {
    try {
      const response = await axios.get("https://images-api.nasa.gov/search", {
        params: {
          q: userInput,
          media_type: "image",
        },
      });
      setDatas(response.data.collection.items);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container mx-auto">
      <SearchInput
        placeholder="Search Images... "
        onChange={(e) => onChange(e)}
        onSubmit={onSubmit}
      />
      <div className="w-full mt-20 grid gap-6 grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 justify-items-start">
        {datas[0] !== defaultValueDataCard
          ? datas.map((data) => <ImageCard data={data} />)
          : null}
      </div>
    </div>
  );
};

export default SearchImage;

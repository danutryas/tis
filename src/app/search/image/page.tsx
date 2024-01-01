"use client";
import SearchInput from "@/components/form/searchInput";
import { ApodContext } from "@/context/apodContext";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import ImageCard from "@/components/cards/imageCard";

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
  const { apod } = useContext(ApodContext);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["nasa-images"],
    queryFn: async () => {
      const response = await axios.get("https://images-api.nasa.gov/search", {
        params: {
          q: apod.title,
          media_type: "image",
        },
      });
      setDatas(response.data.collection.items);
      return response.data.collection.items;
    },
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

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

export default SearchImage;

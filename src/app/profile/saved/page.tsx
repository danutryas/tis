"use client";
import { Data, DataCard, defaultValueDataCard } from "@/app/search/image/page";
import ImageCard from "@/components/cards/imageCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const LikePage = () => {
  //   const [datas, setDatas] = useState<DataCard[]>([defaultValueDataCard]);

  const { data, isLoading } = useQuery({
    queryKey: ["q-video"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:8000/api/asset/like");
      return response.data;
    },
  });

  return (
    <div className="mt-5 flex flex-col gap-8">
      <h1 className="font-bold text-3xl">Saved Assets</h1>
      <div className="flex gap-4">
        {isLoading ? (
          <>
            <p>Loading...</p>
          </>
        ) : data ? (
          data.map((asset: DataCard, index: number) => {
            return <ImageCard data={asset} key={index} />;
          })
        ) : null}
      </div>
    </div>
  );
};

export default LikePage;

// export interface DataCard {
//   data: Data[];
//   href: string;
//   links: Link[];
// }

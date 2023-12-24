"use client";
import { ApodContext } from "@/context/apodContext";
import Image from "next/image";
import { useContext } from "react";
import dayjs from "dayjs";

export default function Home() {
  const { apod } = useContext(ApodContext);

  const getTime = (date: string) => {
    return dayjs(date).format("dddd, D MMMM YYYY");
  };

  return (
    <>
      <div className="w-full mx-auto flex flex-col items-center gap-6">
        <h1 className="font-semibold text-2xl">Astronomy Picture of The Day</h1>
        <div className="flex w-full gap-4 mx-auto justify-center">
          <div className="basis-1/2 max-w-screen-sm">
            <h2 className="font-semibold text-2xl text-center">
              {apod && apod.title ? apod.title : ""}
            </h2>
            <p className="text-justify pt-4">
              {apod && apod.explanation ? apod.explanation : ""}
            </p>
          </div>
          <div className="basis-1/2 flex gap-2 flex-col max-w-screen-md w-2/5 p-2">
            <div className="relative aspect-square">
              <Image
                src={apod && apod.url ? apod.url : "/images/login.jpg"}
                alt="picture-of-the-day"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p>{apod && apod.date ? getTime(apod.date) : ""}</p>
          </div>
        </div>
      </div>
    </>
  );
}

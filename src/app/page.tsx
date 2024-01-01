"use client";
import { ApodContext } from "@/context/apodContext";
import Image from "next/image";
import { useContext } from "react";
import dayjs from "dayjs";
import { useSession } from "next-auth/react";
import Hero from "@/components/hero/hero";

export default function Home() {
  const { apod } = useContext(ApodContext);
  const session = useSession();
  console.log(session);

  const getTime = (date: string) => {
    return dayjs(date).format("dddd, D MMMM YYYY");
  };

  if (session.data)
    return (
      <>
        <div className="w-full mx-auto flex flex-col items-center gap-6">
          <h1 className="font-semibold text-2xl">Insight of The Day</h1>
          <div className="flex w-full gap-4 mx-auto justify-center">
            <div className="basis-1/2 max-w-screen-sm">
              <h2 className="font-semibold text-4xl text-center">
                {apod && apod.title ? apod.title : ""}
              </h2>
              <p className="text-justify pt-4 text-xl">
                {apod && apod.explanation ? apod.explanation : ""}
              </p>
            </div>
            <div className="w-2/5 p-2 relative aspect-square basis-1/2 max-w-screen-md">
              <Image
                src={apod && apod.url ? apod.url : "/images/login.jpg"}
                alt="picture-of-the-day"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                className="rounded-lg"
                width="0"
                height="0"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      </>
    );
  return <Hero />;
}

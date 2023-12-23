"use client";
import {
  Apod,
  ApodContextDefaultValue,
  ApodContextType,
  defaultApodValue,
} from "@/types/apod";
import axios from "axios";
import { PropsWithChildren, createContext, useEffect, useState } from "react";

export const ApodContext = createContext<ApodContextType>(
  ApodContextDefaultValue
);

const ApodProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [apod, setApod] = useState<Apod>(defaultApodValue); // Astronomy Picture of the Day

  const getApod = async () => {
    try {
      const response = await axios.get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: process.env.NEXT_PUBLIC_API_KEY,
        },
      });
      setApod(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getApod();
  }, []);

  return (
    <ApodContext.Provider value={{ getApod, apod }}>
      {children}
    </ApodContext.Provider>
  );
};
export default ApodProvider;

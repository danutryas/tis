"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import NavSide from "@/components/aside/navSide";
import ApodProvider from "@/context/apodContext";
import TanstackProvider from "@/context/tanstackContext";
import { Toaster } from "@/components/ui/toaster";

import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "TIS : The Incredible Space",
//   description:
//     "We will provide you the amazing information about space that you should know",
// };

export default function RootLayout({ children, pageProps }: AppProps) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        <SessionProvider>
          <TanstackProvider>
            <ApodProvider>
              <div className="">
                <NavSide />
                <div className="p-4 sm:ml-72">
                  {children}
                  <Toaster />
                </div>
              </div>
            </ApodProvider>
          </TanstackProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

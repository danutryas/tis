"use client";

import "./globals.css";
import ApodProvider from "@/context/apodContext";
import TanstackProvider from "@/context/tanstackContext";

import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import LayoutWrapper from "./layoutWrapper";

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
                <LayoutWrapper>{children}</LayoutWrapper>
              </div>
            </ApodProvider>
          </TanstackProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

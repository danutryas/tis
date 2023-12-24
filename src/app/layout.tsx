import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import NavSide from "@/components/aside/navSide";
import ApodProvider from "@/context/apodContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TIS : The Incredible Space",
  description:
    "We will provide you the amazing information about space that you should know",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApodProvider>
          <div className="">
            <NavSide />
            <div className="p-4 sm:ml-72">{children}</div>
          </div>
        </ApodProvider>
      </body>
    </html>
  );
}

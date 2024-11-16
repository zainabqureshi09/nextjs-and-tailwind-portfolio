import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";
import ActiveSectionContextProvider from "@/app/context/active-section-context";
import { Toaster } from "sonner";
import Footer from "@/app/components/footer";
import { roboto, silkscreen, ptmono, montserrat } from "@/lib/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zainabs | Portfolio",
  description: "Frontend developer 👾",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className="bg-gradient-to-r from-pink-200 to-purple-200 font-serif relative pt-28 sm:pt-36">
        <div
          className="bg-[#cdfff7] absolute top-[-6rem] -z-10 right-[11rem]
         h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"
        ></div>
        <div
          className="bg-[#e6cafd] absolute top-[-1rem] -z-10  left-[-35rem]
         h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        ></div>
        <div className="montserrat">
          <ActiveSectionContextProvider>
            <Toaster />
            <Header />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
        </div>
      </body>
    </html>
  );
}

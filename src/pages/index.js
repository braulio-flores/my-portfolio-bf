import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import MyName from "@/components/home/MyName/MyName";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Braulio Flores | Full Stack Developer</title>
        <meta
          name="description"
          content="Portafolio de Braulio Flores, Full Stack Developer especializado en React, Next.js y Node.js."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
      >
        <main className="flex flex-col gap-[32px] row-start-2 itemsd-center sm:items-start">
          <MyName />
        </main>

        <Footer />
      </div>
    </>
  );
}

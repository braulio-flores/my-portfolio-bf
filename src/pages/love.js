import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import MyName from "@/components/home/MyName/MyName";
import Footer from "@/components/ui/Footer";
import { useState } from "react";

import { FaHeart, FaGift, FaSmile } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Love() {
  const [message, setMessage] = useState("");
  const [showHeart, setShowHeart] = useState(false);

  const handleLoveClick = () => {
    setMessage("¡Te amo muchísimo, perro! ❤️");
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 3000);
  };

  const handleSurpriseClick = () => {
    const surprises = [
      "¡Eres un regalo bonito de la vida! 🎁",
      "Cada día me enamoro más de ti 💝",
      "Eres mi persona favorita 🌎",
    ];
    setMessage(surprises[Math.floor(Math.random() * surprises.length)]);
  };

  const handleSmileClick = () => {
    const smiles = [
      "Tu sonrisa ilumina mi día ✨",
      "Me encantan tus ojitos cuando sonríes 😊",
      "Eres la razón de mi felicidad 🌸",
    ];
    setMessage(smiles[Math.floor(Math.random() * smiles.length)]);
  };

  return (
    <>
      <Head>
        <title>To Esmeralda Castillo</title>
        <meta name="description" content="A beautiful message for EC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
      >
        <main className="flex flex-col gap-[32px] row-start-2 itemsd-center sm:items-start">
          <div className="min-h-screen bg-pink-50 dark:bg-pink-900 flex flex-col items-center justify-center p-6 space-y-6">
            {/* Mensaje principal */}
            <h1 className="text-4xl md:text-6xl font-bold text-pink-600 dark:text-pink-300 text-center">
              Hola Silvi Esm 💖
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-200 text-center max-w-xl">
              Solo quería decirte que eres muy importante para mí y que cada
              día me haces sonreír mucho 😊
            </p>

            {/* Botones divertidos */}
            <div className="flex space-x-4 mt-4">
              <button
                onClick={handleLoveClick}
                className="flex items-center space-x-2 px-4 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition"
              >
                <FaHeart className={`${showHeart ? "animate-bounce" : ""}`} /> <span> Te amo</span>
              </button>
              <button
                onClick={handleSurpriseClick}
                className="flex items-center space-x-2 px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition"
              >
                <FaGift className="hover:rotate-12 transition-transform" /> <span> Sorpresa</span>
              </button>
              <button
                onClick={handleSmileClick}
                className="flex items-center space-x-2 px-4 py-2 bg-yellow-400 text-white rounded-lg shadow hover:bg-yellow-500 transition"
              >
                <FaSmile className="hover:scale-110 transition-transform" /> <span> Sonríe</span>
              </button>
            </div>

            {message && (
              <div className="mt-6 p-4 bg-white/80 dark:bg-pink-800/80 rounded-lg shadow-lg backdrop-blur-sm animate-fade-in">
                <p className="text-xl text-gray-800 dark:text-gray-100">
                  {message}
                </p>
              </div>
            )}

            {/* Tarjeta estilo “card” */}
            <div className="bg-white dark:bg-pink-800 shadow-lg rounded-xl p-6 max-w-md text-center">
              <p className="text-gray-800 dark:text-gray-100 text-lg">
                Gracias por ser tú, por tu risa, tu cariño y por llenar mi vida
                de alegría 💕.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

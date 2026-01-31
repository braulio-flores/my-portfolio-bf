import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import MyName from "@/components/home/MyName/MyName";
import Footer from "@/components/ui/Footer";
import BentoGrid from "@/components/showcase/BentoGrid";
import FeaturedProjects from "@/components/showcase/FeaturedProjects";
import AboutSection from "@/components/showcase/AboutSection";
import CareerSection from "@/components/showcase/CareerSection";
import ContactSection from "@/components/showcase/ContactSection";

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
          content="Portfolio of Braulio Flores, Full Stack Developer specialized in React, Next.js, and Node.js."
        />
        <meta name="keywords" content="developer, web developer, React, Next.js, Node.js" />
        <meta property="og:title" content="Braulio Flores | Full Stack Developer" />
        <meta property="og:description" content="Professional portfolio of Braulio Flores" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${geistSans.className} ${geistMono.className} font-sans min-h-screen`}>
        <main className="w-full">
          <MyName />

          {/* About Section - Principal */}
          <section className="w-full bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
            <AboutSection />
          </section>

          {/* Career Section - Principal */}
          <section className="w-full bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent">
            <CareerSection />
          </section>

          {/* Bento Grid Section */}
          <section className="w-full bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
            <BentoGrid />
          </section>

          {/* Featured Projects Section */}
          <section className="w-full bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
            <FeaturedProjects />
          </section>

          {/* Contact Section */}
          <section className="w-full bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
            <ContactSection />
          </section>

          {/* Footer */}
          <Footer />
        </main>
      </div>
    </>
  );
}

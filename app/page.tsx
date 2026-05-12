import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Demo from "@/components/sections/Demo";
import DownloadCTA from "@/components/sections/DownloadCTA";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Demo />
      <DownloadCTA />
      <Footer />
    </main>
  );
}

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import ScrollStats from "@/components/sections/ScrollStats";
import HowItWorks from "@/components/sections/HowItWorks";
import Demo from "@/components/sections/Demo";
import DownloadCTA from "@/components/sections/DownloadCTA";

export default function Home() {
  return (
    <main className="relative" style={{ overflowX: "clip" }}>
      <Navbar />
      <Hero />
      <Features />
      <ScrollStats />
      <HowItWorks />
      <Demo />
      <DownloadCTA />
      <Footer />
    </main>
  );
}

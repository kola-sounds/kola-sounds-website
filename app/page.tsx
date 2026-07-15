import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Updates from "@/components/Updates";
import About from "@/components/About";
import Music from "@/components/Music";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Social from "@/components/Social";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <LoadingScreen>
      <ScrollProgress />

      <main className="overflow-x-hidden bg-black text-white">
        <Navbar />

        <Hero />

        <Updates />

        <About />

        <Music />

        <Events />

        <Gallery />

        <Social />

        <Contact />

        <Footer />

        <WhatsApp />

        <BackToTop />
      </main>
    </LoadingScreen>
  );
}

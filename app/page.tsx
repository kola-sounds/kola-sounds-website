import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Updates from "@/components/Updates";
import About from "@/components/About";
import Music from "@/components/Music";
import Social from "@/components/Social";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import WhatsApp from "@/components/WhatsApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-black text-white">
      <Navbar />

      <Hero />

      <Updates />

      <About />

      <Music />

      <Social />

      <Events />

      <Gallery />

      <Contact />

      <WhatsApp />

      <Footer />
    </main>
  );
}

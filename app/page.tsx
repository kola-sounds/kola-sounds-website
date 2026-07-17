import Hero from "@/components/Hero";
import Updates from "@/components/Updates";
import About from "@/components/About";
import Music from "@/components/Music";
import Gallery from "@/components/Gallery";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* Hero Section */}
      <Hero />

      {/* Latest Ministry Update */}
      <Updates />

      {/* About Ministry */}
      <About />

      {/* Music */}
      <Music />

      {/* Gallery */}
      <Gallery />

      {/* Events */}
      <Events />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

    </main>
  );
}

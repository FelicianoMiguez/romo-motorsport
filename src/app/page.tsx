import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Promo from "./components/Promo";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import WhyUs from "./components/WhyUs";
import FAQ from "./components/FAQ";
import Locations from "./components/Locations";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Promo />
        <About />
        <HowItWorks />
        <Testimonials />
        <Gallery />
        <WhyUs />
        <FAQ />
        <Locations />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

import About from "@/components/about";
import Differentials from "@/components/differentials";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Location from "@/components/location";
import Results from "@/components/results";
import Services from "@/components/services";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Results />
      <Differentials />
      <Location />
      <FinalCTA />
      <Footer />
    </>
  );
}

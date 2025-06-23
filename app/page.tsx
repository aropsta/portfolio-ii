import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Footer from "./Footer";
import Projects from "./Projects";
import FeaturedProject from "./FeatureProject";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProject />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Footer from "./Footer";
import Projects from "./Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

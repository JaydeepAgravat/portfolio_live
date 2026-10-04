import { useState } from "react";
import Header from "./components/Header";
import Lightbox from "./components/Lightbox";
import Hero from "./sections/Hero";
import CaseStudy from "./sections/CaseStudy";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function App() {
  const [gallery, setGallery] = useState(null);
  const openGallery = (title, images) => setGallery({ title, images });

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <CaseStudy openGallery={openGallery} />
        <Experience />
        <Projects openGallery={openGallery} />
        <Skills />
        <Contact />
      </main>
      {gallery && <Lightbox {...gallery} onClose={() => setGallery(null)} />}
    </>
  );
}

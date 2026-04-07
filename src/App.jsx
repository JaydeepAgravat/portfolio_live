import { useState, useEffect } from "react";
import useTheme from "./hooks/useTheme";
import useActiveSection from "./hooks/useActiveSection";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goto = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <>
      <Nav
        scrolled={scrolled}
        active={active}
        theme={theme}
        toggleTheme={toggleTheme}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        goto={goto}
      />

      <div className="page-shell">
        <Sidebar connectOpen={connectOpen} setConnectOpen={setConnectOpen} />

        <main className="content-panel">
          <About />
          <Experience />
          <Projects />
          <Resume />
          <Contact />
          <footer className="page-footer">
            Designed &amp; built by Jaydeep Agravat &middot;{" "}
            {new Date().getFullYear()}
          </footer>
        </main>
      </div>
    </>
  );
}

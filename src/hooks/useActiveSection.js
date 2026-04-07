import { useState, useEffect } from "react";
import { navItems } from "../data/portfolio";

export default function useActiveSection() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      let cur = "about";
      for (const { id } of navItems) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 90) cur = id;
      }
      const resumeEl = document.getElementById("resume");
      if (resumeEl && resumeEl.getBoundingClientRect().top <= 90)
        cur = "resume";
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return active;
}

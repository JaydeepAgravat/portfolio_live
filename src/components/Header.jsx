import { navItems, profile } from "../data/portfolio";
import { SunIcon, MoonIcon } from "./icons";

// The theme is set on <html> by the inline script in index.html before paint,
// so this only flips the attribute; both icons render and CSS shows one.
const toggleTheme = () => {
  const root = document.documentElement;
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {
    // Storage can be blocked; the toggle still works for this visit.
  }
};

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="brand" href="#top">
          {profile.name}
        </a>
        <nav className="site-nav" aria-label="Sections">
          {navItems.map(({ label, id }) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-btn theme-toggle"
            onClick={toggleTheme}
            aria-label="Switch between light and dark theme"
          >
            <span className="show-dark">
              <SunIcon s={17} />
            </span>
            <span className="show-light">
              <MoonIcon s={17} />
            </span>
          </button>
          <a className="btn btn-small" href={profile.resumeUrl} download>
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}

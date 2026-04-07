import { navItems } from "../data/portfolio";
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from "./icons";

export default function Nav({
  scrolled,
  active,
  theme,
  toggleTheme,
  menuOpen,
  setMenuOpen,
  goto,
}) {
  return (
    <>
      <nav className={`top-nav${scrolled ? " scrolled" : ""}`}>
        <button
          className="nav-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {"<"}
          <span>ja</span>
          {" />"}
        </button>

        <div
          className="desktop-controls"
          style={{ display: "flex", alignItems: "center", gap: "24px" }}
        >
          <div className="nav-links">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                className={`nav-btn${active === id ? " active" : ""}`}
                onClick={() => goto(id)}
              >
                {label}
              </button>
            ))}
          </div>
          <button
            className="theme-toggle-desktop"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <SunIcon s={16} /> : <MoonIcon s={16} />}
          </button>
        </div>

        <div className="mobile-controls">
          <button
            className="hamburger"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <SunIcon s={18} /> : <MoonIcon s={18} />}
          </button>
          <button
            className="hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      <div className={`mobile-drawer${menuOpen ? " open" : ""}`}>
        {navItems.map(({ label, id }) => (
          <button
            key={id}
            className={`nav-btn${active === id ? " active" : ""}`}
            onClick={() => goto(id)}
          >
            {label}
          </button>
        ))}
        <button
          className="nav-btn"
          onClick={() => {
            goto("contact");
            setMenuOpen(false);
          }}
        >
          Let's Connect
        </button>
      </div>
    </>
  );
}

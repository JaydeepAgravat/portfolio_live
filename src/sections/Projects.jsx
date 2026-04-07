import { useState } from "react";
import { featuredProjects, otherProjects } from "../data/portfolio";
import ProjectModal from "./ProjectModal";
import BlurImage from "../components/BlurImage";
import {
  AppleIcon,
  PlayIcon,
  GlobeIcon,
  GithubIcon,
} from "../components/icons";

export default function Projects() {
  const [modal, setModal] = useState(null);

  return (
    <section className="c-section" id="projects">
      <h2 className="c-heading">Featured Projects</h2>
      <p className="section-subtitle">
        Production apps shipped across iOS, Android & Web — click a card for the
        full story.
      </p>

      <div className="projects-group">
        {featuredProjects.map((p) => (
          <div key={p.id} className="proj-card" onClick={() => setModal(p)}>
            <div className="proj-inner">
              <div className="proj-header">
                <span className="proj-name">{p.name}</span>
                <span
                  className={`proj-badge ${p.type === "app" || p.type === "app_and_web" ? "mobile" : "web"}`}
                >
                  {p.type === "app"
                    ? "App"
                    : p.type === "web"
                      ? "Web"
                      : "App & Web"}
                </span>
                <span className="proj-arrow">↗</span>
              </div>
              <p className="proj-desc">
                {p.tagline}. {p.description.split(".")[0]}.
              </p>
              <div className="proj-tags">
                {p.tech.map((t, i) => (
                  <span className="tag" key={i}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="proj-image-wrap">
              {p.coverImage ? (
                <BlurImage
                  src={p.coverImage}
                  alt={p.name}
                  imgStyle={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    aspectRatio: "16/9",
                  }}
                />
              ) : (
                <div className="proj-img-placeholder">{p.emoji}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <h2 className="c-heading" style={{ marginTop: 72 }}>
        Other Projects
      </h2>
      <p className="section-subtitle">
        Additional projects I've contributed to as a developer.
      </p>
      <div className="other-projects-grid">
        {otherProjects.map((p) => (
          <div
            key={p.id}
            className="other-proj-card"
            style={{ "--card-accent": p.color }}
          >
            <div className="other-proj-top">
              <span className="other-proj-emoji">{p.emoji}</span>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                {p.status && (
                  <span
                    className="proj-badge"
                    style={{
                      background: "transparent",
                      border: "1px dashed var(--border)",
                      color: "var(--text-sec)",
                    }}
                  >
                    {p.status}
                  </span>
                )}
                {p.isLive && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {(p.type === "app" ||
                      p.type === "Mobile App" ||
                      p.type === "app_and_web") && (
                      <>
                        {p.appStoreUrl && p.appStoreUrl !== "#" && (
                          <a
                            href={p.appStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="App Store"
                            style={{
                              color: "var(--text-sec)",
                              transition: "color 0.2s",
                              display: "flex",
                            }}
                          >
                            <AppleIcon />
                          </a>
                        )}
                        {p.playStoreUrl && p.playStoreUrl !== "#" && (
                          <a
                            href={p.playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Play Store"
                            style={{
                              color: "var(--text-sec)",
                              transition: "color 0.2s",
                              display: "flex",
                            }}
                          >
                            <PlayIcon />
                          </a>
                        )}
                      </>
                    )}
                    {(p.type === "web" ||
                      p.type === "Web App" ||
                      p.type === "app_and_web") &&
                      p.webUrl &&
                      p.webUrl !== "#" && (
                        <a
                          href={p.webUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Website"
                          style={{
                            color: "var(--text-sec)",
                            transition: "color 0.2s",
                            display: "flex",
                          }}
                        >
                          <GlobeIcon />
                        </a>
                      )}
                    {p.githubUrl && p.githubUrl !== "#" && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                        style={{
                          color: "var(--text-sec)",
                          transition: "color 0.2s",
                          display: "flex",
                        }}
                      >
                        <GithubIcon s={16} />
                      </a>
                    )}
                  </div>
                )}
                <span
                  className={`proj-badge ${p.type === "app" || p.type === "app_and_web" ? "mobile" : "web"}`}
                >
                  {p.type === "app"
                    ? "App"
                    : p.type === "web"
                      ? "Web"
                      : "App & Web"}
                </span>
              </div>
            </div>
            <div className="other-proj-name">{p.name}</div>
            <div className="other-proj-tagline">{p.tagline}</div>
            <p className="other-proj-desc">{p.description}</p>
            <ul className="other-proj-highlights">
              {p.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <div className="other-proj-tech">
              {p.tech.map((t, i) => (
                <span className="tag" key={i}>
                  {t}
                </span>
              ))}
            </div>

            <div className="other-proj-accent-line" />
          </div>
        ))}
      </div>

      {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}
    </section>
  );
}

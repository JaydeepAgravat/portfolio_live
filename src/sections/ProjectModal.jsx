import { useEffect, useRef } from "react";
import {
  AppleIcon,
  PlayIcon,
  GlobeIcon,
  GithubIcon,
} from "../components/icons";
import BlurImage from "../components/BlurImage";

export default function ProjectModal({ project, onClose }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => document.body.classList.remove("modal-open");
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  if (!project) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="modal-content">
          <div className="modal-name">{project.name}</div>
          <div className="modal-sub">
            {project.tagline} · {project.type}
          </div>

          <div className="modal-main">
            <div className="modal-screenshots" ref={scrollRef}>
              {project.screenshots && project.screenshots.length > 0
                ? project.screenshots.map((src, i) => (
                  <BlurImage
                    key={i}
                    src={src}
                    alt={`${project.name} screenshot ${i + 1}`}
                    className="modal-screenshot"
                    imgStyle={{ objectFit: 'contain' }}
                  />
                ))
                : Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="modal-screenshot-ph">
                    <div className="modal-screenshot-ph-icon">
                      {project.emoji}
                    </div>
                    <div className="modal-screenshot-ph-label">
                      Screenshot {i + 1}
                    </div>
                  </div>
                ))}
            </div>

            <div className="modal-details">
              <p className="modal-desc">{project.description}</p>
              <ul className="modal-features">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <div className="modal-tags">
                {project.tech.map((t, i) => (
                  <span className="tag" key={i}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="modal-actions">
                {project.isLive ? (
                  <>
                    {(project.type === "app" ||
                      project.type === "Mobile App" ||
                      project.type === "app_and_web") && (
                        <>
                          <a
                            href={project.appStoreUrl || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="modal-btn modal-ios"
                          >
                            <AppleIcon /> App Store
                          </a>
                          <a
                            href={project.playStoreUrl || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="modal-btn modal-and"
                          >
                            <PlayIcon /> Play Store
                          </a>
                        </>
                      )}
                    {(project.type === "web" ||
                      project.type === "Web App" ||
                      project.type === "app_and_web") && (
                        <a
                          href={project.webUrl || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="modal-btn modal-live"
                        >
                          <GlobeIcon /> Website
                        </a>
                      )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-btn modal-gh"
                      >
                        <GithubIcon s={14} /> GitHub
                      </a>
                    )}
                  </>
                ) : (
                  <div
                    className="modal-btn modal-ongoing"
                    style={{
                      background: "var(--surface)",
                      color: "var(--text-sec)",
                      border: "1px dashed var(--border)",
                      justifyContent: "center",
                      width: "100%",
                      cursor: "not-allowed",
                      pointerEvents: "none",
                    }}
                  >
                    🚧 Ongoing Project
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


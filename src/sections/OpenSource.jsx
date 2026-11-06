import { useEffect, useRef } from "react";
import { openSource } from "../data/portfolio";
import { GithubIcon } from "../components/icons";

const tone = (status) => status.toLowerCase().replace(" ", "-");
const inProgress = (status) => status === "In review" || status === "Building";

// Moves the spotlight on a card to follow the pointer.
const followPointer = (event) => {
  const card = event.currentTarget;
  const box = card.getBoundingClientRect();
  card.style.setProperty("--x", `${event.clientX - box.left}px`);
  card.style.setProperty("--y", `${event.clientY - box.top}px`);
};

export default function OpenSource() {
  const listRef = useRef(null);

  // Cards start visible (for the prerendered page); with JavaScript they
  // fade in as they scroll into view.
  useEffect(() => {
    const list = listRef.current;
    if (!list || !("IntersectionObserver" in window)) return;
    list.classList.add("oss-animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    list.querySelectorAll(".oss-card").forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const counts = openSource.items.reduce((acc, { status, emoji }) => {
    acc[status] ??= { emoji, n: 0 };
    acc[status].n += 1;
    return acc;
  }, {});

  return (
    <section className="section wrap" id="open-source">
      <header className="section-head">
        <p className="eyebrow">
          <span className="eyebrow-num">04</span> Open source
        </p>
        <h2>Fixes in React Native libraries</h2>
        <p className="lede">{openSource.intro}</p>
        <ul className="oss-summary" aria-label="Contributions by status">
          {Object.entries(counts).map(([status, { emoji, n }]) => (
            <li key={status} className={`oss-tone-${tone(status)}`}>
              <span aria-hidden="true">{emoji}</span> {n} {status.toLowerCase()}
            </li>
          ))}
        </ul>
      </header>

      <ol className="oss" ref={listRef}>
        {openSource.items.map((item, i) => (
          <li
            key={item.url}
            className="oss-card"
            style={{ "--brand": item.brand, "--i": i }}
            onPointerMove={followPointer}
          >
            <div className="oss-top">
              <span className={`oss-logo${item.logoFull ? " oss-logo-full" : ""}`}>
                <img src={item.logo} alt="" width="56" height="56" loading="lazy" />
              </span>
              <span className={`oss-status oss-tone-${tone(item.status)}`}>
                {inProgress(item.status) ? (
                  <span className="oss-pulse" aria-hidden="true" />
                ) : (
                  <span aria-hidden="true">{item.emoji}</span>
                )}
                {item.status}
              </span>
            </div>
            <p className="oss-repo">
              {item.owner}/<strong>{item.repo}</strong>
            </p>
            <h3>{item.title}</h3>
            <p className="oss-body">{item.body}</p>
            <ul className="oss-facts">
              {item.facts.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a
              className="text-link oss-link"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon s={15} /> {item.label} <span aria-hidden="true">→</span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

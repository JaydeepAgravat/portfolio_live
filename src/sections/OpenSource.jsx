import { openSource } from "../data/portfolio";
import { GithubIcon } from "../components/icons";

export default function OpenSource() {
  return (
    <section className="section wrap" id="open-source">
      <header className="section-head">
        <p className="eyebrow">
          <span className="eyebrow-num">04</span> Open source
        </p>
        <h2>Fixes in React Native libraries</h2>
        <p className="lede">{openSource.intro}</p>
      </header>

      <ol className="oss">
        {openSource.items.map((item) => (
          <li key={item.url}>
            <p className="oss-meta">
              <span className={`oss-status oss-${item.status.split(" ").join("-").toLowerCase()}`}>
                {item.status}
              </span>
              {item.repo}
            </p>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            {item.facts && (
              <ul className="facts">
                {item.facts.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            )}
            <a
              className="text-link"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon s={15} /> {item.label}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

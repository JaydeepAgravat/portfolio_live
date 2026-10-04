import { diarchgo } from "../data/portfolio";
import StoreLinks from "../components/StoreLinks";

function Metric({ from, value, label }) {
  return (
    <div className="metric">
      <div className="metric-value">
        {from && (
          <>
            <span className="metric-from">{from}</span>
            <span className="metric-arrow" aria-label="to">
              →
            </span>
          </>
        )}
        <span>{value}</span>
      </div>
      <div className="metric-label">{label}</div>
    </div>
  );
}

export default function CaseStudy({ openGallery }) {
  return (
    <section className="section wrap" id="diarchgo">
      <header className="section-head">
        <p className="eyebrow">
          Case study · {diarchgo.company} · {diarchgo.period}
        </p>
        <h2>DiarchGo: owning a live quick-commerce app</h2>
        <p className="lede">{diarchgo.intro}</p>
      </header>

      <dl className="scale">
        {diarchgo.scale.map(({ value, label }) => (
          <div key={label}>
            <dt>{value}</dt>
            <dd>{label}</dd>
          </div>
        ))}
      </dl>

      <div className="apps">
        {diarchgo.apps.map((app) => (
          <article className="app" key={app.name}>
            <div className="app-head">
              <img src={app.icon} alt="" width="44" height="44" />
              <div>
                <h3>{app.name}</h3>
                <StoreLinks {...app} />
              </div>
            </div>
            <button
              className="shots"
              onClick={() => openGallery(app.name, app.screenshots)}
              aria-label={`View ${app.name} screenshots`}
            >
              {app.screenshots.slice(0, 4).map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  loading="lazy"
                  width="540"
                  height="960"
                />
              ))}
            </button>
          </article>
        ))}
      </div>

      <ol className="outcomes">
        {diarchgo.outcomes.map(({ title, metrics, body, note }) => (
          <li className="outcome" key={title}>
            <div className="outcome-metrics">
              {metrics.map((m) => (
                <Metric key={m.label} {...m} />
              ))}
            </div>
            <div className="outcome-text">
              <h3>{title}</h3>
              <p>{body}</p>
              {note && <p className="note">{note}</p>}
            </div>
          </li>
        ))}
      </ol>

      <h3 className="sub-head">Also built</h3>
      <div className="more">
        {diarchgo.more.map(({ title, body }) => (
          <div key={title}>
            <h4>{title}</h4>
            <p>{body}</p>
          </div>
        ))}
      </div>

      <ul className="tags" aria-label="Stack">
        {diarchgo.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

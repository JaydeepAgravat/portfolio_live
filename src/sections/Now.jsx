import { now } from "../data/portfolio";

export default function Now() {
  return (
    <section className="band" id="now">
      <div className="wrap">
        <header className="section-head">
          <p className="eyebrow">
            <span className="eyebrow-num">01</span> Now · Zaster
          </p>
          <h2>{now.title}</h2>
          <p className="lede">{now.intro}</p>
          <div className="band-actions">
            <a
              className="btn btn-on-band"
              href={now.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              See the code
            </a>
            <a
              className="text-link"
              href={now.handbook}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the handbook →
            </a>
          </div>
        </header>

        <figure className="now-figure">
          <img
            src={now.image}
            alt={now.imageAlt}
            loading="lazy"
            width="1800"
            height="688"
          />
          <figcaption>
            {now.surfaces.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </figcaption>
        </figure>

        <ol className="hard-parts">
          {now.hardParts.map(({ title, body }, i) => (
            <li key={title}>
              <span className="hard-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>

        <div className="studying">
          <h3 className="sub-head">What I'm studying alongside it</h3>
          <dl>
            {now.studying.map(({ group, items }) => (
              <div key={group}>
                <dt>{group}</dt>
                <dd>
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

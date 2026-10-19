import { products, teardown } from "../data/portfolio";
import { GithubIcon } from "../components/icons";

export default function Products() {
  return (
    <section className="section wrap" id="products">
      <header className="section-head">
        <p className="eyebrow">
          <span className="eyebrow-num">03</span> My own products
        </p>
        <h2>Apps I design, build and run myself</h2>
        <p className="lede">
          Each one starts from hundreds of real user complaints, keeps a few
          clear promises, and proves them with numbers.
        </p>
      </header>

      <div className="products">
        {products.map((p) => (
          <article className="product" key={p.name}>
            <div className="product-shot">
              <img
                src={p.image}
                alt={p.imageAlt}
                loading="lazy"
                width="1600"
                height="750"
              />
            </div>
            <div className="product-body">
              <h3>{p.name}</h3>
              <p className="product-tagline">{p.tagline}</p>
              <p>{p.body}</p>
              <ul className="facts">
                {p.facts.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                className="text-link"
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon s={15} /> Read the story and the code
              </a>
            </div>
          </article>
        ))}
      </div>

      <article className="teardown">
        <div>
          <h3>{teardown.name}</h3>
          <p>{teardown.body}</p>
          <div className="teardown-links">
            <a
              className="text-link"
              href={teardown.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read it online →
            </a>
            <a
              className="text-link"
              href={teardown.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon s={15} /> Code
            </a>
          </div>
        </div>
        <dl className="teardown-numbers">
          {teardown.numbers.map(({ value, label }) => (
            <div key={label}>
              <dt>{value}</dt>
              <dd>{label}</dd>
            </div>
          ))}
        </dl>
      </article>
    </section>
  );
}

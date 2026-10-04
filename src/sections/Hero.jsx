import { profile, stats } from "../data/portfolio";
import { GithubIcon, LinkedinIcon, XIcon } from "../components/icons";

export default function Hero() {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-grid">
        <div>
          <p className="eyebrow">
            {profile.location} · {profile.availability}
          </p>
          <h1>{profile.headline}</h1>
          <p className="lede">{profile.pitch}</p>
          <div className="hero-actions">
            <a className="btn" href={profile.resumeUrl} download>
              Download resume
            </a>
            <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <div className="socials">
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon s={18} />
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon s={18} />
              </a>
              <a
                href={profile.links.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <XIcon s={16} />
              </a>
            </div>
          </div>
        </div>
        <img
          className="portrait"
          src={profile.photo}
          alt={profile.name}
          width="320"
          height="480"
        />
      </div>

      <dl className="stats">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <dt>{value}</dt>
            <dd>{label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

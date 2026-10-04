import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="wrap">
        <p className="eyebrow">Contact</p>
        <h2>Hiring for React Native? Let's talk.</h2>
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <ul className="contact-links">
          <li>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.links.x} target="_blank" rel="noopener noreferrer">
              X
            </a>
          </li>
          <li>
            <a href={profile.resumeUrl} download>
              Resume (PDF)
            </a>
          </li>
        </ul>
        <p className="fine">
          {profile.location} · {profile.availability}
        </p>
      </div>
    </footer>
  );
}

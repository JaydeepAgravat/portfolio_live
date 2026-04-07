import { experience, education } from "../data/portfolio";

export default function Experience() {
  return (
    <section className="c-section" id="experience">
      <h2 className="c-heading">Work Experience</h2>
      <div className="exp-list">
        {experience.map((e, i) => (
          <div className="exp-entry" key={i}>
            <div className="exp-dates">{e.period}</div>
            <div>

              <a href={e.companyUrl} target="_blank" rel="noopener noreferrer" className="exp-company-row">
                <span className="exp-company-name">{e.company}</span>
                <span className="exp-company-arrow">↗</span>
              </a>

              <div className="exp-role-title">{e.role}</div>
              <p className="exp-desc-text">{e.description}</p>
              <ul className="exp-bullets">
                {e.responsibilities.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              <div className="tags-row">
                {e.tags.map((t, j) => (
                  <span className="tag" key={j}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 48 }}>
        <h2 className="c-heading">Education</h2>
        <div className="exp-list">
          {education.map((ed, i) => (
            <div className="edu-entry" key={i}>
              <div className="exp-dates">{ed.period}</div>
              <div>
                <div
                  className="exp-role-title"
                  style={{ fontSize: 15, marginBottom: 5 }}
                >
                  {ed.degree}
                </div>
                <div className="exp-company-name" style={{ fontSize: 13 }}>
                  {ed.institution}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

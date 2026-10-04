import { experience, education } from "../data/portfolio";

export default function Experience() {
  return (
    <section className="section wrap" id="experience">
      <header className="section-head">
        <p className="eyebrow">Experience</p>
        <h2>2 years of React Native, 17 apps live</h2>
      </header>

      <div className="timeline">
        {experience.map((job) => (
          <article className="job" key={job.company}>
            <div className="job-meta">
              <div>{job.period}</div>
              <div>{job.place}</div>
            </div>
            <div>
              <h3>
                {job.role} · {job.company}
              </h3>
              <p className="job-summary">{job.summary}</p>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {job.anchor && (
                <a className="text-link" href={`#${job.anchor}`}>
                  Read the case study ↑
                </a>
              )}
            </div>
          </article>
        ))}

        <article className="job">
          <div className="job-meta">
            <div>{education.period}</div>
            <div>Education</div>
          </div>
          <div>
            <h3>{education.degree}</h3>
            <p className="job-summary">
              {education.school} · {education.detail}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

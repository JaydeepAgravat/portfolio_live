import { personalInfo, resumeChips } from "../data/portfolio";

export default function Resume() {
  return (
    <section className="c-section" id="resume">
      <h2 className="c-heading">Resume</h2>
      <div className="resume-card">
        <div>
          <div className="resume-name-lg">{personalInfo.name}</div>
          <div className="resume-chips">
            {resumeChips.map((c) => (
              <span className="resume-chip" key={c}>
                {c}
              </span>
            ))}
          </div>
        </div>
        <a
          href={personalInfo.resumeUrl}
          className="resume-dl"
        >
          ⬇ &nbsp;Download PDF
        </a>
      </div>
    </section>
  );
}

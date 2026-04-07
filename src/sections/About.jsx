import { stats, skills } from "../data/portfolio";

export default function About() {
  return (
    <section className="c-section" id="about">
      <h2 className="c-heading">About</h2>
      <div className="about-body">
        <>
          <p className="about-p">
            I am a <strong>Mobile & Web Application Developer</strong> with{" "}
            <strong>1.5+ years of experience</strong> building scalable applications
            using <strong>React Native</strong> and <strong>React.js</strong>. I have
            worked on <strong>production-level projects</strong> across multiple domains,
            focusing on delivering reliable, high-performance, and user-friendly solutions.
          </p>

          <p className="about-p">
            My experience includes <strong>API integration</strong>,{" "}
            <strong>authentication systems</strong>, <strong>real-time features</strong>{" "}
            such as chat and notifications, and{" "}
            <strong>subscription-based models</strong>. I have also implemented{" "}
            <strong>AI-driven functionalities</strong> to enhance application intelligence
            and user interaction.
          </p>

          <p className="about-p">
            I follow a <strong>clean and maintainable development approach</strong>,
            ensuring that applications are scalable, efficient, and aligned with business
            requirements.
          </p>

          <p className="about-p">
            I am open to working on <strong>mobile and web applications</strong>,{" "}
            <strong>SaaS platforms</strong>, and <strong>product-based solutions</strong>.
          </p>
        </>

        <div className="stats-row">
          {stats.map(({ number, label }) => (
            <div className="stat-box" key={label}>
              <div className="stat-num">{number}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>

        <div className="skills-section">
          {skills.map((group) => (
            <div key={group.category} className="skills-group">
              <h3 className="skills-group-title">{group.category}</h3>
              <div className="skills-chips">
                {group.items.map(({ icon, label }) => (
                  <span className="chip" key={label}>
                    <span>{icon}</span>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

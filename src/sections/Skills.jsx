import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section className="section wrap" id="skills">
      <header className="section-head">
        <p className="eyebrow">Skills</p>
        <h2>What I work with</h2>
      </header>
      <dl className="skills">
        {skills.map(({ group, items }) => (
          <div key={group}>
            <dt>{group}</dt>
            <dd>{items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

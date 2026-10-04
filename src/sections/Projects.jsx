import { featuredProjects, projects } from "../data/portfolio";
import StoreLinks from "../components/StoreLinks";

function Cover({ project, openGallery }) {
  if (!project.cover) {
    return (
      <div className="cover cover-empty" aria-hidden="true">
        {project.name}
      </div>
    );
  }
  return (
    <button
      className="cover"
      onClick={() => openGallery(project.name, project.screenshots)}
      aria-label={`View ${project.name} screenshots`}
    >
      <img
        src={project.cover}
        alt=""
        loading="lazy"
        width="900"
        height="502"
      />
    </button>
  );
}

export default function Projects({ openGallery }) {
  return (
    <section className="section wrap" id="projects">
      <header className="section-head">
        <p className="eyebrow">Projects · SilverSky Technology</p>
        <h2>Client apps I shipped</h2>
        <p className="lede">
          22 React Native apps for clients; 15 are live, including apps with
          100K+ and 50K+ downloads. Select a cover to see screenshots.
        </p>
      </header>

      <div className="featured">
        {featuredProjects.map((project) => (
          <article className="card card-featured" key={project.name}>
            <Cover project={project} openGallery={openGallery} />
            <div className="card-body">
              <p className="card-kind">
                {project.kind} · {project.badge}
              </p>
              <h3>{project.name}</h3>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <StoreLinks {...project} />
            </div>
          </article>
        ))}
      </div>

      <div className="grid">
        {projects.map((project) => (
          <article className="card" key={project.name}>
            <Cover project={project} openGallery={openGallery} />
            <div className="card-body">
              <h3>{project.name}</h3>
              <p className="card-kind">{project.kind}</p>
              {project.note && <p className="card-note">{project.note}</p>}
              <StoreLinks {...project} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

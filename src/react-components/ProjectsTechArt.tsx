import { Breadcrumb } from './Breadcrumb';
import { TechArtCard } from './TechArtCard';
import teachArtProjects from '../data/projects-techart.json';
import '../css/Projects.css';

function ProjectsTechArt() {
  return (
    <>
      <Breadcrumb />
      <section className="projects-section">
        <div className="container">
          <ul className="projects-container-nomenu">
            <h1 className="display-heading">VFX & Shaders</h1>
            {teachArtProjects.map((proj) => (
              <TechArtCard
                key={proj.id}
                id={proj.id}
                title={proj.title}
                subtitle={proj.subtitle}
                coverMedia={proj.assets[0]}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default ProjectsTechArt;

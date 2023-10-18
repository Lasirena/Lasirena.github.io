import projectsList from '../data/projects.json';
import { Breadcrumb } from './Breadcrumb';
import { ProjectCard } from './ProjectCard';
import '../css/Projects.css';

function ProjectsCode() {
  console.log(projectsList);
  return (
    <>
      <Breadcrumb />
      <section className="projects-section">
        <div className="container">
          <h1 className="display-heading">Games</h1>
          <div className="projects-box">
            <ul className="projects-container">
              {projectsList.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  subtitle={project.subtitle}
                  media={project.media}
                  playableUrl={project['playable-url']}
                  playableTitle={project['playable-title']}
                  techStack={project['tech-stack']}
                  description={project.description}
                  features={project.features}
                />
              ))}
            </ul>
            <div className="projects-sidebar">
              <h3>Games</h3>
              <ul>
                <a href="#1">
                  <li className="btn">
                    <span>Demonbound</span>
                  </li>
                </a>
                <a href="#2">
                  <li className="btn">
                    <span>Tunnel Surfer</span>
                  </li>
                </a>
              </ul>
              <h3>Web Dev</h3>
              <ul>
                <li className="btn">
                  <span>
                    Artsource <em className="wip">(WIP)</em>
                  </span>
                </li>
                <li className="btn">
                  <span>Portfolio</span>
                </li>
              </ul>
            </div>
          </div>
          <h1 className="display-heading">Web Dev</h1>
        </div>
      </section>
    </>
  );
}

export default ProjectsCode;

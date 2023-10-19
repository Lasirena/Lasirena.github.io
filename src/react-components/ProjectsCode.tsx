import projectsList from '../data/projects.json';
import { Breadcrumb } from './Breadcrumb';
import { ProjectCard } from './ProjectCard';
import { ProjectMenuItem } from './ProjectMenuItem';
import '../css/Projects.css';

function ProjectsCode() {
  console.log(projectsList);
  return (
    <>
      <Breadcrumb />
      <section className="projects-section">
        <div className="container">
          <div className="projects-box">
            <ul className="projects-container">
              <h1 className="display-heading">Games</h1>
              {projectsList.map((project) =>
                project.category === 1 ? (
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
                ) : null
              )}
              <h1 className="display-heading">Web Dev</h1>
            </ul>
            <div className="projects-sidebar">
              <h3>Games</h3>
              <ul>
                {projectsList.map((project) =>
                  project.category === 1 ? (
                    <ProjectMenuItem
                      key={project.id}
                      id={project.id}
                      title={project.title}
                      wip={project.wip}
                    />
                  ) : null
                )}
              </ul>
              <h3>Web Dev</h3>
              <ul></ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsCode;

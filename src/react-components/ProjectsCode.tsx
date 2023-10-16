import '../css/Projects.css';
import { Breadcrumb } from './Breadcrumb';
import projectsList from '../data/projects.json';

function ProjectsCode() {
  console.log(projectsList);
  return (
    <>
      <Breadcrumb />
      <section className="projects-section">
        <div className="container">
          <h1 className="display-heading">Programming</h1>
          <div className="projects-box">
            <ul className="projects-container">
              <li className="proj"></li>
              <li className="proj"></li>
              <li className="proj"></li>
              <li className="proj"></li>
              <li className="proj"></li>
              <li className="proj"></li>
              <li className="proj"></li>
              <li className="proj"></li>
              <li className="proj"></li>
              <li className="proj"></li>
            </ul>
            <ul className="projects-sidebar">
              <li className="btn active">
                <span>Project 1</span>
              </li>
              <li className="btn">
                <span>Project 2</span>
              </li>
              <li className="btn">
                <span>Project 3</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsCode;

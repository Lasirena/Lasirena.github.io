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
          <h1 className="display-heading">Games</h1>
          <div className="projects-box">
            <ul className="projects-container">
              <li className="proj">
                <div className="proj-heading">
                  <h2 className="proj-title">Demonbound</h2>
                  <p className="proj-subtitle">
                    Procedural generation of 3D environments in an RPG context.
                  </p>
                </div>
                <img
                  src="assets/img/projects/3d-fighter.jpg"
                  alt="Video of the game project titled 'Demonbound'."
                />
                <div className="proj-info-card">
                  <h3>Info</h3>
                  <p>
                    Play it here:
                    <span className="info-emphasis">
                      {' '}
                      <a href="https://lasirena.itch.io/demonbound">
                        itch.io
                      </a>{' '}
                    </span>
                    (Windows)
                  </p>
                  <p>
                    Programming Language:{' '}
                    <span className="info-emphasis">C#</span>{' '}
                  </p>
                  <p>
                    Engine: <span className="info-emphasis">Unity</span>
                  </p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero modi inventore magnam provident delectus, cupiditate
                  sit neque voluptatibus hic officiis repudiandae vel, cumque ea
                  quisquam saepe? Quae inventore nobis eaque?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  pariatur aut necessitatibus quos autem assumenda vitae facilis
                  consequatur, quaerat eaque. Omnis non, architecto ipsam nam
                  enim vitae magnam quos temporibus!
                </p>
                <div className="proj-info-card">
                  <h3>Features</h3>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Pariatur delectus nulla ipsa libero neque.
                    </li>
                    <li>Sapiente deleniti neque, adipisci.</li>
                    <li>
                      Quam doloribus corrupti veritatis nihil ipsam sapiente
                      quia aspernatur inventore ratione.
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="projects-sidebar">
              <h3>Games</h3>
              <ul>
                <li className="btn">
                  <span>Demonbound</span>
                </li>
                <li className="btn">
                  <span>Tunnel Surfer</span>
                </li>
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

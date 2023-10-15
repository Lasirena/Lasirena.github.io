import { Link } from 'react-router-dom';
import '../css/HomePage.css';

function HomePage() {
  return (
    <section className="section-portfolios">
      <Link to={'code'} className="portfolio code">
        <h1 className="portfolio-title">Code</h1>
      </Link>
      <Link to={'techart'} className="portfolio techart">
        <h1 className="portfolio-title">Tech Art</h1>
      </Link>
      <Link to={'2d3d'} className="portfolio twodthreed">
        <h1 className="portfolio-title">2D & 3D</h1>
      </Link>
    </section>
  );
}

export default HomePage;

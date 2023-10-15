import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="header" id="header">
      <div className="header-container">
        <Link to={'/'} className="site-title">
          {' '}
          Alice Hinton-Jones{' '}
        </Link>
        <div className="nav-mobile-button">
          <div className="nav-mobile-bar-1"></div>
          <div className="nav-mobile-bar-2"></div>
          <div className="nav-mobile-bar-3"></div>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to={'/'}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link to={'blog'}>Blog</Link>
            </li>
            <li className="nav-item">
              <Link to={'about'}>About</Link>
            </li>
            <li className="nav-item">
              <Link to={'contact'}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

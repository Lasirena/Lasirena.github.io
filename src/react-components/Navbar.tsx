function Navbar() {
  return (
    <header className="header" id="header">
      <div className="header-container">
        <a href="" className="site-title">
          {' '}
          Alice Hinton-Jones{' '}
        </a>
        <div className="nav-mobile-button">
          <div className="nav-mobile-bar-1"></div>
          <div className="nav-mobile-bar-2"></div>
          <div className="nav-mobile-bar-3"></div>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item nav-item-emphasized">
              <a href="#mywork">My Work</a>
            </li>
            <li className="nav-item">
              <a href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <a href="#about">About Me</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

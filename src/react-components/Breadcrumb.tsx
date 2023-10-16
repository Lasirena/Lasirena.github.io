import { Link, useLocation } from 'react-router-dom';
import '../css/Breadcrumbs.css';

export function Breadcrumb() {
  const location = useLocation();
  let currentLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <>
          <li>/</li>
          <li className="breadcrumb" key={crumb}>
            <Link to={currentLink}>{crumb}</Link>
          </li>
        </>
      );
    });

  return (
    <>
      <div className="container">
        <ul className="breadcrumb-list">
          <li className="breadcrumb">
            <Link to={'/'}>Home</Link>
          </li>
          {crumbs}
        </ul>
      </div>
    </>
  );
}

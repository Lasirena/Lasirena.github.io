import { Link, useRouteError } from 'react-router-dom';
import Navbar from './Navbar';
import '../css/ErrorPage.css';

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      <div className="container error-page">
        <h1 className="error-title">Oops! Page not found</h1>
        <p>Looks like this page does not exist.</p>
        <p>It might still be under construction. Sorry!</p>
        <p>
          <Link to={'/'} className="error-link">
            Home
          </Link>
        </p>
      </div>
    </>
  );
}

export default ErrorPage;

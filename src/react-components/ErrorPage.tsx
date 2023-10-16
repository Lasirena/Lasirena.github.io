import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../css/ErrorPage.css';
import '../css/App.css';

function ErrorPage() {
  return (
    <>
      <main className="parallax-background">
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
      </main>
    </>
  );
}

export default ErrorPage;

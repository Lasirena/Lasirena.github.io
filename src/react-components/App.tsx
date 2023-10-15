import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import '../css/App.css';

function App() {
  return (
    <>
      <Navbar />
      <main className="parallax-background">
        <Outlet />
      </main>
    </>
  );
}

export default App;

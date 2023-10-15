import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;

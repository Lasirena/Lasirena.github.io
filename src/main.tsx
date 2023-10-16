import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './react-components/ErrorPage.tsx';
import App from './react-components/App.tsx';
import HomePage from './react-components/HomePage.tsx';
import AboutPage from './react-components/AboutPage.tsx';
import ProjectsCode from './react-components/ProjectsCode.tsx';
import ProjectsTechArt from './react-components/ProjectsTechArt.tsx';
import Projects2D3D from './react-components/Projects2D3D.tsx';
import { ContactPage } from './react-components/ContactPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/code',
        element: <ProjectsCode />,
      },
      {
        path: '/techart',
        element: <ProjectsTechArt />,
      },
      {
        path: '/2d3d',
        element: <Projects2D3D />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

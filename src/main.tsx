import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './react-components/App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './react-components/HomePage.tsx';
import AboutPage from './react-components/AboutPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

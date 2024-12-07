import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import NoteState from './context/notes/NoteState'; // Ensure this is correctly imported

// Correcting the router structure and wrapping everything in NoteState
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NoteState>
      <RouterProvider router={router} />
    </NoteState>
  </React.StrictMode>
);

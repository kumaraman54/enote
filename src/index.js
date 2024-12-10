import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Alert from './components/Alert.jsx';

import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import NoteState from './context/notes/NoteState'; // Ensure this is correctly imported
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';


const Root = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // Correcting the router structure and wrapping everything in NoteState
  const router = createHashRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home showAlert={showAlert} />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "signup",
          element: <Signup showAlert={showAlert} />,
        },
        {
          path: "login",
          element: <Login showAlert={showAlert} />,
        }
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <NoteState>
        <RouterProvider router={router} />
      </NoteState>
    </React.StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<Root />);

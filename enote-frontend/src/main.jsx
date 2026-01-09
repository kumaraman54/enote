import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import App from './App'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'
import NoteState from './context/notes/NoteState'

const Root = () => {
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({ msg: message, type })
    setTimeout(() => setAlert(null), 1500)
  }

  const router = createHashRouter([
    {
      path: '/',
      element: <App alert={alert} />,
      children: [
        { path: '/', element: <Home showAlert={showAlert} /> },
        { path: 'about', element: <About /> },
        { path: 'signup', element: <Signup showAlert={showAlert} /> },
        { path: 'login', element: <Login showAlert={showAlert} /> },
      ],
    },
  ])

  return (
    <React.StrictMode>
      <NoteState>
        <RouterProvider router={router} />
      </NoteState>
    </React.StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<Root />)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Projects from './Pages/Projects.jsx'
import Contact from './Pages/Contact.jsx'
import ProjectDetails from './Components/ProjectDetails.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 Not Found</h1>,

    children: [
      {
        index: true,
        element: <Home />
      },

      {
        path: "about",
        element: <About />
      },

      {
        path: "projects",
        element: <Projects />
      },

      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "project-details/:id",
        element: <ProjectDetails />
     },
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

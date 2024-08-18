import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Navbar from './components/Navbar.jsx'
import { Route, RouterProvider, RouterProvidercreateBrowserRouter, createRoutesFromElements } from 'react-router-dom'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'element={<App />}>
      <Route path='' element={<Home />}/>
      <Route path='' element={<About />}/>
      <Route path='' element={<Services />}/>
      <Route path='' element={<Contact />}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

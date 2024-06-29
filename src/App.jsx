import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Project from './components/Project'
import NotFound from './components/NotFound'
import Services from './components/Services'
import Logo from './components/logo'

function App() {

  return (
    <Router>
      <header className='center'>
        <nav>
        <Logo></Logo>
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/project" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Project</NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Services</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/project' element={<Project />}></Route>
          <Route path='*' element={<NotFound />}></Route>
          <Route path='/services' element={<Services />}></Route>
        </Routes>
      </div>
    </Router>
    
  )
}

export default App

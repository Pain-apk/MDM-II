import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

// Header Component
const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <Link to='/' className='logo'>
          MDM
        </Link>
        <nav className='nav'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
      </div>
    </header>
  )
}

// Footer Component
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <p>&copy; 2025 MDM Platform. All rights reserved.</p>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

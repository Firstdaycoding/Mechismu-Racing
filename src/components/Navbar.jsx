import './navbar.css'
import logo from '../assets/images/logo.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  function toggleMenu(){
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <>
      <div className="top-bar"></div>

      <nav id="navbar">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="MECHISMU Logo"/>
        </Link>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Cars">Cars</Link></li>
          <li><Link to="/Team">Team</Link></li>
          <li><Link to="/Achievements">Achievements</Link></li>
          <li><Link to="/Sponsors">Sponsors</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>

        <Link to="/Sponsors" className="nav-cta">
          Sponsor Us
        </Link>

        <button onClick={toggleMenu} className= {`hamburger ${isMenuOpen ? 'open' : ''}`}  id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div id="mobile-menu" className = {`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="mob-link">Home</Link>
        <Link to="/About" className="mob-link">About</Link>
        <Link to="/Cars" className="mob-link">Cars</Link>
        <Link to="/Team" className="mob-link">Team</Link>
        <Link to="/Achievements" className="mob-link">Achievements</Link>
        <Link to="/Sponsors" className="mob-link">Sponsors</Link>
        <Link to="/Contact" className="mob-link">Contact</Link>
        <Link
          to="/Sponsors"
          className="nav-cta"
          style={{ marginTop: 24 }}
        >
          Sponsor Us
        </Link>
      </div>
    </>
  )
}

export default Navbar;
import './navbar.css'
import logo from '@/assets/images/logo.png'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { path: "/", label: "Home" },
    { path: "/About", label: "About" },
    { path: "/Cars", label: "Cars" },
    { path: "/Team", label: "Team" },
    { path: "/Achievements", label: "Wins" },
    { path: "/Sponsors", label: "Sponsors" },
    { path: "/Contact", label: "Contact" }
  ]

  return (
    <>
      <nav className="nav-glass">
        <div className="nav-inner">

          {/* LEFT */}
          <div className="logo-wrap">
            <img src={logo} alt="logo" />
          </div>

          {/* RIGHT */}
          <div className="nav-right">
            <div className="nav-links">
              {links.map((item, i) => (
                <NavLink
                  key={i}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item"
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <button
              className={`hamburger ${isMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE */}
      <div className={`mobile-glass ${isMenuOpen ? 'open' : ''}`}>
        {links.map((item, i) => (
          <NavLink key={i} to={item.path} className="mob-item">
            {item.label}
          </NavLink>
        ))}
      </div>
    </>
  )
}

export default Navbar
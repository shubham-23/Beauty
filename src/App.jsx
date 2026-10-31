import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Team from './pages/Team'
import Contact from './pages/Contact'
import './App.css'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
]

function App() {
  const [open, setOpen] = useState(false)
  const currentYear = new Date().getFullYear()

  return (
    <Router>
      <div className="app-shell">
        <header className="topbar">
          <div className="brand">
            <div className="mark">SG</div>
            <div>
              <span className="brand-name">Serene Glow</span>
              <span className="brand-sub">Beauty Atelier</span>
            </div>
          </div>

          <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
            <span />
            <span />
          </button>

          <nav className={open ? 'nav open' : 'nav'}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <a className="pill pill-ghost" href="/contact">Book now</a>
          </nav>
        </header>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <div>
            <p className="eyebrow">Serene Glow</p>
            <p className="muted">Quiet luxury salon for skin, hair, and wellness rituals.</p>
          </div>
          <div className="footer-cta">
            <a className="btn-secondary" href="/contact">Plan a visit</a>
            <span className="muted">© {currentYear} Serene Glow</span>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App

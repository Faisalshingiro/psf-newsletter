import { useScrollProgress } from '../hooks.js'

export function ProgressBar() {
  const { progress } = useScrollProgress()
  return <div className="progress" style={{ width: `${progress}%` }} />
}

export function BackToTop() {
  const { scrolled } = useScrollProgress()
  return (
    <button
      className={`to-top${scrolled ? ' show' : ''}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      &uarr;
    </button>
  )
}

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a className="nav-brand" href="#top">
          <span className="logo-badge">
            <img src="/PSF LOGO.png" alt="PSF logo" />
          </span>
          <span>
            PSF
            <small>Expo 2026 Newsletter</small>
          </span>
        </a>
        <div className="nav-links">
          <a href="#marked">Highlights</a>
          <a href="#leadership">Leadership</a>
          <a href="#innovation">Innovation</a>
          <a href="#green">Green economy</a>
          <a href="#future">Expo 2027</a>
          <a className="nav-cta" href="#contact">Contact PSF</a>
        </div>
      </div>
    </nav>
  )
}

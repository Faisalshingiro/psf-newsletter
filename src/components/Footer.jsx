import { closing, footer } from '../data.js'
import { useReveal } from '../hooks.js'

export function Closing() {
  const ref = useReveal()
  return (
    <section className="closing reveal" ref={ref} id="looking-ahead">
      <div className="section-eyebrow">{closing.kicker}</div>
      <h2>{closing.title}</h2>
      {closing.body.map((p, i) => <p key={i}>{p}</p>)}
      <span className="cta">{closing.cta}</span>
    </section>
  )
}

export function Footer() {
  return (
    <footer id="contact">
      <div className="footer-grid">
        <div>
          <div className="footer-title">{footer.title}</div>
          <div className="footer-tag">{footer.tagline}</div>
          <div className="footer-note">{footer.note}</div>
          <div className="footer-note">{footer.org}</div>
        </div>
        <div className="footer-contact">
          <span className="label">Get in touch</span>
          {footer.address}<br />
          <a href={`mailto:${footer.email}`}>{footer.email}</a><br />
          {footer.phone}<br />
          Toll Free: {footer.tollFree}
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} {footer.org}. All rights reserved.</span>
        <span>Newsletter &middot; PSF Expo 2026</span>
      </div>
    </footer>
  )
}

import { meta, stats } from '../data.js'

export default function Hero() {
  return (
    <header className="hero">
      <img className="hero-logo" src="/PSF LOGO.png" alt="Private Sector Federation Rwanda logo" />
      <h1>
        Expo <span className="accentword">2026</span>
      </h1>
      <p className="accent-line">{meta.titleAccent}</p>
      <p className="dek">{meta.dek}</p>

      <div className="hero-actions">
        <a className="btn btn-primary" href="#marked">Read the highlights</a>
        <a className="btn btn-ghost" href="#future">Expo 2027 &amp; beyond</a>
      </div>

      <figure className="hero-figure">
        <img src={meta.heroImage} alt="Expo 2026 at Gikondo Expo Grounds" />
        <figcaption className="caption">{meta.heroCaption}</figcaption>
      </figure>
    </header>
  )
}

export function Stats() {
  return (
    <section className="stats">
      {stats.map((s) => (
        <div className="stat-card" key={s.label}>
          <strong>{s.value}</strong>
          <span>{s.label}</span>
        </div>
      ))}
    </section>
  )
}

import { gallery } from '../data.js'

export default function Gallery() {
  return (
    <section className="gallery-wrap">
      <div className="section-eyebrow">Expo in pictures</div>
      <h2 style={{ color: 'var(--green-2)', margin: '6px 0 0', fontSize: 30 }}>
        People. Places. Possibility.
      </h2>
      <div className="gallery">
        {gallery.map((g) => (
          <figure key={g.label}>
            <img src={g.src} alt={g.label} loading="lazy" />
            <figcaption>{g.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

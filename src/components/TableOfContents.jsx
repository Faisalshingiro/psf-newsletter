import { sections } from '../data.js'

export default function TableOfContents() {
  return (
    <section className="toc">
      <div className="section-eyebrow">Inside this issue</div>
      <h2>Twenty stories from Expo 2026</h2>
      <div className="toc-grid">
        {sections.map((s) => (
          <a className="toc-item" href={`#${s.id}`} key={s.id}>
            <span className="num">{s.no}</span>
            <span>{s.title}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

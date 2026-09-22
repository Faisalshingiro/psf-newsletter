import { useReveal } from '../hooks.js'

// A single newsletter story, rendered from a data entry.
export default function Story({ data }) {
  const ref = useReveal()
  const {
    id, no, kicker, title, lead, body = [], cards, tags,
    images = [], quote, timeline, statHighlight
  } = data

  return (
    <article ref={ref} className={`story story-${id} reveal`} id={id}>
      <div className="story-index">{no}</div>
      <div className="story-content">
        <div className="story-kicker">{kicker}</div>
        <h2>{title}</h2>
        {lead && <p className="lead">{lead}</p>}

        {body.map((p, i) => (
          <p className="body" key={i}>{p}</p>
        ))}

        {statHighlight && (
          <div className="stat-highlight">
            <b>{statHighlight.value}</b>
            <span>{statHighlight.label}</span>
          </div>
        )}

        {images.length > 0 && (
          <div className={`story-media${images.length > 1 ? ' pair' : ''}`}>
            {images.map((src, i) => (
              <figure key={i}>
                <img src={src} alt={title} loading="lazy" />
              </figure>
            ))}
          </div>
        )}

        {quote && (
          <blockquote className="quote">
            <p>{quote.text}</p>
            <div className="attr">
              <b>{quote.author}</b>
              {quote.role}
            </div>
          </blockquote>
        )}

        {cards && (
          <div className="cards">
            {cards.map((c, i) => (
              <div className={`card${c.accent ? ' accent' : ''}`} key={i}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        )}

        {timeline && (
          <div className="timeline">
            {timeline.map((t, i) => (
              <div className="step" key={i}>
                <b>{t.label}</b>
                <span>{t.text}</span>
              </div>
            ))}
          </div>
        )}

        {tags && (
          <div className="tags">
            {tags.map((t, i) => (
              <span className="tag" key={i}>{t}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

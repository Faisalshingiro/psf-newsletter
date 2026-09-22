import { meta, stats } from '../data.js'

export default function Hero() {
  return (
    <header className="relative isolate overflow-hidden bg-psf-green-deep text-white">
      {/* Background wash */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-psf-green via-psf-green-deep to-psf-green-darker" />

      {/* Decorative leaves */}
      <Leaf className="pointer-events-none absolute -left-10 top-24 h-40 w-40 rotate-[18deg] text-white/5" />
      <Leaf className="pointer-events-none absolute left-1/2 bottom-40 h-24 w-24 -rotate-12 text-psf-gold/10" />
      <Leaf className="pointer-events-none absolute right-6 top-6 h-16 w-16 rotate-[200deg] text-white/5" />
      <Leaf className="pointer-events-none absolute -bottom-6 left-10 h-28 w-28 rotate-[120deg] text-white/[0.04]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-10 pb-8 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:px-12 lg:pt-14">
        {/* Left: copy */}
        <div className="relative z-10 max-w-xl">
          <img
            src="/PSF LOGO.png"
            alt="Private Sector Federation Rwanda logo"
            className="h-24 w-auto rounded-md shadow-lg shadow-black/20 sm:h-28"
          />

          <div className="mt-7 flex items-center gap-4">
            <span className="text-sm font-medium uppercase tracking-[0.5em] text-white/80">
              Newsletter
            </span>
            <span className="h-px w-16 bg-psf-gold" />
          </div>

          <h1 className="mt-2 text-6xl font-extrabold leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl">
            Expo <span className="text-psf-gold">2026</span>
          </h1>

          <p className="mt-5 max-w-md text-2xl font-semibold leading-snug text-white sm:text-3xl">
            {meta.titleAccent}
          </p>

          <p className="mt-4 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
            {meta.dek}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#marked"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-psf-gold px-7 py-3.5 text-sm font-bold text-psf-green-darker shadow-lg shadow-psf-gold/20 transition hover:bg-psf-gold-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-psf-gold focus-visible:ring-offset-2 focus-visible:ring-offset-psf-green-deep"
            >
              <IconDocument className="h-5 w-5" />
              Read the highlights
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#future"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-psf-green-deep"
            >
              <IconImage className="h-5 w-5" />
              Expo 2027 &amp; beyond
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative z-10">
          <div className="relative">
            {/* Gold accent behind image */}
            {/* <div className="absolute -bottom-6 -left-6 h-36 w-36 rounded-full bg-psf-gold/90" aria-hidden="true" />
            <Leaf className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rotate-[30deg] text-psf-gold" /> */}

            <figure className="relative">
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-black/40 ring-4 ring-white/10">
                <img
                  src={meta.heroImage}
                  alt="Expo 2026 at the Gikondo Expo Grounds"
                  className="aspect-[4/3] w-full object-cover"
                  loading="eager"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-start gap-3 bg-gradient-to-t from-black/85 via-black/55 to-transparent p-5 pt-12 text-sm font-medium leading-relaxed text-white">
                  {meta.heroCaption}
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </header>
  )
}

export function Stats() {
  return (
    <section className="mx-auto mt-12 grid max-w-7xl grid-cols-2 gap-4 px-6 sm:gap-5 sm:px-8 lg:grid-cols-4 lg:px-12">
      {stats.map((s, i) => {
        const accent = i % 2 === 1
        return (
          <div
            key={s.label}
            className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-5 shadow-[0_18px_40px_-10px_rgba(0,53,30,0.28)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_55px_-12px_rgba(0,53,30,0.4)] sm:p-6"
          >
            <strong
              className={`block text-4xl font-extrabold leading-none tracking-tight sm:text-5xl ${accent ? 'text-psf-orange' : 'text-psf-green'}`}
            >
              {s.value}
            </strong>
            <span className="mt-3 block text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500 sm:text-xs">
              {s.label}
            </span>
          </div>
        )
      })}
    </section>
  )
}

/* ---------- Icons ---------- */

function ArrowRight({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  )
}

function IconDocument({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 22V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
      <path d="M14 2v6h6M8 13h8M8 17h6" />
    </svg>
  )
}

function IconImage({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="m21 16-4.5-4.5L7 21" />
    </svg>
  )
}

function Leaf({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
      <path d="M50 4C24 22 14 44 20 74c2 10 8 18 18 22 0-26 8-46 30-64C60 24 54 14 50 4Z" />
    </svg>
  )
}

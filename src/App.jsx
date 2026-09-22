import { sections } from './data.js'
import Hero, { Stats } from './components/Hero.jsx'
import TableOfContents from './components/TableOfContents.jsx'
import Story from './components/Story.jsx'
import { Closing, Footer } from './components/Footer.jsx'
import { ProgressBar, BackToTop } from './components/Chrome.jsx'

export default function App() {
  return (
    <>
      <ProgressBar />
      <div className="page" id="top">
        <Hero />
        <Stats />
        <TableOfContents />
        <main>
          {sections.map((s) => (
            <Story key={s.id} data={s} />
          ))}
        </main>
        <Closing />
        <Footer />
      </div>
      <BackToTop />
    </>
  )
}

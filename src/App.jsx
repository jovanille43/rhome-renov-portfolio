import { lazy, Suspense } from 'react'
import Hero from './components/Hero'

// Lazy-load sections below the fold (code splitting)
const Services    = lazy(() => import('./components/Services'))
const Projects    = lazy(() => import('./components/Projects'))
const Process     = lazy(() => import('./components/Process'))
const About       = lazy(() => import('./components/About'))
const Contact     = lazy(() => import('./components/Contact'))
const Footer      = lazy(() => import('./components/Footer'))

const SectionFallback = () => (
  <div className="w-full py-24 flex items-center justify-center">
    <div className="w-6 h-6 rounded-full border-2 border-brand-red border-t-transparent animate-spin" />
  </div>
)

export default function App() {
  return (
    <div style={{ background: '#000', fontFamily: "'DM Sans', sans-serif" }}>
      {/* Hero renders immediately — no lazy */}
      <Hero />

      <Suspense fallback={<SectionFallback />}>
        <Services />
        <Projects />
        <Process />
        <About />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  )
}

import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'

const RED  = '#C8181E'
const BLUE = '#00A3D5'
const ease = [0.22, 1, 0.36, 1]

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4'

const navLinks = [
  { label: 'Accueil',      href: '#accueil'  },
  { label: 'Services',     href: '#services' },
  { label: 'Réalisations', href: '#projets'  },
  { label: 'Contact',      href: '#contact'  },
]

const stats = [
  { num: '15', label: "ANS\nD'EXPÉRIENCE" },
  { num: '500', label: 'PROJETS\nRÉALISÉS' },
  { num: '100', label: 'CLIENTS\nSATISFAITS' },
]

const words = ['Rénover.', 'Innover.', 'Sublimer.']

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]  = useState(false)
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const dur   = shouldReduce ? 0 : undefined
  const delay = (n) => (shouldReduce ? 0 : n)

  return (
    <>
      {/* ── Fixed nav ── */}
      <nav
        aria-label="Navigation principale"
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 md:px-12 py-4 transition-all duration-300"
        style={{
          background:     scrolled ? 'rgba(0,0,0,0.90)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)'        : 'none',
          borderBottom:   scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        {/* Logo dot */}
        <motion.a
          href="#accueil"
          aria-label="Accueil R'Home Rénov"
          initial={{ opacity: 0, y: shouldReduce ? 0 : -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur ?? 0.5, ease }}
          className="w-8 h-8 rounded-full flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
          style={{ border: `2px solid ${RED}` }}
        >
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: RED }} />
        </motion.a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map(({ label, href }, i) => (
            <motion.a
              key={label}
              role="listitem"
              href={href}
              initial={{ opacity: 0, y: shouldReduce ? 0 : -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delay(0.08 * (i + 1)), duration: dur ?? 0.45, ease }}
              className="text-xs font-medium tracking-widest uppercase text-white/70 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:text-white"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {label}
            </motion.a>
          ))}
        </div>

        {/* Hamburger */}
        <motion.button
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          initial={{ opacity: 0, y: shouldReduce ? 0 : -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay(0.45), duration: dur ?? 0.45, ease }}
          className="w-9 h-9 rounded-full bg-black/70 border border-white/10 flex flex-col items-center justify-center gap-[5px] hover:border-white/30 transition-colors duration-200"
        >
          <span aria-hidden className="block w-4 bg-white" style={{ height: '1.5px' }} />
          <span aria-hidden className="block w-4 bg-white" style={{ height: '1.5px' }} />
          <span aria-hidden className="block w-3 bg-white self-start ml-[8px]" style={{ height: '1.5px' }} />
        </motion.button>
      </nav>

      {/* ── Mobile overlay menu ── */}
      {menuOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigation"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: dur ?? 0.35, ease }}
          className="fixed inset-0 z-[60] bg-black flex flex-col px-6 pt-6 pb-10"
          style={{ borderLeft: `1px solid rgba(255,255,255,0.06)` }}
        >
          <div className="flex items-center justify-between mb-16">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ border: `2px solid ${RED}` }}
            >
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: RED }} />
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Fermer le menu"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 transition-colors duration-200"
            >
              <X size={16} color="white" />
            </button>
          </div>

          <nav role="list" className="flex flex-col gap-2 flex-1">
            {navLinks.map(({ label, href }, i) => (
              <motion.a
                key={label}
                role="listitem"
                href={href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: delay(i * 0.07), duration: dur ?? 0.35, ease }}
                className="group flex items-center justify-between py-4 border-b border-white/06 hover:border-white/15 transition-colors duration-200"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 8vw, 3.5rem)', letterSpacing: '0.04em', color: 'white' }}
              >
                {label}
                <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" color={RED} />
              </motion.a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 mt-10 text-sm font-medium tracking-widest uppercase"
            style={{ color: RED, fontFamily: "'DM Sans', sans-serif" }}
          >
            Devis Gratuit <ArrowUpRight size={16} />
          </a>
        </motion.div>
      )}

      {/* ── Hero section ── */}
      <section
        id="accueil"
        aria-label="Accueil"
        className="relative min-h-screen flex flex-col overflow-hidden"
        style={{ background: '#000' }}
      >
        {/* Video bg */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={VIDEO_URL}
          autoPlay loop muted playsInline
          aria-hidden="true"
        />
        {/* OLED-optimised scrim: heavy at bottom for text, lighter at top */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.75) 100%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col flex-1 pt-20">

          {/* ── Stats (upper-right) ── */}
          <div
            className="flex-1 flex items-center justify-end px-5 sm:px-8 md:px-12 py-8 md:py-0"
            aria-label="Chiffres clés"
          >
            <div className="flex items-end gap-6 sm:gap-10 md:gap-14">
              {stats.map(({ num, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: delay(0.2 + i * 0.12), duration: dur ?? 0.6, ease }}
                  className="flex flex-col items-end"
                >
                  <div
                    aria-label={`${num} ${label.replace('\n', ' ')}`}
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 'clamp(2rem, 5.5vw, 4rem)',
                      lineHeight: 1,
                      letterSpacing: '0.03em',
                    }}
                  >
                    <span aria-hidden style={{ color: RED, fontSize: '0.55em' }}>+</span>
                    <span aria-hidden className="text-white">{num}</span>
                  </div>
                  <p
                    aria-hidden
                    className="text-[10px] sm:text-xs font-medium tracking-widest uppercase text-white/50 text-right mt-0.5 leading-tight"
                    style={{ whiteSpace: 'pre-line', fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Bottom content ── */}
          <div className="px-5 sm:px-8 md:px-12 pb-8 md:pb-14 flex flex-col gap-5 md:gap-10">

            {/* Row A — tagline + CTA */}
            <div className="flex items-end justify-between gap-4">
              <motion.p
                initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: delay(0.55), duration: dur ?? 0.55, ease }}
                className="text-[10px] sm:text-xs font-medium tracking-widest uppercase text-white/40 leading-relaxed"
                style={{ maxWidth: 140, fontFamily: "'DM Sans', sans-serif" }}
              >
                Rénovation &amp; Plomberie<br />Chauffage / Haute-Loire<br />Monistrol-sur-Loire
              </motion.p>

              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: delay(0.65), duration: dur ?? 0.55, ease }}
                className="group flex items-center gap-2 text-base sm:text-xl md:text-2xl font-medium tracking-widest uppercase whitespace-nowrap transition-opacity duration-200 hover:opacity-75"
                style={{ color: RED, fontFamily: "'DM Sans', sans-serif" }}
                aria-label="Nous contacter pour un devis"
              >
                Nous Contacter
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.a>
            </div>

            {/* Row B — description + main heading */}
            <div className="flex items-end justify-between gap-4">
              <motion.div
                initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: delay(0.7), duration: dur ?? 0.55, ease }}
                className="w-[130px] sm:w-[200px] md:w-[300px] shrink-0"
              >
                <p
                  className="text-[9px] sm:text-[11px] md:text-sm font-medium tracking-widest uppercase text-white/35 leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Artisans certifiés RGE au service de votre habitat — devis gratuit sous 48h
                </p>
              </motion.div>

              {/* Bebas Neue clip-reveal heading */}
              <div className="flex flex-col items-end" aria-label="Rénover. Innover. Sublimer.">
                {words.map((word, i) => (
                  <div key={word} className="overflow-hidden">
                    <motion.span
                      aria-hidden
                      initial={{ y: shouldReduce ? 0 : '110%' }}
                      animate={{ y: 0 }}
                      transition={{ delay: delay(0.45 + i * 0.13), duration: dur ?? 0.7, ease }}
                      style={{
                        display: 'block',
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: 'clamp(2.5rem, 10vw, 10rem)',
                        lineHeight: 0.88,
                        letterSpacing: '0.03em',
                        color: 'white',
                        textAlign: 'right',
                      }}
                    >
                      {word}
                    </motion.span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Brand gradient accent line */}
        <div aria-hidden className="absolute bottom-0 left-0 right-0 h-[2px] grad-line" />
      </section>
    </>
  )
}

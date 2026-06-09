import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'

// Brand colors extracted from R'Home Rénov logo
const RED = '#C8181E'   // Logo red (border, "R'HOME" text)
const BLUE = '#00A3D5'  // Logo blue ("RÉNOV" text and chevron)

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4'

const ease = [0.22, 1, 0.36, 1]

const fadeDown = {
  initial: { opacity: 0, y: -20 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease },
  }),
}

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease },
  }),
}

const navLinks = [
  { label: 'Accueil',     href: '#accueil' },
  { label: 'Services',    href: '#services' },
  { label: 'Réalisations',href: '#projets' },
  { label: 'Contact',     href: '#contact' },
]

const stats = [
  { number: 15,  label: "ANS\nD'EXPÉRIENCE" },
  { number: 500, label: 'PROJETS\nRÉALISÉS' },
  { number: 100, label: 'CLIENTS\nSATISFAITS' },
]

const headingWords = ['Rénover.', 'Innover.', 'Sublimer.']

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col overflow-hidden bg-black"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── Background video ── */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Subtle dark scrim so white text stays readable */}
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.52)' }} />

      {/* ── Mobile full-screen menu ── */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-white flex flex-col px-5 pt-5 pb-8"
        >
          <div className="flex items-center justify-between">
            {/* Logo dot */}
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ border: `2px solid ${RED}` }}
            >
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: RED }} />
            </div>
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="w-9 h-9 rounded-full bg-black flex items-center justify-center"
              aria-label="Fermer le menu"
            >
              <X size={18} color="white" />
            </button>
          </div>

          <nav className="flex flex-col gap-8 mt-16">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-semibold tracking-widest uppercase text-black"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="mt-auto">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-xl font-semibold tracking-widest uppercase"
              style={{ color: RED }}
            >
              Nous Contacter
              <ArrowUpRight size={22} />
            </a>
          </div>
        </motion.div>
      )}

      {/* ── Main layout (flex column fills the viewport) ── */}
      <div className="relative z-10 flex flex-col flex-1">

        {/* ── Navbar ── */}
        <nav className="flex items-center justify-between px-5 sm:px-8 md:px-12 pt-5 md:pt-6">
          {/* Logo circle */}
          <motion.div
            custom={0}
            variants={fadeDown}
            initial="initial"
            animate="animate"
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ border: `2px solid ${RED}` }}
          >
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: RED }} />
          </motion.div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }, i) => (
              <motion.a
                key={label}
                custom={i + 1}
                variants={fadeDown}
                initial="initial"
                animate="animate"
                href={href}
                className="text-sm font-semibold tracking-widest uppercase text-white hover:opacity-70 transition-opacity"
              >
                {label}
              </motion.a>
            ))}
          </div>

          {/* Hamburger */}
          <motion.button
            custom={5}
            variants={fadeDown}
            initial="initial"
            animate="animate"
            onClick={() => setMenuOpen(true)}
            className="w-9 h-9 rounded-full bg-black flex flex-col items-center justify-center gap-1"
            aria-label="Ouvrir le menu"
          >
            <span className="block w-4 bg-white" style={{ height: '2px' }} />
            <span className="block w-4 bg-white" style={{ height: '2px' }} />
            <span className="block w-4 bg-white" style={{ height: '2px' }} />
          </motion.button>
        </nav>

        {/* ── Stats row (vertically centered, right-aligned) ── */}
        <div className="flex-1 flex items-center justify-end px-5 sm:px-8 md:px-12 py-8 md:py-0">
          <div className="flex items-end gap-5 sm:gap-8 md:gap-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i + 2}
                variants={fadeUp}
                initial="initial"
                animate="animate"
                className="flex flex-col items-end"
              >
                {/* Number */}
                <div style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)', fontWeight: 600, lineHeight: 1 }}>
                  <span style={{ color: RED, fontSize: '0.5em' }}>+</span>
                  <span className="text-white">{stat.number}</span>
                </div>
                {/* Label */}
                <p
                  className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-white text-right leading-tight"
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Bottom section ── */}
        <div className="px-5 sm:px-8 md:px-12 pb-8 md:pb-12 flex flex-col gap-6 md:gap-12">

          {/* Row A — tagline + CTA */}
          <div className="flex items-center justify-between gap-4">
            <motion.p
              custom={5}
              variants={fadeUp}
              initial="initial"
              animate="animate"
              className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-white"
              style={{ maxWidth: '130px' }}
            >
              Rénovation &amp; <br />
              Plomberie / <br />
              Chauffage Haute-Loire
            </motion.p>

            <motion.a
              custom={6}
              variants={fadeUp}
              initial="initial"
              animate="animate"
              href="#contact"
              className="flex items-center gap-2 text-base sm:text-xl md:text-2xl font-semibold tracking-widest uppercase whitespace-nowrap"
              style={{ color: RED }}
            >
              Nous Contacter
              <ArrowUpRight
                size={18}
                style={{ width: 18, height: 18 }}
                className="sm:!w-[22px] sm:!h-[22px]"
              />
            </motion.a>
          </div>

          {/* Row B — description + main heading */}
          <div className="flex items-end justify-between gap-3 sm:gap-4">
            {/* Left description block */}
            <motion.div
              custom={7}
              variants={fadeUp}
              initial="initial"
              animate="animate"
              className="w-[120px] sm:w-[180px] md:w-[280px] shrink-0"
            >
              <p className="text-[9px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-white text-left md:text-right">
                Artisans Experts Au Service De Votre Habitat À Monistrol-sur-Loire
              </p>
            </motion.div>

            {/* Main heading — clip-reveal slide-up */}
            <div className="flex flex-col items-end">
              {headingWords.map((word, i) => (
                <div key={word} className="overflow-hidden">
                  <motion.span
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.4 + i * 0.14, duration: 0.7, ease }}
                    style={{
                      display: 'block',
                      fontSize: 'clamp(2rem, 9vw, 9rem)',
                      lineHeight: 0.88,
                      fontWeight: 600,
                      textTransform: 'uppercase',
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

      {/* Bottom blue accent line (brand touch) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: `linear-gradient(90deg, ${RED}, ${BLUE})` }}
      />
    </section>
  )
}

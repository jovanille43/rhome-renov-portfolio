import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const RED  = '#C8181E'
const BLUE = '#00A3D5'
const ease = [0.22, 1, 0.36, 1]

const ALL = [
  {
    id: 1,
    cat: 'Salle de Bain',
    title: 'Suite Parentale Minimaliste',
    desc: 'Douche à l\'italienne 140×90, double vasque suspendue, carrelage grès cérame 120×60 effet béton. Surface : 12m².',
    accent: RED,
    span: 'lg:col-span-2',
    pattern: `linear-gradient(135deg, #1a0303 0%, #3d0808 45%, #200505 100%)`,
  },
  {
    id: 2,
    cat: 'Chauffage',
    title: 'PAC Air/Eau — 180m²',
    desc: 'Pompe à chaleur Atlantic + plancher chauffant basse température. Économies d\'énergie : 65%. MaPrimeRénov\' obtenu.',
    accent: BLUE,
    span: '',
    pattern: `linear-gradient(135deg, #001826 0%, #003d56 50%, #001426 100%)`,
  },
  {
    id: 3,
    cat: 'Plomberie',
    title: 'Mise aux Normes Complète',
    desc: 'Remplacement réseau plomberie maison 1960. Cuivre et PER multicouche, chauffe-eau thermodynamique 270L.',
    accent: BLUE,
    span: '',
    pattern: `linear-gradient(135deg, #001420 0%, #003050 50%, #001020 100%)`,
  },
  {
    id: 4,
    cat: 'Salle de Bain',
    title: 'Salle de Bain Prestige',
    desc: 'Baignoire îlot autoportante, colonne hydromassante, faïence travertin format 80×80, robinetterie dorée mat.',
    accent: RED,
    span: 'lg:col-span-2',
    pattern: `linear-gradient(135deg, #180303 0%, #350707 50%, #180303 100%)`,
  },
]

const CATS = ['Tous', 'Salle de Bain', 'Chauffage', 'Plomberie']

export default function Projects() {
  const [active, setActive] = useState('Tous')
  const shouldReduce = useReducedMotion()

  const filtered = active === 'Tous' ? ALL : ALL.filter((p) => p.cat === active)

  return (
    <section
      id="projets"
      aria-label="Nos réalisations"
      className="py-24 md:py-36 px-5 sm:px-8 md:px-12"
      style={{ background: '#060606' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduce ? 0 : 0.6, ease }}
          className="mb-14 md:mb-20"
        >
          <p
            className="text-xs font-medium tracking-widest uppercase mb-3"
            style={{ color: BLUE, fontFamily: "'DM Sans', sans-serif" }}
          >
            Portfolio
          </p>

          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                lineHeight: 0.88,
                letterSpacing: '0.04em',
              }}
            >
              <span className="text-white">Nos </span>
              <span style={{ color: BLUE }}>Réalisations</span>
            </h2>

            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 text-sm font-medium tracking-widest uppercase transition-opacity duration-200 hover:opacity-75"
              style={{ color: RED, fontFamily: "'DM Sans', sans-serif" }}
              aria-label="Discuter de votre projet"
            >
              Votre projet <ArrowUpRight size={14} aria-hidden />
            </a>
          </div>

          <div
            className="mt-8 h-px"
            style={{ background: `linear-gradient(90deg, ${BLUE}, ${RED}, transparent)` }}
          />

          {/* Filter tabs */}
          <div role="tablist" aria-label="Filtrer par catégorie" className="flex flex-wrap gap-2 mt-8">
            {CATS.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                onClick={() => setActive(cat)}
                className="px-4 py-1.5 text-[10px] font-medium tracking-widest uppercase transition-all duration-200"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  background:   active === cat ? RED : 'transparent',
                  color:        active === cat ? '#fff' : 'rgba(255,255,255,0.4)',
                  border:       `1px solid ${active === cat ? RED : 'rgba(255,255,255,0.1)'}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.header>

        {/* Grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: 'rgba(255,255,255,0.04)' }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, scale: shouldReduce ? 1 : 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: shouldReduce ? 1 : 0.97 }}
                transition={{ delay: shouldReduce ? 0 : i * 0.08, duration: shouldReduce ? 0 : 0.5, ease }}
                className={`group overflow-hidden ${p.span}`}
                style={{ background: '#060606' }}
              >
                {/* Visual placeholder with animated rings */}
                <div
                  className="relative flex items-center justify-center overflow-hidden"
                  style={{
                    height: p.span ? '280px' : '220px',
                    background: p.pattern,
                  }}
                  aria-hidden
                >
                  {/* Pulsing rings */}
                  <motion.div
                    animate={shouldReduce ? {} : { scale: [1, 1.1, 1], opacity: [0.12, 0.22, 0.12] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute w-40 h-40 rounded-full border"
                    style={{ borderColor: p.accent }}
                  />
                  <motion.div
                    animate={shouldReduce ? {} : { scale: [1.08, 1, 1.08], opacity: [0.06, 0.14, 0.06] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                    className="absolute w-28 h-28 rounded-full border"
                    style={{ borderColor: p.accent }}
                  />
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: `${p.accent}20`, border: `1.5px solid ${p.accent}` }}
                  >
                    <div className="w-3 h-3 rounded-full" style={{ background: p.accent }} />
                  </div>

                  {/* Category pill */}
                  <div
                    className="absolute top-4 left-4 px-2.5 py-1 text-[9px] font-medium tracking-widest uppercase"
                    style={{
                      background: `${p.accent}20`,
                      border: `1px solid ${p.accent}50`,
                      color: p.accent,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {p.cat}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col gap-3 border-t border-white/05">
                  <h3
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '1.5rem',
                      letterSpacing: '0.05em',
                      color: 'white',
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {p.desc}
                  </p>
                  <a
                    href="#contact"
                    className="mt-1 self-start flex items-center gap-1.5 text-[10px] font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: p.accent, fontFamily: "'DM Sans', sans-serif" }}
                    aria-label={`Projet similaire à ${p.title}`}
                  >
                    Projet similaire <ArrowUpRight size={11} aria-hidden />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 flex justify-center md:hidden">
          <a
            href="#contact"
            className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase"
            style={{ color: RED, fontFamily: "'DM Sans', sans-serif" }}
          >
            Discuter de votre projet <ArrowUpRight size={12} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  )
}

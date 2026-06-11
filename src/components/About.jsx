import { motion, useReducedMotion } from 'framer-motion'
import { Award, ShieldCheck, Star, Clock, CheckCircle } from 'lucide-react'

const RED  = '#C8181E'
const BLUE = '#00A3D5'
const ease = [0.22, 1, 0.36, 1]

const STATS = [
  { Icon: Clock,       val: '15+', label: "Années d'expérience", accent: RED  },
  { Icon: Star,        val: '500+', label: 'Chantiers réalisés',  accent: BLUE },
  { Icon: ShieldCheck, val: '100%', label: 'Satisfaction client', accent: RED  },
  { Icon: Award,       val: 'RGE',  label: 'Certifié & assurés',  accent: BLUE },
]

const POINTS = [
  'Devis gratuit et détaillé sous 48h',
  'Matériaux sélectionnés chez les meilleurs fournisseurs',
  'Garantie décennale sur tous les travaux',
  'Éligibilité MaPrimeRénov\' et aides CEE',
  'Intervention sur Monistrol, Yssingeaux, Le Puy-en-Velay',
]

export default function About() {
  const shouldReduce = useReducedMotion()

  return (
    <section
      id="à-propos"
      aria-label="À propos de R'Home Rénov"
      className="py-24 md:py-36 px-5 sm:px-8 md:px-12 relative overflow-hidden"
      style={{ background: '#060606' }}
    >
      {/* Ambient blue glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[400px]"
        style={{ background: `radial-gradient(ellipse at bottom right, ${BLUE}0e 0%, transparent 70%)` }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduce ? 0 : 0.6, ease }}
          className="mb-16 md:mb-24"
        >
          <p
            className="text-xs font-medium tracking-widest uppercase mb-3"
            style={{ color: RED, fontFamily: "'DM Sans', sans-serif" }}
          >
            L'Entreprise
          </p>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              lineHeight: 0.88,
              letterSpacing: '0.04em',
            }}
          >
            <span className="text-white">À propos de </span>
            <span style={{ color: RED }}>R'Home Rénov</span>
          </h2>
          <div
            className="mt-8 h-px"
            style={{ background: `linear-gradient(90deg, ${RED}, ${BLUE}, transparent)` }}
          />
        </motion.header>

        {/* Main split */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start mb-20">

          {/* Left — manifesto */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduce ? 0 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduce ? 0 : 0.65, ease }}
          >
            <blockquote
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(1.8rem, 4.5vw, 3.5rem)',
                lineHeight: 1.05,
                letterSpacing: '0.04em',
                color: 'white',
              }}
              className="mb-8"
            >
              "Rénover, c'est{' '}
              <span style={{ color: RED }}>révéler le potentiel</span>{' '}
              caché de chaque espace."
            </blockquote>

            <p
              className="text-sm md:text-base leading-relaxed mb-8"
              style={{ color: 'rgba(255,255,255,0.45)', fontFamily: "'DM Sans', sans-serif", maxWidth: '50ch' }}
            >
              R'Home Rénov est une entreprise artisanale dirigée par{' '}
              <strong style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>Romain Fanget</strong>,
              basée à Monistrol-sur-Loire. Nous proposons une approche complète,
              du premier rendez-vous jusqu'à la livraison du chantier, en garantissant
              qualité d'exécution et respect des délais.
            </p>

            <ul className="flex flex-col gap-3" aria-label="Nos engagements">
              {POINTS.map((pt) => (
                <li key={pt} className="flex items-start gap-3">
                  <CheckCircle
                    size={14}
                    color={RED}
                    strokeWidth={2}
                    className="shrink-0 mt-0.5"
                    aria-hidden
                  />
                  <span
                    className="text-sm"
                    style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {pt}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — stat grid */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduce ? 0 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduce ? 0 : 0.65, ease }}
            className="grid grid-cols-2 gap-px"
            style={{ background: 'rgba(255,255,255,0.05)' }}
            aria-label="Chiffres clés"
          >
            {STATS.map(({ Icon, val, label, accent }, i) => (
              <motion.div
                key={val}
                initial={{ opacity: 0, scale: shouldReduce ? 1 : 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: shouldReduce ? 0 : i * 0.09, duration: shouldReduce ? 0 : 0.45, ease }}
                className="group flex flex-col gap-4 p-6 md:p-8 transition-colors duration-300"
                style={{ background: '#060606' }}
              >
                <Icon
                  size={22}
                  color={accent}
                  strokeWidth={1.6}
                  aria-hidden
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div>
                  <div
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                      letterSpacing: '0.04em',
                      color: accent,
                      lineHeight: 1,
                    }}
                    aria-label={`${val} — ${label}`}
                  >
                    {val}
                  </div>
                  <p
                    className="text-[10px] font-medium tracking-widest uppercase mt-1"
                    style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'DM Sans', sans-serif" }}
                    aria-hidden
                  >
                    {label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Keyword marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduce ? 0 : 0.6, ease }}
          className="border-t pt-12"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
          aria-hidden
        >
          <p
            className="font-medium uppercase tracking-widest"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(0.55rem, 1.8vw, 0.9rem)',
              color: 'rgba(255,255,255,0.12)',
              letterSpacing: '0.18em',
            }}
          >
            Plomberie · Chauffage · Salle de Bain · Climatisation · Rénovation · RGE · Haute-Loire ·
            Monistrol-sur-Loire · Yssingeaux · Le Puy-en-Velay · MaPrimeRénov\' · Décennale
          </p>
        </motion.div>
      </div>
    </section>
  )
}

import { motion, useReducedMotion } from 'framer-motion'

const RED  = '#C8181E'
const BLUE = '#00A3D5'
const ease = [0.22, 1, 0.36, 1]

const STEPS = [
  {
    num: '01',
    title: 'Prise de contact',
    desc: 'Décrivez votre projet par email ou téléphone. Nous revenons vers vous sous 24h pour convenir d\'un rendez-vous.',
    accent: RED,
  },
  {
    num: '02',
    title: 'Visite & Devis',
    desc: 'Nous nous déplaçons gratuitement pour évaluer votre projet. Devis détaillé et chiffré sous 48h, sans engagement.',
    accent: BLUE,
  },
  {
    num: '03',
    title: 'Planification',
    desc: 'Définition du planning, choix des matériaux et commandes. Vous êtes informé à chaque étape de l\'avancement.',
    accent: RED,
  },
  {
    num: '04',
    title: 'Réalisation',
    desc: 'Nos artisans interviennent dans les délais convenus. Chantier propre, travail soigné, respect de votre domicile.',
    accent: BLUE,
  },
  {
    num: '05',
    title: 'Livraison',
    desc: 'Visite finale avec vous. Réception du chantier, remise des garanties et dossier de fin de travaux complet.',
    accent: RED,
  },
]

export default function Process() {
  const shouldReduce = useReducedMotion()

  return (
    <section
      id="processus"
      aria-label="Notre processus de travail"
      className="py-24 md:py-36 px-5 sm:px-8 md:px-12"
      style={{ background: '#000' }}
    >
      <div className="max-w-7xl mx-auto">

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
            Comment ça marche
          </p>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              lineHeight: 0.88,
              letterSpacing: '0.04em',
            }}
          >
            <span className="text-white">Notre </span>
            <span style={{ color: RED }}>Processus</span>
          </h2>
          <div
            className="mt-8 h-px"
            style={{ background: `linear-gradient(90deg, ${RED}, ${BLUE}, transparent)` }}
          />
        </motion.header>

        {/* Steps */}
        <ol className="relative" aria-label="Étapes du projet">
          {/* Vertical connector line */}
          <div
            aria-hidden
            className="hidden md:block absolute left-[2.75rem] top-0 bottom-0 w-px"
            style={{ background: 'rgba(255,255,255,0.06)' }}
          />

          <div className="flex flex-col gap-0">
            {STEPS.map(({ num, title, desc, accent }, i) => (
              <motion.li
                key={num}
                initial={{ opacity: 0, x: shouldReduce ? 0 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: shouldReduce ? 0 : i * 0.1, duration: shouldReduce ? 0 : 0.55, ease }}
                className="relative flex items-start gap-6 md:gap-10 py-8 md:py-10 border-b border-white/05 last:border-none group cursor-default"
              >
                {/* Step number bubble */}
                <div
                  className="shrink-0 w-[2.25rem] h-[2.25rem] md:w-[5.5rem] md:h-[5.5rem] rounded-full flex items-center justify-center border transition-all duration-300 group-hover:scale-105"
                  style={{
                    borderColor: `${accent}40`,
                    background: `${accent}0c`,
                    zIndex: 1,
                  }}
                  aria-hidden
                >
                  <span
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 'clamp(0.9rem, 2.5vw, 1.75rem)',
                      letterSpacing: '0.04em',
                      color: accent,
                    }}
                  >
                    {num}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-0.5 md:pt-3">
                  <h3
                    className="mb-2 md:mb-3"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
                      letterSpacing: '0.05em',
                      color: 'white',
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-sm md:text-base leading-relaxed max-w-xl"
                    style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {desc}
                  </p>
                </div>

                {/* Hover accent */}
                <div
                  aria-hidden
                  className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: accent }}
                />
              </motion.li>
            ))}
          </div>
        </ol>
      </div>
    </section>
  )
}

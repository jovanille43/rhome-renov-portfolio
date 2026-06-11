import { motion, useReducedMotion } from 'framer-motion'
import { Bath, Wrench, Flame, Snowflake, ArrowUpRight } from 'lucide-react'

const RED  = '#C8181E'
const BLUE = '#00A3D5'

const SERVICES = [
  {
    Icon: Bath,
    name: 'Salles de Bain',
    tagline: 'Clé en main',
    desc: 'Conception complète : douche à l\'italienne, baignoire îlot, double vasque, carrelage grand format. Du projet à la livraison.',
    accent: RED,
  },
  {
    Icon: Wrench,
    name: 'Plomberie',
    tagline: 'Générale & Dépannage',
    desc: 'Installation, modification et réparation des réseaux eau chaude, froide et gaz. Intervention rapide en Haute-Loire.',
    accent: BLUE,
  },
  {
    Icon: Flame,
    name: 'Chauffage',
    tagline: 'RGE Certifié',
    desc: 'Pompe à chaleur, chaudière gaz, plancher chauffant, radiateurs à inertie. Éligible MaPrimeRénov\' et CEE.',
    accent: RED,
  },
  {
    Icon: Snowflake,
    name: 'Climatisation',
    tagline: 'Confort toute saison',
    desc: 'Systèmes split et gainables pour un confort thermique optimal été comme hiver. Installation soignée et discrète.',
    accent: BLUE,
  },
]

export default function Services() {
  const shouldReduce = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1]

  return (
    <section
      id="services"
      aria-label="Nos services"
      className="py-24 md:py-36 px-5 sm:px-8 md:px-12 relative overflow-hidden"
      style={{ background: '#000' }}
    >
      {/* Ambient red glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] rounded-full"
        style={{ background: `radial-gradient(ellipse, ${RED}14 0%, transparent 70%)` }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Section header ── */}
        <motion.header
          initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduce ? 0 : 0.6, ease }}
          className="mb-14 md:mb-20"
        >
          <p
            className="text-xs font-medium tracking-widest uppercase mb-3"
            style={{ color: RED, fontFamily: "'DM Sans', sans-serif" }}
          >
            Notre expertise
          </p>

          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                lineHeight: 0.88,
                letterSpacing: '0.04em',
              }}
            >
              <span className="text-white">Nos </span>
              <span style={{ color: RED }}>Services</span>
            </h2>

            <p
              className="hidden md:block text-xs font-medium tracking-widest uppercase text-white/35 text-right max-w-xs"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Quatre domaines d'expertise pour transformer votre habitat de A à Z
            </p>
          </div>

          {/* Separator */}
          <div
            className="mt-8 h-px"
            style={{ background: `linear-gradient(90deg, ${RED}, ${BLUE}, transparent)` }}
          />
        </motion.header>

        {/* ── Service cards (liquid glass) ── */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: 'rgba(255,255,255,0.04)' }}
          role="list"
        >
          {SERVICES.map(({ Icon, name, tagline, desc, accent }, i) => (
            <motion.article
              key={name}
              role="listitem"
              initial={{ opacity: 0, y: shouldReduce ? 0 : 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: shouldReduce ? 0 : i * 0.1, duration: shouldReduce ? 0 : 0.55, ease }}
              className="group relative flex flex-col gap-6 p-8 overflow-hidden cursor-pointer"
              style={{ background: '#000' }}
            >
              {/* Hover fill */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `${accent}08` }}
              />

              {/* Icon badge */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${accent}14`, border: `1px solid ${accent}30` }}
                aria-hidden
              >
                <Icon size={22} color={accent} strokeWidth={1.6} />
              </div>

              {/* Text block */}
              <div className="flex flex-col gap-2 flex-1">
                <div>
                  <h3
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '1.6rem',
                      letterSpacing: '0.05em',
                      color: 'white',
                    }}
                  >
                    {name}
                  </h3>
                  <p
                    className="text-[10px] font-medium tracking-widest uppercase mt-0.5"
                    style={{ color: accent, fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {tagline}
                  </p>
                </div>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.45)', fontFamily: "'DM Sans', sans-serif" }}
                >
                  {desc}
                </p>
              </div>

              {/* CTA link */}
              <a
                href="#contact"
                className="flex items-center gap-1.5 text-[10px] font-medium tracking-widest uppercase transition-opacity duration-200 opacity-40 group-hover:opacity-100"
                style={{ color: accent, fontFamily: "'DM Sans', sans-serif" }}
                aria-label={`Demander un devis pour ${name}`}
              >
                Devis gratuit <ArrowUpRight size={12} aria-hidden />
              </a>

              {/* Bottom accent reveal */}
              <div
                aria-hidden
                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                style={{ background: accent }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

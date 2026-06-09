import { motion } from 'framer-motion'
import { Bath, Wrench, Flame, Snowflake, ArrowUpRight } from 'lucide-react'

const RED  = '#C8181E'
const BLUE = '#00A3D5'

const services = [
  {
    title: 'Salles de Bain',
    description:
      'Conception et réalisation clé en main : carrelage, meubles, douche à l\'italienne, baignoire, sanitaires.',
    Icon: Bath,
    accent: RED,
    href: '#contact',
  },
  {
    title: 'Plomberie Générale',
    description:
      'Installation, modification et réparation des réseaux eau chaude, eau froide et gaz. Dépannage rapide.',
    Icon: Wrench,
    accent: BLUE,
    href: '#contact',
  },
  {
    title: 'Chauffage',
    description:
      'Pompe à chaleur, chaudière gaz, plancher chauffant, radiateurs. Certification RGE pour vos aides MaPrimeRénov\'.',
    Icon: Flame,
    accent: RED,
    href: '#contact',
  },
  {
    title: 'Climatisation',
    description:
      'Systèmes split et gainables pour un confort thermique optimal, été comme hiver.',
    Icon: Snowflake,
    accent: BLUE,
    href: '#contact',
  },
]

const card = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-36 px-5 sm:px-8 md:px-12 bg-[#0a0e27] relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(ellipse, ${RED}18 0%, transparent 70%)` }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: RED }}
          >
            Notre Expertise
          </p>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2
              className="text-5xl md:text-7xl font-semibold uppercase tracking-tight text-white"
              style={{ lineHeight: 0.9 }}
            >
              Nos<br />
              <span style={{ color: RED }}>Services</span>
            </h2>
            <p className="text-sm font-semibold tracking-widest uppercase text-white/50 max-w-xs text-right hidden md:block">
              Trois domaines de compétence pour transformer vos projets de rénovation en réalité
            </p>
          </div>
          <div className="mt-8 h-px" style={{ background: `linear-gradient(90deg, ${RED}, ${BLUE}, transparent)` }} />
        </motion.div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {services.map(({ title, description, Icon, accent, href }, i) => (
            <motion.div
              key={title}
              custom={i} variants={card}
              initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group bg-[#0a0e27] p-8 flex flex-col gap-6 relative overflow-hidden cursor-pointer"
            >
              {/* Hover tint */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `${accent}0a` }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${accent}18`, border: `1px solid ${accent}40` }}
              >
                <Icon size={22} color={accent} strokeWidth={1.8} />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3 flex-1">
                <h3 className="text-lg font-semibold tracking-wide uppercase text-white">
                  {title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed font-medium">
                  {description}
                </p>
              </div>

              {/* CTA */}
              <a
                href={href}
                className="flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase transition-opacity duration-200 group-hover:opacity-100 opacity-50"
                style={{ color: accent }}
              >
                Devis gratuit <ArrowUpRight size={14} />
              </a>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: accent }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Award, ShieldCheck, Star, Clock } from 'lucide-react'

const RED  = '#C8181E'
const BLUE = '#00A3D5'

const stats = [
  { value: '15+',  label: "Années d'expérience",  Icon: Clock,       accent: RED },
  { value: '500+', label: 'Projets réalisés',      Icon: Star,        accent: BLUE },
  { value: '100%', label: 'Satisfaction client',   Icon: ShieldCheck, accent: RED },
  { value: 'RGE',  label: 'Certifié Reconnu Garant de l\'Environnement', Icon: Award, accent: BLUE },
]

const points = [
  'Artisan certifié RGE — éligibilité aux aides MaPrimeRénov\'',
  'Devis gratuit et détaillé sous 48h',
  'Matériaux sélectionnés chez les meilleurs fournisseurs',
  'Garantie décennale sur tous les travaux',
  'Intervention en Haute-Loire et Haute-Loire limitrophe',
]

export default function About() {
  return (
    <section id="à-propos" className="py-24 md:py-36 px-5 sm:px-8 md:px-12 bg-[#0a0e27] relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(ellipse, ${BLUE}10 0%, transparent 70%)` }}
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
            L'Entreprise
          </p>
          <h2
            className="text-5xl md:text-7xl font-semibold uppercase tracking-tight text-white"
            style={{ lineHeight: 0.9 }}
          >
            À Propos<br />
            <span style={{ color: RED }}>R'Home Rénov</span>
          </h2>
          <div className="mt-8 h-px" style={{ background: `linear-gradient(90deg, ${RED}, ${BLUE}, transparent)` }} />
        </motion.div>

        {/* Main split */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start mb-20 md:mb-28">

          {/* Left — brand statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl font-semibold text-white leading-snug mb-8">
              "Une entreprise artisanale de proximité, dirigée par{' '}
              <span style={{ color: RED }}>Romain Fanget</span>,
              au service de votre habitat à{' '}
              <span style={{ color: BLUE }}>Monistrol-sur-Loire</span>."
            </p>
            <p className="text-sm md:text-base text-white/50 leading-relaxed font-medium mb-8">
              R'Home Rénov propose une approche complète et intégrée de vos projets :
              de la conception à la livraison, chaque chantier est suivi par un artisan
              qualifié, garant du résultat final. Notre certification RGE vous permet
              de bénéficier des aides de l'État pour vos travaux de rénovation énergétique.
            </p>

            {/* Bullet points */}
            <ul className="flex flex-col gap-3">
              {points.map((pt) => (
                <li key={pt} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ background: RED }}
                  />
                  <span className="text-sm text-white/60 font-medium">{pt}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-px bg-white/10"
          >
            {stats.map(({ value, label, Icon, accent }, i) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-[#0a0e27] p-6 md:p-8 flex flex-col gap-4"
              >
                <Icon size={24} color={accent} strokeWidth={1.8} />
                <div>
                  <div
                    className="text-3xl md:text-4xl font-semibold mb-1"
                    style={{ color: accent }}
                  >
                    {value}
                  </div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/50">
                    {label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Large manifesto line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-12 md:pt-16"
        >
          <p
            className="font-semibold uppercase tracking-widest text-white/20"
            style={{ fontSize: 'clamp(0.7rem, 2.5vw, 1.2rem)' }}
          >
            Plomberie · Chauffage · Rénovation · Salle de Bain · Climatisation · Haute-Loire · Monistrol-sur-Loire · Certification RGE
          </p>
        </motion.div>
      </div>
    </section>
  )
}

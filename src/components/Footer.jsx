import { motion } from 'framer-motion'
import { MapPin, Mail, ArrowUpRight } from 'lucide-react'

const RED  = '#C8181E'
const BLUE = '#00A3D5'

const year = new Date().getFullYear()

const cols = [
  {
    heading: 'Services',
    links: [
      { label: 'Salle de Bain',       href: '#services' },
      { label: 'Plomberie Générale',  href: '#services' },
      { label: 'Chauffage',           href: '#services' },
      { label: 'Climatisation',       href: '#services' },
    ],
  },
  {
    heading: 'Navigation',
    links: [
      { label: 'Accueil',      href: '#accueil'  },
      { label: 'Réalisations', href: '#projets'  },
      { label: 'À Propos',     href: '#à-propos' },
      { label: 'Contact',      href: '#contact'  },
    ],
  },
]

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }} viewport={{ once: true }}
      className="bg-[#0a0e27]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Top gradient line */}
      <div className="h-px" style={{ background: `linear-gradient(90deg, ${RED}, ${BLUE})` }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-16">

          {/* Brand block */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ border: `2px solid ${RED}` }}
              >
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: RED }} />
              </div>
              <span className="text-lg font-semibold tracking-widest uppercase text-white">
                R'Home Rénov
              </span>
            </div>
            <p className="text-sm text-white/40 font-medium leading-relaxed max-w-xs mb-6">
              Artisans experts en rénovation, plomberie et chauffage en Haute-Loire.
              Certifiés RGE pour vos travaux de rénovation énergétique.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin size={14} color={RED} strokeWidth={1.8} className="mt-0.5 shrink-0" />
                <span className="text-xs text-white/40 font-medium">
                  14 Chemin des Rochers, 43120 Monistrol-sur-Loire
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} color={BLUE} strokeWidth={1.8} className="shrink-0" />
                <a
                  href="mailto:rhomerenov43@gmail.com"
                  className="text-xs text-white/40 font-medium hover:text-white transition-colors"
                >
                  rhomerenov43@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {cols.map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="text-[10px] font-semibold tracking-widest uppercase text-white/30 mb-5">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm font-medium text-white/50 hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25 font-medium tracking-wide">
            © {year} R'Home Rénov — Tous droits réservés
          </p>
          <a
            href="#accueil"
            className="flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-70"
            style={{ color: RED }}
          >
            Haut de page <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </motion.footer>
  )
}

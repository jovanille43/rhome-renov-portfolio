import { motion, useReducedMotion } from 'framer-motion'
import { MapPin, Mail, ArrowUpRight } from 'lucide-react'

const RED  = '#C8181E'
const BLUE = '#00A3D5'
const YEAR = new Date().getFullYear()

const COLS = [
  {
    title: 'Services',
    links: [
      { label: 'Salle de Bain',      href: '#services' },
      { label: 'Plomberie Générale', href: '#services' },
      { label: 'Chauffage',          href: '#services' },
      { label: 'Climatisation',      href: '#services' },
    ],
  },
  {
    title: 'Navigation',
    links: [
      { label: 'Accueil',      href: '#accueil'    },
      { label: 'Réalisations', href: '#projets'    },
      { label: 'Processus',    href: '#processus'  },
      { label: 'Contact',      href: '#contact'    },
    ],
  },
]

export default function Footer() {
  const shouldReduce = useReducedMotion()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: shouldReduce ? 0 : 0.6 }}
      style={{ background: '#060606', fontFamily: "'DM Sans', sans-serif" }}
      aria-label="Pied de page"
    >
      {/* Top brand gradient line */}
      <div
        aria-hidden
        className="h-[2px]"
        style={{ background: `linear-gradient(90deg, ${RED}, ${BLUE})` }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-16">

          {/* Brand block */}
          <div className="md:col-span-2">
            <a
              href="#accueil"
              className="flex items-center gap-3 mb-6 w-fit group"
              aria-label="Retour en haut — R'Home Rénov"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ border: `2px solid ${RED}` }}
                aria-hidden
              >
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: RED }} />
              </div>
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '1.25rem',
                  letterSpacing: '0.06em',
                  color: 'white',
                }}
              >
                R'Home Rénov
              </span>
            </a>

            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              Artisans certifiés RGE spécialisés en rénovation, plomberie et chauffage en Haute-Loire.
              Devis gratuit sous 48h.
            </p>

            <address className="not-italic flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={13} color={RED} strokeWidth={2} aria-hidden className="shrink-0 mt-0.5" />
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  14 Chemin des Rochers, 43120 Monistrol-sur-Loire
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={13} color={BLUE} strokeWidth={2} aria-hidden className="shrink-0" />
                <a
                  href="mailto:rhomerenov43@gmail.com"
                  className="text-xs transition-colors duration-200 hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.35)' }}
                >
                  rhomerenov43@gmail.com
                </a>
              </div>
            </address>
          </div>

          {/* Nav columns */}
          {COLS.map(({ title, links }) => (
            <nav key={title} aria-label={title}>
              <h3
                className="text-[9px] font-medium tracking-widest uppercase mb-5"
                style={{ color: 'rgba(255,255,255,0.25)' }}
              >
                {title}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: 'rgba(255,255,255,0.4)' }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <p
            className="text-xs"
            style={{ color: 'rgba(255,255,255,0.2)' }}
          >
            © {YEAR} R'Home Rénov — Tous droits réservés
          </p>

          <a
            href="#accueil"
            className="group flex items-center gap-1.5 text-[10px] font-medium tracking-widest uppercase transition-opacity duration-200 hover:opacity-100 opacity-60"
            style={{ color: RED }}
            aria-label="Retour en haut de page"
          >
            Haut de page{' '}
            <ArrowUpRight
              size={11}
              aria-hidden
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </motion.footer>
  )
}

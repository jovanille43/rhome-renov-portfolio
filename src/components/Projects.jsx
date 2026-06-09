import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const RED  = '#C8181E'
const BLUE = '#00A3D5'

const projects = [
  {
    id: 1,
    category: 'Salle de Bain',
    title: 'Suite Parentale Moderne',
    description: 'Rénovation complète : douche à l\'italienne grand format, double vasque suspendue, carrelage grès cérame effet béton.',
    accent: RED,
    pattern: 'linear-gradient(135deg, #1a0404 0%, #3d0b0b 50%, #1a0404 100%)',
  },
  {
    id: 2,
    category: 'Chauffage',
    title: 'Pompe à Chaleur Air/Eau',
    description: 'Installation complète PAC + plancher chauffant basse température dans une maison de 180m². Économies d\'énergie de 65%.',
    accent: BLUE,
    pattern: 'linear-gradient(135deg, #001a24 0%, #003d56 50%, #001a24 100%)',
  },
  {
    id: 3,
    category: 'Plomberie',
    title: 'Rénovation Réseau Complet',
    description: 'Mise aux normes complète du réseau de plomberie d\'une maison ancienne : cuivre, PER, raccords multicouches.',
    accent: RED,
    pattern: 'linear-gradient(135deg, #1a0404 0%, #2d0808 50%, #1a0404 100%)',
  },
  {
    id: 4,
    category: 'Salle de Bain',
    title: 'Salle de Bain Haut de Gamme',
    description: 'Projet prestige : baignoire îlot, colonne de douche hydro-massage, carrelage travertin, robinetterie dorée.',
    accent: BLUE,
    pattern: 'linear-gradient(135deg, #001a24 0%, #00263a 50%, #001a24 100%)',
  },
]

export default function Projects() {
  return (
    <section id="projets" className="py-24 md:py-36 px-5 sm:px-8 md:px-12 bg-[#060912]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: BLUE }}
          >
            Portfolio
          </p>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2
              className="text-5xl md:text-7xl font-semibold uppercase tracking-tight text-white"
              style={{ lineHeight: 0.9 }}
            >
              Nos<br />
              <span style={{ color: BLUE }}>Réalisations</span>
            </h2>
            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 text-sm font-semibold tracking-widest uppercase whitespace-nowrap"
              style={{ color: RED }}
            >
              Votre projet <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="mt-8 h-px" style={{ background: `linear-gradient(90deg, ${BLUE}, ${RED}, transparent)` }} />
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-px bg-white/10">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="group bg-[#060912] overflow-hidden"
            >
              {/* Visual placeholder */}
              <div
                className="h-56 md:h-72 relative flex items-center justify-center overflow-hidden"
                style={{ background: project.pattern }}
              >
                {/* Animated concentric rings */}
                <motion.div
                  animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.3, 0.15] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute w-48 h-48 rounded-full border"
                  style={{ borderColor: project.accent }}
                />
                <motion.div
                  animate={{ scale: [1.08, 1, 1.08], opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute w-32 h-32 rounded-full border"
                  style={{ borderColor: project.accent }}
                />
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: `${project.accent}22`, border: `2px solid ${project.accent}` }}
                >
                  <div className="w-4 h-4 rounded-full" style={{ background: project.accent }} />
                </div>

                {/* Category pill */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 text-[10px] font-semibold tracking-widest uppercase"
                  style={{ background: `${project.accent}22`, border: `1px solid ${project.accent}60`, color: project.accent }}
                >
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col gap-3">
                <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-wide text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed font-medium">
                  {project.description}
                </p>
                <a
                  href="#contact"
                  className="mt-2 flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase self-start opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: project.accent }}
                >
                  Projet similaire <ArrowUpRight size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
          className="mt-8 text-center md:hidden"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase"
            style={{ color: RED }}
          >
            Votre projet <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Salle de Bain Moderne',
    description: 'Rénovation complète avec carrelage design et mobilier contemporain',
    category: 'Salles de Bain',
    emoji: '🛁',
  },
  {
    id: 2,
    title: 'Installation Chauffage',
    description: 'Système de chauffage performant et éco-responsable',
    category: 'Chauffage',
    emoji: '🌡️',
  },
  {
    id: 3,
    title: 'Rénovation Plomberie',
    description: 'Mise aux normes complète du réseau de plomberie',
    category: 'Plomberie',
    emoji: '💧',
  },
  {
    id: 4,
    title: 'Salle de Bain Luxe',
    description: 'Projet haut de gamme avec double vasque et spa',
    category: 'Salles de Bain',
    emoji: '✨',
  },
]

export default function Projects() {
  return (
    <section id="projets" className="py-20 px-4 bg-gradient-to-b from-[#0a0e27] to-[#1a1f3a]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Nos <span className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] bg-clip-text text-transparent">Réalisations</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-[#1a1f3a] to-[#0f1428] rounded-lg overflow-hidden border border-[#2563eb]/20 cursor-pointer group"
            >
              <div className="h-48 bg-gradient-to-br from-[#2563eb] to-[#1e40af] flex items-center justify-center text-8xl relative overflow-hidden">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="opacity-30"
                >
                  {project.emoji}
                </motion.div>
              </div>
              <div className="p-6">
                <div className="text-sm text-[#3b82f6] font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
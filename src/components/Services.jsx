import { motion } from 'framer-motion'

const services = [
  {
    title: 'Salles de Bain',
    description: 'Solutions clé en main : conception, pose carrelage, meubles et sanitaires',
    icon: '🚿',
    color: 'from-[#2563eb] to-[#3b82f6]',
    glowColor: 'glow-blue',
  },
  {
    title: 'Plomberie Générale',
    description: 'Installation, modification et réparation des réseaux d\'eau et gaz',
    icon: '🔧',
    color: 'from-[#8b5cf6] to-[#a78bfa]',
    glowColor: 'glow-purple',
  },
  {
    title: 'Chauffage',
    description: 'Installation et rénovation de systèmes de chauffage adaptés',
    icon: '🔥',
    color: 'from-[#06b6d4] to-[#22d3ee]',
    glowColor: 'glow-cyan',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export default function Services() {
  return (
    <section id="services" className="py-32 px-4 bg-[#0a0e27] relative overflow-hidden">
      {/* Background blobs */}
      <div className="blob blob-1" style={{ left: '50%', top: '-50%', opacity: 0.2 }}></div>
      <div className="blob blob-3" style={{ right: '-100px', bottom: '50px', opacity: 0.15 }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-2 glass-dark rounded-full mb-6">
            <span className="text-[#06b6d4] font-semibold text-sm">Notre Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Nos <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trois domaines de compétence pour transformer vos projets de rénovation en réalité
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              className={`group relative bg-gradient-to-br ${service.color} p-0.5 rounded-2xl overflow-hidden cursor-pointer hover-lift`}
            >
              {/* Animated gradient border */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 ${service.glowColor} transition-all duration-500`}></div>

              {/* Card content */}
              <div className="relative bg-[#0f1428] rounded-2xl p-8 h-full flex flex-col">
                {/* Icon */}
                <motion.div
                  className="text-6xl mb-6 origin-center"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#2563eb] group-hover:to-[#06b6d4] group-hover:bg-clip-text">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 flex-grow mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Animated line */}
                <motion.div
                  className={`h-1 w-12 bg-gradient-to-r ${service.color} rounded-full`}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                ></motion.div>

                {/* Arrow */}
                <motion.div
                  className="mt-4 text-lg font-bold text-[#06b6d4]"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

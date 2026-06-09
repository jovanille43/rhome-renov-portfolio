import { motion } from 'framer-motion'

const services = [
  {
    title: 'Salles de Bain',
    description: 'Solutions clé en main : conception, pose carrelage, meubles et sanitaires',
    icon: '🚿',
  },
  {
    title: 'Plomberie Générale',
    description: 'Installation, modification et réparation des réseaux d\'eau et gaz',
    icon: '🔧',
  },
  {
    title: 'Chauffage',
    description: 'Installation et rénovation de systèmes de chauffage adaptés',
    icon: '🔥',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-[#0a0e27]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Nos <span className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] bg-clip-text text-transparent">Services</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-[#1a1f3a] to-[#0f1428] p-8 rounded-lg border border-[#2563eb]/20 cursor-pointer transition-all hover:shadow-xl hover:shadow-[#2563eb]/20"
            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
              <div className="h-1 w-12 bg-gradient-to-r from-[#2563eb] to-[#3b82f6] rounded mt-6"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
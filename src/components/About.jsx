import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="à propos" className="py-20 px-4 bg-[#0a0e27]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              À propos de <span className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] bg-clip-text text-transparent">R'Home Renov</span>
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              R'Home Renov est une entreprise artisanale de proximité dirigée par Romain Fanget. Nous nous imposons comme un acteur de confiance dans la rénovation grâce à notre certification RGE (Reconnu Garant de l'Environnement).
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Basée en Haute-Loire, nous proposons une approche complète et intégrée de vos projets de rénovation, en garantissant le respect des normes d'efficacité énergétique et la qualité artisanale.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#3b82f6] rounded-full"></div>
                <span className="text-gray-300">Certification RGE</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#3b82f6] rounded-full"></div>
                <span className="text-gray-300">Service clé en main</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#3b82f6] rounded-full"></div>
                <span className="text-gray-300">Expertise régionale</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-[#1a1f3a] to-[#0f1428] p-6 rounded-lg border border-[#2563eb]/20 text-center"
            >
              <div className="text-4xl font-bold text-[#3b82f6] mb-2">100%</div>
              <p className="text-gray-400">Satisfaction Client</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-[#1a1f3a] to-[#0f1428] p-6 rounded-lg border border-[#2563eb]/20 text-center"
            >
              <div className="text-4xl font-bold text-[#3b82f6] mb-2">500+</div>
              <p className="text-gray-400">Chantiers Réussis</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-[#1a1f3a] to-[#0f1428] p-6 rounded-lg border border-[#2563eb]/20 text-center"
            >
              <div className="text-4xl font-bold text-[#3b82f6] mb-2">15+</div>
              <p className="text-gray-400">Années d'Expérience</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-[#1a1f3a] to-[#0f1428] p-6 rounded-lg border border-[#2563eb]/20 text-center"
            >
              <div className="text-4xl font-bold text-[#3b82f6] mb-2">✅</div>
              <p className="text-gray-400">RGE Certifié</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
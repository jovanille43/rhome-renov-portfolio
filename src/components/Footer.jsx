import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-[#0f1428] border-t border-[#2563eb]/20 py-12 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">R'Home Renov</h3>
            <p className="text-gray-400 text-sm">Rénovation d'excellence en Haute-Loire</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-[#3b82f6] transition-colors">Salle de Bain</a></li>
              <li><a href="#services" className="hover:text-[#3b82f6] transition-colors">Plomberie</a></li>
              <li><a href="#services" className="hover:text-[#3b82f6] transition-colors">Chauffage</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#accueil" className="hover:text-[#3b82f6] transition-colors">Accueil</a></li>
              <li><a href="#projets" className="hover:text-[#3b82f6] transition-colors">Projets</a></li>
              <li><a href="#contact" className="hover:text-[#3b82f6] transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>14 Chemin des Rochers</p>
              <p>43120 Monistrol-sur-Loire</p>
              <a href="mailto:rhomerenov43@gmail.com" className="hover:text-[#3b82f6] transition-colors">rhomerenov43@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2563eb]/20 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} R'Home Renov. Tous droits réservés.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
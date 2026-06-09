import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:rhomerenov43@gmail.com?subject=Demande de ${formData.service}&body=Nom: ${formData.name}%0AEmail: ${formData.email}%0ATéléphone: ${formData.phone}%0A%0AMessage: ${formData.message}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-[#0a0e27] to-[#1a1f3a]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Nous <span className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] bg-clip-text text-transparent">Contacter</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8">Informations</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-[#3b82f6] font-semibold mb-2">📍 Localisation</h4>
                <p className="text-gray-400">14 Chemin des Rochers<br />43120 Monistrol-sur-Loire</p>
              </div>

              <div>
                <h4 className="text-[#3b82f6] font-semibold mb-2">📧 Email</h4>
                <a href="mailto:rhomerenov43@gmail.com" className="text-gray-400 hover:text-[#3b82f6] transition-colors">
                  rhomerenov43@gmail.com
                </a>
              </div>

              <div>
                <h4 className="text-[#3b82f6] font-semibold mb-2">👤 Dirigeant</h4>
                <p className="text-gray-400">Romain Fanget</p>
              </div>

              <div>
                <h4 className="text-[#3b82f6] font-semibold mb-2">✅ Certification</h4>
                <p className="text-gray-400">RGE - Reconnu Garant de l'Environnement</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-semibold mb-2">Nom</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#1a1f3a] border border-[#2563eb]/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#1a1f3a] border border-[#2563eb]/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Téléphone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#1a1f3a] border border-[#2563eb]/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
                placeholder="+33..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full bg-[#1a1f3a] border border-[#2563eb]/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
              >
                <option value="">Choisir un service</option>
                <option value="Salle de bain">Salle de bain</option>
                <option value="Plomberie">Plomberie</option>
                <option value="Chauffage">Chauffage</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-[#1a1f3a] border border-[#2563eb]/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#3b82f6] transition-colors resize-none"
                placeholder="Décrivez votre projet..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-[#2563eb] to-[#3b82f6] py-3 rounded-lg font-semibold hover:shadow-lg transition-all cursor-pointer"
            >
              Envoyer le message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
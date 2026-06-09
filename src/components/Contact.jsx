import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, User, Award, ArrowUpRight } from 'lucide-react'

const RED  = '#C8181E'
const BLUE = '#00A3D5'

const infos = [
  { Icon: MapPin, label: 'Adresse',     value: '14 Chemin des Rochers\n43120 Monistrol-sur-Loire', accent: RED },
  { Icon: Mail,   label: 'Email',       value: 'rhomerenov43@gmail.com',                            accent: BLUE, href: 'mailto:rhomerenov43@gmail.com' },
  { Icon: User,   label: 'Dirigeant',   value: 'Romain Fanget',                                     accent: RED },
  { Icon: Award,  label: 'Certification', value: 'RGE — Reconnu Garant\nde l\'Environnement',       accent: BLUE },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const link = `mailto:rhomerenov43@gmail.com?subject=Demande ${form.service}&body=Nom: ${form.name}%0AEmail: ${form.email}%0ATel: ${form.phone}%0A%0A${form.message}`
    window.location.href = link
  }

  const inputClass = `
    w-full bg-[#060912] border border-white/10 rounded-none px-4 py-3
    text-white text-sm font-medium placeholder-white/25
    focus:outline-none focus:border-[${RED}] transition-colors duration-200
  `

  return (
    <section id="contact" className="py-24 md:py-36 px-5 sm:px-8 md:px-12 bg-[#060912]">
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
            Parlons de votre projet
          </p>
          <h2
            className="text-5xl md:text-7xl font-semibold uppercase tracking-tight text-white"
            style={{ lineHeight: 0.9 }}
          >
            Nous<br />
            <span style={{ color: RED }}>Contacter</span>
          </h2>
          <div className="mt-8 h-px" style={{ background: `linear-gradient(90deg, ${RED}, ${BLUE}, transparent)` }} />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left — infos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            <p className="text-sm text-white/50 font-medium leading-relaxed max-w-sm">
              Obtenez votre devis gratuit sous 48h. Décrivez votre projet, nous revenons vers vous avec une proposition adaptée à votre budget.
            </p>

            <div className="flex flex-col gap-8">
              {infos.map(({ Icon, label, value, accent, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: `${accent}18`, border: `1px solid ${accent}40` }}
                  >
                    <Icon size={16} color={accent} strokeWidth={1.8} />
                  </div>
                  <div>
                    <p
                      className="text-[10px] font-semibold tracking-widest uppercase mb-1"
                      style={{ color: accent }}
                    >
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-white hover:opacity-70 transition-opacity"
                        style={{ whiteSpace: 'pre-line' }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-white" style={{ whiteSpace: 'pre-line' }}>
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            {/* Name */}
            <div>
              <label className="block text-[10px] font-semibold tracking-widest uppercase text-white/40 mb-2">
                Nom complet
              </label>
              <input
                type="text" name="name" value={form.name} onChange={handleChange}
                required placeholder="Votre nom"
                className="w-full bg-[#0a0e27] border border-white/10 px-4 py-3 text-white text-sm font-medium placeholder-white/25 focus:outline-none transition-colors duration-200"
                style={{ borderRadius: 0 }}
                onFocus={(e) => (e.target.style.borderColor = RED)}
                onBlur={(e)  => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-semibold tracking-widest uppercase text-white/40 mb-2">
                  Email
                </label>
                <input
                  type="email" name="email" value={form.email} onChange={handleChange}
                  required placeholder="votre@email.com"
                  className="w-full bg-[#0a0e27] border border-white/10 px-4 py-3 text-white text-sm font-medium placeholder-white/25 focus:outline-none transition-colors duration-200"
                  style={{ borderRadius: 0 }}
                  onFocus={(e) => (e.target.style.borderColor = RED)}
                  onBlur={(e)  => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                />
              </div>
              <div>
                <label className="block text-[10px] font-semibold tracking-widest uppercase text-white/40 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel" name="phone" value={form.phone} onChange={handleChange}
                  placeholder="06 00 00 00 00"
                  className="w-full bg-[#0a0e27] border border-white/10 px-4 py-3 text-white text-sm font-medium placeholder-white/25 focus:outline-none transition-colors duration-200"
                  style={{ borderRadius: 0 }}
                  onFocus={(e) => (e.target.style.borderColor = BLUE)}
                  onBlur={(e)  => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <label className="block text-[10px] font-semibold tracking-widest uppercase text-white/40 mb-2">
                Type de service
              </label>
              <select
                name="service" value={form.service} onChange={handleChange} required
                className="w-full bg-[#0a0e27] border border-white/10 px-4 py-3 text-white text-sm font-medium focus:outline-none transition-colors duration-200 appearance-none"
                style={{ borderRadius: 0 }}
                onFocus={(e) => (e.target.style.borderColor = RED)}
                onBlur={(e)  => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
              >
                <option value="" className="bg-[#0a0e27]">Choisir un service</option>
                <option value="Salle de bain" className="bg-[#0a0e27]">Salle de bain</option>
                <option value="Plomberie" className="bg-[#0a0e27]">Plomberie</option>
                <option value="Chauffage" className="bg-[#0a0e27]">Chauffage</option>
                <option value="Climatisation" className="bg-[#0a0e27]">Climatisation</option>
                <option value="Autre" className="bg-[#0a0e27]">Autre</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-[10px] font-semibold tracking-widest uppercase text-white/40 mb-2">
                Description du projet
              </label>
              <textarea
                name="message" value={form.message} onChange={handleChange}
                required rows={5} placeholder="Décrivez votre projet, la surface, les contraintes..."
                className="w-full bg-[#0a0e27] border border-white/10 px-4 py-3 text-white text-sm font-medium placeholder-white/25 focus:outline-none transition-colors duration-200 resize-none"
                style={{ borderRadius: 0 }}
                onFocus={(e) => (e.target.style.borderColor = RED)}
                onBlur={(e)  => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 w-full py-4 font-semibold text-sm tracking-widest uppercase text-white transition-opacity duration-200 hover:opacity-90 cursor-pointer"
              style={{ background: RED }}
            >
              Envoyer la demande <ArrowUpRight size={16} />
            </motion.button>

            <p className="text-[10px] text-white/25 font-medium tracking-wide text-center">
              Réponse garantie sous 48h — Devis gratuit et sans engagement
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

import { useState, useId } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { MapPin, Mail, User, Award, ArrowUpRight, Phone } from 'lucide-react'

const RED  = '#C8181E'
const BLUE = '#00A3D5'
const ease = [0.22, 1, 0.36, 1]

const INFOS = [
  { Icon: MapPin, label: 'Adresse',       val: '14 Chemin des Rochers\n43120 Monistrol-sur-Loire', accent: RED  },
  { Icon: Mail,   label: 'Email',         val: 'rhomerenov43@gmail.com', href: 'mailto:rhomerenov43@gmail.com', accent: BLUE },
  { Icon: Phone,  label: 'Téléphone',     val: 'Nous appeler',           href: 'tel:+33000000000',              accent: RED  },
  { Icon: User,   label: 'Dirigeant',     val: 'Romain Fanget',          accent: BLUE },
  { Icon: Award,  label: 'Certification', val: 'RGE — Reconnu Garant de l\'Environnement', accent: RED },
]

const SERVICES_OPT = ['Salle de bain', 'Plomberie', 'Chauffage', 'Climatisation', 'Autre']

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-[10px] font-medium tracking-widest uppercase"
        style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'DM Sans', sans-serif" }}
      >
        {label}
      </label>
      {children}
    </div>
  )
}

const inputBase = {
  background:   '#0C0C0C',
  border:       '1px solid rgba(255,255,255,0.08)',
  color:        'white',
  fontFamily:   "'DM Sans', sans-serif",
  fontSize:     '0.875rem',
  padding:      '0.75rem 1rem',
  outline:      'none',
  width:        '100%',
  borderRadius: 0,
  transition:   'border-color 200ms',
}

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sending, setSending] = useState(false)
  const shouldReduce = useReducedMotion()
  const uid = useId()

  const set = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    const link = `mailto:rhomerenov43@gmail.com?subject=Demande ${encodeURIComponent(form.service)}&body=${encodeURIComponent(
      `Nom: ${form.name}\nEmail: ${form.email}\nTél: ${form.phone}\n\n${form.message}`
    )}`
    window.location.href = link
    setTimeout(() => setSending(false), 2000)
  }

  const focus = (color) => (e) => (e.target.style.borderColor = color)
  const blur  = (e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')

  return (
    <section
      id="contact"
      aria-label="Nous contacter"
      className="py-24 md:py-36 px-5 sm:px-8 md:px-12"
      style={{ background: '#000' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduce ? 0 : 0.6, ease }}
          className="mb-16 md:mb-24"
        >
          <p
            className="text-xs font-medium tracking-widest uppercase mb-3"
            style={{ color: BLUE, fontFamily: "'DM Sans', sans-serif" }}
          >
            Parlons de votre projet
          </p>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              lineHeight: 0.88,
              letterSpacing: '0.04em',
            }}
          >
            <span className="text-white">Nous </span>
            <span style={{ color: RED }}>Contacter</span>
          </h2>
          <div
            className="mt-8 h-px"
            style={{ background: `linear-gradient(90deg, ${RED}, ${BLUE}, transparent)` }}
          />
        </motion.header>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduce ? 0 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduce ? 0 : 0.65, ease }}
            className="flex flex-col gap-10"
          >
            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'DM Sans', sans-serif", maxWidth: '44ch' }}
            >
              Décrivez votre projet, nous vous répondons sous{' '}
              <strong style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>48h</strong>{' '}
              avec une proposition adaptée à vos besoins et à votre budget.
            </p>

            <dl className="flex flex-col gap-7">
              {INFOS.map(({ Icon, label, val, href, accent }) => (
                <div key={label} className="flex items-start gap-4">
                  <dt className="sr-only">{label}</dt>
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: `${accent}12`, border: `1px solid ${accent}28` }}
                    aria-hidden
                  >
                    <Icon size={15} color={accent} strokeWidth={1.8} />
                  </div>
                  <div>
                    <p
                      className="text-[9px] font-medium tracking-widest uppercase mb-1"
                      style={{ color: accent, fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {label}
                    </p>
                    <dd>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm font-medium text-white hover:opacity-70 transition-opacity duration-200"
                          style={{ fontFamily: "'DM Sans', sans-serif", whiteSpace: 'pre-line' }}
                        >
                          {val}
                        </a>
                      ) : (
                        <p
                          className="text-sm font-medium text-white"
                          style={{ fontFamily: "'DM Sans', sans-serif", whiteSpace: 'pre-line' }}
                        >
                          {val}
                        </p>
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduce ? 0 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduce ? 0 : 0.65, ease }}
          >
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4" aria-label="Formulaire de contact">

              <Field label="Nom complet *">
                <input
                  type="text" name="name" id={`${uid}-name`}
                  value={form.name} onChange={set} required
                  placeholder="Votre nom"
                  aria-required="true"
                  style={inputBase}
                  onFocus={focus(RED)} onBlur={blur}
                />
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Email *">
                  <input
                    type="email" name="email" id={`${uid}-email`}
                    value={form.email} onChange={set} required
                    placeholder="votre@email.com"
                    aria-required="true"
                    style={inputBase}
                    onFocus={focus(RED)} onBlur={blur}
                  />
                </Field>
                <Field label="Téléphone">
                  <input
                    type="tel" name="phone" id={`${uid}-phone`}
                    value={form.phone} onChange={set}
                    placeholder="06 00 00 00 00"
                    style={inputBase}
                    onFocus={focus(BLUE)} onBlur={blur}
                  />
                </Field>
              </div>

              <Field label="Type de service *">
                <select
                  name="service" id={`${uid}-service`}
                  value={form.service} onChange={set} required
                  aria-required="true"
                  style={{ ...inputBase, appearance: 'none', cursor: 'pointer' }}
                  onFocus={focus(RED)} onBlur={blur}
                >
                  <option value="" style={{ background: '#0C0C0C' }}>Choisir un service</option>
                  {SERVICES_OPT.map((s) => (
                    <option key={s} value={s} style={{ background: '#0C0C0C' }}>{s}</option>
                  ))}
                </select>
              </Field>

              <Field label="Description du projet *">
                <textarea
                  name="message" id={`${uid}-message`}
                  value={form.message} onChange={set} required
                  rows={5}
                  placeholder="Décrivez votre projet : surface, contraintes, délai souhaité…"
                  aria-required="true"
                  style={{ ...inputBase, resize: 'none' }}
                  onFocus={focus(RED)} onBlur={blur}
                />
              </Field>

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={shouldReduce ? {} : { scale: 1.015 }}
                whileTap={shouldReduce ? {} : { scale: 0.985 }}
                className="flex items-center justify-center gap-2 w-full py-4 font-medium text-xs tracking-widest uppercase text-white transition-opacity duration-200 disabled:opacity-60"
                style={{ background: RED, fontFamily: "'DM Sans', sans-serif" }}
                aria-live="polite"
              >
                {sending ? 'Envoi en cours…' : <>Envoyer la demande <ArrowUpRight size={14} aria-hidden /></>}
              </motion.button>

              <p
                className="text-[10px] text-center"
                style={{ color: 'rgba(255,255,255,0.2)', fontFamily: "'DM Sans', sans-serif" }}
              >
                Réponse garantie sous 48h — Devis gratuit et sans engagement
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

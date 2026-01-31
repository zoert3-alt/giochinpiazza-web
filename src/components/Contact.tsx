import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'

const eventTypes = [
  'Evento Aziendale / Team Building',
  'Festival / Sagra di Paese',
  'Matrimonio',
  'Compleanno / Celebrazione Privata',
  'Struttura Ricettiva / Agriturismo',
  'Evento Scolastico',
  'Evento Comunitario',
  'Altro'
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    location: '',
    participants: '',
    duration: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isMapHovered, setIsMapHovered] = useState(false)
  const [isPhoneHovered, setIsPhoneHovered] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const response = await fetch('https://formspree.io/f/xnjvnpbv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          date: '',
          location: '',
          participants: '',
          duration: '',
          message: ''
        })
      } else {
        setErrorMessage('Errore nell\'invio. Riprova più tardi.')
      }
    } catch {
      setErrorMessage('Errore nell\'invio. Riprova più tardi.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <section id="contatti" className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center py-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-display">
              Richiesta Inviata con Successo!
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Grazie per averci contattato. Riceverai la nostra risposta entro 24 ore con una proposta personalizzata per il tuo evento.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="btn-primary"
            >
              Invia Altra Richiesta
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contatti" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="mb-6">
            Iniziamo a <span className="text-gradient-warm">Pianificare</span> Insieme
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Condividi i dettagli del tuo evento e riceverai una proposta personalizzata entro 24 ore. Più informazioni ci fornisci, più accurata sarà la nostra offerta su misura per le tue esigenze.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '60px' }}>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome e Cognome *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-terracotta-500 focus:outline-none transition-colors"
                      placeholder="Mario Rossi"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-terracotta-500 focus:outline-none transition-colors"
                      placeholder="mario.rossi@example.com"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '60px' }}>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-terracotta-500 focus:outline-none transition-colors"
                      placeholder="+39 333 123 4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tipo di Evento *
                    </label>
                    <select
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-terracotta-500 focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Seleziona tipo evento</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '60px' }}>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Data Prevista
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-terracotta-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Location / Città *
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-terracotta-500 focus:outline-none transition-colors"
                      placeholder="Milano, Parco Sempione"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '60px' }}>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Numero Partecipanti Stimato *
                    </label>
                    <input
                      type="text"
                      name="participants"
                      required
                      value={formData.participants}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-terracotta-500 focus:outline-none transition-colors"
                      placeholder="Es: 50-100 persone"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Durata Prevista
                    </label>
                    <input
                      type="text"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-terracotta-500 focus:outline-none transition-colors"
                      placeholder="Es: 3 ore, intera giornata"
                    />
                  </div>
                </div>

                <div style={{ marginTop: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
                    <label className="text-sm font-semibold text-gray-700">
                      Dettagli Aggiuntivi e Richieste Specifiche
                    </label>
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-terracotta-500 focus:outline-none transition-colors resize-none"
                    placeholder="Raccontaci di più sul tuo evento: obiettivi, vincoli spaziali, giochi che ti interessano particolarmente, budget indicativo, o qualsiasi altra informazione utile..."
                  />
                </div>

                <div className="text-sm text-gray-600">
                  <p>
                    Rispettiamo la tua privacy. I tuoi dati verranno utilizzati esclusivamente per rispondere alla tua richiesta e non saranno condivisi con terze parti.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-warm text-white rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  style={{ padding: '12px 24px', width: 'auto', margin: '0 auto' }}
                >
                  {isSubmitting ? 'Invio in corso...' : 'Richiedi Preventivo Gratuito'}
                </button>
                {errorMessage && (
                  <p style={{ color: '#dc2626', textAlign: 'center', marginTop: '10px' }}>
                    {errorMessage}
                  </p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contatti Diretti</h3>
              <div className="space-y-4">
                <div
                  style={{ position: 'relative', display: 'inline-block' }}
                  onMouseEnter={() => setIsPhoneHovered(true)}
                  onMouseLeave={() => setIsPhoneHovered(false)}
                >
                  <a
                    href="https://wa.me/393714204934?text=Ciao!%20Vorrei%20ricevere%20informazioni%20sui%20vostri%20giochi%20per%20un%20evento."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-700 hover:text-terracotta-600 transition-colors"
                  >
                    +39 371 420 4934
                  </a>
                  {isPhoneHovered && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        paddingBottom: '5px',
                        zIndex: 50
                      }}
                    >
                      <img
                        src="/images/contact/whatsapp-icon.png"
                        alt="WhatsApp"
                        style={{
                          maxWidth: '80px',
                          height: 'auto',
                          borderRadius: '8px'
                        }}
                      />
                    </div>
                  )}
                </div>
                <a href="mailto:zoert3@gmail.com?subject=Informazioni%20Evento%20-%20GiochInPiazza" className="block text-gray-700 hover:text-terracotta-600 transition-colors">
                  zoert3@gmail.com
                </a>
                <div
                  style={{ position: 'relative', display: 'inline-block' }}
                  onMouseEnter={() => setIsMapHovered(true)}
                  onMouseLeave={() => setIsMapHovered(false)}
                >
                  <span
                    className="event-badge"
                    style={{ cursor: 'pointer' }}
                  >
                    Operiamo in tutta Italia
                  </span>
                  {isMapHovered && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        paddingTop: '5px',
                        zIndex: 50
                      }}
                    >
                      <div
                        style={{
                          padding: '10px',
                          backgroundColor: 'rgba(0, 0, 0, 0.75)',
                          borderRadius: '16px',
                          border: '3px solid #000',
                          boxShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fb8500, 0 0 40px #fb8500'
                        }}
                      >
                        <img
                          src="/images/contact/mappa-italia.png"
                          alt="Mappa Italia - Zone operative"
                          style={{
                            maxWidth: '300px',
                            height: 'auto',
                            borderRadius: '8px'
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-terracotta-50 to-ochre-50 rounded-2xl p-6 border border-terracotta-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Tempi di Risposta</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Rispondiamo a tutte le richieste entro 24 ore lavorative. Per eventi con date ravvicinate, contattaci direttamente via telefono per una risposta immediata.
              </p>
              <span className="event-badge">Lun-Ven: 9:00-19:00</span>
            </div>

            <div className="bg-gradient-to-br from-ochre-50 to-amber-50 rounded-2xl p-6 border border-ochre-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Pronto per Iniziare?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Con oltre 500 eventi realizzati e 15 anni di esperienza, siamo pronti a trasformare il tuo spazio in un'arena di gioco indimenticabile.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

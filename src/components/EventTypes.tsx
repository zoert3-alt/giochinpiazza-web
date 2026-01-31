import { motion } from 'framer-motion'

interface EventTypeCardProps {
  title: string
  description: string
  features: string[]
  colorClass: string
  delay: number
}

function EventTypeCard({ title, description, features, delay }: EventTypeCardProps) {
  const scrollToContact = () => {
    const element = document.querySelector('#contatti')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="group card-warm p-8"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="text-gray-700 text-sm">
            {feature}
          </li>
        ))}
      </ul>
      <div className="pt-6 border-t border-gray-100">
        <button
          onClick={scrollToContact}
          className="text-terracotta-600 font-semibold hover:text-terracotta-700 transition-colors"
        >
          Scopri di più
        </button>
      </div>
    </motion.div>
  )
}

const eventTypes = [
  {
    title: 'Eventi Aziendali',
    description: 'Team building che abbatte barriere gerarchiche e crea connessioni autentiche tra colleghi attraverso competizione amichevole e collaborazione spontanea.',
    features: [
      'Team bonding autentico tra manager e staff',
      'Atmosfera informale che facilita comunicazione',
      'Adatto per gruppi da 20 a 500+ partecipanti',
      'Setup in location aziendali o spazi esterni'
    ],
    colorClass: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Festival e Sagre',
    description: 'Anchor attraction che trattiene le famiglie per ore, aumentando permanenza e soddisfazione complessiva del vostro evento culturale o di paese.',
    features: [
      'Coinvolgimento intergenerazionale garantito',
      'Postazioni multiple per gestire grandi flussi',
      'Perfetto per eventi da 100 a 10.000 persone',
      'Gestione autonoma o con animatori esperti'
    ],
    colorClass: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Matrimoni e Celebrazioni',
    description: 'Intrattenimento memorabile che unisce ospiti di tutte le età, creando interazioni spontanee tra famiglie durante i momenti liberi della celebrazione.',
    features: [
      'Coinvolge bambini, adulti e anziani insieme',
      'Riempie elegantemente i tempi morti',
      'Setup discreto e raffinato per location eleganti',
      'Foto e ricordi autentici e spontanei'
    ],
    colorClass: 'from-rose-500 to-red-500'
  },
  {
    title: 'Strutture Ricettive',
    description: 'Attività distintive per agriturismi, resort e villaggi turistici che desiderano offrire esperienze autentiche territoriali ai propri ospiti.',
    features: [
      'Differenziazione dalla concorrenza',
      'Attività outdoor che valorizza il vostro spazio',
      'Intrattenimento per famiglie con bambini',
      'Formule giornaliere, settimanali o stagionali'
    ],
    colorClass: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Eventi Scolastici',
    description: 'Attività ludico-educative che insegnano fair play, strategia e coordinazione motoria attraverso giochi che appartengono alla tradizione culturale italiana.',
    features: [
      'Valore educativo e culturale certificato',
      'Coinvolgimento motorio e cognitivo',
      'Adatto per feste di fine anno e progetti didattici',
      'Sicurezza e supervisione professionale'
    ],
    colorClass: 'from-amber-500 to-orange-500'
  },
  {
    title: 'Eventi Comunitari',
    description: 'Animazione per feste di quartiere, inaugurazioni e celebrazioni cittadine che aggregano la comunità locale attorno a tradizioni ludiche condivise.',
    features: [
      'Crea senso di appartenenza comunitaria',
      'Budget flessibile per enti pubblici',
      'Facilmente accessibile per tutti',
      'Valorizza spazi pubblici urbani'
    ],
    colorClass: 'from-indigo-500 to-violet-500'
  }
]

export default function EventTypes() {
  return (
    <section id="eventi" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="mb-6">
            Per Quale <span className="text-gradient-warm">Evento</span> Lavoriamo
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            I giochi tradizionali di legno hanno un appeal universale che funziona perfettamente in contesti diversissimi. Scopri come possiamo rendere memorabile il tuo evento specifico.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventTypes.map((eventType, idx) => (
            <EventTypeCard
              key={eventType.title}
              {...eventType}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

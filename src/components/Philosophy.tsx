import { motion } from 'framer-motion'

interface ValueCardProps {
  title: string
  description: string
  delay: number
}

function ValueCard({ title, description, delay }: ValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', padding: '8px 12px', borderRadius: '16px', display: 'inline-block', border: '2px solid white', boxShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fb8500, 0 0 40px #fb8500' }}>
        <p style={{ color: '#fb8500', lineHeight: '1.6' }}>{description}</p>
      </div>
    </motion.div>
  )
}

const values = [
  {
    title: 'Custodi di Tradizione',
    description: 'Preserviamo il patrimonio ludico italiano ricercando, restaurando e riproducendo giochi che rischiano di essere dimenticati. Ogni gioco nel nostro catalogo ha una storia che attraversa generazioni.'
  },
  {
    title: 'Connessione Intergenerazionale',
    description: 'I giochi tradizionali abbattono barriere di età in modo unico. Nonni insegnano ai nipoti, giovani scoprono sfide che i loro genitori conoscevano, famiglie creano ricordi condivisi lontani dagli schermi.'
  },
  {
    title: 'Innovatori nella Tradizione',
    description: 'Rispettiamo l\'autenticità storica mentre adattiamo dimensioni, materiali e regole per contesti contemporanei. La tradizione vive quando si evolve rimanendo fedele al suo spirito originale.'
  },
  {
    title: 'Sostenibilità e Naturalezza',
    description: 'Tutti i nostri giochi sono realizzati prevalentemente in legno e materiali naturali. In un\'epoca dominata dalla plastica, celebriamo la bellezza e durabilità dei materiali tradizionali.'
  }
]

export default function Philosophy() {
  return (
    <section id="filosofia" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="mb-6">
            La Nostra <span className="text-gradient-warm">Filosofia</span>
          </h2>
          <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', padding: '10px 14px', borderRadius: '16px', display: 'inline-block', maxWidth: '85%', border: '2px solid white', boxShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fb8500, 0 0 40px #fb8500' }}>
            <p style={{ color: '#fb8500', fontSize: '1rem', lineHeight: '1.6' }}>
              GiochInPiazza nasce dalla convinzione che i giochi tradizionali abbiano valore unico nel mondo contemporaneo. Non siamo semplici fornitori di intrattenimento, siamo custodi e innovatori di un patrimonio culturale che merita di vivere.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, idx) => (
            <ValueCard
              key={value.title}
              {...value}
              delay={idx * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-warm rounded-3xl p-10 md:p-14 text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-8 font-display">
            Perché i Giochi Tradizionali Oggi
          </h3>
          <div className="max-w-4xl mx-auto text-lg leading-relaxed">
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', padding: '14px 18px', borderRadius: '16px', display: 'inline-block', border: '2px solid white', boxShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fb8500, 0 0 40px #fb8500' }}>
              <p style={{ color: '#fb8500', lineHeight: '1.6', marginBottom: '12px' }}>
                In un'era dominata da schermi e distanziamento digitale, i giochi tradizionali offrono qualcosa che la tecnologia non può replicare: presenza fisica condivisa, interazione tattile con materiali naturali, e quella forma speciale di connessione umana che nasce solo quando corpi e menti giocano insieme nello stesso spazio.
              </p>
              <p style={{ color: '#fb8500', lineHeight: '1.6' }}>
                Non rifiutiamo il progresso, celebriamo ciò che rischiamo di perdere dimenticando il passato. Ogni evento GiochInPiazza è un atto di resistenza culturale gioiosa contro l'omogeneizzazione dell'intrattenimento. È la prova vivente che tradizione e contemporaneità non sono opposte, ma si arricchiscono reciprocamente quando le facciamo dialogare con rispetto e creatività.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

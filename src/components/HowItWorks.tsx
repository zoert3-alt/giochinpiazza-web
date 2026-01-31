import { motion } from 'framer-motion'

interface StepCardProps {
  number: string
  title: string
  description: string
  delay: number
}

function StepCard({ title, description, delay }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="relative"
    >
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

const steps = [
  {
    number: '01',
    title: 'Richiesta Iniziale',
    description: 'Ci contatti fornendo dettagli sul tuo evento: tipo, data prevista, location, numero partecipanti. Più informazioni condividi, più accurata sarà la nostra proposta.'
  },
  {
    number: '02',
    title: 'Consulenza Personalizzata',
    description: 'Ti contattiamo entro 24 ore per comprendere obiettivi specifici, vincoli spaziali e desideri particolari. Suggeriamo i giochi ottimali per il tuo contesto e pubblico.'
  },
  {
    number: '03',
    title: 'Preventivo su Misura',
    description: 'Ricevi una proposta dettagliata con selezione giochi, numero animatori, durata, costi trasparenti e opzioni personalizzabili. Nessun costo nascosto, solo chiarezza.'
  },
  {
    number: '04',
    title: 'Organizzazione Logistica',
    description: 'Pianifichiamo insieme setup, timing, requisiti spaziali. Gestiamo ogni aspetto logistico così tu puoi concentrarti sul resto del tuo evento senza preoccupazioni.'
  },
  {
    number: '05',
    title: 'Setup Professionale',
    description: 'Arriviamo in anticipo per allestire i giochi nella tua location. Ogni postazione viene preparata con cura, testata e resa perfettamente sicura e funzionale.'
  },
  {
    number: '06',
    title: 'Animazione ed Evento',
    description: 'I nostri animatori accolgono partecipanti, spiegano regole con entusiasmo, facilitano il gioco e mantengono energia alta. Ci adattiamo dinamicamente al flusso del tuo evento.'
  }
]

const includedFeatures = [
  'Selezione personalizzata di giochi per il tuo evento',
  'Trasporto, setup completo e smontaggio finale',
  'Animatori esperti che spiegano regole e facilitano gioco',
  'Manutenzione giochi durante l\'evento',
  'Assicurazione responsabilità civile inclusa',
  'Adattabilità a spazi interni ed esterni'
]

const customizableFeatures = [
  'Numero e tipologia giochi in base a budget',
  'Durata evento da 2 ore a intera giornata',
  'Animatori aggiuntivi per eventi grandi',
  'Allestimento scenografico e personalizzazioni',
  'Servizio fotografico dei momenti migliori',
  'Premi e gadget per vincitori tornei'
]

export default function HowItWorks() {
  return (
    <section id="processo" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="mb-6">
            Come <span className="text-gradient-warm">Funziona</span> Concretamente
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Dall'inquiry iniziale all'evento finale, gestiamo ogni aspetto con professionalità. Il nostro processo è pensato per rendere la tua esperienza fluida e senza stress.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, idx) => (
            <StepCard
              key={step.number}
              {...step}
              delay={idx * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-terracotta-50 to-ochre-50 rounded-3xl p-8 md:p-12 border border-terracotta-100"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Cosa Include il Servizio Standard
              </h3>
              <ul className="space-y-4">
                {includedFeatures.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div style={{ display: 'inline-block', backgroundColor: 'rgba(0, 0, 0, 0.75)', padding: '4px 10px', borderRadius: '16px', border: '2px solid white', boxShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fb8500, 0 0 40px #fb8500' }}>
                      <span className="text-terracotta-600 text-2xl">✓ </span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Opzioni Personalizzabili
              </h3>
              <ul className="space-y-4">
                {customizableFeatures.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.3 }}
                  >
                    <div style={{ display: 'inline-block', backgroundColor: 'rgba(0, 0, 0, 0.75)', padding: '4px 10px', borderRadius: '16px', border: '2px solid white', boxShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fb8500, 0 0 40px #fb8500' }}>
                      <span className="text-ochre-500 text-2xl">★ </span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

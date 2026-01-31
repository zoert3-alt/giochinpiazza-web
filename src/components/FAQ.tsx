import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
  index: number
}

function FAQItem({ question, answer, isOpen, onClick, index }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200"
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
      >
        <span className="font-bold text-gray-900 pr-4">{question}</span>
        <span className="text-terracotta-600 flex-shrink-0 text-2xl">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5">
              <p className="text-gray-600 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const faqs = [
  {
    question: 'Quanto spazio è necessario per ospitare i giochi?',
    answer: 'Lo spazio necessario dipende dal numero e tipo di giochi selezionati. Per un setup standard con 5-7 giochi, raccomandiamo almeno 100-150 mq. Possiamo adattare la selezione a spazi più piccoli o configurare postazioni multiple per aree più ampie. Durante la consulenza iniziale, valutiamo insieme lo spazio disponibile e proponiamo la configurazione ottimale.'
  },
  {
    question: 'I giochi funzionano anche in caso di maltempo?',
    answer: 'Molti dei nostri giochi possono essere allestiti in spazi coperti come tensostrutture, gazebo, o sale interne. Per eventi outdoor, raccomandiamo sempre un piano B con copertura. Se il maltempo è severo, possiamo concordare riprogrammazione senza penali se comunicato con anticipo ragionevole.'
  },
  {
    question: 'È necessaria corrente elettrica o altre utilities?',
    answer: 'No, tutti i nostri giochi sono completamente autonomi e non richiedono corrente elettrica, acqua o altre utilities. Questo li rende perfetti per location remote, parchi, spiagge o qualsiasi spazio all\'aperto. L\'unico requisito è una superficie relativamente pianeggiante per il setup sicuro.'
  },
  {
    question: 'Quanto personale di animazione è incluso?',
    answer: 'Il numero di animatori dipende dalla dimensione dell\'evento. Per eventi fino a 50 persone, generalmente includiamo 1 animatore. Per 50-150 persone, 2 animatori. Per eventi più grandi, calcoliamo circa 1 animatore ogni 75-100 partecipanti. Gli animatori spiegano regole, facilitano tornei, e mantengono energia e sicurezza durante l\'evento.'
  },
  {
    question: 'I giochi sono adatti anche per partecipanti con mobilità ridotta?',
    answer: 'Molti dei nostri giochi sono accessibili e inclusivi. Durante la pianificazione, ci informi di eventuali necessità specifiche e selezioneremo i giochi più appropriati per garantire che tutti possano partecipare e divertirsi.'
  },
  {
    question: 'Quali sono i tempi di prenotazione consigliati?',
    answer: 'Per eventi aziendali e privati, raccomandiamo di prenotare con almeno 3-4 settimane di anticipo per garantire disponibilità nella data desiderata. Per festival e sagre che richiedono pianificazione più complessa, suggeriamo 2-3 mesi. Tuttavia, gestiamo anche richieste urgenti quando possibile, quindi contattaci anche per eventi ravvicinati.'
  },
  {
    question: 'Come funziona il pricing? Ci sono costi nascosti?',
    answer: 'Il nostro pricing è completamente trasparente e dipende da: numero e tipo di giochi selezionati, durata dell\'evento, distanza della location, e numero di animatori necessari. Il preventivo include sempre trasporto, setup, smontaggio, personale.'
  },
  {
    question: 'Possiamo provare i giochi prima di prenotare?',
    answer: 'Per eventi corporate di grandi dimensioni o collaborazioni continuative, possiamo organizzare una dimostrazione presso la vostra location o il nostro spazio. Per eventi più piccoli, offriamo consulenza video dove mostriamo i giochi in azione e rispondiamo a tutte le domande. Il nostro portfolio fotografico e le testimonianze clienti forniscono anche ottima visibilità su cosa aspettarsi.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const scrollToContact = () => {
    const element = document.querySelector('#contatti')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section style={{ marginTop: '40px', marginBottom: '80px', paddingTop: '40px', paddingBottom: '40px' }}>
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">
            Domande <span className="text-gradient-warm">Frequenti</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Risposte alle domande più comuni che gli organizzatori ci pongono. Non trovi quello che cerchi? Contattaci direttamente.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              index={idx}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Hai altre domande? Siamo qui per aiutarti.
          </p>
          <button
            onClick={scrollToContact}
            className="btn-primary"
          >
            Contattaci Ora
          </button>
        </motion.div>
      </div>
    </section>
  )
}

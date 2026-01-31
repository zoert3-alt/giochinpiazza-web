import { useState } from 'react'
import { motion } from 'framer-motion'

interface PortfolioItemProps {
  type: string
  image?: string
  secondaryImage?: string
  testimonial: {
    quote: string
    author: string
    role: string
  }
  delay: number
}

function PortfolioItem({ type, secondaryImage, testimonial, delay }: PortfolioItemProps) {
  const [isSecondaryHovered, setIsSecondaryHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
    >
      {/* Title Image */}
      <div style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
        <img
          src="/images/portfolio/portfolio-title.png"
          alt=""
          style={{ height: '80px', width: 'auto', maxWidth: '100%', objectFit: 'contain' }}
        />
      </div>

      <div className="p-6">
        {/* Secondary Image */}
        {secondaryImage ? (
          <div style={{
            height: isSecondaryHovered ? '520px' : '260px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            position: 'relative',
            overflow: 'hidden',
            transition: 'height 0.3s ease',
            marginBottom: '20px'
          }}>
            <img
              src={secondaryImage}
              alt={`${type} - dettaglio`}
              onMouseEnter={() => setIsSecondaryHovered(true)}
              onMouseLeave={() => setIsSecondaryHovered(false)}
              style={{
                height: isSecondaryHovered ? '470px' : '210px',
                width: 'auto',
                maxWidth: isSecondaryHovered ? '100%' : '90%',
                objectFit: 'contain',
                transition: 'height 0.3s ease, max-width 0.3s ease',
                cursor: 'pointer',
                border: '3px solid #000',
                borderRadius: '8px'
              }}
            />
          </div>
        ) : (
          <div style={{ height: '260px', backgroundColor: '#9ca3af', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', padding: '10px 12px', borderRadius: '16px', maxWidth: '85%', border: '2px solid white', boxShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fb8500, 0 0 40px #fb8500' }}>
            <p style={{ color: '#fb8500', fontStyle: 'italic', fontSize: '0.8rem', lineHeight: '1.5', marginBottom: '4px' }}>
              "{testimonial.quote}"
            </p>
            <p style={{ color: '#fb8500', fontSize: '0.7rem', fontWeight: 'bold' }}>
              — {testimonial.author}, {testimonial.role}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const portfolioItems = [
  {
    type: 'Team Building Aziendale',
    image: '/images/portfolio/team-building.png',
    secondaryImage: '/images/portfolio/team-building-2.png',
    testimonial: {
      quote: 'I giochi hanno completamente trasformato il nostro team building. Manager e junior staff si sono ritrovati a competere fianco a fianco, abbattendo barriere gerarchiche in modo che nessuna attività in sala riunioni avrebbe mai potuto fare.',
      author: 'Marco Benedetti',
      role: 'HR Director - Tech Company'
    }
  },
  {
    type: 'Festa di Paese',
    image: '/images/portfolio/festa-paese.png',
    secondaryImage: '/images/portfolio/festa-paese-2.jpg',
    testimonial: {
      quote: 'Le postazioni giochi sono state l\'attrazione più fotografata della sagra. Famiglie sono rimaste dalle 15 alle 19 spostandosi tra i vari giochi, un successo incredibile che replicheremo sicuramente.',
      author: 'Elena Rossini',
      role: 'Presidente Pro Loco'
    }
  },
  {
    type: 'Matrimonio in Villa',
    image: '/images/portfolio/matrimonio.png',
    secondaryImage: '/images/portfolio/matrimonio-2.png',
    testimonial: {
      quote: 'I giochi hanno creato magia durante l\'aperitivo. Nonni che insegnavano ai nipotini, amici dello sposo che sfidavano amiche della sposa. Hanno riempito perfettamente i tempi morti creando connessioni autentiche tra le nostre famiglie.',
      author: 'Giulia e Alessandro',
      role: 'Sposi'
    }
  },
  {
    type: 'Festival Culturale',
    image: '/images/portfolio/festival.png',
    secondaryImage: '/images/portfolio/festival-2.jpg',
    testimonial: {
      quote: 'L\'area giochi tradizionali è diventata il cuore pulsante del festival. Vedere bambini del 2020 appassionarsi agli stessi giochi che i loro bisnonni facevano in piazza ha incarnato perfettamente lo spirito del nostro evento sulla memoria culturale.',
      author: 'Francesco Martini',
      role: 'Direttore Artistico Festival'
    }
  },
  {
    type: 'Agriturismo Estate',
    image: '/images/portfolio/agriturismo.png',
    secondaryImage: '/images/portfolio/agriturismo-2.jpg',
    testimonial: {
      quote: 'I giochi tradizionali all\'aperto sono diventati il nostro elemento distintivo. Le famiglie tornano specificatamente perché i bambini hanno amato giocare nel parco, e noi abbiamo ridotto le richieste di "mamma mi annoio" praticamente a zero.',
      author: 'Simone Bianchi',
      role: 'Proprietario Agriturismo'
    }
  },
  {
    type: 'Evento Scolastico',
    image: '/images/portfolio/scuola.png',
    secondaryImage: '/images/portfolio/scuola-2.jpg',
    testimonial: {
      quote: 'La festa di fine anno con i giochi tradizionali è stata perfetta per la nostra scuola primaria. Valore educativo certificato, movimento all\'aria aperta, inclusione di tutti i bambini indipendentemente dalle abilità sportive.',
      author: 'Laura Conti',
      role: 'Dirigente Scolastica'
    }
  }
]

export default function Portfolio() {
  const scrollToContact = () => {
    const element = document.querySelector('#contatti')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="mb-6">
            Eventi <span className="text-gradient-warm">Realizzati</span> con Successo
          </h2>
          <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', padding: '10px 14px', borderRadius: '16px', display: 'inline-block', maxWidth: '70%', border: '2px solid white', boxShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fb8500, 0 0 40px #fb8500' }}>
            <p style={{ color: '#fb8500', fontSize: '1rem', lineHeight: '1.6' }}>
              Oltre 500 eventi in 15 anni, da piccole celebrazioni private a grandi festival con migliaia di partecipanti. Ogni evento ha la sua storia, ogni cliente diventa parte della famiglia GiochInPiazza.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, idx) => (
            <PortfolioItem
              key={item.type}
              {...item}
              delay={idx * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Vuoi vedere il tuo evento nella nostra gallery?
          </p>
          <button
            onClick={scrollToContact}
            className="btn-primary"
          >
            Inizia a Pianificare
          </button>
        </motion.div>
      </div>
    </section>
  )
}

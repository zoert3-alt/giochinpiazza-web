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
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform md:hover:-translate-y-1 border border-gray-100"
    >
      {/* Title Image */}
      <div style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
        <img
          src="/images/portfolio/portfolio-title.png"
          alt=""
          className="h-20 w-auto max-w-full object-contain"
        />
      </div>

      <div className="p-6">
        {/* Secondary Image */}
        {secondaryImage ? (
          <div
            className="flex items-center justify-center bg-transparent relative overflow-hidden transition-all duration-300 mb-6"
            style={{
              height: isSecondaryHovered ? 'clamp(300px, 70vh, 520px)' : '240px',
            }}
          >
            <img
              src={secondaryImage}
              alt={`${type} - dettaglio`}
              onMouseEnter={() => setIsSecondaryHovered(true)}
              onMouseLeave={() => setIsSecondaryHovered(false)}
              className="w-auto h-full max-w-full border-2 border-black rounded-lg cursor-pointer transition-all duration-300 object-contain shadow-md"
              style={{
                height: isSecondaryHovered ? '95%' : '85%',
              }}
            />
          </div>
        ) : (
          <div className="h-[240px] bg-gray-100 rounded-lg flex items-center justify-center mb-6">
          </div>
        )}

        <div className="flex justify-center">
          <div className="bg-black/75 p-4 rounded-2xl max-w-[95%] border-2 border-white shadow-[0_0_15px_rgba(251,133,0,0.4)]">
            <p className="text-[#fb8500] italic text-[0.85rem] leading-relaxed mb-1">
              "{testimonial.quote}"
            </p>
            <p className="text-[#fb8500] text-[0.75rem] font-bold">
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

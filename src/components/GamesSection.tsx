import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface GameCardProps {
  name: string
  category: string
  description: string
  players: string
  age: string
  image?: string
  delay: number
}

function GameCard({ name, description, image, delay }: GameCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isImageHovered, setIsImageHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
    >
      {image ? (
        <div style={{
          height: isImageHovered ? '600px' : '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          position: 'relative',
          overflow: 'hidden',
          transition: 'height 0.3s ease'
        }}>
          <img
            src={image}
            alt={name}
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
            style={{
              height: isImageHovered ? '550px' : '240px',
              width: 'auto',
              maxWidth: isImageHovered ? '100%' : '90%',
              objectFit: 'contain',
              transition: 'height 0.3s ease, max-width 0.3s ease',
              cursor: 'pointer',
              border: '3px solid #000',
              borderRadius: '8px'
            }}
          />
        </div>
      ) : (
        <div className="p-6 pb-0">
          <h3 className="text-xl font-bold text-gray-900 mb-3">{name}</h3>
        </div>
      )}

      <div className={image ? "p-6" : "px-6 pb-6"}>
        <AnimatePresence mode="wait">
          <motion.p
            key={isExpanded ? 'full' : 'truncated'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-gray-600 mb-4 leading-relaxed"
          >
            {isExpanded ? description : `${description.slice(0, 120)}...`}
          </motion.p>
        </AnimatePresence>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-terracotta-600 font-semibold text-sm hover:text-terracotta-700 transition-colors mb-4"
        >
          {isExpanded ? 'Leggi meno' : 'Leggi tutto'}
        </button>
      </div>
    </motion.div>
  )
}

const categories = ['Esempi', 'Abilità', 'Info', 'Labs']

const games = [
  {
    name: 'Torre di Blocchi Gigante',
    category: 'Strategia',
    description: 'Jenga portato a scala monumentale con blocchi di legno che costruiscono torri alte oltre un metro. Ogni turno i giocatori rimuovono un blocco dalla base per posizionarlo in cima, aumentando instabilità. Il crollo finale genera grida collettive memorabili. Perfetto per creare tensione crescente e momenti fotografici spettacolari.',
    players: '2-8 giocatori',
    age: 'Dai 8 anni',
    image: '/images/games/torre-blocchi.png'
  },
  {
    name: 'Corsa nei Sacchi',
    category: 'Abilità',
    description: 'Pura gioia cinetica che fa ridere partecipanti e spettatori. Saltare dentro un sacco di juta verso il traguardo sembra semplice ma richiede equilibrio, ritmo e determinazione. Le cadute comiche e le risalite eroiche creano momenti di pura autenticità che vengono ricordati per anni.',
    players: '2-10 concorrenti',
    age: 'Dai 5 anni',
    image: '/images/games/corsa-sacchi.png'
  },
  {
    name: 'Lancio degli Anelli',
    category: 'Abilità',
    description: 'Anelli di legno o corda vengono lanciati verso pioli di diverse altezze per accumulare punti. La distanza dal bersaglio e la dimensione degli anelli creano livelli di difficoltà che permettono a principianti ed esperti di competere insieme. Ritmo lento e ipnotico che favorisce conversazione tra lanci.',
    players: '1-4 giocatori',
    age: 'Dai 5 anni',
    image: '/images/games/lancio-anelli.png'
  }
]

const slideshowImages = [
  '/images/slideshow/slide-1.jpeg',
  '/images/slideshow/slide-2.jpeg',
  '/images/slideshow/slide-3.jpeg',
  '/images/slideshow/slide-4.jpeg',
  '/images/slideshow/slide-5.jpeg',
  '/images/slideshow/slide-6.jpeg',
  '/images/slideshow/slide-7.jpeg',
  '/images/slideshow/slide-8.jpeg'
]

export default function GamesSection() {
  const [selectedCategory, setSelectedCategory] = useState('Esempi')
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const [showLabsVideo, setShowLabsVideo] = useState(false)
  const [showSlideshow, setShowSlideshow] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeGifIndex, setActiveGifIndex] = useState(0)
  const [showAbilitaGifs, setShowAbilitaGifs] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    let t1: any, t2: any
    if (showAbilitaGifs) {
      setActiveGifIndex(0)
      if (isMobile) {
        // Mobile: Rotate sequence
        t1 = setTimeout(() => {
          setActiveGifIndex(1)
          t2 = setTimeout(() => {
            setShowAbilitaGifs(false)
          }, 3450)
        }, 2650)
      } else {
        // Desktop: Just wait for the total duration then close
        t1 = setTimeout(() => {
          setShowAbilitaGifs(false)
        }, 3450)
      }
    }
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [showAbilitaGifs, isMobile])

  const filteredGames = selectedCategory === 'Esempi'
    ? games
    : games.filter(game => game.category === selectedCategory)

  const scrollToContact = () => {
    const element = document.querySelector('#contatti')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="giochi" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="mb-6">
            Il Nostro <span className="text-gradient-warm">Catalogo</span> di Giochi
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Oltre 25 giochi tradizionali italiani accuratamente selezionati e realizzati in legno naturale. Ogni gioco racconta una storia e crea un'esperienza unica di connessione e divertimento.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 relative z-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={(e) => {
                e.stopPropagation();
                if (category === 'Labs') {
                  setShowLabsVideo(true)
                } else if (category === 'Esempi') {
                  setShowSlideshow(true)
                  setCurrentSlide(0)
                  setSelectedCategory('Esempi')
                } else if (category === 'Info') {
                  scrollToContact()
                } else if (category === 'Abilità') {
                  setSelectedCategory('Abilità')
                  setShowAbilitaGifs(true) // Force start
                } else {
                  setSelectedCategory(category)
                }
              }}
              onMouseEnter={() => {
                if (category !== 'Abilità') setHoveredCategory(category)
              }}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 relative z-20 ${selectedCategory === category
                ? 'bg-gradient-warm text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-terracotta-300'
                }`}
            >
              {category}
            </button>
          ))}
          {hoveredCategory === 'Labs' && (
            <div
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1000,
                pointerEvents: 'none',
                padding: '20px',
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                borderRadius: '16px',
                border: '3px solid #000',
                boxShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fb8500, 0 0 40px #fb8500',
                textAlign: 'center',
                maxWidth: '400px'
              }}
            >
              <p style={{ color: '#fb8500', marginBottom: '10px', fontSize: '1.2rem' }}>
                Organizziamo laboratori per ideazione e costruzione di giochi in legno nella location da voi stabilita. Per informazioni clicca su "Richiedi Preventivo Gratuito" o "Richiedi catalogo completo".
              </p>
              <p style={{ color: '#fb8500', fontSize: '1rem', fontStyle: 'italic' }}>
                Clicca per vedere il video
              </p>
            </div>
          )}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-0">
          <AnimatePresence>
            {filteredGames.map((game, idx) => (
              <GameCard
                key={game.name}
                {...game}
                delay={idx * 0.05}
              />
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Non hai trovato quello che cercavi? Abbiamo molti altri giochi disponibili!
          </p>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-white text-terracotta-600 rounded-full font-semibold hover:shadow-lg transition-all border-2 border-terracotta-200 hover:border-terracotta-400"
          >
            Richiedi Catalogo Completo
          </button>
        </div>
      </div>

      {/* GIFs OVERLAY - EXTREMELY HIGH Z-INDEX AND SEPARATE */}
      <AnimatePresence>
        {showAbilitaGifs && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 999999, pointerEvents: 'none' }}
          >
            {/* DESKTOP: Both side by side */}
            {!isMobile && (
              <div className="w-full h-full relative">
                <div className="absolute top-1/2 left-[5%] -translate-y-1/2">
                  <img
                    src="/images/games/abilita-hover-left.gif"
                    alt=""
                    style={{ width: '350px', height: '622px', objectFit: 'contain', borderRadius: '16px', border: '3px solid #000', boxShadow: '0 0 20px #fb8500' }}
                  />
                </div>
                <div className="absolute top-1/2 right-[5%] -translate-y-1/2">
                  <img
                    src="/images/games/abilita-hover.gif"
                    alt=""
                    style={{ width: '350px', height: '622px', objectFit: 'contain', borderRadius: '16px', border: '3px solid #000', boxShadow: '0 0 20px #fb8500' }}
                  />
                </div>
              </div>
            )}

            {/* MOBILE: Sequential centered */}
            {isMobile && (
              <div className="w-full h-full flex items-center justify-center">
                <div className="relative w-[85vw] flex items-center justify-center">
                  {activeGifIndex === 0 ? (
                    <img
                      src="/images/games/abilita-hover-left.gif"
                      alt=""
                      style={{ width: '100%', height: 'auto', maxHeight: '70vh', objectFit: 'contain', borderRadius: '16px', border: '3px solid #000', boxShadow: '0 0 20px #fb8500' }}
                    />
                  ) : (
                    <img
                      src="/images/games/abilita-hover.gif"
                      alt=""
                      style={{ width: '100%', height: 'auto', maxHeight: '70vh', objectFit: 'contain', borderRadius: '16px', border: '3px solid #000', boxShadow: '0 0 20px #fb8500' }}
                    />
                  )}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODALS */}
      {showLabsVideo && (
        <div
          className="fixed inset-0 bg-black/85 flex items-center justify-center z-[2000]"
          onClick={() => setShowLabsVideo(false)}
        >
          <div
            className="relative rounded-2xl border-3 border-black shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="350"
              height="622"
              src="https://www.youtube.com/embed/xuZw-WtLa1M"
              title="Labs Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={() => setShowLabsVideo(false)}
              className="absolute top-2 right-2 bg-black/75 text-white border-2 border-white rounded-full w-9 h-9 flex items-center justify-center"
            >✕</button>
          </div>
        </div>
      )}

      {showSlideshow && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[2000]"
          onClick={() => setShowSlideshow(false)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={slideshowImages[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className="max-w-[90vw] max-h-[80vh] object-contain rounded-2xl border-3 border-black shadow-2xl"
            />
            <button
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? slideshowImages.length - 1 : prev - 1))}
              className="absolute -left-16 top-1/2 -translate-y-1/2 text-[#fb8500] text-4xl"
            >‹</button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev === slideshowImages.length - 1 ? 0 : prev + 1))}
              className="absolute -right-16 top-1/2 -translate-y-1/2 text-[#fb8500] text-4xl"
            >›</button>
            <button
              onClick={() => setShowSlideshow(false)}
              className="absolute -top-10 -right-10 text-white text-3xl"
            >✕</button>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[#fb8500]">
              {currentSlide + 1} / {slideshowImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

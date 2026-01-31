import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface GameCardProps {
  name: string
  category: string
  description: string
  players: string
  age: string
  image?: string // Path to image in public folder, e.g. "/images/games/rana.png"
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
      {/* Image or Icon Header */}
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

  const [startTime, setStartTime] = useState(0)

  useEffect(() => {
    let t1: any, t2: any
    if (showAbilitaGifs) {
      setStartTime(Date.now())
      if (window.innerWidth < 768) {
        // Mobile sequence
        setActiveGifIndex(0)
        t1 = setTimeout(() => {
          setActiveGifIndex(1)
          t2 = setTimeout(() => {
            setShowAbilitaGifs(false)
            setActiveGifIndex(0)
          }, 3450)
        }, 2650)
      } else {
        // Desktop simultaneous
        setActiveGifIndex(-1)
        t1 = setTimeout(() => {
          setShowAbilitaGifs(false)
        }, 3450)
      }
    }
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [showAbilitaGifs])

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
    <section id="giochi" className="section-padding">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
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
                  setShowAbilitaGifs(!showAbilitaGifs)
                } else {
                  setSelectedCategory(category)
                }
              }}
              onMouseEnter={() => {
                if (category !== 'Abilità') setHoveredCategory(category)
              }}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category
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
                zIndex: 100,
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
        </motion.div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Non hai trovato quello che cercavi? Abbiamo molti altri giochi disponibili!
          </p>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-white text-terracotta-600 rounded-full font-semibold hover:shadow-lg transition-all border-2 border-terracotta-200 hover:border-terracotta-400"
          >
            Richiedi Catalogo Completo
          </button>
        </motion.div>

        {/* Global Skill GIFs Overlay - Total clean up */}
        {showAbilitaGifs && (
          <div key={startTime} className="fixed inset-0 pointer-events-none" style={{ zIndex: 10000 }}>
            {/* DESKTOP: Both at the same time */}
            <div className="hidden md:block w-full h-full relative">
              <div className="absolute top-1/2 left-[5%] -translate-y-1/2">
                <img
                  src="/images/games/abilita-hover-left.gif"
                  alt=""
                  style={{ width: '350px', height: '622px', objectFit: 'contain', borderRadius: '16px', border: '3px solid #000', boxShadow: '0 0 10px #fff, 0 0 30px #fb8500' }}
                />
              </div>
              <div className="absolute top-1/2 right-[5%] -translate-y-1/2">
                <img
                  src="/images/games/abilita-hover.gif"
                  alt=""
                  style={{ width: '350px', height: '622px', objectFit: 'contain', borderRadius: '16px', border: '3px solid #000', boxShadow: '0 0 10px #fff, 0 0 30px #fb8500' }}
                />
              </div>
            </div>

            {/* MOBILE: One after the other, centered */}
            <div className="md:hidden w-full h-full flex items-center justify-center">
              <div className="relative w-[85vw] flex items-center justify-center">
                {activeGifIndex === 0 && (
                  <img
                    src="/images/games/abilita-hover-left.gif"
                    alt=""
                    style={{ width: '100%', height: 'auto', maxHeight: '70vh', objectFit: 'contain', borderRadius: '16px', border: '3px solid #000', boxShadow: '0 0 10px #fff, 0 0 30px #fb8500' }}
                  />
                )}
                {activeGifIndex === 1 && (
                  <img
                    src="/images/games/abilita-hover.gif"
                    alt=""
                    style={{ width: '100%', height: 'auto', maxHeight: '70vh', objectFit: 'contain', borderRadius: '16px', border: '3px solid #000', boxShadow: '0 0 10px #fff, 0 0 30px #fb8500' }}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Labs Video Modal */}
      {showLabsVideo && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={() => setShowLabsVideo(false)}
        >
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              border: '3px solid #000',
              boxShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fb8500, 0 0 40px #fb8500',
              overflow: 'hidden'
            }}
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
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                color: '#fff',
                border: '2px solid #fff',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                cursor: 'pointer',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Slideshow Modal */}
      {showSlideshow && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={() => setShowSlideshow(false)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '80vh'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={slideshowImages[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              style={{
                maxWidth: '90vw',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: '16px',
                border: '3px solid #000',
                boxShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fb8500, 0 0 40px #fb8500'
              }}
            />
            {/* Previous Button */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? slideshowImages.length - 1 : prev - 1))}
              style={{
                position: 'absolute',
                left: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                color: '#fb8500',
                border: '2px solid #fb8500',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                cursor: 'pointer',
                fontSize: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ‹
            </button>
            {/* Next Button */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev === slideshowImages.length - 1 ? 0 : prev + 1))}
              style={{
                position: 'absolute',
                right: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                color: '#fb8500',
                border: '2px solid #fb8500',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                cursor: 'pointer',
                fontSize: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ›
            </button>
            {/* Close Button */}
            <button
              onClick={() => setShowSlideshow(false)}
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                color: '#fff',
                border: '2px solid #fff',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                fontSize: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ✕
            </button>
            {/* Slide Counter */}
            <div
              style={{
                position: 'absolute',
                bottom: '-40px',
                left: '50%',
                transform: 'translateX(-50%)',
                color: '#fb8500',
                fontSize: '1rem'
              }}
            >
              {currentSlide + 1} / {slideshowImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

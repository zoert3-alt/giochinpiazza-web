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
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {image ? (
        <div style={{
          height: isImageHovered ? '600px' : '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
              transition: 'height 0.3s ease',
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

      <div className="p-6">
        <p className="text-gray-600 mb-4 leading-relaxed text-sm">
          {isExpanded ? description : `${description.slice(0, 100)}...`}
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-terracotta-600 font-semibold text-sm hover:text-terracotta-700 transition-colors"
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
  '/images/slideshow/slide-1.jpeg', '/images/slideshow/slide-2.jpeg',
  '/images/slideshow/slide-3.jpeg', '/images/slideshow/slide-4.jpeg',
  '/images/slideshow/slide-5.jpeg', '/images/slideshow/slide-6.jpeg',
  '/images/slideshow/slide-7.jpeg', '/images/slideshow/slide-8.jpeg'
]

export default function GamesSection() {
  const [selectedCategory, setSelectedCategory] = useState('Esempi')
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const [showLabsVideo, setShowLabsVideo] = useState(false)
  const [showSlideshow, setShowSlideshow] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showAbilitaGifs, setShowAbilitaGifs] = useState(false)
  const [activeGifIndex, setActiveGifIndex] = useState(0)

  useEffect(() => {
    let t1: any, t2: any
    if (showAbilitaGifs) {
      setActiveGifIndex(0)
      if (window.innerWidth < 768) {
        // Mobile sequence
        t1 = setTimeout(() => {
          setActiveGifIndex(1)
          t2 = setTimeout(() => {
            setShowAbilitaGifs(false)
            setActiveGifIndex(0)
          }, 3450)
        }, 2650)
      } else {
        // Desktop simultaneous show then close
        t1 = setTimeout(() => {
          setShowAbilitaGifs(false)
        }, 3450)
      }
    }
    return () => { clearTimeout(t1); clearTimeout(t2); }
  }, [showAbilitaGifs])

  const filteredGames = selectedCategory === 'Esempi'
    ? games
    : games.filter(game => game.category === selectedCategory)

  const scrollToContact = () => {
    const element = document.querySelector('#contatti')
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="giochi" className="py-20 relative px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Il Nostro <span className="text-gradient-warm">Catalogo</span> di Giochi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oltre 25 giochi tradizionali italiani accuratamente selezionati e realizzati in legno naturale. Ogni gioco racconta una storia e crea un'esperienza unica di connessione e divertimento.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 relative z-[100]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                if (cat === 'Labs') setShowLabsVideo(true)
                else if (cat === 'Esempi') { setShowSlideshow(true); setSelectedCategory('Esempi'); }
                else if (cat === 'Info') scrollToContact()
                else if (cat === 'Abilità') { setSelectedCategory('Abilità'); setShowAbilitaGifs(true); }
                else setSelectedCategory(cat)
              }}
              onMouseEnter={() => { if (cat !== 'Abilità') setHoveredCategory(cat) }}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${selectedCategory === cat
                ? 'bg-[#fb8500] text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 border-2 border-gray-100 hover:border-[#fb8500]'}`}
            >
              {cat}
            </button>
          ))}

          {hoveredCategory === 'Labs' && (
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/90 text-[#fb8500] p-6 rounded-2xl border-2 border-[#fb8500] z-[1000] text-center max-w-sm pointer-events-none">
              <p>Organizziamo laboratori di costruzione giochi in legno. Clicca per vedere il video!</p>
            </div>
          )}
        </div>

        {/* Games list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredGames.map((game, idx) => (
              <GameCard key={game.name} {...game} delay={idx * 0.1} />
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
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 999999 }}
          >
            {/* DESKTOP VIEW */}
            <div className="hidden md:block w-full h-full relative">
              <div className="absolute top-1/2 left-[5%] -translate-y-1/2">
                <img src="/images/games/abilita-hover-left.gif" className="w-[350px] h-[622px] object-contain rounded-2xl border-4 border-black shadow-[0_0_30px_#fb8500]" />
              </div>
              <div className="absolute top-1/2 right-[5%] -translate-y-1/2">
                <img src="/images/games/abilita-hover.gif" className="w-[350px] h-[622px] object-contain rounded-2xl border-4 border-black shadow-[0_0_30px_#fb8500]" />
              </div>
            </div>

            {/* MOBILE VIEW */}
            <div className="md:hidden flex items-center justify-center w-full h-full">
              <div className="relative w-[85vw] flex items-center justify-center">
                <img
                  src={activeGifIndex === 0 ? "/images/games/abilita-hover-left.gif" : "/images/games/abilita-hover.gif"}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-2xl border-4 border-black shadow-[0_0_30px_#fb8500]"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* VIDEO MODAL */}
      {showLabsVideo && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[5000]" onClick={() => setShowLabsVideo(false)}>
          <div className="relative rounded-2xl overflow-hidden border-4 border-black shadow-2xl" onClick={e => e.stopPropagation()}>
            <iframe width="350" height="622" src="https://www.youtube.com/embed/xuZw-WtLa1M" frameBorder="0" allowFullScreen />
            <button onClick={() => setShowLabsVideo(false)} className="absolute top-4 right-4 text-white bg-black/50 w-10 h-10 rounded-full border-2 border-white">✕</button>
          </div>
        </div>
      )}

      {/* SLIDESHOW MODAL */}
      {showSlideshow && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[5000]" onClick={() => setShowSlideshow(false)}>
          <div className="relative max-w-4xl px-4" onClick={e => e.stopPropagation()}>
            <img src={slideshowImages[currentSlide]} className="max-h-[80vh] w-auto rounded-xl border-4 border-black shadow-2xl" />
            <button onClick={() => setCurrentSlide(p => (p === 0 ? slideshowImages.length - 1 : p - 1))} className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-5xl">‹</button>
            <button onClick={() => setCurrentSlide(p => (p === slideshowImages.length - 1 ? 0 : p + 1))} className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-5xl">›</button>
            <button onClick={() => setShowSlideshow(false)} className="absolute -top-12 right-0 text-white text-3xl">Chiudi ✕</button>
          </div>
        </div>
      )}
    </section>
  )
}

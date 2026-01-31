import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface StatCounterProps {
  end: number
  suffix?: string
  label: string
}

function StatCounter({ end, suffix = '', label }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (isVisible) {
      let start = 0
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isVisible, end])

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-black mb-2 tracking-tighter"
        style={{ color: '#fb8500' }}
      >
        {count.toLocaleString()}{suffix}
      </motion.div>
      <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/80 leading-tight text-center">
        {label}
      </div>
    </div>
  )
}

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section style={{
      position: 'relative',
      paddingTop: '8rem',
      paddingBottom: '4rem',
      overflow: 'hidden',
      backgroundColor: 'transparent'
    }}>
      <div style={{
        maxWidth: '80rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '64rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center'
        }}>
          {/* Logo Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center mb-12 sm:mb-16 -mt-10 sm:-mt-16"
          >
            <img
              src="/images/LOGO.png"
              alt="Gioco in Piazza Logo"
              className="h-24 sm:h-36 w-auto object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontWeight: 800,
              color: 'white',
              marginBottom: '2rem',
              lineHeight: 1.1,
              textAlign: 'center'
            }}
          >
            Trasformiamo{' '}
            <span className="text-gradient-warm" style={{ pointerEvents: 'none' }}>piazze e spazi</span>
            {' '}in arene di gioco dove generazioni si incontrano
          </motion.h1>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              marginBottom: '3rem',
              maxWidth: '48rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center'
            }}
          >
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', padding: '12px 16px', borderRadius: '16px', display: 'inline-block', border: '2px solid white', boxShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fb8500, 0 0 40px #fb8500' }}>
              <p style={{ color: '#fb8500', lineHeight: 1.7 }}>
                Eventi ludici indimenticabili con giochi tradizionali di legno per aziende, festival, matrimoni e celebrazioni. Creiamo momenti di connessione autentica che trasformano sconosciuti in comunità.
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-20"
          >
            <button
              onClick={() => scrollToSection('#contatti')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 bg-white text-gray-900 font-bold rounded-full border-2 border-gray-200 hover:shadow-xl transition-all"
            >
              Richiedi Preventivo Gratuito
            </button>
            <button
              onClick={() => scrollToSection('#portfolio')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 bg-white text-gray-900 font-bold rounded-full border-2 border-gray-200 hover:shadow-xl transition-all"
            >
              Guarda i Nostri Eventi
            </button>
          </motion.div>

          {/* Stats Box */}
          <div className="px-4 sm:px-0 mt-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 bg-black/90 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-14 border-2 border-white/20 shadow-2xl"
            >
              <StatCounter end={500} suffix="+" label="Eventi Realizzati" />
              <StatCounter end={25} suffix="+" label="Giochi Tradizionali" />
              <StatCounter end={50000} suffix="+" label="Partecipanti Felici" />
              <StatCounter end={15} suffix="+" label="Anni di Esperienza" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

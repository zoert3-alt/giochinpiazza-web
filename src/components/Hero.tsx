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
    <div ref={ref} className="flex flex-col items-center justify-center py-4 sm:py-6">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl font-bold mb-2 text-[#fb8500]"
      >
        {count.toLocaleString()}{suffix}
      </motion.div>
      <div className="font-medium text-[#fb8500] text-[10px] sm:text-base uppercase tracking-wider">{label}</div>
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
    <section className="relative pt-32 pb-16 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center -mt-12 mb-12"
          >
            <img
              src="/images/LOGO.png"
              alt="Gioco in Piazza Logo"
              className="h-[120px] w-auto object-contain"
            />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-extrabold text-center mb-8 leading-[1.1]"
          >
            Trasformiamo{' '}
            <span className="text-gradient-warm pointer-events-none">piazze e spazi</span>
            {' '}in arene di gioco dove generazioni si incontrano
          </motion.h1>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 max-w-3xl mx-auto text-center"
          >
            <div className="bg-black/80 px-4 py-8 sm:p-10 rounded-[2.5rem] inline-block border-2 border-white shadow-[0_0_10px_#fff,0_0_20px_#fff,0_0_30px_#fb8500,0_0_40px_#fb8500]">
              <p className="text-[#fb8500] leading-relaxed m-0 text-lg sm:text-2xl font-bold">
                Eventi ludici indimenticabili con giochi tradizionali di legno per aziende, festival, matrimoni e celebrazioni. Creiamo momenti di connessione autentica che trasformano sconosciuti in comunità.
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 sm:mb-24"
          >
            <button
              onClick={() => scrollToSection('#contatti')}
              className="w-full sm:w-auto px-6 py-4"
            >
              Richiedi Preventivo Gratuito
            </button>
            <button
              onClick={() => scrollToSection('#portfolio')}
              className="w-full sm:w-auto px-6 py-4"
            >
              Guarda i Nostri Eventi
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-10 bg-black/85 backdrop-blur-sm rounded-[3rem] p-10 sm:p-16 border-2 border-white shadow-[0_0_40px_rgba(251,133,0,0.5)] mx-2 sm:mx-0"
          >
            <StatCounter end={500} suffix="+" label="Eventi Realizzati" />
            <StatCounter end={25} suffix="+" label="Giochi Tradizionali" />
            <StatCounter end={50000} suffix="+" label="Partecipanti Felici" />
            <StatCounter end={15} suffix="+" label="Anni di Esperienza" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

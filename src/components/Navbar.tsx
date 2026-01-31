import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Giochi', href: '#giochi' },
  { label: 'Eventi', href: '#eventi' },
  { label: 'Come Funziona', href: '#processo' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Chi Siamo', href: '#filosofia' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav
      style={{ top: '40px' }}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-center h-20">
          {/* Navigation */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="nav-link py-2 text-sm"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contatti')}
              className="btn-primary py-2 px-4 text-sm"
            >
              Richiedi Preventivo
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

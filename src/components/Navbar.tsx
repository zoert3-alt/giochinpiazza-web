import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Giochi', href: '#giochi' },
  { label: 'Eventi', href: '#eventi' },
  { label: 'Come Funziona', href: '#processo' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Chi Siamo', href: '#filosofia' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
      setIsMenuOpen(false)
    }
  }

  return (
    <nav
      style={{ top: '0px' }}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-white/80 backdrop-blur-sm'
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <div className="flex-shrink-0">
            <span className="text-terracotta-600 font-bold text-xl uppercase tracking-tighter">GiochInPiazza</span>
          </div>

          {/* Hamburger Toggle - Always visible */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-terracotta-600 outline-none flex items-center transition-transform active:scale-90"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Unified Dropdown Menu */}
        {isMenuOpen && (
          <div className="bg-white/95 border-t border-gray-100 pb-8 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-4 p-6 max-w-md mx-auto">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="py-4 text-xl font-bold text-terracotta-600 border-b border-gray-100 text-center hover:bg-orange-50 transition-colors rounded-lg"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contatti')}
                className="btn-primary w-full py-5 text-xl mt-4"
              >
                Richiedi Preventivo
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

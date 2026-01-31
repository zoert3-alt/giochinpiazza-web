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
          {/* Logo/Title for Mobile */}
          <div className="flex-shrink-0 md:hidden">
            <span className="text-terracotta-600 font-bold text-xl">GiochInPiazza</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 justify-center w-full">
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-terracotta-600 outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 pb-6 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-4 p-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="nav-link-mobile py-3 text-lg font-semibold border-b border-gray-50 text-left"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contatti')}
                className="btn-primary w-full py-4 text-lg mt-2"
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


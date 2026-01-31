const navLinks = [
  { label: 'Catalogo Giochi', href: '#giochi' },
  { label: 'Tipologie Eventi', href: '#eventi' },
  { label: 'Come Funziona', href: '#processo' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Chi Siamo', href: '#filosofia' },
]


export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Link Rapidi</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-terracotta-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © {currentYear} GiochInPiazza. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  )
}

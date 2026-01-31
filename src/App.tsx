import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GamesSection from './components/GamesSection'
import EventTypes from './components/EventTypes'
import HowItWorks from './components/HowItWorks'
import Portfolio from './components/Portfolio'
import Philosophy from './components/Philosophy'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen font-sans antialiased relative" style={{ backgroundColor: 'transparent' }}>
      {/* Background image with parallax */}
      <div
        className="fixed inset-0"
        style={{
          backgroundImage: 'url(/images/hero/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          zIndex: -1
        }}
      />
      {/* Content */}
      <div className="relative">
        <Navbar />
        <main style={{ backgroundColor: 'transparent' }}>
          <Hero />
          <GamesSection />
          <EventTypes />
          <HowItWorks />
          <Portfolio />
          <Philosophy />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App

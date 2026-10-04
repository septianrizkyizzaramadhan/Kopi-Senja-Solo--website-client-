import { Navbar } from './components/layout/Navbar.jsx'
import { Footer } from './components/layout/Footer.jsx'
import { Hero } from './sections/Hero.jsx'
import { About } from './sections/About.jsx'
import { Menu } from './sections/Menu.jsx'
import { Advantages } from './sections/Advantages.jsx'
import { Gallery } from './sections/Gallery.jsx'
import { Testimonials } from './sections/Testimonials.jsx'
import { Location } from './sections/Location.jsx'
import { CTA } from './sections/CTA.jsx'
import { useReveal } from './hooks/useReveal.js'

function App() {
  useReveal()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Menu />
        <Advantages />
        <Gallery />
        <Testimonials />
        <Location />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
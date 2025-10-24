import { useState, useRef, useEffect } from 'react'
import './App.css'

import PillNav from './components/PillNav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Themes from './pages/Themes'
import Clubs from './pages/Clubs'
import Contact from './pages/Contact'

type Page = 'home' | 'about' | 'events' | 'themes' | 'clubs' | 'contact'

function App() {
  const [page, setPage] = useState<Page>('home')

  // refs for the sections
  const sectionsRef = useRef<Record<Page, HTMLElement | null>>({
    home: null,
    about: null,
    events: null,
    themes: null,
    clubs: null,
    contact: null,
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id as Page
            setPage(id)
          }
        })
      },
      { root: null, threshold: 0.6 }
    )

    Object.values(sectionsRef.current).forEach((el) => el && observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleNavigate = (href: string) => {
    const p = href as Page
    const el = sectionsRef.current[p]
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const navItems = [
    { label: 'Home', href: 'home' },
    { label: 'About', href: 'about' },
    { label: 'Events', href: 'events' },
    { label: 'Themes', href: 'themes' },
    { label: 'Organised by', href: 'clubs' },
    { label: 'Contact', href: 'contact' },
  ]

  return (
    <div className="min-h-screen flex flex-col text-white bg-black">
      {/* PillNav */}
      <PillNav
        logo="/logo.svg"
        logoAlt="Convergence 2K26"
        items={navItems}
        activeHref={page}
        baseColor="#1f1f1f"
        pillColor="#2a2a2a"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#a0a0a0"
        onNavigate={handleNavigate}
        initialLoadAnimation={true}
      />

      {/* main scrollable area with snap */}
      <main className="flex-1 overflow-y-auto snap-y snap-mandatory h-screen bg-black">
        <section
          id="home"
          ref={(el) => { sectionsRef.current.home = el }}
          className="min-h-screen snap-start"
        >
          <Home />
        </section>

        <section
          id="about"
          ref={(el) => { sectionsRef.current.about = el }}
          className="min-h-screen snap-start"
        >
          <About />
        </section>

        <section
          id="events"
          ref={(el) => { sectionsRef.current.events = el }}
          className="min-h-screen snap-start"
        >
          <Events />
        </section>

        <section
          id="themes"
          ref={(el) => { sectionsRef.current.themes = el }}
          className="min-h-screen snap-start"
        >
          <Themes />
        </section>

        <section
          id="clubs"
          ref={(el) => { sectionsRef.current.clubs = el }}
          className="min-h-screen snap-start"
        >
          <Clubs />
        </section>

        <section
          id="contact"
          ref={(el) => { sectionsRef.current.contact = el }}
          className="min-h-screen snap-start"
        >
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App

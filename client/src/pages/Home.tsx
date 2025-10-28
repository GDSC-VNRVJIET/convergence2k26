import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import Shuffle from '../components/Shuffle'

interface HomeProps {
  showIntroAnimation?: boolean
}

export default function Home({ showIntroAnimation = false }: HomeProps) {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)
  const isMobile = windowWidth < 768

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleLearnMore = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative w-full text-white overflow-hidden min-h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/home.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-20 sm:py-24 z-20">
        <div className="mb-6 sm:mb-8">
          {showIntroAnimation ? (
            // "Flash and Form" Animation - Light converts to text
            <motion.h1
              initial={{ 
                filter: isMobile ? 'blur(0px)' : 'blur(40px)',
                scaleY: isMobile ? 1 : 0.1,
                opacity: isMobile ? 0 : 0.8,
              }}
              animate={{ 
                filter: 'blur(0px)',
                scaleY: 1,
                opacity: 1,
              }}
              transition={{ 
                duration: isMobile ? 0.5 : 1,
                ease: [0.22, 1, 0.36, 1],
                delay: isMobile ? 0 : 0.3
              }}
              className="text-[40px] sm:text-[70px] md:text-[110px] lg:text-[140px] font-black tracking-tight leading-none text-white text-center drop-shadow-2xl"
              style={{
                fontFamily: "'Audiowide', system-ui, sans-serif",
                letterSpacing: '0.05em',
                textShadow: isMobile ? '0 4px 12px rgba(0, 0, 0, 0.5)' : '0 0 30px rgba(255, 255, 255, 0.5), 0 4px 12px rgba(0, 0, 0, 0.5)',
              }}
            >
              CONVERGENCE 2K25R
            </motion.h1>
          ) : (
            // Regular Shuffle animation for subsequent views
            <Shuffle
              key={windowWidth}
              text="CONVERGENCE 2K25R"
              tag="h1"
              className="text-[40px] sm:text-[70px] md:text-[110px] lg:text-[140px] font-black tracking-tight leading-none text-white text-center drop-shadow-2xl"
              style={{
                fontFamily: "'Audiowide', system-ui, sans-serif",
                letterSpacing: '0.05em',
                textShadow: '0 4px 12px rgba(0, 0, 0, 0.5)'
              }}
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={true}
              respectReducedMotion={true}
            />
          )}
        </div>
        <motion.h2
          initial={showIntroAnimation ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            delay: showIntroAnimation ? (isMobile ? 0.3 : 1.0) : 0,
            ease: 'easeOut'
          }}
          className="text-base sm:text-xl md:text-2xl text-gray-100 mb-8 sm:mb-10 max-w-3xl text-center font-normal px-2 drop-shadow-lg"
          style={{
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)'
          }}
        >
          The ultimate celebration of tech, creativity and collaboration — workshops, talks and competitions.
        </motion.h2>

        <motion.div
          initial={showIntroAnimation ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            delay: showIntroAnimation ? (isMobile ? 0.5 : 1.3) : 0,
            ease: 'easeOut'
          }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto px-4 sm:px-0"
        >
          <button 
            onClick={() => window.open('https://axisbpayments.razorpay.com/pl_Pq0BHPyKE4qna8/view', '_blank')}
            className="px-6 sm:px-8 py-4 sm:py-4 rounded-lg text-white font-bold bg-white/30 backdrop-blur-md border-2 border-white/50 hover:bg-white/40 hover:border-white/70 transition-all duration-200 text-base sm:text-base shadow-xl"
            style={{
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'
            }}
          >
            Register Now
          </button>
          <button 
            onClick={handleLearnMore}
            className="px-6 sm:px-8 py-4 sm:py-4 rounded-lg text-white font-semibold bg-white/10 backdrop-blur-md border-2 border-white/40 hover:bg-white/20 hover:border-white/60 transition-all duration-200 text-base sm:text-base shadow-lg"
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  )
}
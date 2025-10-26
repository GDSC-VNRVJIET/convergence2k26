// import VantaGlobe from '../components/VantaGlobe'
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

  return (
    <section className="relative w-full text-white bg-black">
      {/* Fullscreen Vanta Globe background - Temporarily disabled */}
      {/* <div className="fixed inset-0 -z-10">
        <VantaGlobe color={0x29b6f6} backgroundColor={0x000000} />
      </div> */}

      <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-20 sm:py-24">
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
                ease: [0.22, 1, 0.36, 1], // Custom easing for smooth deblur
                delay: isMobile ? 0 : 0.3 // No delay on mobile
              }}
              className="text-[40px] sm:text-[70px] md:text-[110px] lg:text-[140px] font-black tracking-tight leading-none text-white text-center"
              style={{
                fontFamily: "'Audiowide', system-ui, sans-serif",
                letterSpacing: '0.05em',
                textShadow: isMobile ? 'none' : '0 0 30px rgba(255, 255, 255, 0.5)', // No glow on mobile
              }}
            >
              CONVERGENCE 2K26
            </motion.h1>
          ) : (
            // Regular Shuffle animation for subsequent views
            <Shuffle
              key={windowWidth}
              text="CONVERGENCE 2K26"
              tag="h1"
              className="text-[40px] sm:text-[70px] md:text-[110px] lg:text-[140px] font-black tracking-tight leading-none text-white text-center"
              style={{
                fontFamily: "'Audiowide', system-ui, sans-serif",
                letterSpacing: '0.05em'
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
            delay: showIntroAnimation ? (isMobile ? 0.3 : 1.0) : 0, // Faster on mobile
            ease: 'easeOut'
          }}
          className="text-base sm:text-xl md:text-2xl text-gray-300/90 mb-8 sm:mb-10 max-w-3xl text-center font-normal px-2"
        >
          The ultimate celebration of tech, creativity and collaboration — workshops, talks and competitions.
        </motion.h2>

        <motion.div
          initial={showIntroAnimation ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            delay: showIntroAnimation ? (isMobile ? 0.5 : 1.3) : 0, // Faster on mobile
            ease: 'easeOut'
          }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto px-4 sm:px-0"
        >
          <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white font-semibold bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 text-sm sm:text-base">
            Register Now
          </button>
          <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white font-semibold border border-white/20 hover:border-white/40 transition-all duration-200 text-sm sm:text-base">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  )
}

import { Globe } from "@/components/Globe"
import { StarsBackground } from "@/components/StarsBackground"
import { useEffect, useState } from "react"

const TypingText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <span className="text-white font-['Audiowide'] font-semibold">
      {displayText}
      {currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  )
}

export default function About() {
  return (
    <section className="relative w-full min-h-screen">
      <StarsBackground className="absolute inset-0 flex h-screen w-full items-center">
        {/* Left side - Text content */}
        <div className="relative z-10 w-full lg:w-1/2 px-4 sm:px-6 md:px-12 lg:px-20 py-20 lg:py-0">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
              About
            </h2>
            
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                The Annual National Level Technical Symposium under the banner <TypingText text="CONVERGENCE" /> has been instrumental in shifting the paradigm of usual course work. Since its inception in 1999, it has evolved as an ultimate platform for techno maniacs.
              </p>
              
              <p>
                The 2012 edition has taken up an untraded path on its way to be stupendous, throwing light on new ideas. It brings in a series of events and activities spread over 2 days involving the students of myriad disciplines and hence broadening the horizons.
              </p>
              
              <p>
                The <span className="text-white font-bold">28-year legacy</span> of convergence would start on <span className="text-white font-semibold">3rd of November, 2025</span> and continues for 2 days, including series of events, workshops, technical presentations, fun events, talks, hackathons, and many more!
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Globe */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] flex items-center justify-center opacity-20 lg:opacity-100">
          <Globe
            dark
            baseColor="#777A80"
            glowColor="#50505A"
            markerColor="#22d3ee"
            opacity={0.85}
            brightness={1}
            offsetX={0}
            offsetY={0}
            scale={1}
          />
        </div>
      </StarsBackground>
    </section>
  )
}

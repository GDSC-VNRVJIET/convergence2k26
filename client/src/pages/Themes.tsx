import CircularGallery from '../components/CircularGallery'
import { StarsBackground } from '@/components/StarsBackground'
import { useEffect, useState } from 'react'
import robotics from '../assets/robotics.png'
import healthcaretech from '../assets/healthcaretech.png'
import mobility from '../assets/mobility.png'
import greentech from '../assets/greentech.png'
import enterprise from '../assets/enterprise.png'
import design from '../assets/design.png'
import smartliving from '../assets/smartliving.png'
import techforsocialgood from '../assets/techforsocialgood.png'

const TypingText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 80)
      return () => clearTimeout(timeout)
    } else {
      // Reset after a pause to loop the animation
      const resetTimeout = setTimeout(() => {
        setDisplayText("")
        setCurrentIndex(0)
      }, 2000)
      return () => clearTimeout(resetTimeout)
    }
  }, [currentIndex, text])

  return (
    <span className="inline-block font-['Audiowide']">
      {displayText}
      {currentIndex < text.length && (
        <span className="inline-block animate-pulse ml-0.5">|</span>
      )}
    </span>
  )
}

export default function Themes() {
  const themes = [
    { image: robotics, text: 'Robotics & Automation' },
    { image: healthcaretech, text: 'HealthcareTech & Wellness' },
    { image: mobility, text: 'Mobility & Logistics' },
    { image: greentech, text: 'Green Technologies' },
    { image: enterprise, text: 'Enterprise & Fintech' },
    { image: design, text: 'Design & Manufacturing' },
    { image: smartliving, text: 'Smart Living' },
    { image: techforsocialgood, text: 'Tech for Social Good' },
  ]

  return (
    <StarsBackground className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Themes in the <TypingText text="Convergence" />
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl font-normal mb-8">
            Each theme is a bouquet of events
          </p>
          <p className="text-cyan-300/80 text-sm md:text-base font-light">
            Scroll or drag to explore themes →
          </p>
        </div>

        <div style={{ height: '600px', position: 'relative' }} className="w-full">
          <CircularGallery 
            items={themes}
            bend={2.5} 
            textColor="#22d3ee" 
            borderRadius={0.08} 
            scrollEase={0.08}
            scrollSpeed={1.5}
            font="bold 28px 'Rajdhani', sans-serif"
          />
        </div>
      </div>
    </StarsBackground>
  )
}

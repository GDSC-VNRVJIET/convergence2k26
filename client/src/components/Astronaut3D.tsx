import Spline from '@splinetool/react-spline'
import { useState, useEffect, useCallback } from 'react'

export default function Astronaut3D() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)
  const [isLoaded, setIsLoaded] = useState(false)
  
  const isMobile = windowWidth < 768
  const isTablet = windowWidth >= 768 && windowWidth < 1024

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  const handleLoad = useCallback(() => {
    setIsLoaded(true)
  }, [])

  // Dynamic class names for responsive scaling
  const getResponsiveClasses = () => {
    const baseClasses = "w-full h-full transition-all duration-500 ease-out origin-center"
    const opacityClass = isLoaded ? "opacity-100" : "opacity-0"
    
    if (isMobile) {
      // Scale up to fill mobile viewport and center properly
      return `${baseClasses} ${opacityClass} scale-[1.2] sm:scale-[1.1] translate-y-0`
    } else if (isTablet) {
      return `${baseClasses} ${opacityClass} scale-[0.9] md:scale-[0.95] translate-y-[3%]`
    } else {
      return `${baseClasses} ${opacityClass} scale-100 lg:scale-105 xl:scale-110`
    }
  }

  return (
    <div className={getResponsiveClasses()}>
      <Spline 
        scene="https://prod.spline.design/tsSRLYH7Rpzf2hrF/scene.splinecode"
        onLoad={handleLoad}
        style={{
          width: isMobile ? '120%' : '100%',
          height: isMobile ? '120%' : '100%',
          background: 'transparent',
          pointerEvents: isMobile ? 'none' : 'auto',
          position: 'absolute',
          top: isMobile ? '-10%' : '0',
          left: isMobile ? '-10%' : '0',
        }}
      />
      
      {/* Loading indicator for better UX */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  )
}
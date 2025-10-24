import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

interface VantaEffect {
  destroy: () => void
}

interface VantaGlobeProps {
  color?: number
  backgroundColor?: number
}

export default function VantaGlobe({ color = 0x29b6f6, backgroundColor = 0x000000 }: VantaGlobeProps) {
  const vantaRef = useRef<HTMLDivElement>(null)
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null)

  useEffect(() => {
    if (!vantaEffect) {
      // Dynamically load Vanta Globe script
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js'
      script.async = true
      script.onload = () => {
        if (window.VANTA && vantaRef.current) {
          setVantaEffect(
            window.VANTA.GLOBE({
              el: vantaRef.current,
              THREE,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color,
              backgroundColor
            })
          )
        }
      }
      document.body.appendChild(script)
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect, color, backgroundColor])

  return <div ref={vantaRef} className="w-full h-full absolute inset-0" />
}

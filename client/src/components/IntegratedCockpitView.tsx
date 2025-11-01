import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, useGLTF, Center, Html } from '@react-three/drei'
import { Suspense, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { StarsBackground } from './StarsBackground'
import EventControlPanel from './EventControlPanel'
import * as THREE from 'three'

// 3D Desk Model Component
function HoloDeskModel({ targetReached }: { targetReached: boolean }) {
  const { scene } = useGLTF('/holo_desk.glb')
  const deskRef = useRef<any>(null)
  
  useFrame(() => {
    if (deskRef.current) {
      // Desk movement from commented code: simple forward and down
      const baseY = -1
      const targetY = targetReached ? -1.5 : baseY // Move down when zoomed
      const currentY = targetY
      
      deskRef.current.position.y = currentY
      
      // Move entire desk setup forward when clicked (from commented code)
      const baseZ = 0
      const targetZ = targetReached ? 2 : baseZ // Move forward when zoomed
      deskRef.current.position.z = baseZ + (targetZ - baseZ) * (targetReached ? 1 : 0)
    }
  })
  
  return (
    <Center>
      <primitive 
        ref={deskRef}
        object={scene.clone()} 
        scale={[0.8, 0.8, 0.8]} 
        position={[0, -1, 0]}
        rotation={[0, Math.PI * 0.1, 0]}
      />
    </Center>
  )
}

// Complete Cockpit Control Station - positioned above desk
function CockpitControlStation({ 
  eventCategories
}: { 
  eventCategories: any[]
}) {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame(() => {
    if (groupRef.current) {
      // Fixed position: always above the desk for consistent access
      const fixedPosition = new THREE.Vector3(0.5, 1.3, 3)
      
      // Set fixed position (no animation)
      groupRef.current.position.copy(fixedPosition)
      
      // Add subtle floating animation
    //   groupRef.current.position.y = fixedPosition.y + Math.sin(state.clock.elapsedTime * 0.5) * 0.02
    }
  })

  // Fixed scale - always accessible size
  const currentScale = 0.23

  return (
    <group ref={groupRef}>
      <Html
        transform
        occlude={false}
        position={[0, 0, 0]}
        rotation={[0, Math.PI, 0]}
        scale={[currentScale, currentScale, currentScale]}
        distanceFactor={10}
        calculatePosition={() => [0, 0, 0]}
        style={{
          transition: 'all 0.1s ease-out',
          width: '1200px',
          transformStyle: 'preserve-3d',
          pointerEvents: 'auto',
          opacity: 1,
          zIndex: 1000,
          userSelect: 'auto',
          touchAction: 'auto',
          position: 'relative'
        }}
      >
        <div 
          data-control-panel="true"
          style={{ 
            pointerEvents: 'auto',
            width: '100%',
            height: '100%',
            cursor: 'auto'
          }}
        >
          <EventControlPanel
            eventCategories={eventCategories}
          />
        </div>
      </Html>
    </group>
  )
}

// Camera Animation Component - using commented code approach
function CameraAnimator({ isZooming, targetReached, onAnimationComplete }: {
  isZooming: boolean
  targetReached: boolean
  onAnimationComplete: () => void
}) {
  const { camera } = useThree()
  const targetPos = useRef(new THREE.Vector3(0.32, -0.06, -5.19))
  const targetRotation = useRef(new THREE.Euler(3.13, 0.06, -3.14))
  const startPos = useRef(new THREE.Vector3())
  const startRotation = useRef(new THREE.Euler())
  const animationProgress = useRef(0)

  useFrame((_, delta) => {
    if (isZooming && !targetReached) {
      if (animationProgress.current === 0) {
        // Store starting position and rotation
        startPos.current.copy(camera.position)
        startRotation.current.copy(camera.rotation)
      }
      
      // Animate to target position over 2 seconds
      animationProgress.current += delta / 2
      const progress = Math.min(animationProgress.current, 1)
      
      // Smooth easing function
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      
      // Interpolate position
      camera.position.lerpVectors(startPos.current, targetPos.current, easeProgress)
      
      // Interpolate rotation
      const startQuat = new THREE.Quaternion().setFromEuler(startRotation.current)
      const targetQuat = new THREE.Quaternion().setFromEuler(targetRotation.current)
      camera.quaternion.slerpQuaternions(startQuat, targetQuat, easeProgress)
      
      // Update FOV to 60 (only for PerspectiveCamera)
      if ('fov' in camera) {
        camera.fov = 120 + (60 - 120) * easeProgress
        camera.updateProjectionMatrix()
      }
      
      // Animation complete
      if (progress >= 1) {
        animationProgress.current = 0
        onAnimationComplete()
      }
    }
  })

  return null
}

function LoadingFallback() {
  return (
    <mesh position={[0, -1, 0]}>
      <boxGeometry args={[3, 0.1, 2]} />
      <meshStandardMaterial color="#1a1a1a" wireframe />
    </mesh>
  )
}

// Clean lighting setup - from commented code
function StudioLighting() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={0.6} 
        castShadow
      />
      <pointLight position={[-3, 3, 2]} intensity={0.2} color="#4f9eff" />
      <spotLight
        position={[0, 4, 0]}
        angle={0.4}
        intensity={0.3}
        penumbra={0.5}
        color="#ffffff"
      />
    </>
  )
}

interface IntegratedCockpitViewProps {
  eventCategories: any[]
}

export default function IntegratedCockpitView({ 
  eventCategories
}: IntegratedCockpitViewProps) {
  const [isZooming, setIsZooming] = useState(false)
  const [targetReached, setTargetReached] = useState(false)
  const [clicked, setClicked] = useState(false)

  const handleCanvasClick = (e: React.MouseEvent) => {
    // Check if click is on control panel elements
    const target = e.target as HTMLElement;
    const isControlPanelClick = target.closest('[data-control-panel]') !== null;
    
    if (!clicked && !isZooming && !targetReached && !isControlPanelClick) {
      setClicked(true)
      setIsZooming(true)
    }
  }

  const handleAnimationComplete = () => {
    setIsZooming(false)
    setTargetReached(true)
  }
  
  return (
    <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden">
      {/* Stars Background */}
      <StarsBackground 
        className="absolute inset-0"
        starColor="#00ffff"
        speed={60}
        factor={0.02}
      >
        {/* 3D Scene */}
        <div 
          className={`relative w-full h-full ${!targetReached ? 'cursor-pointer' : ''}`}
          onClick={!targetReached ? handleCanvasClick : undefined}
        >
          <Canvas 
            camera={{ 
              position: [-7.58, 1.26, -6.4], 
              fov: 120,
              near: 0.1,
              far: 100
            }}
            shadows
            gl={{ antialias: true, alpha: true }}
            style={{ background: 'transparent' }}
          >
            <Suspense fallback={<LoadingFallback />}>
              <StudioLighting />
              
              {/* Desk Model */}
              <HoloDeskModel targetReached={targetReached} />
              
              {/* Control Panel (switches + monitor) positioned above desk */}
              <CockpitControlStation
                eventCategories={eventCategories}
              />
              
              {/* Camera Animation */}
              <CameraAnimator 
                isZooming={isZooming}
                targetReached={targetReached}
                onAnimationComplete={handleAnimationComplete}
              />
              
              <Environment preset="night" />
            </Suspense>
            
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              enableRotate={false}
              autoRotate={false}
              target={[0, -0.5, 0]}
            />
          </Canvas>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        
        {/* Click instruction - from commented code style */}
        {!targetReached && (
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-cyan-400 text-lg font-semibold animate-pulse pointer-events-none">
            Click on the desk to zoom in
          </div>
        )}
        
        
      </StarsBackground>
      
      <style>{`
        .glow-text {
          text-shadow: 0 0 8px rgba(0, 255, 0, 0.6);
        }
      `}</style>
    </div>
  )
}

import React, { useState, useEffect } from 'react';

interface SpaceGateVaultProps {
  shouldStartAnimation?: boolean;
  onAnimationComplete?: () => void;
}

const SpaceGateVault = ({ shouldStartAnimation = false, onAnimationComplete }: SpaceGateVaultProps) => {
  const [gateProgress, setGateProgress] = useState(0);
  const [wheelRotation, setWheelRotation] = useState(0);


  // Start gate opening animation when shouldStartAnimation becomes true
  useEffect(() => {
    if (shouldStartAnimation) {
      const startTimer = setTimeout(() => {
        const interval = setInterval(() => {
          setGateProgress(prev => {
            const next = prev + 1;
            if (next >= 100) {
              clearInterval(interval);
              // Notify parent that animation is complete after a brief delay
              setTimeout(() => {
                if (onAnimationComplete) {
                  onAnimationComplete();
                }
              }, 500);
            }
            return Math.min(next, 100);
          });
        }, 50); // 50ms interval for less intensive animation

        return () => clearInterval(interval);
      }, 500); // Start after 500ms

      return () => clearTimeout(startTimer);
    }
  }, [shouldStartAnimation, onAnimationComplete]);

  // Rotate wheel while gate is opening
  useEffect(() => {
    if (gateProgress > 0 && gateProgress < 100) {
      const wheelInterval = setInterval(() => {
        setWheelRotation(prev => prev + 4); // Increase this number for faster rotation
      }, 100); // Reduced frequency for better performance
      return () => clearInterval(wheelInterval);
    }
  }, [gateProgress]);

  return (
    <div
      className="absolute inset-0 z-50 pointer-events-none"
      style={{
        opacity: gateProgress >= 100 ? 0 : 1,
        transition: gateProgress >= 100 ? 'opacity 0.5s ease-out' : 'none'
      }}
    >
      {/* Left Gate Door */}
      <div
        className="absolute top-0 left-0 bottom-0"
        style={{
          width: '50%',
          transform: `translateX(-${gateProgress}%)`,
          transition: 'transform 0.1s ease-out',
          background: 'linear-gradient(to right, #1a1a1a, #2d2d2d, #1a1a1a)',
          boxShadow: gateProgress > 0 ? 'inset -50px 0 100px rgba(0, 0, 0, 0.8), 10px 0 60px rgba(255, 255, 255, 0.1)' : 'none'
        }}
      >
        {/* Left door edge highlight */}
        <div
          className="absolute top-0 bottom-0 right-0 w-1"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
            opacity: gateProgress > 0 ? 1 : 0
          }}
        />

        {/* Left door handles - responsive */}
        <div className="absolute right-4 md:right-16 top-1/2 transform -translate-y-1/2">
          {/* Main handle bar */}
          <div
            className="w-8 md:w-12 h-32 md:h-64 rounded-lg relative"
            style={{
              background: 'linear-gradient(to right, #333, #555, #333)',
              boxShadow: '-5px 0 15px rgba(0, 0, 0, 0.5), inset 2px 0 5px rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* Handle grip sections */}
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 w-10 md:w-14 h-6 md:h-10 rounded"
                style={{
                  top: `${15 + i * 25}%`,
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(to right, #2a2a2a, #444, #2a2a2a)',
                  boxShadow: 'inset 0 2px 5px rgba(0, 0, 0, 0.5), 0 2px 5px rgba(255, 255, 255, 0.1)'
                }}
              />
            ))}
          </div>

          {/* Handle mount plates */}
          <div
            className="absolute -top-2 md:-top-4 left-1/2 transform -translate-x-1/2 w-12 md:w-16 h-4 md:h-8 rounded"
            style={{
              background: 'linear-gradient(135deg, #3a3a3a, #4a4a4a)',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.6)'
            }}
          />
          <div
            className="absolute -bottom-2 md:-bottom-4 left-1/2 transform -translate-x-1/2 w-12 md:w-16 h-4 md:h-8 rounded"
            style={{
              background: 'linear-gradient(135deg, #3a3a3a, #4a4a4a)',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.6)'
            }}
          />
        </div>
      </div>

      {/* Right Gate Door with ship wheel */}
      <div
        className="absolute top-0 right-0 bottom-0"
        style={{
          width: '50%',
          transform: `translateX(${gateProgress}%)`,
          transition: 'transform 0.1s ease-out',
          background: 'linear-gradient(to left, #1a1a1a, #2d2d2d, #1a1a1a)',
          boxShadow: gateProgress > 0 ? 'inset 50px 0 100px rgba(0, 0, 0, 0.8), -10px 0 60px rgba(255, 255, 255, 0.1)' : 'none'
        }}
      >
        {/* Right door edge highlight */}
        <div
          className="absolute top-0 bottom-0 left-0 w-1"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
            opacity: gateProgress > 0 ? 1 : 0
          }}
        />

        {/* Right door handles - responsive */}
        <div className="absolute left-4 md:left-16 top-1/2 transform -translate-y-1/2">
          {/* Main handle bar */}
          <div
            className="w-8 md:w-12 h-32 md:h-64 rounded-lg relative"
            style={{
              background: 'linear-gradient(to left, #333, #555, #333)',
              boxShadow: '5px 0 15px rgba(0, 0, 0, 0.5), inset -2px 0 5px rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* Handle grip sections */}
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 w-10 md:w-14 h-6 md:h-10 rounded"
                style={{
                  top: `${15 + i * 25}%`,
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(to left, #2a2a2a, #444, #2a2a2a)',
                  boxShadow: 'inset 0 2px 5px rgba(0, 0, 0, 0.5), 0 2px 5px rgba(255, 255, 255, 0.1)'
                }}
              />
            ))}
          </div>

          {/* Handle mount plates */}
          <div
            className="absolute -top-2 md:-top-4 left-1/2 transform -translate-x-1/2 w-12 md:w-16 h-4 md:h-8 rounded"
            style={{
              background: 'linear-gradient(135deg, #3a3a3a, #4a4a4a)',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.6)'
            }}
          />
          <div
            className="absolute -bottom-2 md:-bottom-4 left-1/2 transform -translate-x-1/2 w-12 md:w-16 h-4 md:h-8 rounded"
            style={{
              background: 'linear-gradient(135deg, #3a3a3a, #4a4a4a)',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.6)'
            }}
          />
        </div>

        {/* Ship Wheel - responsive, aligned with right door handle */}
        <div
          className="absolute top-1/2 left-4 md:left-16"
          style={{
            transform: `translateY(-50%) rotate(${wheelRotation}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96">
            {/* Outer wheel rim */}
            <div
              className="absolute inset-0 rounded-full border-4 md:border-8"
              style={{
                borderColor: '#888',
                background: 'linear-gradient(135deg, #2a2a2a, #444)',
                boxShadow: '0 0 30px rgba(0, 0, 0, 0.8), inset 0 0 30px rgba(255, 255, 255, 0.1)'
              }}
            />

            {/* Inner wheel rim */}
            <div
              className="absolute top-1/2 left-1/2 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full border-4 md:border-8"
              style={{
                transform: 'translate(-50%, -50%)',
                borderColor: '#888',
                background: 'linear-gradient(135deg, #2a2a2a, #444)',
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.8), inset 0 0 20px rgba(255, 255, 255, 0.1)'
              }}
            />

            {/* Center hub */}
            <div
              className="absolute top-1/2 left-1/2 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 rounded-full"
              style={{
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, #555, #333)',
                boxShadow: '0 0 40px rgba(0, 0, 0, 0.9), inset 0 0 20px rgba(255, 255, 255, 0.2)'
              }}
            >


            </div>

            {/* Wheel spokes */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2"
                style={{
                  width: '2px',
                  height: '48%',
                  background: 'linear-gradient(to bottom, #666, #444)',
                  transform: `translate(-50%, -100%) rotate(${i * 45}deg)`,
                  transformOrigin: '50% 100%',
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)'
                }}
              >
                {/* Spoke end knob */}
                <div
                  className="absolute top-0 left-1/2 w-4 h-4 sm:w-6 sm:h-6 md:w-10 md:h-10 rounded-full"
                  style={{
                    transform: 'translate(-50%, -50%)',
                    background: 'radial-gradient(circle, #666, #444)',
                    boxShadow: '0 0 15px rgba(0, 0, 0, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.2)'
                  }}
                />
              </div>
            ))}

            {/* Handle grips between spokes - hidden on mobile for cleaner look */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`grip-${i}`}
                className="absolute top-1/2 left-1/2 hidden sm:block"
                style={{
                  transform: `translate(-50%, -50%) rotate(${i * 45 + 22.5}deg) translateY(-${i % 2 === 0 ? '80px' : '100px'})`,
                  transformOrigin: '50% 50%'
                }}
              >
                <div
                  className="w-6 h-10 sm:w-8 sm:h-12 md:w-12 md:h-20 rounded-lg"
                  style={{
                    background: 'linear-gradient(to bottom, #555, #333)',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.8), inset 0 2px 5px rgba(255, 255, 255, 0.1)'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SpaceGateVault;
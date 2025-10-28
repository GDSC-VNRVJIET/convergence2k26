import React, { useState, type ReactNode} from 'react';

interface VintageCRTMonitorProps {
  children: ReactNode;
  isPoweredOn?: boolean;
  className?: string;
}

const VintageCRTMonitor: React.FC<VintageCRTMonitorProps> = ({ children, isPoweredOn = true, className = '' }) => {
  return (
    <div className={`relative w-full max-w-full ${className}`}>
      {/* Monitor Body */}
      <div 
        className="relative rounded-lg mx-auto overflow-hidden"
        style={{
          width: 'min(800px, 100%)',
          height: 'min(700px, 80vh)',
          minHeight: '300px',
          background: 'linear-gradient(145deg, rgb(25, 25, 25), rgb(15, 15, 15))',
          boxShadow: '0 20px 60px rgba(0,0,0,0.8), inset -6px -6px 15px rgba(0,0,0,0.6), inset 6px 6px 15px rgba(255,255,255,0.05)',
          transform: 'perspective(1200px) rotateY(0deg)',
          padding: 'clamp(20px, 6%, 50px) clamp(20px, 7%, 55px) clamp(40px, 12%, 100px) clamp(20px, 7%, 55px)'
        }}
      >
        {/* Shiny ray effect for monitor body only - positioned behind screen */}
        <div
          className="absolute inset-0 opacity-0 pointer-events-none"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
            animation: 'monitorShinyRay 6s ease-in-out infinite',
            transform: 'translateX(-100%)',
            zIndex: 1,
            clipPath: 'polygon(0 0, 100% 0, 100% 15%, 85% 85%, 15% 85%, 0 15%)'
          }}
        ></div>
        {/* Top ventilation grille */}
        <div 
          className="absolute top-2 md:top-3 left-1/2 -translate-x-1/2 flex gap-1"
          style={{ width: 'clamp(100px, 25%, 200px)' }}
        >
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="rounded-full"
              style={{ 
                background: 'rgba(5, 5, 5, 0.8)',
                width: 'clamp(2px, 1vw, 4px)', 
                height: 'clamp(8px, 2vh, 12px)' 
              }}
            ></div>
          ))}
        </div>

        {/* Brand label */}
        <div 
          className="absolute top-2 md:top-3 right-2 md:right-12 px-2 md:px-3 py-1 rounded text-xs font-bold"
          style={{
            background: 'linear-gradient(145deg, rgb(10, 10, 10), rgb(5, 5, 5))',
            color: 'rgb(255, 255, 255)',
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.8)',
            letterSpacing: '1px'
          }}
        >
          ENIAC
        </div>

        {/* CRT Screen Bezel */}
        <div 
          className="relative w-full h-full rounded-sm"
          style={{
            background: 'linear-gradient(145deg, rgb(20, 20, 20), rgb(10, 10, 10))',
            boxShadow: 'inset 0 4px 15px rgba(0,0,0,0.9), 0 4px 10px rgba(0,0,0,0.6)',
            padding: 'clamp(8px, 2%, 15px)',
            zIndex: 2
          }}
        >
          {/* CRT Display - Outward Curved */}
          <div 
            className="relative w-full h-full overflow-hidden"
            style={{
              background: isPoweredOn 
                ? 'radial-gradient(ellipse at center, rgb(0, 0, 0), rgb(5, 5, 5))'
                : 'radial-gradient(ellipse at center, rgb(30, 30, 30), rgb(15, 15, 15))',
              boxShadow: isPoweredOn
                ? 'inset 0 0 50px rgba(255, 255, 255, 0.1), inset 0 4px 20px rgba(0,0,0,0.9), 0 0 30px rgba(255, 255, 255, 0.05)'
                : 'inset 0 4px 20px rgba(0,0,0,0.9)',
              borderRadius: 'clamp(4px, 1vw, 8px)',
              // Outward curve effect using border-radius and transform
              transform: 'perspective(800px) translateZ(20px)',
              transformStyle: 'preserve-3d',
              border: '2px solid rgba(0,0,0,0.5)'
            }}
          >
            {/* Screen glass reflection effect */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.05) 100%)',
                borderRadius: '8px'
              }}
            ></div>

            {/* Curved glass highlight */}
            <div 
              className="absolute top-0 left-0 right-0 h-1/3 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at top, rgba(255,255,255,0.15), transparent)',
                borderRadius: '8px 8px 0 0'
              }}
            ></div>

            {/* Content area with scanline effect */}
            <div 
              className="relative w-full h-full"
              style={{
                opacity: isPoweredOn ? 1 : 0.3,
                transition: 'opacity 0.5s'
              }}
            >
              {/* Scanlines overlay */}
              {isPoweredOn && (
                <div 
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px)',
                    backgroundSize: '100% 2px',
                    animation: 'scanline 8s linear infinite'
                  }}
                ></div>
              )}

              {/* CRT glow effect */}
              {isPoweredOn && (
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 0 100px rgba(255, 255, 255, 0.03)',
                    animation: 'flicker 3s infinite'
                  }}
                ></div>
              )}

              {/* User content area */}
              <div className="relative z-20 w-full h-full p-2 sm:p-4 md:p-6 overflow-auto crt-scrollbar text-sm sm:text-base">
                {children}
              </div>
            </div>
          </div>
        </div>

        {/* Power indicator light */}
        <div 
          className="absolute bottom-6 right-12 w-3 h-3 rounded-full"
          style={{
            background: isPoweredOn 
              ? 'radial-gradient(circle, rgb(255, 255, 255), rgb(200, 200, 200))'
              : 'radial-gradient(circle, rgb(100, 50, 50), rgb(50, 20, 20))',
            boxShadow: isPoweredOn 
              ? '0 0 10px rgb(255, 255, 255), 0 0 20px rgba(255, 255, 255, 0.5)'
              : 'inset 0 1px 3px rgba(0,0,0,0.8)',
            transition: 'all 0.5s'
          }}
        ></div>

        {/* Power label */}
        <div 
          className="absolute bottom-5 right-6 text-xs font-mono"
          style={{ color: 'rgb(100, 100, 110)' }}
        >
          PWR
        </div>

        
        {/* Bottom stand attachment */}
        <div 
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-64 h-10 rounded-b-lg"
          style={{
            background: 'linear-gradient(180deg, rgb(20, 20, 20), rgb(10, 10, 10))',
            boxShadow: '0 4px 10px rgba(0,0,0,0.7), inset 0 -2px 5px rgba(0,0,0,0.8)'
          }}
        ></div>
      </div>

     

      {/* CSS Animation styles */}
      <style>{`
        @keyframes scanline {
          0% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.97; }
        }

        @keyframes monitorShinyRay {
          0% { 
            transform: translateX(-100%) skewX(-25deg);
            opacity: 0;
          }
          50% { 
            transform: translateX(100%) skewX(-25deg);
            opacity: 1;
          }
          100% { 
            transform: translateX(200%) skewX(-25deg);
            opacity: 0;
          }
        }

        /* Custom CRT-style scrollbar */
        .crt-scrollbar::-webkit-scrollbar {
          width: 4px;
          background: rgba(0, 0, 0, 0.7);
        }
        
        .crt-scrollbar::-webkit-scrollbar-track {
          background: rgba(20, 20, 20, 0.8);
          border-radius: 2px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .crt-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.6), rgba(200, 200, 200, 0.4));
          border-radius: 2px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 0 3px rgba(255, 255, 255, 0.2);
        }
        
        .crt-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(200, 200, 200, 0.6));
          box-shadow: 0 0 4px rgba(255, 255, 255, 0.4);
        }

        .crt-scrollbar::-webkit-scrollbar-corner {
          background: rgba(20, 20, 20, 0.8);
        }

        /* Firefox scrollbar styling */
        .crt-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.6) rgba(20, 20, 20, 0.8);
        }
      `}</style>
    </div>
  );
};

// Demo Component
const CRTDemo: React.FC = () => {
  const [isPoweredOn, setIsPoweredOn] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center p-8 gap-8">
      <VintageCRTMonitor isPoweredOn={isPoweredOn}>
        {/* Your custom content goes here */}
        <div className="flex flex-col gap-4 text-white font-mono">
          <div className="text-2xl font-bold mb-4" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
            {'> SYSTEM READY_'}
          </div>
          
          <div className="text-sm opacity-80">
            <p>{'[OK] CORE SYSTEMS ONLINE'}</p>
            <p>{'[OK] MEMORY CHECK PASSED'}</p>
            <p>{'[OK] DISPLAY INITIALIZED'}</p>
          </div>

          <div className="mt-6 p-4 border border-gray-400 border-opacity-30 rounded">
            <p className="text-xs mb-2">{'MISSION CONTROL STATUS:'}</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>TEMP: 72°F</div>
              <div>POWER: 98%</div>
              <div>CPU: 45%</div>
              <div>MEM: 2.1/4.0 GB</div>
            </div>
          </div>

          <div className="mt-4 text-xs opacity-60">
            {'> Replace this content with your own information_'}
          </div>
        </div>
      </VintageCRTMonitor>

      {/* Power Toggle */}
      <button
        onClick={() => setIsPoweredOn(!isPoweredOn)}
        className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-mono text-sm transition-colors shadow-lg"
      >
        {isPoweredOn ? 'Power OFF' : 'Power ON'}
      </button>

      {/* Usage Instructions */}
      <div className="max-w-3xl p-6 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700">
        <h3 className="text-white font-mono text-sm mb-3">Component Usage:</h3>
        <div className="text-green-400 text-xs font-mono space-y-2">
          <p>{'// Use the VintageCRTMonitor component:'}</p>
          <p className="text-gray-400">{'// Pass any content as children - it will display inside the screen'}</p>
          <br />
          <p>{'<VintageCRTMonitor isPoweredOn={true}>'}</p>
          <p className="ml-4">{'<div className="text-white">'}</p>
          <p className="ml-8">{'<h1>Your Custom Content</h1>'}</p>
          <p className="ml-8">{'<p>Any HTML/React elements work here</p>'}</p>
          <p className="ml-4">{'</div>'}</p>
          <p>{'</VintageCRTMonitor>'}</p>
        </div>
      </div>
    </div>
  );
};

export default VintageCRTMonitor;
export { CRTDemo };
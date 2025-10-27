import React from 'react';

interface VintageNASASwitchProps {
  isOn: boolean;
  onToggle: () => void;
  className?: string;
}

const VintageNASASwitch: React.FC<VintageNASASwitchProps> = ({ isOn, onToggle, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Switch Housing - viewed from front, slides left-right */}
      <div 
        className="relative w-24 h-16 rounded-lg overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgb(45, 45, 50), rgb(35, 35, 40))',
          boxShadow: '0 8px 20px rgba(0,0,0,0.6), inset -2px -2px 6px rgba(0,0,0,0.5), inset 2px 2px 6px rgba(255,255,255,0.1)',
          transform: 'perspective(600px) rotateY(-8deg) rotateX(5deg)'
        }}
      >
        {/* Shiny ray effect */}
        <div
          className="absolute inset-0 opacity-0"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
            animation: 'shinyRay 4s ease-in-out infinite',
            transform: 'translateX(-100%)',
            pointerEvents: 'none'
          }}
        ></div>

        {/* Top metal ridge */}
        <div 
          className="absolute top-0 left-0 right-0 h-2 rounded-t-lg"
          style={{
            background: 'linear-gradient(180deg, rgb(25, 25, 30), rgb(15, 15, 20))',
            boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.1), 0 1px 2px rgba(0,0,0,0.6)'
          }}
        ></div>

        {/* Bottom metal ridge */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-2 rounded-b-lg"
          style={{
            background: 'linear-gradient(0deg, rgb(25, 25, 30), rgb(15, 15, 20))',
            boxShadow: 'inset 0 -1px 2px rgba(255,255,255,0.1), 0 -1px 2px rgba(0,0,0,0.6)'
          }}
        ></div>

        {/* Switch track/slot - horizontal */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 left-3 right-3 h-10 rounded-md"
          style={{
            background: 'linear-gradient(135deg, rgb(30, 30, 35), rgb(20, 20, 25))',
            boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.8), inset 0 -2px 4px rgba(0,0,0,0.6)'
          }}
        >
          {/* Track depth lines */}
          <div className="absolute inset-x-1 top-1 h-0.5 bg-black opacity-40 rounded"></div>
          <div className="absolute inset-x-1 bottom-1 h-0.5 bg-black opacity-30 rounded"></div>

          {/* Switch Toggle Button - slides horizontally within ridge */}
          <button
            onClick={onToggle}
            className={`absolute top-1 h-8 transition-all duration-400 cursor-pointer ${
              isOn ? 'right-0.5 w-8' : 'left-0.5 w-9'
            }`}
            style={{
              background: isOn 
                ? 'linear-gradient(120deg, rgb(65, 65, 70), rgb(55, 55, 60), rgb(45, 45, 50))'
                : 'linear-gradient(120deg, rgb(60, 60, 65), rgb(50, 50, 55), rgb(40, 40, 45))',
              boxShadow: isOn 
                ? '2px 0 6px rgba(0,0,0,0.7), -1px 2px 4px rgba(0,0,0,0.5), inset -2px -2px 4px rgba(0,0,0,0.3), inset 2px 2px 5px rgba(255,255,255,0.15)'
                : '4px 0 8px rgba(0,0,0,0.8), -1px 3px 6px rgba(0,0,0,0.6), inset -2px -2px 5px rgba(0,0,0,0.4), inset 2px 2px 6px rgba(255,255,255,0.1)',
              transform: `perspective(400px) rotateY(-5deg) ${isOn ? 'scale(0.95)' : 'scale(1)'}`,
              borderRadius: '4px',
              border: '1px solid rgba(0,0,0,0.3)',
              borderLeft: '2px solid rgba(0,0,0,0.4)',
              borderRight: '2px solid rgba(255,255,255,0.1)'
            }}
          >
            {/* Vertical grip ridges */}
            <div className="absolute inset-1 flex flex-row items-center justify-center gap-0.5">
              {[...Array(isOn ? 2 : 3)].map((_, i) => (
                <div 
                  key={i}
                  className="h-6 w-0.5 rounded-full"
                  style={{ 
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.2), rgba(20, 20, 25, 0.6), rgba(255,255,255,0.1))',
                    boxShadow: '0.5px 0 0.5px rgba(0,0,0,0.5), -0.5px 0 0.5px rgba(255,255,255,0.15)'
                  }}
                ></div>
              ))}
            </div>

            {/* Left edge highlight */}
            <div 
              className="absolute inset-y-0.5 left-0 w-0.5 rounded-l-lg"
              style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1))' }}
            ></div>

            {/* Bulk/depth on right edge */}
            <div 
              className="absolute inset-y-0 -right-0.5 w-1 rounded-r-lg"
              style={{ 
                background: 'linear-gradient(90deg, rgba(0,0,0,0.5), rgba(0,0,0,0.7))',
                transform: 'perspective(200px) rotateY(-20deg)',
                transformOrigin: 'left'
              }}
            ></div>
          </button>
        </div>

        
      </div>

      {/* CSS Animation styles */}
      <style>{`
        @keyframes shinyRay {
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
      `}</style>
    </div>
  );
};

export default VintageNASASwitch;

import { useState, useEffect, useRef } from 'react';
import EventControlPanel from '@/components/EventControlPanel';
import SpaceGateVault from '@/components/SpaceGate';
import { StarsBackground } from '@/components/StarsBackground';
import { eventCategories, eventsDatabase } from '@/data/eventsData';



// Left Column Component with Countdown - Not currently used
// @ts-expect-error - Function defined but not currently used
function LeftEventColumn() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [prevSeconds, setPrevSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Set event date to November 3rd, 2025 at 9:00 PM
  const eventDate = new Date('2025-11-03T21:00:00');

  const calculateTimeLeft = () => {
    const difference = eventDate.getTime() - currentTime.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const timeLeft = calculateTimeLeft();

  // Track seconds change for flip effect
  useEffect(() => {
    if (timeLeft.seconds !== prevSeconds) {
      setPrevSeconds(timeLeft.seconds);
    }
  }, [timeLeft.seconds, prevSeconds]);

  const totalEvents = eventCategories.reduce((total, category) => {
    return total + (eventsDatabase[category.id]?.length || 0);
  }, 0);

  return (
    <div className="flex flex-col h-full justify-center relative overflow-hidden">
      {/* Simple Background Effects */}
      <div className="absolute inset-0 opacity-20">
        {/* Scanning lines effect */}
        <div className="absolute inset-0">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-scan-line"></div>
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10 grid-bg"></div>
      </div>

      {/* Top Stats - Floating */}
      <div className="absolute top-8 left-8 right-8 z-10">
        <div className="flex justify-between items-center">
          <div className="bg-black/20 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-4 py-2 animate-slideInLeft">
            <div className="text-2xl font-bold text-cyan-400 font-orbitron">
              {totalEvents}
            </div>
            <div className="text-cyan-300/70 font-rajdhani text-xs uppercase tracking-wider">
              Total Events
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-sm border border-green-500/30 rounded-lg px-4 py-2 animate-slideInRight">
            <div className="text-2xl font-bold text-green-400 font-orbitron animate-pulse">
              OPEN
            </div>
            <div className="text-cyan-300/70 font-rajdhani text-xs uppercase tracking-wider">
              Registration
            </div>
          </div>
        </div>
      </div>

      {/* Countdown Display - Horizontal */}
      <div className="flex-1 flex flex-col justify-center px-4">
        {/* Timer */}
        <div className="flex justify-center items-center space-x-6 animate-fadeInUp">
          {/* Days */}
          <div className="text-center group">
            <div className="text-6xl font-bold text-cyan-400 font-orbitron group-hover:scale-110 transition-transform duration-300 animate-glow glow-text" style={{ color: '#00bcd4', textShadow: '0 0 20px rgba(6, 182, 212, 0.8)' }}>
              {timeLeft.days.toString().padStart(2, '0')}
            </div>
            <div className="text-cyan-300/70 font-rajdhani text-sm uppercase mt-2 tracking-wider" style={{ color: '#4dd0e1' }}>
              Days
            </div>
          </div>

          <div className="text-5xl text-cyan-400 font-orbitron animate-pulse glow-text" style={{ color: '#00bcd4', textShadow: '0 0 20px rgba(6, 182, 212, 0.8)' }}>:</div>

          {/* Hours */}
          <div className="text-center group">
            <div className="text-6xl font-bold text-cyan-400 font-orbitron group-hover:scale-110 transition-transform duration-300 animate-glow glow-text" style={{ color: '#00bcd4', textShadow: '0 0 20px rgba(6, 182, 212, 0.8)' }}>
              {timeLeft.hours.toString().padStart(2, '0')}
            </div>
            <div className="text-cyan-300/70 font-rajdhani text-sm uppercase mt-2 tracking-wider" style={{ color: '#4dd0e1' }}>
              Hrs
            </div>
          </div>

          <div className="text-5xl text-cyan-400 font-orbitron animate-pulse delay-200 glow-text" style={{ color: '#00bcd4', textShadow: '0 0 20px rgba(6, 182, 212, 0.8)' }}>:</div>

          {/* Minutes */}
          <div className="text-center group">
            <div className="text-6xl font-bold text-cyan-400 font-orbitron group-hover:scale-110 transition-transform duration-300 animate-glow glow-text" style={{ color: '#00bcd4', textShadow: '0 0 20px rgba(6, 182, 212, 0.8)' }}>
              {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
            <div className="text-cyan-300/70 font-rajdhani text-sm uppercase mt-2 tracking-wider" style={{ color: '#4dd0e1' }}>
              Mins
            </div>
          </div>

          <div className="text-5xl text-cyan-400 font-orbitron animate-pulse delay-400 glow-text" style={{ color: '#00bcd4', textShadow: '0 0 20px rgba(6, 182, 212, 0.8)' }}>:</div>

          {/* Seconds with flip effect */}
          <div className="text-center group">
            <div className="text-6xl font-bold text-cyan-400 font-orbitron group-hover:scale-110 transition-transform duration-300 animate-glow glow-text" style={{ color: '#00bcd4', textShadow: '0 0 20px rgba(6, 182, 212, 0.8)' }}>
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
            <div className="text-cyan-300/70 font-rajdhani text-sm uppercase mt-2 tracking-wider" style={{ color: '#4dd0e1' }}>
              Secs
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-8 left-8 right-8 z-10">
        <div className="flex justify-center space-x-4">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
        </div>
        <div className="text-center mt-4">
          <div className="text-cyan-400/60 font-rajdhani text-xs animate-typing tracking-widest">
            COUNTDOWN_ACTIVE...
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Events() {
  const [shouldStartAnimation, setShouldStartAnimation] = useState(false);
  const [showGate, setShowGate] = useState(true);
  const [hasTriggered, setHasTriggered] = useState(false);
  const eventsRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to trigger SpaceGate animation when events section is fully visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only trigger when the entire events section is visible (threshold: 0.8)
          if (entry.isIntersecting && entry.intersectionRatio >= 0.8 && !hasTriggered) {
            setHasTriggered(true);
            setShouldStartAnimation(true);
          }
        });
      },
      {
        root: null,
        threshold: 0.8 // Trigger when 80% of events section is visible
      }
    );

    if (eventsRef.current) {
      observer.observe(eventsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasTriggered]);

  return (
    <div ref={eventsRef} className="relative">
      {/* Universal Stars Background - always visible */}
      <StarsBackground
        className="absolute inset-0"
        starColor="#00ffff"
        speed={60}
        factor={0.02}
      />

      {/* Events Section Content */}
      <div className="relative z-10 min-h-screen">
        {/* EventControlPanel - always present in background */}
        <div className="relative z-10">
          <EventControlPanel eventCategories={eventCategories} />
        </div>

        {/* SpaceGate Animation - covers the EventControlPanel initially */}
        {showGate && (
          <div className="absolute inset-0 z-20">
            <SpaceGateVault
              shouldStartAnimation={shouldStartAnimation}
              onAnimationComplete={() => {
                // Gate animation complete - completely remove gate
                setShowGate(false);
              }}
            />
          </div>
        )}
      </div>

      <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');
            
            .font-orbitron {
              font-family: 'Orbitron', monospace;
            }
            
            .font-rajdhani {
              font-family: 'Rajdhani', sans-serif;
            }
            
            .glow-text {
              text-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
            }
            
            @keyframes flipIn {
              0% {
                transform: rotateX(-90deg);
                opacity: 0;
              }
              50% {
                transform: rotateX(0deg);
                opacity: 0.8;
              }
              100% {
                transform: rotateX(0deg);
                opacity: 1;
              }
            }
            
            .animate-flipIn {
              animation: flipIn 0.6s ease-out;
            }
            
            @keyframes scanLine {
              0% {
                transform: translateY(-100vh);
              }
              100% {
                transform: translateY(100vh);
              }
            }
            
            .animate-scan-line {
              animation: scanLine 3s linear infinite;
            }
            
            @keyframes slideInLeft {
              0% {
                transform: translateX(-100px);
                opacity: 0;
              }
              100% {
                transform: translateX(0);
                opacity: 1;
              }
            }
            
            .animate-slideInLeft {
              animation: slideInLeft 1s ease-out;
            }
            
            @keyframes slideInRight {
              0% {
                transform: translateX(100px);
                opacity: 0;
              }
              100% {
                transform: translateX(0);
                opacity: 1;
              }
            }
            
            .animate-slideInRight {
              animation: slideInRight 1s ease-out 0.2s both;
            }
            
            @keyframes fadeInUp {
              0% {
                transform: translateY(50px);
                opacity: 0;
              }
              100% {
                transform: translateY(0);
                opacity: 1;
              }
            }
            
            .animate-fadeInUp {
              animation: fadeInUp 1.2s ease-out 0.5s both;
            }
            
            @keyframes glow {
              0%, 100% {
                text-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
              }
              50% {
                text-shadow: 0 0 30px rgba(6, 182, 212, 0.8), 0 0 40px rgba(6, 182, 212, 0.6);
              }
            }
            
            .animate-glow {
              animation: glow 2s ease-in-out infinite;
            }
            
            @keyframes typing {
              0%, 50% {
                opacity: 1;
              }
              51%, 100% {
                opacity: 0.3;
              }
            }
            
            .animate-typing {
              animation: typing 2s infinite;
            }
            
            .grid-bg {
              background-image: 
                linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
              background-size: 40px 40px;
            }
          `}</style>
    </div>
  )
}

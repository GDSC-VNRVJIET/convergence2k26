import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function LandingVideo({ onComplete }: { onComplete: () => void }) {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [showWhiteFlash, setShowWhiteFlash] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    console.log('LandingVideo mounted');
    
    // Ensure video plays
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => console.log('Video started playing'))
          .catch(err => console.error('Video play failed:', err));
      }
    }

    // Auto skip after max 10 seconds
    timeoutRef.current = window.setTimeout(() => {
      console.log('Auto-complete triggered');
      handleComplete();
    }, 10000);

    return () => {
      console.log('LandingVideo unmounting');
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleComplete = () => {
    console.log('handleComplete called');
    
    // Check if mobile device
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      // Skip white flash on mobile for smoother transition
      setIsVideoEnded(true);
      setTimeout(() => {
        onComplete();
      }, 100);
    } else {
      // Show white flash on desktop
      setShowWhiteFlash(true);
      
      // After a brief moment, trigger the actual completion
      setTimeout(() => {
        setIsVideoEnded(true);
        setTimeout(() => {
          onComplete();
        }, 100);
      }, 300); // Hold white flash for 300ms
    }
  };

  const handleSkip = () => {
    console.log('Skip button clicked');
    handleComplete();
  };

  console.log('LandingVideo render - isVideoEnded:', isVideoEnded);

  return (
    <AnimatePresence mode="wait">
      {!isVideoEnded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
        >
          {/* Video */}
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onEnded={handleComplete}
            onLoadedData={() => console.log('Video loaded')}
            onError={(e) => console.error('Video error:', e)}
            className="w-full h-full object-cover"
          >
            <source src="/landing1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* White Flash Overlay - appears at video end */}
          <AnimatePresence>
            {showWhiteFlash && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
                className="absolute inset-0 bg-white z-10"
              />
            )}
          </AnimatePresence>

          {/* Skip Button */}
          {!showWhiteFlash && (
            <button
              onClick={handleSkip}
              className="absolute bottom-8 right-8 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-semibold hover:bg-white/20 transition-all duration-200 z-10"
            >
              Skip Intro
            </button>
          )}

          {/* Optional: Progress bar */}
          {!showWhiteFlash && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 10, ease: "linear" }}
              className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-400 origin-left"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

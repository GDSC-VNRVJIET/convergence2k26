import React, { useState } from 'react';
import { TbWorld } from "react-icons/tb";
import { BsSearch } from "react-icons/bs";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaPhone,
  FaRocket,
  FaTrophy,
  FaMedal,
  FaAward,
  FaClipboardList,
  FaTimes,
  FaBullseye
} from "react-icons/fa";
import TrophyImg from '../assets/trophy.png';


// Event type matches eventsData.ts
interface Event {
  id: number;
  name: string;
  description: string;
  time: string;
  date: string;
  venue: string;
  club: string;
  poster: string;
  prizes: string[];
  requirements: string[];
  contact: string;
  registerUrl: string;
}

interface HolographicProjectionProps {
  event: Event | null;
  onClose: () => void;
}

const HolographicProjection: React.FC<HolographicProjectionProps> = ({ event, onClose }) => {
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes scanlineMove {
        0% { background-position: 0 0; }
        100% { background-position: 0 100px; }
      }
      @keyframes scanFlicker {
        0% { opacity: 0.6; }
        100% { opacity: 1; }
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.5); opacity: 0.7; }
      }
      @keyframes hologramFlicker {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.95; }
      }
      @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(-10px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeIn {
        animation: fadeIn 0.3s ease-out;
      }
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      
      /* Custom scrollbar for search engine content - matte black theme */
      .search-scrollbar::-webkit-scrollbar {
        width: 8px;
        background: rgba(0, 0, 0, 0.8);
      }
      
      .search-scrollbar::-webkit-scrollbar-track {
        background: rgba(20, 20, 20, 0.9);
        border-radius: 4px;
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .search-scrollbar::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.6), rgba(200, 200, 200, 0.4));
        border-radius: 4px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 0 4px rgba(255, 255, 255, 0.1);
      }
      
      .search-scrollbar::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(200, 200, 200, 0.6));
        box-shadow: 0 0 6px rgba(255, 255, 255, 0.2);
      }

      .search-scrollbar::-webkit-scrollbar-corner {
        background: rgba(20, 20, 20, 0.9);
      }

      /* Firefox scrollbar styling */
      .search-scrollbar {
        scrollbar-width: thin;
        scrollbar-color: rgba(255, 255, 255, 0.6) rgba(20, 20, 20, 0.9);
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const [scanProgress, setScanProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [contentOpacity, setContentOpacity] = useState(0);
  const [activeTab, setActiveTab] = useState('all');

  React.useEffect(() => {
    if (!event) {
      setScanProgress(0);
      setShowContent(false);
      setContentOpacity(0);
      return;
    }

    // Reset all states
    setScanProgress(0);
    setShowContent(false);
    setContentOpacity(0);

    // Synchronized animation with faster, more visible timing
    const scanDuration = 1200; // 1.2 seconds for faster scanning
    const startTime = Date.now();

    const scanInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / scanDuration) * 100, 100);
      setScanProgress(progress);

      if (progress >= 100) {
        clearInterval(scanInterval);
        // Start content reveal after scan completes
        setShowContent(true);
        setTimeout(() => setContentOpacity(1), 50);
      }
    }, 12); // Higher fps for smoother animation

    return () => clearInterval(scanInterval);
  }, [event]);

  if (!event) return null;

  // Calculate display dimensions - responsive for mobile and desktop
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const displayWidth = isMobile ? 'calc(100vw - 2rem)' : 'calc(100vw - 6rem)';
  const displayHeight = isMobile ? 'calc(100vh - 4rem)' : 'calc(100vh - 6rem)';
  const displayLeft = isMobile ? '1rem' : '3rem';
  const displayTop = isMobile ? '0.5rem' : '1rem';

  return (
    <div className="fixed inset-0 z-50 pointer-events-none" style={{ top: '64px' }}>
      {/* Projection source point (left side) - responsive */}
      <div
        className="absolute rounded-full"
        style={{
          left: isMobile ? '0.5rem' : '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          width: isMobile ? '3px' : '4px',
          height: isMobile ? '3px' : '4px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
          boxShadow: isMobile
            ? '0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6)'
            : '0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.6)',
          animation: 'pulse 2s infinite'
        }}
      />

      {/* Horizontal projection beams from left - responsive */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: isMobile ? '0.5rem' : '1rem',
          top: displayTop,
          width: displayWidth,
          height: displayHeight,
          opacity: scanProgress < 100 ? 0.9 : 0,
          transition: 'opacity 0.3s'
        }}
      >
        {/* Multiple horizontal beams that sweep across - responsive */}
        {[...Array(isMobile ? 10 : 15)].map((_, i) => (
          <div
            key={`beam-${i}`}
            className="absolute left-0"
            style={{
              top: `${5 + i * (isMobile ? 8 : 6)}%`,
              height: isMobile ? '2px' : '3px',
              width: `${scanProgress}%`,
              background: 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.5))',
              boxShadow: isMobile
                ? '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4)'
                : '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4)',
              filter: 'blur(0.3px)',
              transition: 'width 0.03s linear',
              opacity: 0.8 + Math.sin(i * 0.5) * 0.2
            }}
          />
        ))}

        {/* Subtle scanning line that moves with progress - responsive */}
        <div
          className="absolute top-0 bottom-0"
          style={{
            left: `${scanProgress}%`,
            width: isMobile ? '2px' : '3px',
            background: 'rgba(255, 255, 255, 1)',
            boxShadow: isMobile
              ? '0 0 15px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 0.6)'
              : '0 0 25px rgba(255, 255, 255, 1), 0 0 50px rgba(255, 255, 255, 0.6)',
            transition: 'left 0.03s linear'
          }}
        />
      </div>

      {/* Holographic display container - exactly matching projection area */}
      <div
        className="absolute pointer-events-auto"
        style={{
          left: displayLeft,
          top: displayTop,
          width: displayWidth,
          height: displayHeight
        }}
      >
        {/* Scanning effect building the display - synchronized with horizontal beams */}
        <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
          {/* Scanning grid pattern - only visible during scan */}
          {scanProgress < 100 && (
            <>
              {/* Vertical lines - synchronized with horizontal beams - responsive */}
              <div
                className="absolute inset-0 flex"
                style={{
                  clipPath: `inset(0 ${100 - scanProgress}% 0 0)`,
                  transition: 'clip-path 0.03s linear'
                }}
              >
                {[...Array(isMobile ? 30 : 60)].map((_, i) => (
                  <div
                    key={`v-${i}`}
                    className="flex-1 h-full"
                    style={{
                      borderRight: i % 2 === 0 ? '1px solid rgba(255, 255, 255, 0.25)' : 'none'
                    }}
                  />
                ))}
              </div>

              {/* Horizontal lines - synchronized with vertical lines - responsive */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: `inset(0 ${100 - scanProgress}% 0 0)`,
                  transition: 'clip-path 0.03s linear'
                }}
              >
                {[...Array(isMobile ? 25 : 50)].map((_, i) => (
                  <div
                    key={`h-${i}`}
                    className="absolute left-0 right-0"
                    style={{
                      top: `${(i / (isMobile ? 25 : 50)) * 100}%`,
                      height: '1px',
                      background: i % 2 === 0 ? 'rgba(255, 255, 255, 0.25)' : 'transparent'
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        {/* Main holographic glass container - full size */}
        <div
          className={`relative rounded-lg overflow-hidden transition-opacity duration-1000 w-full h-full ${showContent ? 'opacity-100' : 'opacity-0'
            }`}
          style={{
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(20, 20, 20, 0.9))',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: `
              0 0 40px rgba(255, 255, 255, 0.3),
              inset 0 0 40px rgba(0, 0, 0, 0.8),
              0 0 60px rgba(255, 255, 255, 0.2)
            `,
            opacity: contentOpacity,
            transform: `perspective(1000px) rotateY(-0.5deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Animated scanlines overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.02) 0px, transparent 2px, transparent 4px)',
              animation: 'scanlineMove 8s linear infinite'
            }}
          />

          {/* Browser-like interface - full height */}
          <div className="relative h-full flex flex-col">
            {/* Browser header - responsive */}
            <div
              className={`flex items-center gap-2 md:gap-3 px-3 md:px-6 py-2 md:py-4 border-b flex-shrink-0`}
              style={{
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(20, 20, 20, 0.8))',
                borderColor: 'rgba(255, 255, 255, 0.2)'
              }}
            >
              {/* Traffic lights - responsive */}
              <div className="flex gap-1 md:gap-2">
                <div className="w-2 h-2 md:w-4 md:h-4 rounded-full bg-red-400 opacity-60"></div>
                <div className="w-2 h-2 md:w-4 md:h-4 rounded-full bg-yellow-400 opacity-60"></div>
                <div className="w-2 h-2 md:w-4 md:h-4 rounded-full bg-green-400 opacity-60"></div>
              </div>

              {/* URL bar - responsive */}
              <div
                className="flex-1 px-2 md:px-4 py-1 md:py-3 rounded font-mono text-xs md:text-sm min-w-0"
                style={{
                  background: 'rgba(0, 0, 0, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}
              >
                <TbWorld className="inline mr-2" />
                <p className='truncate'>events.convergence.2k25r/details/{event.id}</p>
              </div>

              {/* Close button - responsive */}
              <button
                onClick={onClose}
                className="px-2 md:px-4 py-1 md:py-2 rounded text-white hover:bg-white hover:bg-opacity-20 transition-colors text-xs md:text-sm font-mono flex items-center justify-center"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.4)'
                }}
              >
                <FaTimes className="w-3 h-3 md:w-4 md:h-4" />
              </button>
            </div>

            {/* Browser content - Archie Search Engine Interface */}
            <div
              className="flex-1 overflow-y-auto search-scrollbar"
              style={{
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(10, 10, 10, 0.95))'
              }}
            >
              {/* Web interface for event details */}
              {showContent && (
                <>
                  {/* Archie Search Header - responsive */}
                  <div className="p-3 md:p-6 border-b border-white border-opacity-20">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 mb-4">
                      {/* Archie Logo - responsive */}
                      <div className="flex items-center gap-2 md:gap-3">
                        <div
                          className="text-xl md:text-3xl font-bold text-white"
                          style={{
                            textShadow: '0 0 15px rgba(255, 255, 255, 0.6)',
                            fontFamily: 'monospace'
                          }}
                        >
                          Archie
                        </div>
                        
                      </div>

                      {/* Search Bar - responsive */}
                      <div className="flex-1 w-full md:max-w-2xl">
                        <div
                          className="flex items-center px-3 md:px-4 py-2 md:py-3 rounded-full border"
                          style={{
                            background: 'rgba(0, 0, 0, 0.7)',
                            border: '1px solid rgba(255, 255, 255, 0.3)'
                          }}
                        >
                          <span className="text-gray-300 text-xs md:text-sm flex-1 truncate">{event.name}</span>
                          <div className="flex items-center gap-2">
                            <BsSearch className="w-3 h-3 md:w-4 md:h-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Search Navigation - horizontal scrollable */}
                    <div className="overflow-x-auto scrollbar-hide">
                      <div className="flex items-center gap-4 md:gap-6 text-sm min-w-max pb-2">
                        <button
                          onClick={() => setActiveTab('all')}
                          className={`pb-1 px-2 transition-colors ${activeTab === 'all'
                            ? 'text-white border-b-2 border-white'
                            : 'text-gray-300 hover:text-white'
                            }`}
                        >
                          All
                        </button>
                        <button
                          onClick={() => setActiveTab('images')}
                          className={`pb-1 px-2 transition-colors ${activeTab === 'images'
                            ? 'text-white border-b-2 border-white'
                            : 'text-gray-300 hover:text-white'
                            }`}
                        >
                          Images
                        </button>
                        {event.prizes && event.prizes.length > 0 && (
                          <button
                            onClick={() => setActiveTab('prizes')}
                            className={`pb-1 px-2 transition-colors ${activeTab === 'prizes'
                              ? 'text-white border-b-2 border-white'
                              : 'text-gray-300 hover:text-white'
                              }`}
                          >
                            Prizes
                          </button>
                        )}
                        <button
                          onClick={() => setActiveTab('requirements')}
                          className={`pb-1 px-2 transition-colors ${activeTab === 'requirements'
                            ? 'text-white border-b-2 border-white'
                            : 'text-gray-300 hover:text-white'
                            }`}
                        >
                          Requirements
                        </button>
                        <button
                          onClick={() => setActiveTab('details')}
                          className={`pb-1 px-2 transition-colors ${activeTab === 'details'
                            ? 'text-white border-b-2 border-white'
                            : 'text-gray-300 hover:text-white'
                            }`}
                        >
                          Details
                        </button>
                        <button
                          onClick={() => setActiveTab('contact')}
                          className={`pb-1 px-2 transition-colors ${activeTab === 'contact'
                            ? 'text-white border-b-2 border-white'
                            : 'text-gray-300 hover:text-white'
                            }`}
                        >
                          Contact
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Search Results - responsive */}
                  <div className="p-3 md:p-6">


                    {/* Dynamic Content Based on Active Tab */}
                    <div className="animate-fadeIn">
                      {activeTab === 'all' && (
                        <div>
                          {/* Main Event Result - responsive */}
                          <div className="mb-6 md:mb-8">
                            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-4">
                              <div
                                className="w-56 h-32 md:w-80 md:h-48 lg:w-96 lg:h-56 rounded-lg overflow-hidden flex-shrink-0 mx-auto md:mx-0"
                                style={{
                                  border: '2px solid rgba(255, 255, 255, 0.3)',
                                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)'
                                }}
                              >
                                <img src={event.poster} alt={event.name} className="w-full h-full object-cover" />
                              </div>
                              <div className="flex-1 text-center md:text-left">
                                <h2
                                  className="text-lg md:text-2xl font-bold text-white mb-2 hover:underline cursor-pointer"
                                  style={{
                                    textShadow: '0 0 10px rgba(255, 255, 255, 0.4)'
                                  }}
                                >
                                  {event.name} - Official Event Page
                                </h2>
                                <div className="text-gray-300 text-xs md:text-sm mb-2">
                                  events.convergence2025.edu › {event.club.toLowerCase().replace(/\s+/g, '-')}
                                </div>
                                <p className="text-gray-100 text-xs md:text-sm leading-relaxed mb-3">
                                  {event.description}
                                </p>
                                <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4 text-xs text-gray-300">
                                  <span className="flex items-center gap-1"><FaCalendarAlt className="w-3 h-3" /> {event.date}</span>
                                  <span className="flex items-center gap-1"><FaClock className="w-3 h-3" /> {event.time}</span>
                                  <span className="flex items-center gap-1"><FaMapMarkerAlt className="w-3 h-3" /> {event.venue}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Quick Info Cards - responsive */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                            <div
                              className="p-4 rounded-lg border"
                              style={{
                                background: 'rgba(0, 0, 0, 0.8)',
                                borderColor: 'rgba(255, 255, 255, 0.2)'
                              }}
                            >
                              <h4 className="text-white text-sm font-medium mb-2 flex items-center gap-2"><FaBullseye className="w-4 h-4" /> Organizer</h4>
                              <p className="text-gray-100 text-sm">{event.club}</p>
                            </div>
                            <div
                              className="p-4 rounded-lg border"
                              style={{
                                background: 'rgba(0, 0, 0, 0.8)',
                                borderColor: 'rgba(255, 255, 255, 0.2)'
                              }}
                            >
                              <h4 className="text-white text-sm font-medium mb-2 flex items-center gap-2"><FaPhone className="w-4 h-4" /> Contact</h4>
                              <p className="text-gray-100 text-sm">{event.contact}</p>
                            </div>
                          </div>

                          {/* Registration Button */}
                          <button
                            className="w-full py-3 rounded-lg font-medium text-lg transition-all hover:scale-105"
                            style={{
                              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(40, 40, 40, 0.8))',
                              border: '1px solid rgba(255, 255, 255, 0.4)',
                              color: 'rgb(255, 255, 255)',
                              boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
                            }}
                            onClick={() => window.open(event.registerUrl, '_blank')}
                          >
                            <span className="flex items-center justify-center gap-2"><FaRocket className="w-5 h-5" /> Register Now</span>
                          </button>
                        </div>
                      )}

                      {activeTab === 'images' && (
                        <div className="flex flex-col h-full min-h-[60vh]">
                          {/* Full-screen image container */}
                          <div className="flex-1 flex items-center justify-center p-2 md:p-4">
                            <div
                              className="w-full h-full max-w-5xl max-h-full rounded-lg overflow-hidden flex items-center justify-center"
                              style={{
                                border: '3px solid rgba(255, 255, 255, 0.4)',
                                boxShadow: '0 0 40px rgba(255, 255, 255, 0.3)',
                                minHeight: '50vh'
                              }}
                            >
                              <img
                                src={event.poster}
                                alt={event.name}
                                className="max-w-full max-h-full object-contain"
                                style={{
                                  filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))'
                                }}
                              />
                            </div>
                          </div>
                          {/* Image info at bottom */}
                          <div className="text-center py-3 md:py-4 border-t border-white border-opacity-20 flex-shrink-0">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{event.name}</h3>
                            <p className="text-gray-300 text-sm mb-2">Official Event Poster</p>
                            <div className="text-gray-300 text-xs opacity-60">
                              High Resolution • Original Aspect Ratio • Full View
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === 'prizes' && event.prizes && event.prizes.length > 0 && (
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center flex items-center justify-center gap-2"><FaTrophy className="w-6 h-6" /> Prize Pool & Leaderboard</h3>
                          <div className="space-y-4">
                            { event.prizes.length !== 0 ? (
                                event.prizes.length === 3 ? (
                                  event.prizes.map((prize, i) => (
                                  <div
                                    key={i}
                                    className="flex items-center gap-4 p-4 rounded-lg border"
                                    style={{
                                      background: i === 0
                                        ? 'linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0.05))'
                                        : i === 1
                                          ? 'linear-gradient(135deg, rgba(192, 192, 192, 0.1), rgba(192, 192, 192, 0.05))'
                                          : i === 2
                                            ? 'linear-gradient(135deg, rgba(205, 127, 50, 0.1), rgba(205, 127, 50, 0.05))'
                                            : 'rgba(0, 0, 0, 0.8)',
                                      borderColor: i === 0
                                        ? 'rgba(255, 215, 0, 0.3)'
                                        : i === 1
                                          ? 'rgba(192, 192, 192, 0.3)'
                                          : i === 2
                                            ? 'rgba(205, 127, 50, 0.3)'
                                            : 'rgba(255, 255, 255, 0.2)'
                                    }}
                                  >
                                    <div
                                      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold"
                                      style={{
                                        background: i === 0
                                          ? 'linear-gradient(135deg, #FFD700, #FFA500)'
                                          : i === 1
                                            ? 'linear-gradient(135deg, #C0C0C0, #A0A0A0)'
                                            : i === 2
                                              ? 'linear-gradient(135deg, #CD7F32, #B8860B)'
                                              : 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(200, 200, 200, 0.2))',
                                        color: i < 3 ? '#000' : '#FFFFFF'
                                      }}
                                    >
                                      {i + 1}
                                    </div>
                                    <div className="flex-1">
                                      <div className="text-white font-medium flex items-center gap-2">
                                        {i === 0 ? (
                                          <><FaTrophy className="w-4 h-4 text-yellow-400" /> First Place</>
                                        ) : i === 1 ? (
                                          <><FaMedal className="w-4 h-4 text-gray-400" /> Second Place</>
                                        ) : i === 2 ? (
                                          <><FaAward className="w-4 h-4 text-orange-600" /> Third Place</>
                                        ) : (
                                          `Position ${i + 1}`
                                        )}
                                      </div>
                                      <div className="text-gray-100 text-lg font-bold">{prize}</div>
                                    </div>
                                    <div className="text-right">
                                      <div className="text-gray-300 text-sm">Prize Money</div>
                                      <div className="text-white font-mono text-lg">
                                        {prize.includes('₹') ? prize.match(/₹[\d,]+/)?.[0] || 'TBA' : 'TBA'}
                                      </div>
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <div 
                                  className="prize-pool"
                                  style={{
                                    background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.3), rgba(255, 165, 0, 0.3))',
                                    padding: 30,
                                    border: '1px solid rgba(255, 215, 0, 1)',
                                    borderRadius: 20
                                  }}
                                >
                                  <img 
                                    src={TrophyImg} 
                                    alt="Trophy" 
                                    style={{
                                      margin: 'auto',
                                      marginBottom: 20,
                                      height: 200,
                                    }}
                                  />
                                  <h2 
                                    className='text-xl md:text-xl font-bold text-white text-center flex items-center justify-center gap-2'
                                  >
                                    Exciting prize pool of
                                  </h2>
                                  <h2 
                                    className='text-3xl md:text-6xl font-bold text-white text-center flex items-center justify-center gap-2'
                                    style={{
                                      // fontFamily: 'cursive'
                                    }}
                                  >
                                    { event.prizes[0] }
                                  </h2>
                                </div>
                              )
                            ) : null }
                          </div>
                        </div>
                      )}

                      {activeTab === 'requirements' && (
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><FaClipboardList className="w-6 h-6" /> Event Requirements</h3>
                          <div className="space-y-4">
                            {event.requirements.map((req, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-4 p-4 rounded-lg border"
                                style={{
                                  background: 'rgba(0, 0, 0, 0.8)',
                                  borderColor: 'rgba(255, 255, 255, 0.2)'
                                }}
                              >
                                <div
                                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                                  style={{
                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(200, 200, 200, 0.2))',
                                    color: '#FFFFFF'
                                  }}
                                >
                                  {i + 1}
                                </div>
                                <div className="flex-1">
                                  <p className="text-gray-100 text-sm leading-relaxed">{req}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeTab === 'details' && (
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><FaCalendarAlt className="w-6 h-6" /> Event Details</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div
                              className="p-6 rounded-lg border"
                              style={{
                                background: 'rgba(0, 0, 0, 0.8)',
                                borderColor: 'rgba(255, 255, 255, 0.2)'
                              }}
                            >
                              <h4 className="text-white text-lg font-medium mb-4 flex items-center gap-2"><FaMapMarkerAlt className="w-5 h-5" /> Venue & Timing</h4>
                              <div className="space-y-3">
                                <div>
                                  <span className="text-gray-300 text-sm">Date:</span>
                                  <p className="text-gray-100 font-medium">{event.date}</p>
                                </div>
                                <div>
                                  <span className="text-gray-300 text-sm">Time:</span>
                                  <p className="text-gray-100 font-medium">{event.time}</p>
                                </div>
                                <div>
                                  <span className="text-gray-300 text-sm">Venue:</span>
                                  <p className="text-gray-100 font-medium">{event.venue}</p>
                                </div>
                              </div>
                            </div>
                            <div
                              className="p-6 rounded-lg border"
                              style={{
                                background: 'rgba(0, 0, 0, 0.8)',
                                borderColor: 'rgba(255, 255, 255, 0.2)'
                              }}
                            >
                              <h4 className="text-white text-lg font-medium mb-4 flex items-center gap-2"><FaBullseye className="w-5 h-5" /> Event Info</h4>
                              <div className="space-y-3">
                                <div>
                                  <span className="text-gray-300 text-sm">Organizer:</span>
                                  <p className="text-gray-100 font-medium">{event.club}</p>
                                </div>
                                <div>
                                  <span className="text-gray-300 text-sm">Event ID:</span>
                                  <p className="text-gray-100 font-medium font-mono">#{event.id}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-6">
                            <div
                              className="p-6 rounded-lg border"
                              style={{
                                background: 'rgba(0, 0, 0, 0.8)',
                                borderColor: 'rgba(255, 255, 255, 0.2)'
                              }}
                            >
                              <h4 className="text-white text-lg font-medium mb-4">📝 Description</h4>
                              <p className="text-gray-100 leading-relaxed">{event.description}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === 'contact' && (
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><FaPhone className="w-6 h-6" /> Contact Information</h3>
                          <div
                            className="p-6 rounded-lg border"
                            style={{
                              background: 'rgba(0, 0, 0, 0.8)',
                              borderColor: 'rgba(255, 255, 255, 0.2)'
                            }}
                          >
                            <div className="text-center">
                              <h4 className="text-white text-xl font-medium mb-4">Get in Touch</h4>
                              <p className="text-gray-100 text-lg font-mono mb-6">{event.contact}</p>
                              <div className="space-y-4">
                                <div>
                                  <span className="text-gray-300 text-sm">Organized by:</span>
                                  <p className="text-white font-medium text-lg">{event.club}</p>
                                </div>
                                <div className="pt-4">
                                  <button
                                    className="px-8 py-3 rounded-lg font-medium text-lg transition-all hover:scale-105"
                                    style={{
                                      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(40, 40, 40, 0.8))',
                                      border: '1px solid rgba(255, 255, 255, 0.4)',
                                      color: 'rgb(255, 255, 255)',
                                      boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
                                    }}
                                    onClick={() => window.open(event.registerUrl, '_blank')}
                                  >
                                    <span className="flex items-center justify-center gap-2"><FaPhone className="w-4 h-4" /> Contact & Register</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolographicProjection;
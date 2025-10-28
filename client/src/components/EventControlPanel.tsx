import { useState, useEffect } from 'react'
import VintageNASASwitch from './VintageNASASwitch'
import VintageCRTMonitor from './VintageCRTMonitor'
import { StarsBackground } from './StarsBackground'
import { eventsDatabase, type Category } from '@/data/eventsData'

interface ControlPanelProps {
  eventCategories: Category[]
}

export default function EventControlPanel({ eventCategories }: ControlPanelProps) {
  const [activeSwitches, setActiveSwitches] = useState<Record<string, boolean>>({})
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedEvent, setSelectedEvent] = useState<any>(null)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleSwitch = (categoryId: string) => {
    // Always reset selected category first to ensure clean state
    setSelectedCategory(null)
    setSelectedEvent(null)
    
    // If switch is currently off, turn off all other switches and turn this one on
    if (!activeSwitches[categoryId]) {
      // Turn off all switches first, then turn on the selected one
      setActiveSwitches({ [categoryId]: true })
      
      // Use setTimeout to ensure state has updated before setting new category
      setTimeout(() => {
        setSelectedCategory(categoryId)
      }, 50)
    } else {
      // If switch is currently on, turn it off
      setActiveSwitches(prev => ({
        ...prev,
        [categoryId]: false
      }))
    }
  }

  // Mobile: Direct category selection
  const selectCategory = (categoryId: string) => {
    if (categoryId === '') {
      // Back to apps
      setSelectedCategory(null)
    } else {
      setSelectedCategory(categoryId)
    }
    setSelectedEvent(null)
  }

  const activeCategories = eventCategories.filter(cat => activeSwitches[cat.id])

  return (
    <div className="relative overflow-hidden py-8 px-4">
      {/* Stars Background */}
      <StarsBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[400px] md:min-h-[600px] relative">
          {/* Sparkling effect around the layout */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
            {/* Corner sparkles */}
            <div className="absolute top-2 left-2 w-2 h-2 bg-cyan-400 rounded-full opacity-0 animate-sparkle" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-4 right-8 w-1 h-1 bg-cyan-300 rounded-full opacity-0 animate-sparkle" style={{ animationDelay: '1.2s' }}></div>
            <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 animate-sparkle" style={{ animationDelay: '2.4s' }}></div>
            <div className="absolute bottom-3 right-4 w-1 h-1 bg-cyan-300 rounded-full opacity-0 animate-sparkle" style={{ animationDelay: '3.6s' }}></div>
            <div className="absolute top-1/3 left-1 w-1 h-1 bg-cyan-400 rounded-full opacity-0 animate-sparkle" style={{ animationDelay: '1.8s' }}></div>
            <div className="absolute top-2/3 right-2 w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-0 animate-sparkle" style={{ animationDelay: '3s' }}></div>
          </div>
          {/* Left Control Panel - Hidden on mobile, 30% on desktop */}
          <div className="hidden lg:block w-full lg:w-[30%] border-r border-cyan-500/30 relative">
            <div className="h-full border border-cyan-500/40 rounded-lg m-2 bg-black/20 backdrop-blur-sm">
              <SwitchPanel 
                eventCategories={eventCategories}
                activeSwitches={activeSwitches}
                onToggleSwitch={toggleSwitch}
              />
            </div>
          </div>

          {/* Main Display Screen - Full width on mobile, 70% on desktop */}
          <div className="flex-1 p-2 md:p-3 lg:p-6 relative">
            <DisplayScreen 
              activeCategories={activeCategories}
              selectedCategory={selectedCategory}
              eventCategories={eventCategories}
              selectedEvent={selectedEvent}
              onEventSelect={setSelectedEvent}
              onBackToCategory={() => setSelectedEvent(null)}
              onCategorySelect={selectCategory}
              isMobile={isMobile}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function SwitchPanel({ eventCategories, activeSwitches, onToggleSwitch }: {
  eventCategories: any[]
  activeSwitches: Record<string, boolean>
  onToggleSwitch: (categoryId: string) => void
}) {
  return (
    <div className="p-4 lg:p-6 h-full overflow-y-auto">
      {/* Header */}
      <div className="text-center mb-6 lg:mb-8">
        <h2 className="text-cyan-400 font-mono text-lg lg:text-xl font-bold mb-2">EVENT CONTROL</h2>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        <p className="text-cyan-300/70 font-mono text-xs mt-2">Toggle categories to activate</p>
      </div>

      {/* System Status
      <div className="mb-4 lg:mb-6 p-3 lg:p-4 bg-black/40 rounded-lg border border-cyan-500/20">
        <div className="flex items-center justify-between mb-2">
          <span className="text-cyan-400 font-mono text-sm">SYSTEM STATUS</span>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-400"></div>
          </div>
        </div>
        <div className="text-cyan-400/80 font-mono text-xs">
          ONLINE - {Object.values(activeSwitches).filter(Boolean).length}/{eventCategories.length} ACTIVE
        </div>
      </div> */}

      {/* Event Category Switches */}
      <div className="space-y-3 lg:space-y-4">
        {eventCategories.map((category) => (
          <CategorySwitch
            key={category.id}
            category={category}
            isActive={activeSwitches[category.id] || false}
            onToggle={() => onToggleSwitch(category.id)}
          />
        ))}
      </div>
    </div>
  )
}

function CategorySwitch({ category, isActive, onToggle }: {
  category: any
  isActive: boolean
  onToggle: () => void
}) {
  // Convert category titles to single words for better readability
  const getShortTitle = (title: string) => {
    const titleMap: Record<string, string> = {
      'Technical Events': 'Technical',
      'Workshops': 'Workshops',
      'Cultural Events': 'Cultural', 
      'Competitions': 'Competitions',
      'Exhibitions': 'Exhibitions',
      'Networking': 'Networking'
    }

    return titleMap[title] || title
  }

  return (
    <div 
      onClick={onToggle}
      className={`p-3 lg:p-4 rounded-lg border transition-all duration-300 cursor-pointer relative overflow-hidden group ${
        isActive 
          ? 'bg-cyan-500/10 border-cyan-400/70' 
          : 'border-cyan-500/60 hover:border-cyan-400/80'
      }`}
    >
      {/* Base cyan ray effect for switch sections */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(0,255,255,0.2) 50%, transparent 70%)',
          animation: 'sectionCyanRay 6s ease-in-out infinite',
          transform: 'translateX(-100%)',
          animationDelay: `${Math.random() * 4}s`
        }}
      ></div>
      
      {/* Enhanced hover cyan effect with higher intensity */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
        style={{
          background: 'linear-gradient(45deg, transparent 20%, rgba(0,255,255,0.5) 50%, transparent 80%)',
          animation: 'sectionCyanRay 2s ease-in-out infinite',
          transform: 'translateX(-100%)'
        }}
      ></div>

      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-3">
          <span className="text-white font-mono text-xl font-bold">{getShortTitle(category.title)}</span>
        </div>
        <VintageNASASwitch
          isOn={isActive}
          onToggle={() => {}}
          className=""
        />
      </div>
    </div>
  )
}

function DisplayScreen({ activeCategories, selectedCategory, eventCategories, selectedEvent, onEventSelect, onBackToCategory, onCategorySelect, isMobile }: {
  activeCategories: any[]
  selectedCategory: string | null
  eventCategories: any[]
  selectedEvent: any
  onEventSelect: (event: any) => void
  onBackToCategory: () => void
  onCategorySelect: (categoryId: string) => void
  isMobile: boolean
}) {
  const currentCategory = selectedCategory ? eventCategories.find(cat => cat.id === selectedCategory) : null

  const currentEvents = selectedCategory ? eventsDatabase[selectedCategory] || [] : []

  return (
    <div className="h-full flex items-center justify-center">
      <VintageCRTMonitor isPoweredOn={true}>
        {selectedEvent ? (
          <CRTEventDetailModal event={selectedEvent} onBack={onBackToCategory} selectedCategory={selectedCategory} />
        ) : (
          <>
            {/* CONVERGENCE 2K26 Event Management System */}
            <div className="h-full overflow-auto">
              {/* Header */}
              <div className="text-center mb-4 md:mb-6">
                <h1 className="text-xl md:text-3xl font-bold mb-2 md:mb-3">
                  <span className="text-cyan-400 font-mono">CONVERGENCE</span>{' '}
                  <span className="text-cyan-300">2K25R</span>
                </h1>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-2 md:mb-3"></div>
                <p className="text-cyan-300/80 font-mono text-sm">
                  {isMobile ? 'TAP CATEGORY TO VIEW EVENTS' : 'Event Management System v2.0.26'}
                </p>
              </div>

              {/* Mobile: Show app launcher, Desktop: Show system status */}
              {isMobile ? (
                // Mobile: Only show app launcher when no category is selected
                !selectedCategory ? (
                  <CRTMobileAppLauncher 
                    eventCategories={eventCategories}
                    onCategorySelect={onCategorySelect}
                  />
                ) : null
              ) : (
                <>
                  {/* System Status */}
                  <div className="mb-3 md:mb-4 p-2 md:p-3 border border-cyan-400/30 rounded">
                    <div className="flex justify-between items-center mb-1 md:mb-2">
                      <span className="text-cyan-400 font-mono text-sm md:text-base">SYSTEM STATUS</span>
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
                        <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-400"></div>
                      </div>
                    </div>
                    <div className="text-cyan-400/80 font-mono text-sm">
                      ONLINE - {activeCategories.length} ACTIVE SYSTEMS
                    </div>
                  </div>

                  {/* Display Content */}
                  {activeCategories.length === 0 ? (
                    <CRTEmptyState />
                  ) : currentCategory ? (
                    <CRTCategoryDetailView category={currentCategory} events={currentEvents} onEventSelect={onEventSelect} />
                  ) : (
                    <CRTCategoryOverview categories={activeCategories} />
                  )}
                </>
              )}

              {/* Mobile: Show selected category content */}
              {isMobile && selectedCategory && !selectedEvent && (
                <CRTCategoryDetailView 
                  category={currentCategory} 
                  events={currentEvents} 
                  onEventSelect={onEventSelect}
                  onBackToApps={() => onCategorySelect('')}
                />
              )}

              {/* Mobile: Show selected event details */}
              {isMobile && selectedEvent && (
                <CRTEventDetailModal 
                  event={selectedEvent} 
                  onBack={onBackToCategory}
                  showBackToEvents={true}
                  selectedCategory={selectedCategory}
                />
              )}
            </div>
          </>
        )}
      </VintageCRTMonitor>
    </div>
  )
}

function CRTMobileAppLauncher({ eventCategories, onCategorySelect }: {
  eventCategories: any[]
  onCategorySelect: (categoryId: string) => void
}) {
  return (
    <div className="space-y-4">
      <div className="text-cyan-400 font-mono text-base font-bold mb-4 text-center">
        {'>'} EVENT CATEGORIES
      </div>
      
      {/* App Grid */}
      <div className="grid grid-cols-2 gap-3">
        {eventCategories.map((category) => (
          <div
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className="border border-cyan-400/30 rounded p-4 cursor-pointer hover:border-cyan-400/60 hover:bg-cyan-500/10 transition-all text-center relative overflow-hidden"
          >
            {/* Cyan ray effect for individual sections */}
            <div
              className="absolute inset-0 opacity-0 pointer-events-none"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(0,255,255,0.15) 50%, transparent 70%)',
                animation: 'sectionCyanRay 8s ease-in-out infinite',
                transform: 'translateX(-100%)',
                animationDelay: `${Math.random() * 4}s`
              }}
            ></div>
            <div className="text-cyan-400 font-mono text-sm font-bold mb-1">
              {category.title.split(' ')[0]}
            </div>
            <div className="text-cyan-300/70 text-xs mb-2 line-clamp-2">
              {category.desc}
            </div>
            <div className="text-cyan-400 font-mono text-xs">
              [{category.count} events]
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-6">
        <div className="text-cyan-400/60 font-mono text-xs">
          {'>'} Mobile Event Hub v2.0.26
        </div>
      </div>
    </div>
  )
}

function CRTEmptyState() {
  return (
    <div className="flex items-center justify-center h-48">
      <div className="text-center">
        <div className="text-cyan-400 font-mono text-xl mb-4 animate-pulse">
          {'>'} AWAITING INPUT_
        </div>
        <p className="text-cyan-300/60 font-mono text-base">
          [STATUS] Activate event categories
        </p>
        <p className="text-cyan-300/60 font-mono text-base">
          [READY] Use control panel switches
        </p>
        <div className="mt-6 flex justify-center space-x-2">
          <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  )
}

function CRTCategoryOverview({ categories }: { categories: any[] }) {
  return (
    <div className="space-y-3 md:space-y-4">
      <div className="text-cyan-400 font-mono text-sm md:text-base font-bold mb-3 md:mb-4">
        {'>'} ACTIVE SYSTEMS: {categories.length}
      </div>
      
      <div className="space-y-2 md:space-y-3">
        {categories.map((category) => (
          <div 
            key={category.id}
            className="p-2 md:p-3 border border-cyan-400/30 rounded bg-cyan-500/5 relative overflow-hidden"
          >
            {/* Cyan ray effect for switch sections (same intensity as monitor) */}
            <div
              className="absolute inset-0 opacity-0 pointer-events-none"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(0,255,255,0.2) 50%, transparent 70%)',
                animation: 'sectionCyanRay 6s ease-in-out infinite',
                transform: 'translateX(-100%)',
                animationDelay: `${Math.random() * 3}s`
              }}
            ></div>
            <div className="flex items-center justify-between mb-1 md:mb-2">
              <div className="flex items-center space-x-2">
                <div>
                  <div className="text-cyan-400 font-mono font-bold text-sm md:text-base">{category.title}</div>
                  <div className="text-cyan-300/70 text-sm">{category.desc}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-cyan-400 font-mono text-sm">[{category.count}]</div>
                <div className="flex items-center space-x-1 justify-end mt-1">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-400 font-mono text-sm">ON</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CRTCategoryDetailView({ category, events, onEventSelect, onBackToApps }: { 
  category: any
  events: any[]
  onEventSelect: (event: any) => void
  onBackToApps?: () => void
}) {
  return (
    <div className="space-y-3 md:space-y-4">
      {/* Mobile back button */}
      {onBackToApps && (
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBackToApps}
            className="text-cyan-400 hover:text-cyan-300 font-mono text-sm border border-cyan-400/30 px-5 py-2 rounded hover:bg-cyan-500/10 transition-all"
          >
            {'<'} BACK TO APPS
          </button>
        </div>
      )}

      {/* Category Header */}
      <div className="border border-cyan-400/30 rounded p-2 md:p-3 bg-cyan-500/5">
        <div className="flex items-center space-x-2 mb-1 md:mb-2">
          <div>
            <div className="text-cyan-400 font-mono font-bold text-sm md:text-base">{category.title}</div>
            <div className="text-cyan-300/70 text-xs">{category.desc}</div>
          </div>
        </div>
        <div className="text-cyan-400 font-mono text-xs">
          {'>'} {events.length} EVENTS LOADED
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 gap-2 md:gap-3">
        {events.map((event) => (
          <div
            key={event.id}
            onClick={() => onEventSelect(event)}
            className="border border-cyan-400/20 rounded cursor-pointer hover:border-cyan-400/50 hover:bg-cyan-500/5 transition-all overflow-hidden"
          >
            {/* Event Poster */}
            <div className="relative h-24 md:h-32 bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 overflow-hidden">
              {event.poster && (
                <img 
                  src={event.poster} 
                  alt={event.name}
                  className="w-full h-full object-cover opacity-80"
                  onError={(e) => {
                    // Fallback to gradient background if image fails to load
                    e.currentTarget.style.display = 'none';
                  }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute top-2 right-2">
                <div className="px-2 py-1 rounded text-xs font-mono font-bold bg-cyan-500/80 text-white">
                  [OPEN]
                </div>
              </div>
              <div className="absolute bottom-2 left-2 flex items-center space-x-2">
                <div className="text-white">
                  <div className="font-mono text-xs md:text-sm font-bold">{event.name}</div>
                  <div className="text-white/80 text-xs">{event.club}</div>
                </div>
              </div>
            </div>

            {/* Event Content */}
            <div className="p-2 md:p-3">
              <div className="text-cyan-300/80 text-sm mb-1 md:mb-2 line-clamp-2">
                {event.description}
              </div>
              
              <div className="space-y-1 text-sm font-mono">
                <div className="flex justify-between">
                  <span className="text-cyan-400/70">DATE:</span>
                  <span className="text-cyan-400 text-right">{event.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-400/70">TIME:</span>
                  <span className="text-cyan-400 text-right">{event.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-400/70">VENUE:</span>
                  <span className="text-cyan-400 text-right truncate">{event.venue}</span>
                </div>
              </div>
              
              <div className="mt-1 md:mt-2 text-center">
                <span className="text-cyan-400 text-sm">{'>'} CLICK FOR DETAILS</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


function CRTEventDetailModal({ event, onBack, showBackToEvents, selectedCategory }: { 
  event: any, 
  onBack: () => void,
  showBackToEvents?: boolean,
  selectedCategory?: string | null
}) {
  return (
    <div className="h-full overflow-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <button
          onClick={onBack}
          className="text-cyan-400 hover:text-cyan-300 font-mono text-xs md:text-sm border border-cyan-400/30 px-5 py-2 rounded hover:bg-cyan-500/10 transition-all"
        >
          {'<'} {showBackToEvents ? 'BACK TO EVENTS' : 'BACK'}
        </button>
        <div className="text-cyan-400 font-mono text-xs">EVENT DETAILS</div>
      </div>

      {/* Event Header */}
      <div className="text-center mb-4 md:mb-6 border border-cyan-400/30 rounded p-3 md:p-4 bg-cyan-500/5">
        {/* Event Poster */}
        {event.poster && (
          <div className="relative h-32 md:h-48 mb-3 md:mb-4 rounded overflow-hidden">
            <img 
              src={event.poster} 
              alt={event.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Hide image container if it fails to load
                e.currentTarget.parentElement!.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        )}
        
        <h1 className="text-cyan-400 font-mono text-sm md:text-lg font-bold mb-1 md:mb-2">{event.name}</h1>
        <p className="text-cyan-300/70 text-xs md:text-sm">Organized by {event.club}</p>
        <div className="inline-block px-2 py-1 rounded mt-2 text-xs font-mono bg-cyan-500/20 text-cyan-400">
          [OPEN]
        </div>
      </div>

      {/* Event Details Grid */}
      <div className="space-y-4">
        {/* Description */}
        <div className="border border-cyan-400/20 rounded p-3 bg-cyan-500/5">
          <h3 className="text-cyan-400 font-mono text-sm font-bold mb-2">{'>'} DESCRIPTION</h3>
          <p className="text-cyan-300 text-sm leading-relaxed">{event.description}</p>
        </div>

        {/* Event Info */}
        <div className="border border-cyan-400/20 rounded p-3 bg-cyan-500/5">
          <h3 className="text-cyan-400 font-mono text-sm font-bold mb-3">{'>'} EVENT DETAILS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm font-mono">
            <div className="flex justify-between">
              <span className="text-cyan-300/70">DATE:</span>
              <span className="text-cyan-300">{event.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cyan-300/70">TIME:</span>
              <span className="text-cyan-300">{event.time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cyan-300/70">VENUE:</span>
              <span className="text-cyan-300">{event.venue}</span>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="border border-cyan-400/20 rounded p-3 bg-cyan-500/5">
          <h3 className="text-cyan-400 font-mono text-sm font-bold mb-3">{'>'} REQUIREMENTS</h3>
          <div className="space-y-1">
            {event.requirements?.map((req: string, index: number) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span className="text-cyan-300 text-sm">{req}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Prizes - Only show for hackathons and competitions */}
        {selectedCategory && (selectedCategory === 'hackathons' || selectedCategory === 'competitions' || selectedCategory === 'presentations') && (
          <div className="border border-cyan-400/20 rounded p-3 bg-cyan-500/5">
            <h3 className="text-cyan-400 font-mono text-sm font-bold mb-3">{'>'} PRIZES & REWARDS</h3>
            <div className="space-y-1">
              {event.prizes?.map((prize: string, index: number) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-cyan-400 font-bold">{index + 1}.</span>
                  <span className="text-cyan-300 text-sm">{prize}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact */}
        <div className="border border-cyan-400/20 rounded p-3 bg-cyan-500/5">
          <h3 className="text-cyan-400 font-mono text-sm font-bold mb-2">{'>'} CONTACT</h3>
          <p className="text-cyan-300 text-sm font-mono">{event.contact}</p>
        </div>

        {/* Register Button */}
        <button 
          onClick={() => window.open('https://axisbpayments.razorpay.com/pl_Pq0BHPyKE4qna8/view', '_blank')}
          className="w-full bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400 text-cyan-400 font-mono font-bold py-3 px-6 rounded transition-all"
        >
          {'>'} REGISTER NOW
        </button>
      </div>
      
      {/* CSS Animation styles */}
      <style>{`
        @keyframes sparkle {
          0%, 100% { 
            opacity: 0;
            transform: scale(0);
          }
          50% { 
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes sectionCyanRay {
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

        .animate-sparkle {
          animation: sparkle 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

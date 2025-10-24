type Page = 'home' | 'about' | 'events' | 'themes' | 'clubs' | 'contact'

export default function Header({
  current,
  onNavigate,
}: {
  current: Page
  onNavigate: (p: Page) => void
}) {
  const nav = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About' },
    { key: 'events', label: 'Events' },
    { key: 'themes', label: 'Themes' },
    { key: 'clubs', label: 'Organised by' },
    { key: 'contact', label: 'Contact' },
  ] as const

  return (
    <header className="bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            C
          </div>
          <div className="text-xl font-bold text-white tracking-tight">Convergence</div>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key as Page)}
              className={`py-2.5 px-5 rounded-lg text-sm font-medium transition-all duration-200 ${
                current === item.key 
                  ? 'bg-white/15 text-white' 
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="md:hidden">
          <select
            value={current}
            onChange={(e) => onNavigate(e.target.value as Page)}
            className="bg-white/10 text-white border border-white/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <option value="home">Home</option>
            <option value="about">About</option>
            <option value="events">Events</option>
            <option value="themes">Themes</option>
            <option value="clubs">Organised by</option>
            <option value="contact">Contact</option>
          </select>
        </div>
      </div>
    </header>
  )
}

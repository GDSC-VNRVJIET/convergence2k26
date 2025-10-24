import { StarsBackground } from '@/components/StarsBackground';

export default function Events() {
  const events = [
    { 
      title: 'Hackathon', 
      desc: '24-hour coding marathon to build innovative solutions',
      icon: '💻'
    },
    { 
      title: 'Tech Talks', 
      desc: 'Industry leaders and researchers share insights',
      icon: '🎤'
    },
    { 
      title: 'Workshops', 
      desc: 'Hands-on sessions with mentors and experts',
      icon: '🛠️'
    },
    { 
      title: 'Competitions', 
      desc: 'Showcase your skills and win exciting prizes',
      icon: '🏆'
    },
    { 
      title: 'Networking', 
      desc: 'Connect with peers, mentors, and recruiters',
      icon: '🤝'
    },
    { 
      title: 'Product Demos', 
      desc: 'Present your projects to industry professionals',
      icon: '🚀'
    },
  ]

  return (
    <StarsBackground className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white text-center">Events</h2>
        <p className="text-gray-400 text-center mb-12 text-lg">Exciting activities designed to challenge and inspire</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e) => (
            <div key={e.title} className="group p-8 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div className="text-5xl mb-4">{e.icon}</div>
              <h4 className="text-2xl font-bold mb-3 text-white">{e.title}</h4>
              <p className="text-gray-400 leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </StarsBackground>
  )
}

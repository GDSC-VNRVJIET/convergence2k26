// Events and Categories Data for Convergence 2K26
// This file contains all event categories and their respective events
// You can easily modify, add, or remove categories and events here

export interface Event {
  id: number
  name: string
  description: string
  time: string
  date: string
  venue: string
  club: string
  poster: string
  prizes: string[]
  requirements: string[]
  contact: string
  registerUrl: string
}

export interface Category {
  id: string
  title: string
  desc: string
  icon: string
  gradient: string
  bgGlow: string
  count: number
}

// Event Categories Configuration
export const eventCategories: Category[] = [
  {
    id: 'hackathons',
    title: 'Hackathons',
    desc: '24-hour coding marathons and innovation challenges',
    icon: '💻',
    gradient: 'from-blue-500 to-cyan-500',
    bgGlow: 'shadow-blue-500/20',
    count: 3
  },
  {
    id: 'competitions',
    title: 'Competitions',
    desc: 'Quiz contests, coding battles, and skill challenges',
    icon: '🏆',
    gradient: 'from-orange-500 to-red-500',
    bgGlow: 'shadow-orange-500/20',
    count: 4
  },
  {
    id: 'workshops',
    title: 'Workshops',
    desc: 'Learning sessions, tech talks, and hands-on training',
    icon: '🛠️',
    gradient: 'from-purple-500 to-pink-500',
    bgGlow: 'shadow-purple-500/20',
    count: 4
  },
  {
    id: 'presentations',
    title: 'Presentations',
    desc: 'Project showcases, startup pitches, and tech talks',
    icon: '🎯',
    gradient: 'from-green-500 to-emerald-500',
    bgGlow: 'shadow-green-500/20',
    count: 3
  },
  {
    id: 'fun-events',
    title: 'Fun Events',
    desc: 'Entertainment, cultural activities, and networking',
    icon: '🎭',
    gradient: 'from-indigo-500 to-purple-500',
    bgGlow: 'shadow-indigo-500/20',
    count: 3
  }
]

// All Events Database organized by category
export const eventsDatabase: Record<string, Event[]> = {
  hackathons: [
    {
      id: 1,
      name: 'Code Combat Championship',
      description: 'A high-intensity competitive programming contest featuring algorithmic challenges, data structures, and real-time problem solving. Participants will face multiple rounds of increasingly difficult coding problems.',
      time: '10:00 AM - 2:00 PM',
      date: 'Nov 15, 2025',
      venue: 'Computer Lab A & B',
      club: 'Google Developer Student Club',
      poster: 'https://wallpapers.com/images/hd/coding-background-9izlympnd0ovmpli.jpg',
      prizes: ['₹25,000', '₹15,000', '₹10,000'],
      requirements: ['Laptop required', 'Any programming language', 'College ID'],
      contact: 'gdsc@vnrvjiet.in',
      registerUrl: 'https://forms.google.com/hackathon-registration'
    },
    {
      id: 2,
      name: 'AI Innovation Hackathon',
      description: 'Build innovative AI solutions for real-world problems. Teams will have 24 hours to create, develop, and present their AI-powered applications with mentorship from industry experts.',
      time: '9:00 AM Day 1 - 9:00 AM Day 2',
      date: 'Nov 16-17, 2025',
      venue: 'Innovation Hub',
      club: 'AI & ML Club',
      poster: 'https://via.placeholder.com/400x250/1e40af/ffffff?text=AI+HACKATHON',
      prizes: ['₹50,000', '₹30,000', '₹20,000'],
      requirements: ['Team of 3-4', 'Laptop required', 'Basic AI knowledge'],
      contact: 'aiml@vnrvjiet.in',
      registerUrl: 'https://forms.google.com/ai-hackathon-registration'
    },
    {
      id: 3,
      name: 'Blockchain BuildThon',
      description: 'Create decentralized applications and blockchain solutions. Focus on cryptocurrency, smart contracts, and Web3 technologies.',
      time: '10:00 AM - 10:00 PM',
      date: 'Nov 18, 2025',
      venue: 'Blockchain Lab',
      club: 'Blockchain Society',
      poster: 'https://via.placeholder.com/400x250/7c3aed/ffffff?text=BLOCKCHAIN+BUILDTHON',
      prizes: ['₹40,000', '₹25,000', '₹15,000'],
      requirements: ['Team of 2-4', 'Basic blockchain knowledge', 'Laptop with development setup'],
      contact: 'blockchain@vnrvjiet.in',
      registerUrl: 'https://forms.google.com/blockchain-buildthon-registration'
    }
  ],

  competitions: [
    {
      id: 4,
      name: 'Quiz Master 2K26',
      description: 'The ultimate tech quiz competition covering programming, current tech trends, startups, and general technology knowledge. Multiple elimination rounds leading to the grand finale.',
      time: '11:00 AM - 3:00 PM',
      date: 'Nov 22, 2025',
      venue: 'Main Auditorium',
      club: 'Quiz Club',
      poster: 'https://via.placeholder.com/400x250/f59e0b/ffffff?text=QUIZ+MASTER',
      prizes: ['₹20,000', '₹12,000', '₹8,000'],
      requirements: ['Team of 2-3', 'College ID', 'Registration fee: ₹100'],
      contact: 'quiz@vnrvjiet.in',
      registerUrl: 'https://forms.google.com/quiz-master-registration'
    },
    {
      id: 5,
      name: 'Coding Sprint Challenge',
      description: 'Fast-paced competitive programming contest with live leaderboards. Test your algorithmic skills under time pressure.',
      time: '2:00 PM - 5:00 PM',
      date: 'Nov 19, 2025',
      venue: 'Computer Lab C',
      club: 'Competitive Programming Club',
      poster: 'https://via.placeholder.com/400x250/059669/ffffff?text=CODING+SPRINT',
      prizes: ['₹15,000', '₹10,000', '₹5,000'],
      requirements: ['Individual participation', 'Programming experience', 'Laptop required'],
      contact: 'cp@vnrvjiet.in',
      registerUrl: 'https://forms.google.com/coding-sprint-registration'
    },
    {
      id: 6,
      name: 'Cyber Security CTF',
      description: 'Capture The Flag competition focusing on cybersecurity challenges including cryptography, web security, and network analysis.',
      time: '10:00 AM - 6:00 PM',
      date: 'Nov 20, 2025',
      venue: 'Security Lab',
      club: 'Cyber Security Club',
      poster: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=CYBER+CTF',
      prizes: ['₹30,000', '₹20,000', '₹10,000'],
      requirements: ['Team of 2-4', 'Basic security knowledge', 'Laptop with Kali Linux'],
      contact: 'cybersec@vnrvjiet.in',
      registerUrl: 'https://forms.google.com/ctf-registration'
    },
    {
      id: 7,
      name: 'Design Battle Royale',
      description: 'UI/UX design competition where participants create innovative designs for given problem statements within limited time.',
      time: '9:00 AM - 1:00 PM',
      date: 'Nov 21, 2025',
      venue: 'Design Studio',
      club: 'Design Thinking Club',
      poster: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=DESIGN+BATTLE',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: ['Individual or team of 2', 'Design software (Figma/Adobe)', 'Creative portfolio'],
      contact: 'design@vnrvjiet.in',
      registerUrl: 'https://forms.google.com/design-battle-registration'
    }
  ],

  workshops: [
    {
      id: 8,
      name: 'React Advanced Patterns',
      description: 'Deep dive into advanced React patterns including compound components, render props, higher-order components, and custom hooks. Led by senior developers from top tech companies.',
      time: '10:00 AM - 1:00 PM',
      date: 'Nov 19, 2025',
      venue: 'Workshop Room 3',
      club: 'Frontend Developers Club',
      poster: 'https://via.placeholder.com/400x250/3b82f6/ffffff?text=REACT+PATTERNS',
      prizes: ['Certificate of completion', 'LinkedIn recommendations'],
      requirements: ['Intermediate React knowledge', 'Laptop with Node.js'],
      contact: 'frontend@vnrvjiet.in',
      registerUrl: 'https://forms.google.com/react-workshop-registration'
    },
    {
      id: 9,
      name: 'Cloud Architecture Masterclass',
      description: 'Learn to design scalable cloud solutions using AWS, Azure, and GCP. Covers microservices, containers, serverless computing, and DevOps best practices.',
      time: '2:00 PM - 5:00 PM',
      date: 'Nov 20, 2025',
      venue: 'Cloud Lab',
      club: 'Cloud Computing Society',
      poster: 'https://via.placeholder.com/400x250/7c3aed/ffffff?text=CLOUD+ARCH',
      prizes: ['AWS Credits', 'Industry certifications'],
      requirements: ['Basic cloud knowledge', 'AWS/Azure account'],
      contact: 'cloud@vnrvjiet.in',
      registerUrl: 'https://forms.google.com/cloud-workshop-registration'
    },
    {
      id: 10,
      name: 'Mobile App Development Bootcamp',
      description: 'Hands-on workshop covering React Native and Flutter for cross-platform mobile app development. Build and deploy a complete app.',
      time: '9:00 AM - 4:00 PM',
      date: 'Nov 23, 2025',
      venue: 'Mobile Dev Lab',
      club: 'Mobile Development Society',
      poster: 'https://via.placeholder.com/400x250/10b981/ffffff?text=MOBILE+BOOTCAMP',
      prizes: ['Play Store publication', 'Internship opportunities'],
      requirements: ['Basic programming knowledge', 'Android/iOS device', 'Laptop required'],
      contact: 'mobile@vnrvjiet.in',
      registerUrl: 'https://forms.google.com/mobile-bootcamp-registration'
    },
    {
      id: 11,
      name: 'Data Science with Python',
      description: 'Comprehensive workshop on data analysis, machine learning, and visualization using Python, Pandas, and Scikit-learn.',
      time: '1:00 PM - 5:00 PM',
      date: 'Nov 24, 2025',
      venue: 'Data Science Lab',
      club: 'Data Science Club',
      poster: 'https://via.placeholder.com/400x250/0891b2/ffffff?text=DATA+SCIENCE',
      prizes: ['Kaggle competition access', 'Dataset resources'],
      requirements: ['Python basics', 'Jupyter notebook setup', 'Statistics knowledge helpful'],
      contact: 'datascience@vnrvjiet.in',
      registerUrl: 'https://forms.google.com/datascience-workshop-registration'
    }
  ],

  presentations: [
    {
      id: 12,
      name: 'Startup Showcase',
      description: 'Present your innovative startup ideas to industry veterans, investors, and potential collaborators. Get feedback, funding opportunities, and mentorship from successful entrepreneurs.',
      time: '10:00 AM - 4:00 PM',
      date: 'Nov 23, 2025',
      venue: 'Exhibition Hall',
      club: 'Entrepreneurship Cell',
      poster: 'https://via.placeholder.com/400x250/10b981/ffffff?text=STARTUP+EXPO',
      prizes: ['Seed funding up to ₹5L', 'Incubation opportunities'],
      requirements: ['Working prototype', 'Business plan', 'Team of 2-5'],
      contact: 'ecell@vnrvjiet.in',
      registerUrl: 'https://forms.google.com/startup-showcase-registration'
    },
    {
      id: 13,
      name: 'Tech Talk Marathon',
      description: 'Student-led technical presentations covering emerging technologies, research projects, and innovative solutions. Share your knowledge with the community.',
      time: '2:00 PM - 6:00 PM',
      date: 'Nov 25, 2025',
      venue: 'Seminar Hall A',
      club: 'Technical Society',
      poster: 'https://via.placeholder.com/400x250/6366f1/ffffff?text=TECH+TALKS',
      prizes: ['Best Speaker Award', 'Conference opportunities'],
      requirements: ['Technical presentation ready', '15-20 minute slot', 'Q&A preparation'],
      contact: 'techsociety@vnrvjiet.in',
      registerUrl: 'https://forms.google.com/tech-talk-registration'
    },
    {
      id: 14,
      name: 'Research Paper Presentation',
      description: 'Academic research presentation session for students to present their research work, findings, and innovations in various technical domains.',
      time: '11:00 AM - 3:00 PM',
      date: 'Nov 26, 2025',
      venue: 'Research Center',
      club: 'Research Society',
      poster: 'https://via.placeholder.com/400x250/059669/ffffff?text=RESEARCH+PAPERS',
      prizes: ['Publication opportunities', 'Research grants'],
      requirements: ['Original research work', 'Peer review completed', 'Academic format'],
      contact: 'research@vnrvjiet.in',
      registerUrl: 'https://forms.google.com/research-presentation-registration'
    }
  ],

  'fun-events': [
    {
      id: 15,
      name: 'Tech Talent Showcase',
      description: 'A platform for students to showcase their unique talents that blend technology with creativity. From digital art to music production, coding live performances to tech poetry.',
      time: '6:00 PM - 9:00 PM',
      date: 'Nov 21, 2025',
      venue: 'Main Auditorium',
      club: 'Cultural Committee',
      poster: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=TALENT+SHOW',
      prizes: ['₹15,000', '₹10,000', '₹5,000'],
      requirements: ['Original content only', 'Max 5 minutes per act'],
      contact: 'cultural@vnrvjiet.in',
      registerUrl: 'https://forms.google.com/talent-showcase-registration'
    },
    {
      id: 16,
      name: 'Gaming Tournament',
      description: 'Multi-game esports tournament featuring popular games like CS:GO, Valorant, and mobile games. Team and individual competitions with live streaming.',
      time: '1:00 PM - 8:00 PM',
      date: 'Nov 24, 2025',
      venue: 'Gaming Arena',
      club: 'Esports Club',
      poster: 'https://via.placeholder.com/400x250/7c2d12/ffffff?text=GAMING+TOURNAMENT',
      prizes: ['₹25,000', '₹15,000', '₹8,000'],
      requirements: ['Gaming peripherals', 'Team registration', 'Game-specific skills'],
      contact: 'esports@vnrvjiet.in',
      registerUrl: 'https://forms.google.com/gaming-tournament-registration'
    },
    {
      id: 17,
      name: 'Industry Connect Networking',
      description: 'Network with industry professionals, alumni, and potential employers. Speed networking sessions, career guidance, and opportunities to build valuable professional connections.',
      time: '4:00 PM - 7:00 PM',
      date: 'Nov 25, 2025',
      venue: 'Networking Lounge',
      club: 'Professional Development Club',
      poster: 'https://via.placeholder.com/400x250/0891b2/ffffff?text=NETWORKING',
      prizes: ['Job opportunities', 'Internship offers'],
      requirements: ['Professional attire', 'Updated resume', 'LinkedIn profile'],
      contact: 'careers@vnrvjiet.in',
      registerUrl: 'https://forms.google.com/networking-registration'
    }
  ]
}

// Helper function to get events by category
export const getEventsByCategory = (categoryId: string): Event[] => {
  return eventsDatabase[categoryId] || []
}

// Helper function to get all events
export const getAllEvents = (): Event[] => {
  return Object.values(eventsDatabase).flat()
}

// Helper function to get event by ID
export const getEventById = (eventId: number): Event | undefined => {
  return getAllEvents().find(event => event.id === eventId)
}

// Helper function to add new category (for future use)
export const addNewCategory = (category: Category): void => {
  eventCategories.push(category)
  eventsDatabase[category.id] = []
}

// Helper function to add event to category
export const addEventToCategory = (categoryId: string, event: Event): void => {
  if (eventsDatabase[categoryId]) {
    eventsDatabase[categoryId].push(event)
    // Update count in category
    const categoryIndex = eventCategories.findIndex(cat => cat.id === categoryId)
    if (categoryIndex !== -1) {
      eventCategories[categoryIndex].count = eventsDatabase[categoryId].length
    }
  }
}
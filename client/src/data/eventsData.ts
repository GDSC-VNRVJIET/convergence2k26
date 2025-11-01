// Events and Categories Data for Convergence 2K26
// This file contains all event categories and their respective events
// You can easily modify, add, or remove categories and events here

import SoftwareHackathon from '../assets/Software Hackathon .jpg';
import CaptureTheCircuit from '../assets/Capture the Circuit.jpg';
import STMWorkshop from '../assets/STM32 Workshop.png';
import FlowFusionVLSI from '../assets/Flow Fusion VLSI.png';
import CursedChamber from '../assets/Cursed Chamber.png';
import CodeRush from '../assets/Code Rush.png';
import CodingContest from '../assets/Coding Contest.png';
import ArduinoAndRaspberry from '../assets/Ardhuino and Raspberry Pi.jpg';

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
      name: 'Campus Automation Hackathon',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'Computer Society of India, VJ Data Quests',
      poster: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=CYBER+CTF',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: [],
      contact: '',
      registerUrl: ''
    },
    {
      id: 2,
      name: 'Software Hackathon',
      description: 'A 2-day software hackathon driving innovation and real-world tech solutions.',
      time: '',
      date: 'Nov 3-4, 2025',
      venue: '',
      club: 'Computer Society of India, VJ Data Quests',
      poster: SoftwareHackathon,
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: [],
      contact: 'K. Aakash : 9494895929',
      registerUrl: 'https://unstop.com/hackathons/software-hackathon-convergence2k25r-vallurupalli-nageswara-rao-vignana-jyothi-institute-of-engineering-techno-1578251'
    },
    {
      id: 3,
      name: 'Hardware Hackathon',
      description: '',
      time: '',
      date: 'Nov 3-4, 2025',
      venue: '',
      club: 'Computer Society of India, VJ Data Quests',
      poster: 'https://drive.google.com/file/d/1jX9NDH5sQl1XMnZoA46wr_corrMQkgiv/view?usp=drivesdk',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: [],
      contact: 'Pranav Pissay –  90004 03390, P Sai Vardhan –  90141 51758, Sameer Sk –  88858 81835',
      registerUrl: 'https://unstop.com/p/convergence-2k25-convergence-2k25r-vnr-vignana-jyothi-institute-of-engineering-and-technology-1579734'
    },
  ],

  competitions: [
    {
      id: 4,
      name: 'Simusolve Challenge',
      description: 'Matlab Circuit Debugging workshop and competition',
      time: '10:00 AM - 4:00 PM',
      date: 'Nov 3, 2025',
      venue: 'C-208',
      club: 'IE(I) and Matheletes',
      poster: 'https://wallpapers.com/images/hd/coding-background-9izlympnd0ovmpli.jpg',
      prizes: ['₹25,000', '₹15,000', '₹10,000'],
      requirements: [],
      contact: 'Srikar Burugula - 8328292124',
      registerUrl: ''
    },
    {
      id: 5,
      name: 'Impact Engineering Challenge',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'ISIE',
      poster: 'https://via.placeholder.com/400x250/059669/ffffff?text=CODING+SPRINT',
      prizes: ['₹15,000', '₹10,000', '₹5,000'],
      requirements: [],
      contact: '',
      registerUrl: ''
    },
    {
      id: 6,
      name: 'ML Challenge',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'MIH',
      poster: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=CYBER+CTF',
      prizes: ['₹30,000', '₹20,000', '₹10,000'],
      requirements: [],
      contact: '',
      registerUrl: ''
    },
    {
      id: 7,
      name: 'Capture The Circuit',
      description: 'Capture The Circuit (CTC) is a thrilling trivia battle of logic, speed, and teamwork with five intense rounds and exciting eliminations. Only the sharpest minds will capture the circuit!',
      time: '10:00 AM - 4:00 PM',
      date: 'Nov 4, 2025',
      venue: 'E-313',
      club: 'ISOI',
      poster: CaptureTheCircuit,
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: ['Individual or team of 2', 'Design software (Figma/Adobe)', 'Creative portfolio'],
      contact: 'Meghavarsha - 9100183418',
      registerUrl: 'https://unstop.com/o/xmPEN5y?lb=IdiSSrkd&utm_medium=Share&utm_source=isoiins34556&utm_campaign=Quizzes'
    },
    {
      id: 8,
      name: 'Cad - A - Thon',
      description: 'CAD software design competition',
      time: '10:00 AM - 1:00 PM',
      date: 'Nov 3-4, 2025',
      venue: 'D-313',
      club: 'ASME',
      poster: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=CYBER+CTF',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: [],
      contact: 'Siddarth - 8978547432',
      registerUrl: ''
    },
    {
      id: 9,
      name: 'Room Style capture the flag',
      description: '',
      time: '',
      date: 'Nov 4, 2025',
      venue: '',
      club: 'Google Developer Groups on Campus',
      poster: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=CYBER+CTF',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: [],
      contact: '',
      registerUrl: ''
    },
    {
      id: 10,
      name: 'Code Rush',
      description: 'A 30-minute coding contest with only C language for 1st and 2nd-year students to test coding skills and speed.',
      time: '2:30 PM - 3:00 PM',
      date: 'Nov 4, 2025',
      venue: 'B-314,315,316,317 & A-306',
      club: 'Turing Hut',
      poster: CodeRush,
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: [],
      contact: 'Shailesh : 6300481860, Balaji : 9642296219',
      registerUrl: 'https://events.vjstartup.com/register/57'
    },
    {
      id: 11,
      name: 'RoboArena',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'IEEE',
      poster: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=CYBER+CTF',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: [],
      contact: '',
      registerUrl: ''
    },
    {
      id: 12,
      name: 'Connect - A - Thon',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'IEEE',
      poster: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=CYBER+CTF',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: [],
      contact: '',
      registerUrl: ''
    },    
    {
      id: 13,
      name: 'Escape Room',
      description: 'An immersive experience of horror story and puzzles',
      time: '10:00 AM - 5:00 PM',
      date: 'Nov 3-4, 2025',
      venue: 'B-213',
      club: 'IETE',
      poster: 'https://drive.google.com/file/d/1VrN372QMCK8fNIuTo0dFGfEyq1_TJUC4/view?usp=drivesdk',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: [],
      contact: 'Soumya-9347275202,Preetham 9666673745',
      registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc6AJb6F0EbjO1fwV1LLYd3Y1euP40VEz0kNOBRzNfxAcCWgg/viewform'
    },
    {
      id: 14,
      name: 'BLUE PRINT BATTLE',
      description: 'Drafting a complete Building Plan using AUTOCAD',
      time: '10:00 AM - 4:00 PM',
      date: 'Nov 3-4, 2025',
      venue: 'D-217',
      club: 'ICI - IGBC',
      poster: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=CYBER+CTF',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: ['Laptops required'],
      contact: 'Purushotham-7702436949, Lekhya-7569265644',
      registerUrl: 'https://events.vjstartup.com/register/80'
    },
    {
      id: 15,
      name: 'Water Rocket Challenge',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'Kaksya Sastra',
      poster: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=CYBER+CTF',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: [],
      contact: '',
      registerUrl: ''
    },
    {
      id: 16,
      name: 'Space Debate',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'Kaksya Sastra',
      poster: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=CYBER+CTF',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: [],
      contact: '',
      registerUrl: ''
    },
    {
      id: 17,
      name: 'Save the Ocean',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'Creative Arts',
      poster: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=CYBER+CTF',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: [],
      contact: '',
      registerUrl: ''
    },
    {
      id: 18,
      name: 'Street Art',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'Creative Arts',
      poster: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=CYBER+CTF',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: [],
      contact: '',
      registerUrl: ''
    },
    {
      id: 19,
      name: 'Robot Competition',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'Robotics Club',
      poster: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=CYBER+CTF',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: [],
      contact: '',
      registerUrl: ''
    },
    {
      id: 20,
      name: 'Maze Solving Competiton',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'Robotics Club',
      poster: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=CYBER+CTF',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: [],
      contact: '',
      registerUrl: ''
    },
    {
      id: 21,
      name: 'Gamexpo',
      description: 'Showcasing all types of their own built games.',
      time: '11:00 AM - 4:00 PM',
      date: 'Nov 3, 2025',
      venue: 'E 238',
      club: 'Xplor XR',
      poster: '',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: ['Laptops required'],
      contact: 'Lohith - 8978019972',
      registerUrl: 'https://bit.ly/4qop5VH'
    },
    {
      id: 22,
      name: 'Capture the Flag (VNR Cyber Warzone 3.0)',
      description: 'Cyber Warzone 3.0 is a thrilling intercollegiate Capture the Flag competition designed to challenge participants’ cybersecurity skills across diverse domains — from cryptography and forensics to reverse engineering and OSINT. Compete, collaborate, and showcase your ethical hacking expertise to emerge as the ultimate cyber champion!',
      time: '10:00 AM - 8:00 PM',
      date: 'Nov 3, 2025',
      venue: 'E-401,402,403,501,502',
      club: 'VJ Garuda Vigilance',
      poster: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=CYBER+CTF',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: ['Laptops required'],
      contact: 'Raghavendra Sai-9059494181, N. Sri Prathamesh-9381665353',
      registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScJ5LtjYg5GhSYU_EXfEJSCA11PG1GbtuHcGNilE4V0Xqju5g/viewform'
    },
    {
      id: 23,
      name: 'Valorant',
      description: 'Cyber Warzone 3.0 is a thrilling intercollegiate Capture the Flag competition designed to challenge participants’ cybersecurity skills across diverse domains — from cryptography and forensics to reverse engineering and OSINT. Compete, collaborate, and showcase your ethical hacking expertise to emerge as the ultimate cyber champion!',
      time: '',
      date: '',
      venue: '',
      club: 'VJ Garuda Vigilance',
      poster: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=CYBER+CTF',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: ['Laptops required'],
      contact: '',
      registerUrl: ''
    },
    {
      id: 24,
      name: 'Hit reloaded',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'VJ Data Questers',
      poster: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=CYBER+CTF',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: [],
      contact: '',
      registerUrl: ''
    },
    {
      id: 25,
      name: 'Tech Tournment',
      description: 'A unique 1 vs 1 technical event featuring qualifiera round followed by knockout rounds, where students compete year-wise to advance and win.',
      time: '11:00 AM - 4:00 PM',
      date: 'Nov 3, 2025',
      venue: 'IT Department Labs',
      club: 'ACM',
      poster: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=CYBER+CTF',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: [],
      contact: 'Renuka - +91 97015 00814, Abhinav - +91 73967 32009',
      registerUrl: 'https://unstop.com/p/tech-tournament-vallurupalli-nageswara-rao-vignana-jyothi-institute-of-engineering-technology-telangana-1578635'
    },
    {
      id: 26,
      name: 'Speak to Lead',
      description: 'impromptu speaking competition ',
      time: '11:00 AM - 2:30 PM',
      date: 'Nov 3, 2025',
      venue: 'B Block Seminar Hall',
      club: 'Toast Masters',
      poster: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=CYBER+CTF',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: [],
      contact: 'Mounish: +91 93917 75862',
      registerUrl: ''
    },
    {
      id: 27,
      name: 'AI Ad Mania',
      description: 'Participants need to make use of AI tools to promote the selected brands creatively.',
      time: '10:00 AM - 1:00 PM',
      date: 'Nov 4, 2025',
      venue: 'E-413',
      club: 'VJ ARC',
      poster: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=CYBER+CTF',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: ['Laptops required'],
      contact: 'Preetham- 9550086891',
      registerUrl: ''
    },
    {
      id: 28,
      name: 'బడ్జెట్ సమావేశాలు',
      description: 'Mock state budget debate',
      time: '1:00 PM - 4:00 PM',
      date: 'Nov 3, 2025',
      venue: 'E-037',
      club: 'NSS, VNR SF, VJSV',
      poster: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=CYBER+CTF',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: ['Laptops required'],
      contact: 'Geethika Rao +91 6303 724 808',
      registerUrl: 'https://forms.gle/C4utAij6KdvwJ5J8A'
    },
    {
      id: 29,
      name: 'మనోలేఖ',
      description: 'Gratitutde letter to a reknowned social reformer',
      time: '1:00 PM - 4:00 PM',
      date: 'Nov 3, 2025',
      venue: 'E-038',
      club: 'NSS, VNR SF, VJSV',
      poster: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=CYBER+CTF',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: ['Laptops required'],
      contact: 'Geethika Rao +91 6303 724 808',
      registerUrl: 'https://forms.gle/C4utAij6KdvwJ5J8A'
    },
    {
      id: 30,
      name: 'అనగనగా...',
      description: 'Story telling about social issues',
      time: '1:00 PM - 4:00 PM',
      date: 'Nov 4, 2025',
      venue: 'E-037',
      club: 'NSS, VNR SF, VJSV',
      poster: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=CYBER+CTF',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: ['Laptops required'],
      contact: 'Geethika Rao +91 6303 724 808',
      registerUrl: 'https://forms.gle/C4utAij6KdvwJ5J8A'
    },
    {
      id: 31,
      name: 'యక్ష ప్రశ్నలు',
      description: 'Bowl out game by answering questions',
      time: '10:00 AM - 4:00 PM',
      date: 'Nov 4, 2025',
      venue: 'SAC Stage',
      club: 'NSS, VNR SF, VJSV',
      poster: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=CYBER+CTF',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: ['Laptops required'],
      contact: 'Sahruday Rao +91 93468 91248',
      registerUrl: 'https://forms.gle/C4utAij6KdvwJ5J8A'
    },
    {
      id: 32,
      name: 'పాచికల ప్రయాణం',
      description: 'Snake and ladder replica with a touch of History and Mythology',
      time: '10:00 AM - 4:00 PM',
      date: 'Nov 4, 2025',
      venue: 'Sinti Stage',
      club: 'NSS, VNR SF, VJSV',
      poster: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=CYBER+CTF',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: ['Laptops required'],
      contact: 'Sahruday Rao +91 93468 91248',
      registerUrl: 'https://forms.gle/ormdXpBFMsxX7VSn7'
    },
    {
      id: 33,
      name: 'సినీ స్తంభాలు',
      description: 'Movie themed Tower of Hanoi game ',
      time: '10:00 AM - 4:00 PM',
      date: 'Nov 4, 2025',
      venue: 'SAC Stage',
      club: 'NSS, VNR SF, VJSV',
      poster: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=CYBER+CTF',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: ['Laptops required'],
      contact: 'Sahruday Rao +91 93468 91248',
      registerUrl: 'https://forms.gle/jrTReD77FKA5qtX76'
    },
    {
      id: 34,
      name: 'Cursed Chamber',
      description: 'Escape room',
      time: '10:00 AM - 4:00 PM',
      date: 'Nov 3, 2025',
      venue: 'B213',
      club: 'IETE',
      poster: CursedChamber,
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: ['Laptops required'],
      contact: 'Sahruday Rao +91 93468 91248',
      registerUrl: 'https://forms.gle/jrTReD77FKA5qtX76'
    },
    {
      id: 65,
      name: 'Coding Contest',
      description: 'A coding contest consisiting with two rounds i.e., Online Qualifier Round and Onsite Final Round',
      time: 'Round 1: Nov 2, 2025 - 8:00 PM to 9:30 PM\n Round 2: Nov 4 - 10:30 AM to 12:30 PM',
      date: 'Nov 3-4, 2025',
      venue: 'B-314, 315, 316, 317',
      club: 'Turing Hut',
      poster: CodingContest,
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: ['Laptops required'],
      contact: 'Sahruday Rao +91 93468 91248',
      registerUrl: 'https://forms.gle/jrTReD77FKA5qtX76'
    }
  ],

  // workshops
  workshops: [
    {
      id: 35,
      name: 'Gears and Greases',
      description: 'A hands on experiennce to deep dive into the engine and its components',
      time: '1:00 PM - 3:30 PM, 10:00 AM - 1:00 PM',
      date: 'Nov 3-4, 2025',
      venue: 'ASME Workshop',
      club: 'ASME',
      poster: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=CYBER+CTF',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: [],
      contact: 'Nehanth - 8247417305',
      registerUrl: ''
    },
    {
      id: 36,
      name: 'Web Dev 101',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'ISTE',
      poster: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=CYBER+CTF',
      prizes: ['₹18,000', '₹12,000', '₹7,000'],
      requirements: ['Laptops required'],
      contact: '',
      registerUrl: ''
    },
    {
      id: 37,
      name: 'Layout & Logic',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'ISIE',
      poster: 'https://via.placeholder.com/400x250/10b981/ffffff?text=MOBILE+BOOTCAMP',
      prizes: ['Play Store publication', 'Internship opportunities'],
      requirements: ['Laptop required'],
      contact: '',
      registerUrl: ''
    },
    {
      id: 38,
      name: 'Automation with AI Agents workshop',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'CSI',
      poster: 'https://via.placeholder.com/400x250/0891b2/ffffff?text=DATA+SCIENCE',
      prizes: [],
      requirements: ['Python basics', 'Jupyter notebook setup', 'Statistics knowledge helpful'],
      contact: '',
      registerUrl: ''
    },
    {
      id: 39,
      name: 'Game Development Workshop',
      description: 'Workshop on unity software',
      time: '11:00 AM - 4:00 PM',
      date: 'Nov 3, 2025',
      venue: 'E 313',
      club: 'Xplor XR',
      poster: 'https://via.placeholder.com/400x250/0891b2/ffffff?text=DATA+SCIENCE',
      prizes: [],
      requirements: ['Laptops required'],
      contact: 'Pranav - 7989357836',
      registerUrl: 'https://forms.gle/PUTSv3ySqt5eFyqG9'
    },
    {
      id: 40,
      name: '3D Print Masters',
      description: 'A workshop on understanding Additive manufacturing techiques and Operation of a 3D printer',
      time: '',
      date: 'Nov 3, 2025',
      venue: 'D-319',
      club: 'ASME',
      poster: 'https://via.placeholder.com/400x250/0891b2/ffffff?text=DATA+SCIENCE',
      prizes: [],
      requirements: ['Laptops required'],
      contact: 'Abhay - 6309662987',
      registerUrl: ''
    },
    {
      id: 41,
      name: 'ML Ops Workshop',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'Google Developers Groups on Campus',
      poster: 'https://via.placeholder.com/400x250/0891b2/ffffff?text=DATA+SCIENCE',
      prizes: [],
      requirements: ['Laptops required'],
      contact: 'Abhay - 6309662987',
      registerUrl: ''
    },
    {
      id: 42,
      name: 'Web Craft',
      description: '',
      time: '11:00 AM - 1:00 PM',
      date: 'Nov 3-4, 2025',
      venue: 'E-206',
      club: 'Google Developers Groups on Campus',
      poster: 'https://via.placeholder.com/400x250/0891b2/ffffff?text=DATA+SCIENCE',
      prizes: [],
      requirements: ['Laptops required'],
      contact: 'Harsha Vardhan - 9390758749',
      registerUrl: 'https://forms.gle/bsYjC2MZCMs4ZzUU8'
    },
    {
      id: 43,
      name: 'RTL To GDS II',
      description: 'Workshop on the design flow of VLSI',
      time: '10:00 AM - 4:00 PM',
      date: 'Nov 4, 2025',
      venue: 'A-208',
      club: 'IETE',
      poster: 'https://drive.google.com/file/d/1-hSVGP1OvDRi4Biz7xS65CUvFuJY-i_Z/view?usp=drivesdk',
      prizes: [],
      requirements: [],
      contact: 'Harsha Vardhan - 9390758749',
      registerUrl: 'https://drive.google.com/file/d/1-hSVGP1OvDRi4Biz7xS65CUvFuJY-i_Z/view?usp=drivesdk'
    },
    {
      id: 44,
      name: 'Cube Sat Workshop',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'Kakshya Sastra',
      poster: 'https://via.placeholder.com/400x250/0891b2/ffffff?text=DATA+SCIENCE',
      prizes: [],
      requirements: [],
      contact: '',
      registerUrl: ''
    },
    {
      id: 45,
      name: 'Kalakrati art Workshop',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'Creative Arts',
      poster: 'https://via.placeholder.com/400x250/0891b2/ffffff?text=DATA+SCIENCE',
      prizes: [],
      requirements: [],
      contact: '',
      registerUrl: ''
    },
    {
      id: 46,
      name: 'BIM Workshop',
      description: 'Exploring Innovative Concepts To Immerse Experiences with BIM',
      time: '10:00 AM - 4:00 PM',
      date: 'Nov 3, 2025',
      venue: 'UG CAD LAB (D-215) ',
      club: 'ICI - IGBC',
      poster: 'https://via.placeholder.com/400x250/0891b2/ffffff?text=DATA+SCIENCE',
      prizes: [],
      requirements: ['Laptops required'],
      contact: 'Sharvani - 8317562544, Prudhvi - 9063958428',
      registerUrl: 'https://events.vjstartup.com/register/79'
    },
    {
      id: 47,
      name: 'Electrical and Hybrid Vehicles',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'SAE',
      poster: 'https://via.placeholder.com/400x250/0891b2/ffffff?text=DATA+SCIENCE',
      prizes: [],
      requirements: [],
      contact: '',
      registerUrl: ''
    },
    {
      id: 48,
      name: 'Autobotics 3.0',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'Robotics Club',
      poster: 'https://via.placeholder.com/400x250/0891b2/ffffff?text=DATA+SCIENCE',
      prizes: [],
      requirements: [],
      contact: '',
      registerUrl: ''
    },
    {
      id: 49,
      name: 'Arduino and Rasberry pie',
      description: 'This workshop, organized by the ECE Department for CONVERGENCE 2K25, is a focused, full-day, hands-on training session designed to build your practical expertise in IoT and Embedded Systems.',
      time: '10:00 PM - 5:00 PM',
      date: 'Nov 4, 2025',
      venue: 'P-202',
      club: 'IEEE',
      poster: ArduinoAndRaspberry,
      prizes: [],
      requirements: [],
      contact: 'Ch Sri Karthik - 8985710576, M.Jai Bhavish - 7815928030',
      registerUrl: ''
    },
    {
      id: 50,
      name: 'LLM Workshop',
      description: "A workshop on LLM's focusing on the fundamental topics and it would be a hands on workshop.",
      time: '10:00 PM - 4:00 PM',
      date: 'Nov 3, 2025',
      venue: 'E-413',
      club: 'VJ ARC',
      poster: 'https://via.placeholder.com/400x250/0891b2/ffffff?text=DATA+SCIENCE',
      prizes: [],
      requirements: ['Laptops required'],
      contact: 'R.Snehitha- 9390764559',
      registerUrl: ''
    },
    {
      id: 51,
      name: 'STM Workshop',
      description: "A hands-on workshop introducing to STM32 microcontroller programming and embedded system applications.",
      time: '10:00 PM - 1:00 PM',
      date: 'Nov 4, 2025',
      venue: 'A-306',
      club: 'EI(I)',
      poster: STMWorkshop,
      prizes: [],
      requirements: ['Laptops required'],
      contact: 'Rohit-9676089136',
      registerUrl: ''
    },
    {
      id: 52,
      name: 'VLSI FLOW FUSION',
      description: "",
      time: '10:00 PM - 4:00 PM',
      date: 'Nov 3, 2025',
      venue: 'A-208',
      club: '',
      poster: FlowFusionVLSI,
      prizes: [],
      requirements: ['Laptops required'],
      contact: 'N.Nagaveda +91 9346303966',
      registerUrl: ''
    }
  ],

  // presentations
  presentations: [
    {
      id: 53,
      name: 'Technical Paper Presentation',
      description: 'Academic research presentation session for students to present their research work, findings, and innovations in various technical domains.',
      time: '10:00 AM - 4:00 PM',
      date: 'Nov 4, 2025',
      venue: 'A-208',
      club: 'IETE',
      poster: 'https://via.placeholder.com/400x250/059669/ffffff?text=RESEARCH+PAPERS',
      prizes: ['Publication opportunities', 'Research grants'],
      requirements: ['Original research work', 'Peer review completed', 'Academic format'],
      contact: 'N.Nagaveda +91 9346303966',
      registerUrl: 'https://forms.google.com/research-presentation-registration'
    },
    {
      id: 54,
      name: 'Project Contest',
      description: 'A platform where students can showcase their projects and presentation skills',
      time: '11:00 AM - 4:00 PM',
      date: 'Nov 3, 2025',
      venue: 'P-201, 202, 203',
      club: 'IE(I), IETE',
      poster: 'https://via.placeholder.com/400x250/059669/ffffff?text=RESEARCH+PAPERS',
      prizes: ['Publication opportunities', 'Research grants'],
      requirements: ['Original research work', 'Peer review completed', 'Academic format'],
      contact: 'Shreya- 7671831480',
      registerUrl: 'https://forms.gle/R8C2eepnymoc7hRB9'
    }
  ],

  'fun-events': [
    {
      id: 55,
      name: 'Will you be My Teacher',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'NSS, VNR SF, VJSV',
      poster: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=TALENT+SHOW',
      prizes: ['₹15,000', '₹10,000', '₹5,000'],
      requirements: [],
      contact: '',
      registerUrl: ''
    },
    {
      id: 56,
      name: 'Sankalp-17',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'NSS, VNR SF, VJSV',
      poster: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=TALENT+SHOW',
      prizes: ['₹15,000', '₹10,000', '₹5,000'],
      requirements: [],
      contact: '',
      registerUrl: ''
    },
    {
      id: 57,
      name: 'NSS Gallery',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'NSS, VNR SF, VJSV',
      poster: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=TALENT+SHOW',
      prizes: ['₹15,000', '₹10,000', '₹5,000'],
      requirements: [],
      contact: '',
      registerUrl: ''
    },
    {
      id: 58,
      name: 'Parisheelan',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'NSS, VNR SF, VJSV',
      poster: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=TALENT+SHOW',
      prizes: ['₹15,000', '₹10,000', '₹5,000'],
      requirements: [],
      contact: '',
      registerUrl: ''
    },
    {
      id: 59,
      name: 'Aavishkar',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'NSS, VNR SF, VJSV',
      poster: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=TALENT+SHOW',
      prizes: ['₹15,000', '₹10,000', '₹5,000'],
      requirements: [],
      contact: '',
      registerUrl: ''
    },
    {
      id: 60,
      name: 'College Quest',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'NSS, VNR SF, VJSV',
      poster: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=TALENT+SHOW',
      prizes: ['₹15,000', '₹10,000', '₹5,000'],
      requirements: [],
      contact: '',
      registerUrl: ''
    },
    {
      id: 61,
      name: 'Diksuchi',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'NSS, VNR SF, VJSV',
      poster: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=TALENT+SHOW',
      prizes: ['₹15,000', '₹10,000', '₹5,000'],
      requirements: [],
      contact: '',
      registerUrl: ''
    },
    {
      id: 62,
      name: 'Jagruthi',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'NSS, VNR SF, VJSV',
      poster: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=TALENT+SHOW',
      prizes: ['₹15,000', '₹10,000', '₹5,000'],
      requirements: [],
      contact: '',
      registerUrl: ''
    },
    {
      id: 63,
      name: 'Sparcha',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'NSS, VNR SF, VJSV',
      poster: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=TALENT+SHOW',
      prizes: ['₹15,000', '₹10,000', '₹5,000'],
      requirements: [],
      contact: '',
      registerUrl: ''
    },
    {
      id: 64,
      name: 'Wow',
      description: '',
      time: '',
      date: '',
      venue: '',
      club: 'NSS, VNR SF, VJSV',
      poster: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=TALENT+SHOW',
      prizes: ['₹15,000', '₹10,000', '₹5,000'],
      requirements: [],
      contact: '',
      registerUrl: ''
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
import { HeroParallax } from '../components/ui/hero-parallax'
import { StarsBackground } from '@/components/StarsBackground'
import robotics from '../assets/robotics.png'
import healthcaretech from '../assets/healthcaretech.png'
import mobility from '../assets/mobility.png'
import greentech from '../assets/greentech.png'
import enterprise from '../assets/enterprise.png'
import design from '../assets/design.png'
import smartliving from '../assets/smartliving.png'
import techforsocialgood from '../assets/techforsocialgood.png'

export default function Themes() {
  const themes = [
    { 
      title: 'Robotics & Automation', 
      link: '#', 
      thumbnail: robotics 
    },
    { 
      title: 'HealthcareTech & Wellness', 
      link: '#', 
      thumbnail: healthcaretech 
    },
    { 
      title: 'Mobility & Logistics', 
      link: '#', 
      thumbnail: mobility 
    },
    { 
      title: 'Green Technologies', 
      link: '#', 
      thumbnail: greentech 
    },
    { 
      title: 'Enterprise & Fintech', 
      link: '#', 
      thumbnail: enterprise 
    },
    { 
      title: 'Design & Manufacturing', 
      link: '#', 
      thumbnail: design 
    },
    { 
      title: 'Smart Living', 
      link: '#', 
      thumbnail: smartliving 
    },
    { 
      title: 'Tech for Social Good', 
      link: '#', 
      thumbnail: techforsocialgood 
    },
    // Duplicate first 7 to fill 15 items for the parallax effect
    { 
      title: 'Robotics & Automation', 
      link: '#', 
      thumbnail: robotics 
    },
    { 
      title: 'HealthcareTech & Wellness', 
      link: '#', 
      thumbnail: healthcaretech 
    },
    { 
      title: 'Mobility & Logistics', 
      link: '#', 
      thumbnail: mobility 
    },
    { 
      title: 'Green Technologies', 
      link: '#', 
      thumbnail: greentech 
    },
    { 
      title: 'Enterprise & Fintech', 
      link: '#', 
      thumbnail: enterprise 
    },
    { 
      title: 'Design & Manufacturing', 
      link: '#', 
      thumbnail: design 
    },
    { 
      title: 'Smart Living', 
      link: '#', 
      thumbnail: smartliving 
    },
  ]

  return (
    <StarsBackground className="relative w-full overflow-hidden">
      <HeroParallax products={themes} />
    </StarsBackground>
  )
}

import { Globe } from "@/components/Globe"
import { StarsBackground } from "@/components/StarsBackground"

export default function About() {
  return (
    <section className="relative w-full min-h-screen">
      <StarsBackground className="absolute inset-0 flex h-screen w-full items-center">
        {/* Left side - Text content */}
        <div className="relative z-10 w-1/2 px-12 lg:px-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              About
            </h2>
            
            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
              <p>
                The Annual National Level Technical Symposium under the banner <span className="text-white font-semibold">"CONVERGENCE"</span> has been instrumental in shifting the paradigm of usual course work. Since its inception in 1999, it has evolved as an ultimate platform for techno maniacs.
              </p>
              
              <p>
                The 2012 edition has taken up an untraded path on its way to be stupendous, throwing light on new ideas. It brings in a series of events and activities spread over 2 days involving the students of myriad disciplines and hence broadening the horizons.
              </p>
              
              <p>
                The <span className="text-cyan-400 font-semibold">28-year legacy</span> of convergence would start on <span className="text-white font-semibold">21st of February, 2025</span> and continues for 2 days, including series of events, workshops, technical presentations, fun events, talks, hackathons, and many more!
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Globe */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] flex items-center justify-center">
          <Globe
            dark
            baseColor="#777A80"
            glowColor="#50505A"
            markerColor="#22d3ee"
            opacity={0.85}
            brightness={1}
            offsetX={0}
            offsetY={0}
            scale={1}
          />
        </div>
      </StarsBackground>
    </section>
  )
}

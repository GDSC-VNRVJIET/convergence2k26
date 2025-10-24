// import VantaGlobe from '../components/VantaGlobe'
import Shuffle from '../components/Shuffle'

export default function Home() {
  return (
    <section className="relative w-full text-white bg-black">
      {/* Fullscreen Vanta Globe background - Temporarily disabled */}
      {/* <div className="fixed inset-0 -z-10">
        <VantaGlobe color={0x29b6f6} backgroundColor={0x000000} />
      </div> */}

      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <div className="mb-8">
          <Shuffle
            text="CONVERGENCE 2K26"
            tag="h1"
            className="text-[70px] md:text-[110px] lg:text-[140px] font-black tracking-tight leading-none text-white"
            style={{
              fontFamily: "'Audiowide', system-ui, sans-serif",
              letterSpacing: '0.05em'
            }}
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
          />
        </div>
        <h2 className="text-xl md:text-2xl text-gray-300/90 mb-10 max-w-3xl text-center font-normal">
          The ultimate celebration of tech, creativity and collaboration — workshops, talks and competitions.
        </h2>

        <div className="flex gap-5">
          <button className="px-8 py-4 rounded-lg text-white font-semibold bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200">
            Register Now
          </button>
          <button className="px-8 py-4 rounded-lg text-white font-semibold border border-white/20 hover:border-white/40 transition-all duration-200">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

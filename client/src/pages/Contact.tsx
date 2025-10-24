import { FaPhone } from "react-icons/fa";
import { StarsBackground } from "@/components/StarsBackground";

export default function Contact() {
  const contacts = [
    { name: "Karthikeya", phone: "+91 8978219896" },
    { name: "Prajwala", phone: "+91 7702019255" },
    { name: "Aashritha", phone: "+91 8297828446" },
    { name: "Manoj", phone: "+91 9010303229" },
  ];

  return (
    <>
      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee var(--duration) linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <StarsBackground className="min-h-screen flex flex-col items-center justify-center py-10 text-white">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white text-center relative z-10">
          Contact Us
        </h2>

        {/* Contacts Marquee */}
        <div className="relative flex items-center w-full justify-center overflow-hidden z-10">
          <div className="flex animate-marquee [--duration:30s]">
            {[...contacts, ...contacts, ...contacts, ...contacts].map((item, index) => (
              <div key={index} className="h-full px-2.5">
                <div className="relative h-full w-[20rem] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-8 py-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex flex-col items-center justify-center text-sm">
                    <div className="text-white text-xl font-bold mb-2">
                      {item.name}
                    </div>
                    <p className="text-cyan-400 text-lg flex items-center justify-center gap-2">
                      <FaPhone className="text-cyan-400" />
                      {item.phone}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </StarsBackground>
    </>
  );
}
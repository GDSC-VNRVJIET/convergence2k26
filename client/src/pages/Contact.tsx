import { FaPhone } from "react-icons/fa";
import { StarsBackground } from "@/components/StarsBackground";
import { motion } from "motion/react";
import { Marquee } from "@/components/ui/marquee";

export default function Contact() {
  const facultyCoordinators = [
    { name: "Dr. P. Kishore", phone: "+91 9866940403", role: "Assoc. Prof. ECE" },
    { name: "Mr. D.S.G. Krishna", phone: "+91 9989365696", role: "Asst. Prof. EEE" },
    { name: "Dr. S. Bhanu Murthy", phone: "+91 7416757427", role: "Asst. Prof. ME" },
    { name: "Dr. S. Rakesh", phone: "+91 9000452223", role: "Asst. Prof. CE" },
    { name: "Dr. N. Sunanda", phone: "+91 9494232867", role: "Asst. Prof. CSE - DS" },
    { name: "Ms. K. Renuka", phone: "+91 8801825599", role: "Asst. Prof. IT (Finance)" },
  ];

  const contacts = [
    { name: "Sanjana Kanth", phone: "+91 6305278995", role: "Event Coordinator" },
    { name: "Geethika Rao", phone: "+91 6303724808", role: "Event Coordinator" },
    { name: "Anagha Sanjana", phone: "+91 8247816008", role: "Event Coordinator" },
  ];

  const ContactCard = ({ name, phone, role }: { name: string; phone: string; role: string }) => {
    return (
      <div className="group relative w-72 flex-shrink-0">
        <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300">
          {/* Content */}
          <div className="relative z-10">
            {/* Avatar Circle */}
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-white/20 transition-colors duration-300">
              <span className="text-2xl font-bold text-white">
                {name.charAt(0)}
              </span>
            </div>

            {/* Name */}
            <h3 className="text-xl font-bold text-white mb-2 text-center">
              {name}
            </h3>

            {/* Role */}
            <p className="text-sm text-gray-400 mb-4 text-center">
              {role}
            </p>

            {/* Phone */}
            <a 
              href={`tel:${phone}`}
              className="flex items-center justify-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm"
            >
              <FaPhone className="text-xs" />
              <span>{phone}</span>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <StarsBackground className="w-full flex flex-col items-center justify-start px-4 sm:px-6 pt-16 sm:pt-20 pb-8">
      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-16">
        
        {/* Faculty Coordinators Section */}
        <div>
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-white">
              Faculty Coordinators
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
              Meet our dedicated faculty coordinators
            </p>
          </motion.div>

          {/* Faculty Cards Marquee */}
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              {facultyCoordinators.map((faculty) => (
                <ContactCard key={faculty.name} {...faculty} />
              ))}
            </Marquee>
            <div className="from-black pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-black pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div>
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-white">
              Contact Us
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
              Get in touch with our team for any inquiries
            </p>
          </motion.div>

          {/* Contact Cards Marquee */}
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
              {contacts.map((contact) => (
                <ContactCard key={contact.name} {...contact} />
              ))}
            </Marquee>
            <div className="from-black pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-black pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
          </div>
        </div>

      </div>
    </StarsBackground>
  );
}
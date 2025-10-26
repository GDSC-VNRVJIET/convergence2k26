import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { StarsBackground } from "@/components/StarsBackground";
import { motion } from "motion/react";

export default function Contact() {
  const contacts = [
    { name: "Karthikeya", phone: "+91 8978219896", role: "Event Coordinator" },
    { name: "Prajwala", phone: "+91 7702019255", role: "Technical Lead" },
    { name: "Aashritha", phone: "+91 8297828446", role: "Operations Head" },
    { name: "Manoj", phone: "+91 9010303229", role: "Marketing Lead" },
  ];

  return (
    <StarsBackground className="min-h-screen flex items-center justify-center py-8 sm:py-12 pb-4 sm:pb-6 px-4 text-white">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-white">
            Contact Us
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Get in touch with our team for any inquiries
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-white/30 transition-all duration-300">
                {/* Content */}
                <div className="relative z-10">
                  {/* Avatar Circle */}
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3 mx-auto group-hover:bg-white/20 transition-colors duration-300">
                    <span className="text-xl font-bold text-white">
                      {contact.name.charAt(0)}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-white mb-1 text-center">
                    {contact.name}
                  </h3>

                  {/* Role */}
                  <p className="text-xs text-gray-400 mb-3 text-center">
                    {contact.role}
                  </p>

                  {/* Phone */}
                  <a 
                    href={`tel:${contact.phone}`}
                    className="flex items-center justify-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    <FaPhone className="text-xs" />
                    <span>{contact.phone}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto"
        >
          {/* Email Card */}
          <motion.div
            whileHover={{ y: -3 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <FaEnvelope className="text-white text-sm" />
              </div>
              <h3 className="text-base font-bold text-white">Email</h3>
            </div>
            <a 
              href="mailto:convergence@vnrvjiet.ac.in" 
              className="text-gray-300 hover:text-white transition-colors text-sm pl-13"
            >
              convergence@vnrvjiet.ac.in
            </a>
          </motion.div>

          {/* Location Card */}
          <motion.div
            whileHover={{ y: -3 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <FaMapMarkerAlt className="text-white text-sm" />
              </div>
              <h3 className="text-base font-bold text-white">Location</h3>
            </div>
            <p className="text-gray-300 text-sm pl-13">
              VNR VJIET, Hyderabad
            </p>
          </motion.div>
        </motion.div>
      </div>
    </StarsBackground>
  );
}
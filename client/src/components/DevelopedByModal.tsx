import { motion, AnimatePresence } from 'motion/react';
import { FaLinkedin, FaTimes } from 'react-icons/fa';
import dev1Image from '../assets/dev1.png';
import dev2Image from '../assets/dev2.png';
import dev3Image from '../assets/dev3.jpg';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

interface DevelopedByModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Akhil',
    role: 'Web Developer',
    image: dev1Image,
    linkedin: 'https://www.linkedin.com/in/pettem-akhil-varsh-4ba049285',
  },
  {
    name: 'Sai Ritesh',
    role: 'Web Developer',
    image: dev2Image,
    linkedin: 'https://www.linkedin.com/in/sai-ritesh-domakuntla/',
  },
  {
    name: 'Hasnika',
    role: 'Web Developer',
    image: dev3Image,
    linkedin: 'https://www.linkedin.com/in/sri-hasnika/',
  },
];

export default function DevelopedByModal({ isOpen, onClose }: DevelopedByModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 sm:inset-8 md:inset-16 lg:inset-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl shadow-2xl z-[10000] overflow-hidden border border-white/10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
            >
              <FaTimes className="text-2xl" />
            </button>

            {/* Content */}
            <div className="h-full overflow-y-auto p-6 sm:p-8 md:p-10">
              {/* Header */}
              <div className="text-center mb-8 sm:mb-12">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col items-center gap-4"
                >
                  <img
                    src="https://gdsc-vnrvjiet.vercel.app/logo.png"
                    alt="GDSC Logo"
                    className="w-24 h-16 sm:w-32 sm:h-20 object-contain"
                  />
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                    Developed by GDGC VNRVJIET
                  </h2>
                </motion.div>
              </div>

              {/* Team Members Grid */}
              <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 max-w-5xl mx-auto">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
                    style={{ width: '260px' }}
                  >
                    {/* Image */}
                    <div className="relative mb-4">
                      <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-white/20">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Name & Role */}
                    <div className="text-center mb-4">
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-400">{member.role}</p>
                    </div>

                    {/* LinkedIn Button */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-blue-600/80 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 hover:scale-105"
                    >
                      <FaLinkedin className="text-lg" />
                      Connect
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center mt-12 text-gray-500 text-sm"
              >
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { TbBrandLinktree } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-md text-gray-300 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 py-5 sm:py-6">
        {/* Social Links */}
        <div className="flex flex-col items-center space-y-3 sm:space-y-4">
          <p className="text-gray-400 text-base sm:text-lg mb-1 sm:mb-2 text-center">Follow us on social media</p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 w-full">

            <a
              href="https://www.instagram.com/convergence2k26_vnrvjiet/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:justify-start space-x-2 text-pink-500 hover:scale-110 transition-transform duration-200"
            >
              <FaInstagram className="text-lg sm:text-xl md:text-2xl flex-shrink-0" />
              <span className="text-white text-xs sm:text-sm md:text-base break-all">
                convergence2k26_vnrvjiet
              </span>
            </a>

            <a
              href="https://www.linkedin.com/school/vnrvjiethyd/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:justify-start space-x-2 text-blue-600 hover:scale-110 transition-transform duration-200"
            >
              <FaLinkedin className="text-lg sm:text-xl md:text-2xl flex-shrink-0" />
              <span className="text-white text-xs sm:text-sm md:text-base">
                vnrvjiet.hyd
              </span>
            </a>

            <a
              href="https://linktr.ee/vnrvjiet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:justify-start space-x-2 text-green-500 hover:scale-110 transition-transform duration-200"
            >
              <TbBrandLinktree className="text-lg sm:text-xl md:text-2xl flex-shrink-0" />
              <span className="text-white text-xs sm:text-sm md:text-base">
                linktr.ee/vnrvjiet
              </span>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}

import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { TbBrandLinktree } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-md text-gray-300 border-t border-white/10">
      <div className="container mx-auto px-6 py-6">
        {/* Social Links */}
        <div className="flex flex-col items-center space-y-4">
          <p className="text-gray-400 text-lg mb-2">Follow us on social media</p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">

            <a
              href="https://www.instagram.com/convergence2k26_vnrvjiet/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-pink-500 hover:scale-110 transition-transform duration-200"
            >
              <FaInstagram className="text-xl sm:text-2xl" />
              <span className="text-white text-sm sm:text-base">
                convergence2k26_vnrvjiet
              </span>
            </a>

            <a
              href="https://www.linkedin.com/school/vnrvjiethyd/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-600 hover:scale-110 transition-transform duration-200"
            >
              <FaLinkedin className="text-xl sm:text-2xl" />
              <span className="text-white text-sm sm:text-base">
                vnrvjiet.hyd
              </span>
            </a>

            <a
              href="https://linktr.ee/vnrvjiet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-green-500 hover:scale-110 transition-transform duration-200"
            >
              <TbBrandLinktree className="text-xl sm:text-2xl" />
              <span className="text-white text-sm sm:text-base">
                linktr.ee/vnrvjiet
              </span>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}

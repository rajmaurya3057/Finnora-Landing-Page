import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Why Finnora", href: "#why" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["hero", "features", "dashboard", "why", "testimonials"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div
            className={`flex items-center justify-between backdrop-blur-xl ${
              isScrolled
                ? "bg-black/30 border border-white/10 rounded-2xl px-6 py-3 shadow-xl"
                : "bg-white/5 border border-white/10 rounded-2xl px-8 py-4 shadow-lg"
            } transition-all duration-300`}
          >
            <motion.a
              href="#hero"
              onClick={() => handleNavClick("#hero")}
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <img
                  src="/WhatsApp Image 2025-11-01 at 11.28.35 AM.jpeg"
                  alt="Finnora"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-lg"
                />
              </div>
              <span className="hidden sm:inline text-lg md:text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Finnora
              </span>
            </motion.a>

            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="relative text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </button>
                  </motion.li>
                );
              })}
            </ul>

            <div className="flex items-center gap-3 md:gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:inline px-4 md:px-6 py-2 text-gray-300 hover:text-white font-medium transition-colors duration-300"
              >
                Login
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:inline px-4 md:px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 text-white font-semibold shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300"
              >
                Sign Up
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 backdrop-blur-md bg-black/50 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-20 left-4 right-4 backdrop-blur-xl bg-black/40 border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavClick(link.href)}
                    className={`block w-full text-left py-3 px-4 rounded-xl transition-all duration-300 font-medium ${
                      activeSection === link.href.replace("#", "")
                        ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}

                <div className="border-t border-white/10 pt-4 mt-4 space-y-3">
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="block w-full py-3 px-4 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 font-medium transition-all duration-300"
                  >
                    Login
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="block w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg shadow-blue-500/50 transition-all duration-300"
                  >
                    Sign Up
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

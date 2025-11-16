import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const CoinContent = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="coinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="50%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
      <radialGradient id="coinShine" cx="30%" cy="30%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
    </defs>

    <circle cx="100" cy="100" r="95" fill="url(#coinGradient)" stroke="#0369a1" strokeWidth="2" />

    <circle cx="100" cy="100" r="85" fill="url(#coinShine)" opacity="0.6" />

    <circle cx="100" cy="100" r="80" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3" />

    <text x="100" y="120" fontSize="80" fontWeight="bold" fill="#ffffff" textAnchor="middle" opacity="0.9">
      $
    </text>

    <circle cx="70" cy="70" r="8" fill="#ffffff" opacity="0.4" />
    <circle cx="130" cy="130" r="5" fill="#ffffff" opacity="0.2" />
  </svg>
);

export default function Hero() {
  const contentVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const coinVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: (flip: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: flip === 0 ? 0 : 0.3,
      },
    }),
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0D14] via-[#151B28] to-[#0D111A]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Smarter Money Management for the{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Modern You
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                Track expenses, monitor investments, and stay in control — all
                in one intuitive dashboard.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 text-white font-semibold text-lg shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border-2 border-gray-500 text-gray-300 font-semibold text-lg hover:bg-white/10 hover:border-gray-400 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            custom={0}
            variants={coinVariants}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px] flex items-center justify-center perspective">
              <motion.div
                style={{ perspective: 1200 }}
                animate={{
                  rotateY: [0, 180, 360],
                  y: [0, -80, 0],
                  rotateZ: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                }}
                className="relative w-80 h-80"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 20px 60px rgba(6, 182, 212, 0.3)",
                      "0 40px 80px rgba(6, 182, 212, 0.5)",
                      "0 20px 60px rgba(6, 182, 212, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                  className="relative w-full h-full"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-blue-600/30 blur-3xl" />

                  <motion.div
                    animate={{
                      rotateX: [0, 180, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut",
                      times: [0, 0.5, 1],
                    }}
                    style={{
                      transformStyle: "preserve-3d" as const,
                    }}
                    className="relative w-full h-full rounded-full overflow-hidden"
                  >
                    <div
                      style={{
                        backfaceVisibility: "hidden",
                      }}
                      className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-cyan-300 to-blue-500 rounded-full flex items-center justify-center"
                    >
                      <CoinContent />
                    </div>

                    <div
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateX(180deg)",
                      }}
                      className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 rounded-full flex items-center justify-center"
                    >
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        <defs>
                          <linearGradient
                            id="coinGradientBack"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#1e40af" />
                            <stop offset="50%" stopColor="#0284c7" />
                            <stop offset="100%" stopColor="#06b6d4" />
                          </linearGradient>
                        </defs>
                        <circle
                          cx="100"
                          cy="100"
                          r="95"
                          fill="url(#coinGradientBack)"
                          stroke="#0369a1"
                          strokeWidth="2"
                        />
                        <text
                          x="100"
                          y="115"
                          fontSize="60"
                          fontWeight="bold"
                          fill="#ffffff"
                          textAnchor="middle"
                          opacity="0.9"
                        >
                          F
                        </text>
                      </svg>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full border-2 border-cyan-400/40"
              />

              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full border border-blue-400/20"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D111A] to-transparent" />
    </section>
  );
}

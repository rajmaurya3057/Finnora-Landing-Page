import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const CoinContent = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="coinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a78bfa" />
        <stop offset="50%" stopColor="#c4b5fd" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
      <radialGradient id="coinShine" cx="35%" cy="35%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
        <stop offset="60%" stopColor="#e9d5ff" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="rimGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#7c3aed" opacity="0.8" />
        <stop offset="50%" stopColor="#6d28d9" opacity="0.6" />
        <stop offset="100%" stopColor="#5b21b6" opacity="0.8" />
      </linearGradient>
    </defs>

    <circle cx="100" cy="100" r="95" fill="url(#coinGradient)" stroke="#6d28d9" strokeWidth="3" />

    <circle cx="100" cy="100" r="90" fill="none" stroke="#7c3aed" strokeWidth="1.5" opacity="0.6" />

    <circle cx="100" cy="100" r="85" fill="url(#coinShine)" opacity="0.7" />

    <g opacity="0.4">
      <line x1="100" y1="40" x2="100" y2="50" stroke="#7c3aed" strokeWidth="2" />
      <line x1="100" y1="150" x2="100" y2="160" stroke="#7c3aed" strokeWidth="2" />
      <line x1="40" y1="100" x2="50" y2="100" stroke="#7c3aed" strokeWidth="2" />
      <line x1="150" y1="100" x2="160" y2="100" stroke="#7c3aed" strokeWidth="2" />

      <line x1="60" y1="60" x2="68" y2="68" stroke="#7c3aed" strokeWidth="1.5" />
      <line x1="140" y1="140" x2="132" y2="132" stroke="#7c3aed" strokeWidth="1.5" />
    </g>

    <path d="M 100 60 Q 110 90 100 130 Q 90 90 100 60" fill="none" stroke="#a78bfa" strokeWidth="3" opacity="0.6" />
    <path d="M 70 100 Q 100 110 130 100" fill="none" stroke="#a78bfa" strokeWidth="2" opacity="0.5" />

    <circle cx="75" cy="75" r="4" fill="#e9d5ff" opacity="0.7" />
    <circle cx="125" cy="125" r="3" fill="#ddd6fe" opacity="0.6" />
    <circle cx="100" cy="85" r="2.5" fill="#c4b5fd" opacity="0.8" />
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
                      "0 20px 60px rgba(147, 51, 234, 0.4)",
                      "0 40px 100px rgba(147, 51, 234, 0.6)",
                      "0 20px 60px rgba(147, 51, 234, 0.4)",
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
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/40 via-purple-400/20 to-purple-600/30 blur-3xl" />

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
                      className="absolute inset-0 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-600 rounded-full flex items-center justify-center"
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
                            <stop offset="0%" stopColor="#9333ea" />
                            <stop offset="50%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="#7c3aed" />
                          </linearGradient>
                          <radialGradient id="coinShineBack" cx="35%" cy="35%">
                            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
                            <stop offset="60%" stopColor="#e9d5ff" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                        <circle
                          cx="100"
                          cy="100"
                          r="95"
                          fill="url(#coinGradientBack)"
                          stroke="#6d28d9"
                          strokeWidth="3"
                        />
                        <circle cx="100" cy="100" r="85" fill="url(#coinShineBack)" opacity="0.6" />

                        <g opacity="0.3">
                          <circle cx="70" cy="60" r="8" fill="none" stroke="#c4b5fd" strokeWidth="2" />
                          <circle cx="130" cy="140" r="6" fill="none" stroke="#c4b5fd" strokeWidth="1.5" />
                          <path d="M 60 100 L 140 100" stroke="#a78bfa" strokeWidth="2" />
                        </g>

                        <text
                          x="100"
                          y="115"
                          fontSize="70"
                          fontWeight="bold"
                          fill="#ffffff"
                          textAnchor="middle"
                          opacity="0.85"
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
                  opacity: [0.25, 0.5, 0.25],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full border-2 border-purple-400/50"
              />

              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0, 0.4, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full border border-purple-500/30"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D111A] to-transparent" />
    </section>
  );
}

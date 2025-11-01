import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0D14] via-[#151B28] to-[#0D111A]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block">
              <img
                src="/WhatsApp Image 2025-11-01 at 11.28.35 AM.jpeg"
                alt="Finnora Logo"
                className="h-16 w-16 rounded-xl"
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Smarter Money Management for the{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Modern You
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                Track expenses, monitor investments, and stay in control — all in one intuitive dashboard.
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px] flex items-center justify-center">
              <motion.div
                animate={{
                  rotateY: [0, 360],
                  rotateZ: [0, 15, 0, -15, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 rounded-full blur-3xl opacity-50" />
                <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-cyan-400/90 via-blue-500/90 to-blue-600/90 flex items-center justify-center shadow-2xl">
                  <div className="text-8xl font-bold text-white/90">$</div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D111A] to-transparent" />
    </section>
  );
}

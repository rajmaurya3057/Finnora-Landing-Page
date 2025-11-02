import { motion } from "framer-motion";

export default function WhyFinnora() {
  return (
    <section
      id="why"
      className="relative py-32 bg-gradient-to-b from-[#0D111A] to-[#151B28] overflow-hidden"
    >
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold text-white">
                Why{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Fiinora?
                </span>
              </h2>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 text-2xl lg:text-3xl text-gray-300 leading-relaxed"
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  No clutter. No confusion.{" "}
                  <span className="text-cyan-400 font-semibold">
                    Just clarity.
                  </span>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Built to help you understand{" "}
                  <span className="text-blue-400 font-semibold">
                    where your money goes.
                  </span>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Designed for humans.{" "}
                  <span className="text-cyan-400 font-semibold">
                    Powered by intelligence.
                  </span>
                </motion.p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.9 }}
              className="relative mx-auto w-64 h-64"
            >
              <div className="absolute inset-0">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 10 + i * 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0"
                  >
                    <div
                      className="absolute w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `translate(-50%, -50%) translateY(-${
                          80 + i * 20
                        }px)`,
                      }}
                    />
                  </motion.div>
                ))}
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 blur-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

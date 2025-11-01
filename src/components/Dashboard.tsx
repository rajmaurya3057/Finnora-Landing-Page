import { motion } from 'framer-motion';
import { DollarSign, PieChart, TrendingUp, Bell } from 'lucide-react';

const highlights = [
  {
    icon: DollarSign,
    title: 'Smart Expense Graphs',
    description: 'Visualize where your money flows monthly.',
  },
  {
    icon: PieChart,
    title: 'Portfolio Overview',
    description: 'Watch your stocks and mutual funds move dynamically.',
  },
  {
    icon: Bell,
    title: 'Insurance Reminders',
    description: 'Never miss an EMI or premium again.',
  },
  {
    icon: TrendingUp,
    title: 'AI Insights',
    description: 'Finnora learns your habits and suggests smarter saving paths.',
  },
];

export default function Dashboard() {
  return (
    <section id="dashboard" className="relative py-32 bg-gradient-to-b from-[#151B28] to-[#0D111A] overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                See Your Finances{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Come Alive
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Finnora gives you a clear, interactive view of your expenses, investments, and goals — all in real time.
              </p>
            </div>

            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{highlight.title}</h3>
                    <p className="text-gray-400">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-3xl blur-3xl" />

              <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-white font-semibold">Total Balance</h3>
                      <span className="text-cyan-400 text-sm">+12.5%</span>
                    </div>
                    <p className="text-3xl font-bold text-white">$24,580.50</p>
                    <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '65%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                        </div>
                        <span className="text-gray-400 text-sm">Income</span>
                      </div>
                      <p className="text-xl font-bold text-white">$8,420</p>
                    </div>

                    <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                          <DollarSign className="w-4 h-4 text-red-400" />
                        </div>
                        <span className="text-gray-400 text-sm">Expenses</span>
                      </div>
                      <p className="text-xl font-bold text-white">$3,280</p>
                    </div>
                  </div>

                  <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h4 className="text-white font-semibold mb-4">Investment Portfolio</h4>
                    <div className="space-y-3">
                      {[
                        { name: 'Stocks', value: 45, color: 'from-cyan-400 to-blue-500' },
                        { name: 'Mutual Funds', value: 30, color: 'from-blue-500 to-indigo-500' },
                        { name: 'Crypto', value: 25, color: 'from-indigo-500 to-violet-500' },
                      ].map((item, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-400">{item.name}</span>
                            <span className="text-white">{item.value}%</span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${item.value}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.7 + i * 0.1 }}
                              className={`h-full bg-gradient-to-r ${item.color}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/30 rounded-full blur-2xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

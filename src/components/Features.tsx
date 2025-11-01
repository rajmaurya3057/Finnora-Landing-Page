import { motion } from 'framer-motion';
import { Receipt, TrendingUp, Shield, Brain } from 'lucide-react';

const features = [
  {
    icon: Receipt,
    title: 'Expense Tracking',
    tagline: 'Understand where your money goes.',
    description: 'Automatically categorize your transactions, visualize spending trends, and set monthly budgets effortlessly.',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    icon: TrendingUp,
    title: 'Investment Insights',
    tagline: 'See your money grow.',
    description: 'Track your stocks, mutual funds, and crypto with live data and AI-powered growth insights.',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Shield,
    title: 'Insurance & Liabilities',
    tagline: 'Stay protected and on track.',
    description: 'Manage policies, EMIs, and loans in one secure place with timely reminders.',
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    icon: Brain,
    title: 'Smart Reports & Insights',
    tagline: 'Your personal finance analyst.',
    description: 'AI-driven recommendations to save more, invest better, and plan smarter.',
    gradient: 'from-violet-500 to-purple-500',
  },
];

export default function Features() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0D111A] to-[#151B28] overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            All Your Finances,{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              One Smart Platform
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Finnora brings together your expenses, investments, insurance, and insights in one simple dashboard.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-2xl"
                   style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }} />

              <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-cyan-400 font-medium mb-4">{feature.tagline}</p>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
                     style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

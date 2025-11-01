import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Riya Sharma',
    role: 'Freelancer',
    quote: 'Finnora helped me visualize my monthly income and expenses clearly. It feels like having a personal finance coach.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
  },
  {
    name: 'Aarav Mehta',
    role: 'Investor',
    quote: 'I love how clean and interactive the dashboard is. It\'s not just data — it feels alive.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav',
  },
  {
    name: 'Neha Kapoor',
    role: 'Student',
    quote: 'Managing expenses was stressful. Finnora made it simple and actually enjoyable.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 bg-gradient-to-b from-[#151B28] to-[#0D111A] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            What People Are{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Saying
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Early users love how Finnora simplifies their financial life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl h-full">
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote className="w-12 h-12 text-cyan-400" />
                </div>

                <div className="mb-6">
                  <p className="text-gray-300 text-lg italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-cyan-400/50">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-gray-300 font-medium">Secure</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-gray-300 font-medium">Fast</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-violet-400 to-purple-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="text-gray-300 font-medium">Intelligent</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

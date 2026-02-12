'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Lightbulb, Users, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Strategic Vision',
    description: 'We develop comprehensive strategies that align with your business goals and market opportunities.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Leverage cutting-edge technologies and methodologies to stay ahead of the competition.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our consultants bring decades of combined experience across multiple industries.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Track record of delivering measurable improvements in efficiency and profitability.',
  },
];

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" ref={ref} className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
                We Drive
                <span className="text-primary-600 dark:text-primary-400"> Business Excellence</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
            >
              Nexus Consulting has been at the forefront of business transformation for over two decades. 
              We partner with forward-thinking organizations to navigate complex challenges and unlock 
              their full potential.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
            >
              Our approach combines deep industry expertise with innovative methodologies, 
              ensuring sustainable growth and competitive advantage in an ever-evolving marketplace.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex gap-4"
            >
              <a
                href="#services"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
              >
                Our Services
              </a>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

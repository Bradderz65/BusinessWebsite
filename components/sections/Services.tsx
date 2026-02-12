'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BarChart3, 
  Globe, 
  Shield, 
  Zap,
  ArrowUpRight
} from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Business Strategy',
    description: 'Data-driven strategic planning to accelerate growth and maximize ROI.',
    features: ['Market Analysis', 'Growth Planning', 'Competitive Intelligence'],
  },
  {
    icon: Globe,
    title: 'Digital Transformation',
    description: 'Modernize your operations with cutting-edge digital solutions.',
    features: ['Cloud Migration', 'Process Automation', 'Data Analytics'],
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Comprehensive risk assessment and mitigation strategies.',
    features: ['Compliance Audit', 'Security Review', 'Crisis Planning'],
  },
  {
    icon: Zap,
    title: 'Operational Excellence',
    description: 'Streamline processes and optimize resource utilization.',
    features: ['Lean Six Sigma', 'Supply Chain', 'Quality Management'],
  },
];

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" ref={ref} className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
              Solutions for Every
              <span className="text-primary-600 dark:text-primary-400"> Business Need</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
              From strategy to execution, we provide end-to-end solutions that drive measurable results.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-6 h-6 text-primary-600" />
              </div>

              <div className="w-14 h-14 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Nexus Consulting transformed our operations completely. Their strategic insights helped us achieve 40% growth in just 18 months.",
    author: "Sarah Mitchell",
    role: "CEO, TechVentures Inc.",
  },
  {
    quote: "The team's expertise in digital transformation is unmatched. They guided us through a complex migration with zero downtime.",
    author: "Michael Chen",
    role: "CTO, Global Finance Corp",
  },
  {
    quote: "Working with Nexus has been a game-changer. Their data-driven approach helped us identify opportunities we never knew existed.",
    author: "Emily Rodriguez",
    role: "VP Operations, RetailMax",
  },
];

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-primary-600 dark:bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary-200 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">What Our Clients Say</h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative p-8 bg-white/10 backdrop-blur-sm rounded-2xl"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary-300 opacity-50" />
              
              <p className="text-lg text-white/90 mb-6 leading-relaxed">"{testimonial.quote}"</p>
              
              <div>
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-sm text-primary-200">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

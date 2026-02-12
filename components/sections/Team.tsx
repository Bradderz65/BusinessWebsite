'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: "James Anderson",
    role: "Chief Executive Officer",
    bio: "25+ years in strategic consulting",
  },
  {
    name: "Lisa Thompson",
    role: "Chief Strategy Officer",
    bio: "Former McKinsey partner",
  },
  {
    name: "David Kim",
    role: "Head of Digital",
    bio: "Tech industry veteran",
  },
  {
    name: "Rachel Foster",
    role: "VP of Operations",
    bio: "Supply chain expert",
  },
];

export function Team() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
              Meet the
              <span className="text-primary-600 dark:text-primary-400"> Experts</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
              Our leadership team brings decades of combined experience across industries.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group text-center"
            >
              <div className="relative mb-6 mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center overflow-hidden">
                <span className="text-3xl font-bold text-primary-700 dark:text-primary-300">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
                <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/10 transition-colors" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{member.name}</h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium">{member.role}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{member.bio}</p>

              <div className="mt-4 flex justify-center gap-3">
                <a href="#" className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors">
                  <Linkedin className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                </a>
                <a href="#" className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors">
                  <Twitter className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

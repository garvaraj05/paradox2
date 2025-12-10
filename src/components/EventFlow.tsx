import React from 'react';
import { motion } from 'framer-motion';
import { config } from '../config';
import { Brain, Presentation, ArrowRight } from 'lucide-react';

const iconMap: any = {
  Brain: Brain,
  Presentation: Presentation,
};

const EventFlow: React.FC = () => {
  return (
    <section id="flow" className="py-16 md:py-24 bg-black relative">
       {/* Background decorative glow */}
       <div className="absolute top-1/2 right-0 w-64 h-64 bg-neon-purple/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-4 text-white">Event Flow</h2>
          <div className="h-1.5 w-24 bg-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {config.rounds.map((round, index) => {
            const Icon = iconMap[round.icon] || Brain;
            return (
              <motion.div
                key={round.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 50, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-3xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gray-900 border border-gray-800 rounded-3xl p-10 h-full flex flex-col hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 group-hover:bg-neon-purple/20 transition-colors">
                      <Icon className="w-10 h-10 text-white group-hover:text-neon-cyan transition-colors" />
                    </div>
                    <span className="text-6xl font-bold text-white/5 font-display group-hover:text-white/10 transition-colors">0{round.id}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors font-display">{round.title}</h3>
                  <p className="text-gray-400 mb-8 flex-grow text-lg leading-relaxed">{round.description}</p>
                  
                  <ul className="space-y-3">
                    {round.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-base text-gray-300">
                        <ArrowRight className="w-5 h-5 text-neon-cyan mr-3" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventFlow;
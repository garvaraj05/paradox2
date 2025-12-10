import React from 'react';
import { motion } from 'framer-motion';
import { config } from '../config';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 bg-black border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-xs font-mono text-neon-purple tracking-widest mb-4">SYSTEM.TIMELINE</h2>
          <h2 className="text-5xl md:text-6xl font-bold font-display text-white uppercase">Execution Plan</h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

          {config.timeline.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center justify-between md:justify-normal mb-16 ${
                  isLeft ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Space */}
                <div className="hidden md:block w-5/12"></div>

                {/* Node */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black border border-white/30 z-10 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,1)]">
                    <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse"></div>
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 w-full md:w-5/12 ${isLeft ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}`}>
                  <div className="group">
                    <div className="inline-block py-1 px-3 border border-neon-purple/30 rounded-full bg-neon-purple/5 mb-3 backdrop-blur-sm">
                        <span className="text-neon-purple text-xs font-mono font-bold">{item.date}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2 font-display uppercase tracking-tight group-hover:text-neon-cyan transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
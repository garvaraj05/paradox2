import React from 'react';
import { motion } from 'framer-motion';
import { config } from '../config';
import { Trophy, Medal, Award } from 'lucide-react';

const iconMap: any = {
  Trophy: Trophy,
  Medal: Medal,
  Award: Award,
};

const Prizes: React.FC = () => {
  return (
    <section id="prizes" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-xs font-mono text-neon-cyan tracking-widest mb-4">SYSTEM.REWARDS</h2>
          <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-4">Glory & Fortune</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Top performers will be recognized with exclusive rewards, mentorship opportunities, and prestige.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {config.prizes.map((prize, index) => {
            const Icon = iconMap[prize.icon] || Trophy;
            // Scale the winner card (index 0 usually, but let's check position)
            const isWinner = index === 0;
            
            return (
              <motion.div
                key={prize.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, type: "spring" }}
                className={`relative group ${isWinner ? 'md:-mt-12 md:mb-12 z-10' : ''}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${prize.color} opacity-10 blur-xl group-hover:opacity-20 transition-opacity rounded-3xl`}></div>
                
                <div className={`bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center hover:border-white/20 transition-all duration-300 ${isWinner ? 'md:py-12 border-neon-cyan/30 shadow-[0_0_50px_rgba(0,243,255,0.1)]' : ''}`}>
                  
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${prize.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-black fill-current" />
                  </div>

                  <h3 className={`text-2xl font-bold font-display text-white mb-2 ${isWinner ? 'text-4xl text-neon-cyan' : ''}`}>
                    {prize.position}
                  </h3>
                  
                  <div className="text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4">
                    {prize.amount}
                  </div>

                  <p className="text-gray-400 text-sm font-medium border-t border-white/10 pt-4 w-full">
                    {prize.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
import React from 'react';
import { motion } from 'framer-motion';
import { config } from '../config';
import { Users, UserPlus, Award, Zap, Code, Cpu, Target, ArrowUpRight } from 'lucide-react';

const iconMap: any = {
  Users: Users,
  UserPlus: UserPlus,
  Award: Award,
  Zap: Zap,
};

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-20 md:py-32 bg-black border-t border-white/5 overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-zinc-900/20 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs font-mono text-neon-cyan tracking-widest mb-4 flex items-center">
                  <span className="w-8 h-[1px] bg-neon-cyan mr-3"></span>
                  SYSTEM.ABOUT
              </h2>
              
              <h3 className="text-5xl md:text-7xl font-bold font-display text-white mb-8 leading-none">
                BUILT FOR <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-white">
                  BUILDERS
                </span>
              </h3>
              
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 font-light border-l-2 border-white/10 pl-6">
                {config.about.description}
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                 <div className="p-4 bg-zinc-900/30 border border-white/10 rounded-xl backdrop-blur-md">
                    <Code className="w-6 h-6 text-neon-purple mb-2" />
                    <div className="text-2xl font-bold font-display text-white">48H</div>
                    <div className="text-xs text-gray-500 font-mono">DURATION</div>
                 </div>
                 <div className="p-4 bg-zinc-900/30 border border-white/10 rounded-xl backdrop-blur-md">
                    <Users className="w-6 h-6 text-neon-cyan mb-2" />
                    <div className="text-2xl font-bold font-display text-white">500+</div>
                    <div className="text-xs text-gray-500 font-mono">HACKERS</div>
                 </div>
                 <div className="p-4 bg-zinc-900/30 border border-white/10 rounded-xl backdrop-blur-md">
                    <Target className="w-6 h-6 text-neon-green mb-2" />
                    <div className="text-2xl font-bold font-display text-white">$10K</div>
                    <div className="text-xs text-gray-500 font-mono">PRIZES</div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Bento Grid Features */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {config.about.highlights.map((item, index) => {
              const Icon = iconMap[item.icon] || Zap;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`group relative p-6 bg-zinc-900/30 border border-white/10 hover:border-neon-cyan/50 hover:bg-zinc-900/60 transition-all duration-300 rounded-xl flex flex-col justify-between backdrop-blur-sm ${index === 0 || index === 3 ? 'sm:col-span-2' : ''}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-neon-cyan/20 transition-colors">
                      <Icon className="w-6 h-6 text-gray-300 group-hover:text-neon-cyan transition-colors" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1 font-display tracking-tight">{item.text}</h4>
                    <p className="text-sm text-gray-500 font-mono uppercase">Feature_0{item.id}</p>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-neon-cyan transition-colors rounded-tl-xl"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-neon-cyan transition-colors rounded-br-xl"></div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
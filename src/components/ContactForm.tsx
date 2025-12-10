import React from 'react';
import { motion } from 'framer-motion';
import { config } from '../config';
import { Instagram, Linkedin, Mail, Facebook } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute -bottom-1/2 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          
          <div className="max-w-4xl">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold font-display text-white mb-6"
            >
              Get in Touch
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 mb-16 text-xl"
            >
              Have questions? We'd love to hear from you. Reach out to the {config.organizer} team.
            </motion.p>
            
            <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-center gap-10 md:gap-16">
              {[
                { icon: Instagram, label: "Instagram", href: config.socials.instagram, color: "text-neon-pink", border: "group-hover:border-neon-pink", bg: "group-hover:bg-neon-pink/20" },
                { icon: Mail, label: "Email Us", href: null, color: "text-neon-purple", border: "group-hover:border-neon-purple", bg: "group-hover:bg-neon-purple/20" },
                { icon: Linkedin, label: "LinkedIn", href: config.socials.linkedin, color: "text-blue-400", border: "group-hover:border-blue-500", bg: "group-hover:bg-blue-500/20" },
                { icon: Facebook, label: "Facebook", href: config.socials.facebook, color: "text-blue-600", border: "group-hover:border-blue-600", bg: "group-hover:bg-blue-600/20" }
              ].map((item, index) => {
                  const Wrapper = item.href ? 'a' : 'div';
                  const props = item.href ? { href: item.href, target: "_blank", rel: "noopener noreferrer" } : {};
                  return (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, type: "spring" }}
                    >
                        <Wrapper {...props} className="flex flex-col items-center group cursor-pointer">
                            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 flex items-center justify-center mb-5 ${item.bg} group-hover:scale-110 transition-all duration-300 border border-white/10 ${item.border}`}>
                                <item.icon className={`w-7 h-7 md:w-9 md:h-9 text-gray-300 ${item.color.replace('text-', 'group-hover:text-')} transition-colors`} />
                            </div>
                            <span className="text-base md:text-xl text-gray-300 group-hover:text-white transition-colors font-medium">{item.label}</span>
                        </Wrapper>
                    </motion.div>
                  )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
import React from 'react';
import { motion } from 'framer-motion';
import CountdownTimer from '../components/CountdownTimer';
import AboutSection from '../components/AboutSection';
import EventFlow from '../components/EventFlow';
import Timeline from '../components/Timeline';
import ContactForm from '../components/ContactForm';
import Marquee from '../components/Marquee';
import Prizes from '../components/Prizes';
import FAQ from '../components/FAQ';
import { config } from '../config';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Terminal, ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  const { user } = useAuth();
  const MotionLink = motion.create(Link);

  return (
    <div className="overflow-x-hidden bg-black selection:bg-neon-cyan selection:text-black">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        
        {/* Cyber Grid Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid opacity-30 bg-grid-animate"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 border border-neon-cyan/20 rounded-full animate-spin-slow hidden md:block opacity-50"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-neon-purple/20 rotate-45 hidden md:block opacity-50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
             <div className="inline-flex items-center px-3 py-1 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 backdrop-blur-md">
                <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse mr-2"></span>
                <span className="text-neon-cyan font-mono text-xs uppercase tracking-widest">System Online // Ready for Input</span>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-8 flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] font-display uppercase">
              <span className="block text-stroke opacity-70">OPERATION</span>
              <span className="block text-white glitch" data-text="PARADOX">PARADOX</span>
            </h1>
            <p className="hidden md:block absolute -right-8 top-10 text-xs font-mono text-gray-500 rotate-90 origin-left">
              VER 2.0.25
            </p>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-400 font-sans max-w-2xl mb-12"
          >
            The ultimate <span className="text-neon-cyan font-bold">hunt beyond logic</span>. <br className="hidden md:block" />
            Crack the code. Break the loop. Claim the glory.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16 w-full max-w-4xl"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-white/20 transition-colors">
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
                    <span className="text-xs font-mono text-gray-500">T-MINUS LAUNCH</span>
                    <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                    </div>
                </div>
                <CountdownTimer targetDate={config.eventDate} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center"
          >
            {!user ? (
               <MotionLink 
                to="/login"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black transition-all duration-200 bg-white font-display rounded-none hover:bg-neon-cyan clip-path-polygon"
                style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
              >
                <Terminal className="w-5 h-5 mr-2" />
                INITIATE REGISTRATION
              </MotionLink>
            ) : user.quizCompleted ? (
              <motion.button 
                disabled 
                className="px-8 py-4 text-lg font-bold text-gray-500 bg-gray-900 border border-gray-800 font-display cursor-not-allowed uppercase"
                style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
              >
                MISSION COMPLETED
              </motion.button>
            ) : (
              <MotionLink 
                to="/quiz" 
                whileHover={{ scale: 1.02, backgroundColor: '#00f3ff', color: '#000' }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-neon-cyan border border-neon-cyan bg-transparent font-display transition-all uppercase"
                style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
              >
                ENTER ROUND 1
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </MotionLink>
            )}
            
            <motion.a 
                href="#about"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-white/20 bg-white/5 font-display transition-all hover:bg-white/10 uppercase"
                style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
            >
                EXPLORE DATA
            </motion.a>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-50"
        >
            <span className="text-[10px] font-mono tracking-[0.2em] mb-2 text-neon-cyan">SCROLL_DOWN</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-neon-cyan to-transparent"></div>
        </motion.div>
      </section>

      {/* Marquee Strip */}
      <Marquee />

      {/* Sections */}
      <AboutSection />
      <EventFlow />
      <Prizes />
      <Timeline />
      <FAQ />
      <ContactForm />
    </div>
  );
};

export default Home;
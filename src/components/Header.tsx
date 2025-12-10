import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Terminal, LogOut, ChevronDown } from 'lucide-react';
import { config } from '../config';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogout = () => {
    logout();
    setShowProfileMenu(false);
    navigate('/');
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Rounds', id: 'flow' },
    { name: 'Prizes', id: 'prizes' },
    { name: 'Timeline', id: 'timeline' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', id: 'contact' },
  ];

  const MotionLink = motion.create(Link);

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <div className="w-full max-w-7xl bg-black/80 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300">
          <div className="px-6 sm:px-8">
            <div className="flex items-center justify-between h-16">
              
              {/* Logo */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-shrink-0 flex items-center cursor-pointer group" 
                onClick={() => navigate('/')}
              >
                <div className="bg-white/5 p-2 rounded-full border border-white/10 group-hover:border-neon-cyan/50 transition-colors mr-3 relative overflow-hidden">
                   <div className="absolute inset-0 bg-neon-cyan/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <Terminal className="h-5 w-5 text-neon-cyan relative z-10" />
                </div>
                <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-neon-cyan transition-colors hidden sm:block">
                  {config.eventName}
                </span>
              </motion.div>

              {/* Desktop Menu */}
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-1">
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavClick('home')} 
                    className="cursor-pointer text-gray-400 px-4 py-2 rounded-full text-sm font-medium transition-all hover:text-white hover:bg-white/5"
                  >
                    Home
                  </motion.span>
                  {navLinks.map((link) => (
                    <motion.span
                      key={link.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleNavClick(link.id)}
                      className="cursor-pointer text-gray-400 px-4 py-2 rounded-full text-sm font-medium transition-all hover:text-white hover:bg-white/5"
                    >
                      {link.name}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Auth Buttons / User Profile */}
              <div className="hidden md:flex items-center space-x-4">
                {user ? (
                  <div className="relative" ref={dropdownRef}>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowProfileMenu(!showProfileMenu)}
                      className="flex items-center space-x-3 focus:outline-none pl-4 border-l border-white/10"
                    >
                      <div className="text-right hidden lg:block">
                        <p className="text-white text-sm font-medium leading-none">{user.name.split(' ')[0]}</p>
                        <p className="text-xs text-neon-cyan">{user.rollNo}</p>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-neon-purple to-neon-cyan p-[2px]">
                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                          <span className="font-bold text-white text-xs">{user.name.charAt(0)}</span>
                        </div>
                      </div>
                    </motion.button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {showProfileMenu && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: 10 }}
                          transition={{ duration: 0.1 }}
                          className="absolute right-0 mt-4 w-72 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] py-2 origin-top-right z-50 overflow-hidden"
                        >
                           <div className="px-5 py-4 bg-white/5 border-b border-white/5">
                             <p className="text-white font-semibold font-display text-lg">{user.name}</p>
                             <p className="text-xs text-gray-400 truncate font-mono">{user.email}</p>
                           </div>
                          
                           <div className="px-5 py-4 space-y-3">
                              <div className="flex justify-between text-sm font-mono">
                                <span className="text-gray-500">Branch</span>
                                <span className="text-neon-cyan">{user.branch}</span>
                              </div>
                              <div className="flex justify-between text-sm font-mono">
                                <span className="text-gray-500">Roll No</span>
                                <span className="text-neon-purple">{user.rollNo}</span>
                              </div>
                           </div>

                           <div className="border-t border-white/10 mt-2 p-2">
                             <motion.button 
                               whileHover={{ backgroundColor: "rgba(239, 68, 68, 0.1)" }}
                               onClick={handleLogout}
                               className="w-full text-left px-4 py-2.5 rounded-lg text-sm text-red-400 flex items-center transition-colors"
                             >
                               <LogOut className="w-4 h-4 mr-2" />
                               Disconnect
                             </motion.button>
                           </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <MotionLink 
                    to="/login" 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-black hover:bg-neon-cyan transition-colors px-6 py-2 rounded-full font-bold text-sm"
                  >
                    Login
                  </MotionLink>
                )}
              </div>

              {/* Mobile menu button */}
              <div className="-mr-2 flex md:hidden">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden pt-24 overflow-y-auto"
          >
            <div className="px-4 space-y-2 pb-10">
               <span 
                  onClick={() => handleNavClick('home')} 
                  className="cursor-pointer text-gray-300 hover:text-white block px-4 py-4 rounded-xl text-2xl font-display font-bold border-b border-white/10"
                >
                  Home
                </span>
              {navLinks.map((link) => (
                <span
                  key={link.name}
                  onClick={() => handleNavClick(link.id)}
                  className="cursor-pointer text-gray-300 hover:text-white block px-4 py-4 rounded-xl text-2xl font-display font-bold border-b border-white/10"
                >
                  {link.name}
                </span>
              ))}
              <div className="mt-8 px-4">
                {user ? (
                   <div className="space-y-4">
                     <div className="flex items-center space-x-4 mb-6">
                        <div className="w-14 h-14 rounded-full bg-neon-purple flex items-center justify-center">
                           <span className="font-bold text-white text-xl">{user.name.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="text-white font-bold text-xl">{user.name}</p>
                          <p className="text-sm text-gray-400 font-mono">{user.email}</p>
                        </div>
                     </div>
                     <motion.button 
                      whileTap={{ scale: 0.98 }}
                      onClick={handleLogout}
                      className="w-full text-center text-red-400 border border-red-900/50 bg-red-900/10 py-4 rounded-xl font-bold text-lg"
                     >
                       Logout
                     </motion.button>
                   </div>
                ) : (
                  <Link to="/login" onClick={() => setIsOpen(false)} className="block w-full text-center bg-white text-black py-4 rounded-xl font-bold text-xl">
                    Login
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
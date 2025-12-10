import React from 'react';
import { config } from '../config';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
           <h3 className="text-2xl font-display font-bold text-white mb-1">{config.eventName}</h3>
           <p className="text-gray-500 text-sm font-mono">Organized by {config.organizer}</p>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-gray-600 text-xs font-mono uppercase tracking-widest">
            BE TECHNICAL BY TECHNIQUE
          </p>
          <p className="text-gray-700 text-[10px] mt-1">
             © {new Date().getFullYear()} ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
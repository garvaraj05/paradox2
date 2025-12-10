import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { config } from '../config';
import { Plus, Minus } from 'lucide-react';

const FAQItem: React.FC<{ item: { question: string; answer: string } }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-xl font-medium font-display transition-colors ${isOpen ? 'text-neon-cyan' : 'text-gray-200 group-hover:text-white'}`}>
          {item.question}
        </span>
        <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? (
            <Minus className="w-6 h-6 text-neon-cyan" />
          ) : (
            <Plus className="w-6 h-6 text-gray-400 group-hover:text-white" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed text-lg border-l-2 border-neon-purple/30 pl-6 ml-2">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-4">FAQ</h2>
          <p className="text-gray-400 text-lg">Common questions about the event</p>
        </motion.div>
        
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-white/10 hover:border-white/20 transition-colors"
        >
          {config.faqs.map((faq) => (
            <FAQItem key={faq.id} item={faq} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
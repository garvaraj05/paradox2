import React from 'react';

const Marquee: React.FC = () => {
  const items = [
    "COMPETE", "CREATE", "CONQUER", "INNOVATE", "DESIGN", "BUILD", "DEPLOY"
  ];

  return (
    <div className="relative w-full py-4 bg-neon-purple/10 border-y border-neon-purple/30 overflow-hidden">
      <div className="absolute inset-0 bg-neon-purple/5 blur-sm"></div>
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center mx-4">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <span className="text-2xl md:text-4xl font-display font-bold text-transparent text-stroke mx-8 tracking-widest opacity-70">
                  {item}
                </span>
                <span className="text-neon-cyan text-xl">★</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
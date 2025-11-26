import React from 'react';
import { SUBJECTS } from '../constants';

const Academics: React.FC = () => {
  return (
    <section id="academics" className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Academics</h2>
          <p className="text-gray-400">My core subjects and focus areas</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUBJECTS.map((sub, idx) => (
            <div 
              key={sub.name}
              className="group relative p-6 glass-panel rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 cursor-default border-ai-accent/10 hover:border-ai-accent/50"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-ai-accent to-ai-purple rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
              <div className="relative">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {sub.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-ai-accent transition-colors">
                  {sub.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {sub.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academics;

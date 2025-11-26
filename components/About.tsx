import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-ai-accent to-ai-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image/Graphic placeholder - Using CSS Art for AI Brain */}
          <div className="relative h-80 w-full flex items-center justify-center glass-panel rounded-2xl border-ai-purple/20 group">
             <div className="absolute inset-0 bg-gradient-to-tr from-ai-accent/10 to-ai-purple/10 rounded-2xl"></div>
             
             {/* Simple visual representation of a "Digital Brain" */}
             <div className="relative animate-float">
                <div className="text-9xl opacity-80 filter drop-shadow-[0_0_15px_rgba(188,19,254,0.5)]">
                  🧠
                </div>
                <div className="absolute top-0 -right-4 text-4xl animate-pulse">⚡</div>
                <div className="absolute bottom-0 -left-4 text-4xl animate-pulse" style={{animationDelay: '1s'}}>⚛️</div>
             </div>
          </div>

          {/* Right: Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Hello! I'm <span className="text-ai-accent">{PERSONAL_INFO.name}</span>
            </h3>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              {PERSONAL_INFO.about}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 glass-panel rounded-xl border-l-4 border-l-ai-accent">
                <div className="text-sm text-gray-400">Class</div>
                <div className="text-xl font-bold">{PERSONAL_INFO.class}</div>
              </div>
              <div className="p-4 glass-panel rounded-xl border-l-4 border-l-ai-purple">
                <div className="text-sm text-gray-400">School</div>
                <div className="text-xl font-bold truncate" title={PERSONAL_INFO.school}>KV No. 2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

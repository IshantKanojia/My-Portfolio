import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hobbies: React.FC = () => {
  return (
    <section id="hobbies" className="py-20 bg-gradient-to-b from-black to-ai-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 md:order-1 space-y-8">
             <h2 className="text-3xl md:text-4xl font-bold">
               Interest in <span className="text-gradient">AI & Technology</span>
             </h2>
             <p className="text-gray-300 text-lg leading-relaxed">
               {PERSONAL_INFO.hobbiesDescription}
             </p>
             
             <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition">
                   <div className="p-2 bg-ai-accent/20 rounded-lg text-ai-accent">🤖</div>
                   <div>
                      <h4 className="font-bold">Generative AI</h4>
                      <p className="text-xs text-gray-400">Exploring tools like Gemini & ChatGPT</p>
                   </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition">
                   <div className="p-2 bg-ai-purple/20 rounded-lg text-ai-purple">🧩</div>
                   <div>
                      <h4 className="font-bold">Problem Solving</h4>
                      <p className="text-xs text-gray-400">Applying logic to real-world issues</p>
                   </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition">
                   <div className="p-2 bg-green-500/20 rounded-lg text-green-400">🧘‍♂️</div>
                   <div>
                      <h4 className="font-bold">Yoga</h4>
                      <p className="text-xs text-gray-400">Mindfulness and focus</p>
                   </div>
                </div>
             </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            {/* Abstract Tech Representation */}
            <div className="relative w-72 h-72 md:w-96 md:h-96">
               <div className="absolute inset-0 bg-ai-accent/20 rounded-full blur-3xl animate-pulse-slow"></div>
               <div className="absolute inset-4 border border-ai-accent/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
               <div className="absolute inset-12 border border-ai-purple/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">🔭</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hobbies;

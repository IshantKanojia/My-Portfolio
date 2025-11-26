import React from 'react';
import { FRIENDS } from '../constants';

const Friends: React.FC = () => {
  return (
    <section id="friends" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Best Friends</h2>
          <p className="text-gray-400">The squad that keeps me going</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {FRIENDS.map((friend) => (
            <div 
              key={friend.name}
              className="w-full sm:w-80 glass-panel p-8 rounded-2xl text-center transform transition duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(188,19,254,0.2)]"
            >
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center mb-6 border-2 border-ai-purple text-3xl shadow-lg">
                {friend.name.charAt(0)}
              </div>
              <h3 className="text-2xl font-bold mb-1">{friend.name}</h3>
              <p className="text-ai-purple font-mono text-sm mb-4">{friend.tagline}</p>
              <p className="text-gray-400 italic">"{friend.trait}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Friends;

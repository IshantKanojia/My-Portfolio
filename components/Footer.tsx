import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-12 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-2xl font-bold mb-8">Let's Connect</h2>
        
        <div className="flex justify-center gap-6 mb-12">
           <button className="px-6 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-ai-accent hover:text-black hover:border-ai-accent transition-all duration-300">
             Email Me
           </button>
           <button className="px-6 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-ai-purple hover:text-white hover:border-ai-purple transition-all duration-300">
             LinkedIn
           </button>
        </div>

        <div className="text-gray-500 text-sm">
          <p className="mb-2">Created by {PERSONAL_INFO.name} • Class {PERSONAL_INFO.class}</p>
          <p>{PERSONAL_INFO.school}</p>
          <p className="mt-4 text-xs opacity-50">
             &copy; {new Date().getFullYear()} All Rights Reserved. Built with React & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

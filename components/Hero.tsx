import React from 'react';
import ParticlesBackground from './ui/ParticlesBackground';
import Typewriter from './ui/Typewriter';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* 
        REACT BITS USAGE:
        1. We are using the Custom ParticlesBackground component here.
        2. In a real project with npm, you would do:
           npm install @react-bits/particles
           import Particles from '@react-bits/particles'
        3. Below we use our custom implementation that mimics it.
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] z-10" />
      <ParticlesBackground 
        color="#00f2ff" 
        count={80} 
        size={2} 
        speed={0.8} 
      />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-4 inline-block px-4 py-1 rounded-full border border-ai-accent/30 bg-ai-accent/10 backdrop-blur-sm text-ai-accent text-sm font-mono animate-pulse-slow">
           System Online // Portfolio v1.0
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Hi, I'm <span className="text-gradient">{PERSONAL_INFO.name}</span>
        </h1>

        <div className="text-xl md:text-2xl text-gray-300 mb-8 font-light h-8">
          <Typewriter 
            words={['Class 12th Student', 'AI Explorer', 'Curious Mind', 'Future Innovator']} 
            typingSpeed={80}
            deletingSpeed={40}
          />
        </div>

        <div className="flex flex-col items-center justify-center space-y-2 mb-10 text-gray-400 font-mono text-sm md:text-base">
          <p>{PERSONAL_INFO.school}</p>
          <div className="flex space-x-4">
             <span>Class: {PERSONAL_INFO.class}</span>
             <span className="text-ai-accent">•</span>
             <span>Roll No: {PERSONAL_INFO.rollNo}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#about"
            className="px-8 py-3 rounded-full bg-ai-accent text-black font-semibold hover:bg-white transition-all shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:shadow-[0_0_30px_rgba(0,242,255,0.5)]"
          >
            View My Journey
          </a>
          <a 
            href="#hobbies"
            className="px-8 py-3 rounded-full border border-ai-purple text-ai-purple hover:bg-ai-purple hover:text-white transition-all font-semibold backdrop-blur-sm"
          >
            AI Interests
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

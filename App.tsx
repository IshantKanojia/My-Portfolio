import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Academics from './components/Academics';
import Friends from './components/Friends';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';
import Cursor from './components/ui/Cursor';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-ai-dark text-white selection:bg-ai-accent selection:text-black overflow-x-hidden">
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Academics />
      <Friends />
      <Hobbies />
      <Footer />
    </main>
  );
};

export default App;
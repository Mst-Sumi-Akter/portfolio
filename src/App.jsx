import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-gray-700 dark:text-gray-300 transition-colors duration-300">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 xl:px-24">
        <Hero />
      </div>
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

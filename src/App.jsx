import React, { useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Lazy load the ProjectDetails component
const ProjectDetails = lazy(() => import('./components/ProjectDetails'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-background-light dark:bg-background-dark">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-light dark:border-primary-dark"></div>
  </div>
);

const Home = () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 xl:px-24">
        <Hero />
      </div>
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};



function App() {
  React.useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-gray-700 dark:text-gray-300 transition-colors duration-300">
        <Toaster position="top-right" reverseOrder={false} />
        <Header />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

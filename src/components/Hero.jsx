import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import image from "../assets/profile-pic (1).png"

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Floating animation for the image
            gsap.to('.hero-img', {
                y: 20,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <main id="hero" ref={sectionRef} className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-24">
            <div className="lg:w-1/2 text-center lg:text-left lg:pr-12">
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="hero-text-1 text-lg md:text-xl font-medium text-gray-800 dark:text-gray-100"
                >
                    Hello, It's Me
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hero-name text-4xl md:text-6xl font-bold font-title my-2 text-gray-900 dark:text-white"
                >
                    SUMI AKTER
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="hero-text-2 text-2xl md:text-3xl font-semibold font-title text-gray-800 dark:text-gray-100"
                >
                    And I'm a <span className="text-primary inline-block">Web Developer<span className="inline-block border-r-4 border-primary typing-cursor w-1 h-8 ml-1 align-bottom"></span></span>
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="hero-desc mt-4 text-sm md:text-base max-w-lg mx-auto lg:mx-0"
                >
                    I'm a Web Designer. My expertise is to create and website design, Frontend design.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="hero-social flex justify-center lg:justify-start space-x-3 mt-6"
                >
                    <a className="w-10 h-10 flex items-center justify-center border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-white dark:hover:text-background-dark transition-all duration-300" href="https://www.facebook.com/sumi.akter.cse" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="text-lg" />
                    </a>
                    <a className="w-10 h-10 flex items-center justify-center border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-white dark:hover:text-background-dark transition-all duration-300" href="https://www.linkedin.com/in/mst-sumi-akter-cse/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className="text-lg" />
                    </a>
                    <a className="w-10 h-10 flex items-center justify-center border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-white dark:hover:text-background-dark transition-all duration-300" href="https://github.com/Mst-Sumi-Akter" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-lg" />
                    </a>
                    <a className="w-10 h-10 flex items-center justify-center border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-white dark:hover:text-background-dark transition-all duration-300" href="https://wa.link/gldc7j" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="text-lg" />
                    </a>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="hero-btn mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                >
                    <a
                        className="inline-block bg-primary text-white dark:text-background-dark font-semibold px-8 py-3 rounded-lg shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-1"
                        href="https://drive.google.com/uc?export=download&id=1p1B1sLYe7NF_Kxbx1GlK-330hNYGOQ26"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download CV
                    </a>
                    <a
                        className="inline-block border-2 border-primary text-primary font-semibold px-8 py-3 rounded-lg hover:bg-primary hover:text-white dark:hover:text-background-dark transition-all duration-300 transform hover:-translate-y-1"
                        href="#about"
                    >
                        More About Me
                    </a>
                </motion.div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end items-center">
                <div className="hero-img relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-400 blur-3xl opacity-70"></div>
                    <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-tr from-purple-500 to-primary shadow-glow">
                        <img alt="Portrait of a web developer" className="w-full h-full object-cover rounded-full" src={image} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Hero;

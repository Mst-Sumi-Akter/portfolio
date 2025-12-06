import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import image from "../assets/Sumi.png"
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.fromTo('.hero-text-1',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
            )
                .fromTo('.hero-name',
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
                    '-=0.6'
                )
                .fromTo('.hero-text-2',
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
                    '-=0.6'
                )
                .fromTo('.hero-desc',
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
                    '-=0.6'
                )
                .fromTo('.hero-social a',
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' },
                    '-=0.6'
                )
                .fromTo('.hero-btn',
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
                    '-=0.4'
                );

            gsap.fromTo('.hero-img',
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.5 }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <main id="hero" ref={sectionRef} className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-24">
            <div className="lg:w-1/2 text-center lg:text-left lg:pr-12">
                <p className="hero-text-1 text-lg md:text-xl font-medium text-gray-800 dark:text-gray-100">Hello, It's Me</p>
                <h2 className="hero-name text-4xl md:text-6xl font-bold my-2 text-gray-900 dark:text-white">SUMI AKTER</h2>
                <h3 className="hero-text-2 text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100">
                    And I'm a <span className="text-primary inline-block">Web Developer<span className="inline-block border-r-4 border-primary typing-cursor w-1 h-8 ml-1 align-bottom"></span></span>
                </h3>
                <p className="hero-desc mt-4 text-sm md:text-base max-w-lg mx-auto lg:mx-0">
                    I'm a Web Designer. My expertise is to create and website design, Frontend design.
                </p>
                <div className="hero-social flex justify-center lg:justify-start space-x-3 mt-6">
                    <a className="w-10 h-10 flex items-center justify-center border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-white dark:hover:text-background-dark transition-all duration-300" href="#">
                        <FaFacebookF className="text-lg" />
                    </a>
                    <a className="w-10 h-10 flex items-center justify-center border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-white dark:hover:text-background-dark transition-all duration-300" href="#">
                        <FaTwitter className="text-lg" />
                    </a>
                    <a className="w-10 h-10 flex items-center justify-center border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-white dark:hover:text-background-dark transition-all duration-300" href="#">
                        <FaInstagram className="text-lg" />
                    </a>
                    <a className="w-10 h-10 flex items-center justify-center border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-white dark:hover:text-background-dark transition-all duration-300" href="#">
                        <FaLinkedinIn className="text-lg" />
                    </a>
                </div>
                <div className="hero-btn mt-8">
                    <a className="inline-block bg-primary text-white dark:text-background-dark font-semibold px-8 py-3 rounded-lg shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-1" href="#about">
                        More About Me
                    </a>
                </div>
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

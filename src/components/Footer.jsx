import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.footer-social a', {
                scrollTrigger: {
                    trigger: '.footer-content',
                    start: 'top 95%',
                },
                y: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power3.out'
            });

            gsap.from('.footer-copy', {
                scrollTrigger: {
                    trigger: '.footer-content',
                    start: 'top 95%',
                },
                y: 20,
                opacity: 0,
                duration: 0.8,
                delay: 0.2,
                ease: 'power3.out'
            });
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer ref={footerRef} className="bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 py-12 font-display">
            <div className="footer-content container mx-auto px-4 text-center">

                {/* Social Icons */}
                {/* <div className="footer-social flex justify-center space-x-6 mb-8">
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-background-dark transition-all duration-300">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-background-dark transition-all duration-300">
                        <FaTwitter />
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-background-dark transition-all duration-300">
                        <FaInstagram />
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-background-dark transition-all duration-300">
                        <FaLinkedinIn />
                    </a>
                </div> */}

                {/* Copyright */}
                <p className="footer-copy text-slate-500 dark:text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} Sumi Akter. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

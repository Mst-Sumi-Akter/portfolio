import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image from "../assets/Sumi.png"
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.about-img', {
                scrollTrigger: {
                    trigger: '.about-img',
                    start: 'top 80%',
                },
                x: -50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });

            gsap.from('.about-text', {
                scrollTrigger: {
                    trigger: '.about-text',
                    start: 'top 80%',
                },
                x: 50,
                opacity: 0,
                duration: 1,
                delay: 0.2,
                ease: 'power3.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="bg-background-light dark:bg-background-dark font-display">
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-full max-w-6xl p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 items-center">
                        <div className="flex justify-center md:col-span-1">
                            <div className="about-img relative w-64 h-64 sm:w-80 sm:h-80">
                                <div className="absolute inset-0 rounded-full glow-border"></div>
                                <img alt="Portrait of a developer sitting on a bench outdoors." className="w-full h-full object-cover rounded-full p-2" src={image} />
                            </div>
                        </div>
                        <div className="about-text md:col-span-2 text-center md:text-left flex flex-col h-full">
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
                                About <span className="text-primary">Me</span>
                            </h1>
                            <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-slate-600 dark:text-slate-300">
                                Full Stack Developer!
                            </h2>
                            <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
                                I'm passionate about developing web applications that meet technical requirements and deliver delightful user experiences. Proficient in HTML, CSS, React.js, Next.js, MongoDB, Tailwind CSS, Firebase Authentication, NextAuth, and JWT. Experienced in writing clean and maintainable code, working in a collaborative environment, and agile methodologies. Committed to staying up-to-date with the latest developments and best practices in the field.
                            </p>
                            <div className="mt-auto pt-8">
                                <a className="inline-block bg-primary text-slate-900 font-bold py-3 px-8 rounded-full transition-transform duration-300 hover:scale-105 glow-button" href="#contact">
                                    More About Me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

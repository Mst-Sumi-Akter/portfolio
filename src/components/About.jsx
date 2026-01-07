import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HashLink } from 'react-router-hash-link';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import image from "../assets/1.png"

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);

    return (
        <section id="about" ref={sectionRef} className="font-display bg-slate-50/50 dark:bg-slate-900/80 backdrop-blur-sm transition-colors duration-500">
            <div className="flex items-center justify-center min-h-screen py-20">
                <div className="w-full max-w-6xl p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20 items-center">
                        {/* Image Section */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex justify-center md:col-span-1"
                        >
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-1 bg-gradient-to-tr from-purple-500 to-primary shadow-glow overflow-hidden aspect-square">
                                <img
                                    alt="Sumi Akter profile"
                                    className="w-full h-full object-cover rounded-full"
                                    src={image}
                                />
                            </div>
                        </motion.div>

                        {/* Text Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="md:col-span-2 text-center md:text-left"
                        >
                            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white font-title">
                                About <span className="text-primary">Me</span>
                            </h1>

                            <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-slate-600 dark:text-slate-300 font-title">
                                Full Stack Developer!
                            </h2>

                            <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
                                I'm passionate about developing web applications that meet technical requirements and deliver delightful user experiences. Proficient in HTML, CSS, React.js, Next.js, MongoDB, Tailwind CSS, Firebase Authentication, NextAuth, and JWT. Experienced in writing clean and maintainable code, working in a collaborative environment, and agile methodologies. Committed to staying up-to-date with the latest developments and best practices in the field.
                            </p>

                            <div className="mt-10">
                                <HashLink
                                    smooth
                                    to="/#contact"
                                    className="inline-block bg-primary text-slate-900 font-bold py-3 px-8 rounded-full transition-transform duration-300 hover:scale-105 glow-button"
                                >
                                    More About Me
                                </HashLink>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

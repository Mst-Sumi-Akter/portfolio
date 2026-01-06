import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import image from "../assets/Gemini_Generated_Image_b3tcgtb3tcgtb3tc.png"

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);

    // GSAP ScrollTrigger removed in favor of Framer Motion's whileInView

    return (
        <section id="about" ref={sectionRef} className="bg-background-light dark:bg-background-dark font-display">
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-full max-w-6xl p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8 }}
                            className="flex justify-center md:col-span-1"
                        >
                            <div className="about-img relative w-64 h-64 sm:w-80 sm:h-80 group">
                                <div className="absolute inset-0 rounded-full glow-border transition-transform duration-500 group-hover:scale-110"></div>
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    alt="Portrait of a developer sitting on a bench outdoors."
                                    className="w-full h-full object-cover rounded-full p-2 relative z-10"
                                    src={image}
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="about-text md:col-span-2 text-center md:text-left flex flex-col h-full"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold font-title text-slate-800 dark:text-white">
                                About <span className="text-primary">Me</span>
                            </h1>
                            <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-slate-600 dark:text-slate-300">
                                Full Stack Developer!
                            </h2>
                            <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
                                I'm passionate about developing web applications that meet technical requirements and deliver delightful user experiences. Proficient in HTML, CSS, React.js, Next.js, MongoDB, Tailwind CSS, Firebase Authentication, NextAuth, and JWT. Experienced in writing clean and maintainable code, working in a collaborative environment, and agile methodologies. Committed to staying up-to-date with the latest developments and best practices in the field.
                            </p>
                            <div className="mt-auto pt-8">
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-block bg-primary text-slate-900 font-bold py-3 px-8 rounded-full transition-transform duration-300 glow-button"
                                    href="#contact"
                                >
                                    More About Me
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

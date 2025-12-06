import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.contact-title', {
                scrollTrigger: {
                    trigger: '.contact-title',
                    start: 'top 85%',
                },
                y: -30,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            });

            gsap.from('.contact-left', {
                scrollTrigger: {
                    trigger: '.contact-left',
                    start: 'top 80%',
                },
                x: -50,
                opacity: 0,
                duration: 0.8,
                delay: 0.2,
                ease: 'power3.out'
            });

            gsap.from('.contact-right', {
                scrollTrigger: {
                    trigger: '.contact-right',
                    start: 'top 80%',
                },
                x: 50,
                opacity: 0,
                duration: 0.8,
                delay: 0.4,
                ease: 'power3.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" ref={sectionRef} className="font-display bg-background-light dark:bg-background-dark flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
            <div className="relative group w-full max-w-6xl mx-auto">
                <div className="absolute -inset-2 rounded-xl bg-primary-light/30 blur-2xl transition-all duration-500 group-hover:bg-primary-light/40"></div>
                <div className="relative w-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden ring-1 ring-primary-light/30">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="contact-left p-8 sm:p-12 text-slate-800 dark:text-slate-200">
                            <h2 className="contact-title text-4xl md:text-5xl font-bold mb-4">Contact <span className="text-primary">Me</span></h2>
                            <h3 className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-100 mb-4">Let's Work Together</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nobis possimus tenetur quidem fugit? Dolorum cupiditate deleniti perspiciatis ea soluta repellat dignissimos eum assumenda, iusto quas nulla ullam. Quaerat, maiores!
                            </p>
                            <div className="space-y-4 mb-10">
                                <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                                    <span className="material-icons text-primary text-2xl">send</span>
                                    <span>contact@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                                    <span className="material-icons text-primary text-2xl">phone</span>
                                    <span>0123456789</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <a className="group w-10 h-10 flex items-center justify-center border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-background-dark transition-all duration-300" href="#">
                                    <i className="fab fa-facebook-f text-lg"></i>
                                </a>
                                <a className="group w-10 h-10 flex items-center justify-center border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-background-dark transition-all duration-300" href="#">
                                    <i className="fab fa-twitter text-lg"></i>
                                </a>
                                <a className="group w-10 h-10 flex items-center justify-center border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-background-dark transition-all duration-300" href="#">
                                    <i className="fab fa-instagram text-lg"></i>
                                </a>
                                <a className="group w-10 h-10 flex items-center justify-center border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-background-dark transition-all duration-300" href="#">
                                    <i className="fab fa-linkedin-in text-lg"></i>
                                </a>
                            </div>
                        </div>
                        <div className="contact-right p-8 sm:p-12 bg-white/20 dark:bg-black/20">
                            <form action="#" className="space-y-6" method="POST">
                                <div>
                                    <label className="sr-only" htmlFor="name">Your Name</label>
                                    <input className="input-field w-full" id="name" name="name" placeholder="Enter Your Name" type="text" />
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="email">Your Email</label>
                                    <input className="input-field w-full" id="email" name="email" placeholder="Enter Your Email" type="email" />
                                </div>
                                <div>
                                    <label className="sr-only w-full" htmlFor="subject">Subject</label>
                                    <input className="input-field w-full" id="subject" name="subject" placeholder="Enter Your Subject" type="text" />
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="message">Message</label>
                                    <textarea className="input-field w-full" id="message" name="message" placeholder="Enter Your Message" rows="5"></textarea>
                                </div>
                                <div>
                                    <button className="w-full bg-primary text-background-dark font-bold text-lg py-3 px-6 rounded-full shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/60 focus:outline-none focus:ring-4 focus:ring-primary/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

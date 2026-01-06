import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaLaptopCode, FaCode, FaDatabase } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.services-title',
                { y: -50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: '.services-title',
                        start: 'top 80%',
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out'
                }
            );

            gsap.fromTo('.service-card',
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: '.service-card',
                        start: 'top 80%',
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out'
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const services = [
        {
            title: "Web Design",
            icon: <FaLaptopCode className="text-white text-5xl" />,
            description: "As a web designer, I combine creativity and technical skills to craft visually appealing and user-friendly websites. I can convert any psd or Figma file into mobile or tab responsive web application."
        },
        {
            title: "Frontend Web Development",
            icon: <FaCode className="text-white text-5xl" />,
            description: "As a frontend web developer, I specialize in building robust and interactive websites that seamlessly integrate functionality and aesthetics."
        },
        {
            title: "Full Stack Development",
            icon: <FaDatabase className="text-white text-5xl" />,
            description: "Along with the Frontend I am skilled in Node JS, Express, JWT. Proficient in implementing Mongo DB database."
        }
    ];

    return (
        <section ref={sectionRef} id="services" className="font-display bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-6xl mx-auto py-16 px-4">
                <header className="text-center mb-16">
                    <h1 className="services-title text-4xl md:text-5xl font-bold font-title text-gray-800 dark:text-white">
                        My <span className="text-primary">Services</span>
                    </h1>
                </header>
                <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="service-card relative group h-full">
                            <div className="absolute -inset-2 rounded-xl bg-primary-light/30 blur-2xl transition-all duration-500 group-hover:bg-primary-light/40"></div>
                            <div className="relative p-8 bg-gray-200 dark:bg-gray-100/5 backdrop-blur-sm rounded-lg border border-primary/20 flex flex-col items-start space-y-6 h-full transition-transform duration-300 group-hover:scale-[1.02]">
                                {service.icon}
                                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{service.title}</h2>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </main>
            </div>
        </section>
    );
};

export default Services;

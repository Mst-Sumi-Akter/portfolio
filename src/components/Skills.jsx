import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiC, SiTailwindcss, SiReactrouter, SiExpress, SiMongodb, SiJsonwebtokens, SiPostman, SiNotion, SiNetlify, SiVercel, SiFirebase, SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { MdCode, MdBrush, MdStorage, MdCloudUpload, MdBuild, MdDns } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.skills-title',
                { y: -50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: '.skills-title',
                        start: 'top 80%',
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out'
                }
            );

            gsap.fromTo('.skill-card',
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: '.skill-card',
                        start: 'top 85%',
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power3.out'
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const skillCategories = [
        {
            title: "Languages",
            icon: <MdCode className="text-3xl text-primary" />,
            skills: [
                { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
                { name: "C", icon: <SiC className="text-[#A8B9CC]" /> }
            ]
        },
        {
            title: "Frontend",
            icon: <MdBrush className="text-3xl text-primary" />,
            skills: [
                { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
                { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
                { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
                { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
                { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" /> },
                { name: "React Router", icon: <SiReactrouter className="text-[#CA4245]" /> }
            ]
        },
        {
            title: "Backend",
            icon: <MdDns className="text-3xl text-primary" />,
            skills: [
                { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
                { name: "Express.js", icon: <SiExpress className="text-slate-500" /> }
            ]
        },
        {
            title: "Database",
            icon: <MdStorage className="text-3xl text-primary" />,
            skills: [
                { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> }
            ]
        },
        {
            title: "Tools",
            icon: <MdBuild className="text-3xl text-primary" />,
            skills: [
                { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
                { name: "GitHub", icon: <FaGithub className="text-slate-900 dark:text-white" /> },
                { name: "JWT", icon: <SiJsonwebtokens className="text-[#000000] dark:text-white" /> },
                { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
                { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
                { name: "Notion", icon: <SiNotion className="text-[#000000] dark:text-white" /> }
            ]
        },
        {
            title: "Deployment",
            icon: <MdCloudUpload className="text-3xl text-primary" />,
            skills: [
                { name: "Netlify", icon: <SiNetlify className="text-[#00C7B7]" /> },
                { name: "Vercel", icon: <SiVercel className="text-slate-900 dark:text-white" /> },
                { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> }
            ]
        },
        {
            title: "Design & Graphics",
            icon: <MdBrush className="text-3xl text-primary" />,
            skills: [
                { name: "Photoshop", icon: <SiAdobephotoshop className="text-[#31A8FF]" /> },
                { name: "Illustrator", icon: <SiAdobeillustrator className="text-[#FF9A00]" /> },
                { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" /> }
            ],
            colSpan: "lg:col-span-3"
        }
    ];

    return (
        <section id="skills" ref={sectionRef} className="font-display bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 antialiased relative">
            <div className="container max-w-6xl mx-auto px-4 py-16 md:py-24 relative z-10">
                <header className="skills-title text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-title text-slate-900 dark:text-white">My <span className="text-primary">Skills</span></h1>
                </header>
                <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className={`skill-card group relative flex flex-col rounded-xl transition-all duration-300 hover:scale-105 ${category.colSpan || ''}`}>
                            <div className="absolute -inset-2 rounded-xl bg-primary-light/30 blur-2xl transition-all duration-500 group-hover:bg-primary-light/40"></div>
                            <div className="relative bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 dark:border-primary/30 shadow-lg shadow-primary/5 dark:shadow-glow-dark h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    {category.icon}
                                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{category.title}</h2>
                                </div>
                                <div className="flex flex-wrap gap-4 text-3xl">
                                    {category.skills.map((skill, idx) => (
                                        <span key={idx} className="p-3 bg-slate-200 dark:bg-slate-800 rounded-md hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors duration-300" title={skill.name}>
                                            {skill.icon}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </main>
            </div>
        </section>
    );
};

export default Skills;

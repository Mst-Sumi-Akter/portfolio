import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef(null);
    console.log("Projects data count:", projectsData?.length);

    // GSAP ScrollTrigger could be kept for very complex triggers, 
    // but Framer Motion's whileInView is cleaner for this layout.

    if (!projectsData || projectsData.length === 0) {
        return (
            <section id="projects" className="py-20 text-center bg-background-light dark:bg-background-dark">
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Featured Projects</h2>
                <p className="mt-4 text-slate-600 dark:text-slate-400">No projects available at the moment.</p>
            </section>
        );
    }

    return (
        <section ref={sectionRef} id="projects" className="bg-background-light dark:bg-background-dark font-display text-slate-700 dark:text-slate-300 antialiased">
            <div className="py-16 sm:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h2 className="projects-title text-4xl md:text-5xl font-bold font-title tracking-tight text-slate-800 dark:text-slate-100">
                            Featured <span className="text-primary dark:text-primary-light">Projects</span>
                        </h2>
                        <p className="projects-subtitle mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Explore my latest work and technical projects.
                        </p>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                        id="projects-grid"
                        className="mt-16 grid gap-10 lg:gap-12 md:grid-cols-2"
                    >
                        {projectsData.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                whileHover={{ y: -10 }}
                                className="project-card group relative flex flex-col rounded-xl transition-all duration-300"
                            >
                                <div className="absolute -inset-2 rounded-xl bg-primary-light/30 blur-2xl transition-all duration-500 group-hover:bg-primary-light/40 opacity-0 group-hover:opacity-100"></div>
                                <div className="relative flex flex-col h-full rounded-xl bg-white dark:bg-slate-900 overflow-hidden ring-1 ring-slate-200 dark:ring-slate-800 shadow-xl group-hover:shadow-2xl transition-all">
                                    <div className="overflow-hidden h-56 relative">
                                        <img
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            src={project.image}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-50">{project.title}</h3>
                                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 flex-grow leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {project.techStack.slice(0, 4).map((tech, i) => (
                                                <div key={i} className="flex items-center gap-1 rounded-full bg-slate-100 dark:bg-slate-800 py-1 px-3 border border-slate-200 dark:border-slate-700">
                                                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{tech}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-6 flex items-center justify-between gap-4">
                                            <Link
                                                to={`/project/${project.id}`}
                                                className="flex-1 text-center py-2 px-4 rounded-lg bg-primary text-white font-bold shadow-md hover:bg-primary/90 transition-all hover:scale-105"
                                            >
                                                View Details
                                            </Link>
                                            <div className="flex gap-3">
                                                <a
                                                    href={project.liveLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors border border-slate-200 dark:border-slate-700"
                                                    title="Live Site"
                                                >
                                                    <i className="material-icons text-xl">link</i>
                                                </a>
                                                <a
                                                    href={project.githubClient}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors border border-slate-200 dark:border-slate-700"
                                                    title="GitHub Repo"
                                                >
                                                    <i className="material-icons text-xl">code</i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Projects;

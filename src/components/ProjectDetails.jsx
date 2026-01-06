import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaServer } from 'react-icons/fa';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projectsData.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background-light dark:bg-background-dark text-slate-800 dark:text-white">
                <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
                <Link to="/" className="text-primary hover:underline flex items-center gap-2">
                    <FaArrowLeft /> Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark pt-24 pb-16 font-display">
            <div className="container mx-auto px-4 sm:px-6 lg:px-20 xl:px-24">
                <motion.button
                    onClick={() => navigate(-1)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-primary font-semibold mb-8 hover:text-primary/80 transition-colors"
                >
                    <FaArrowLeft /> Back
                </motion.button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Side: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-2 rounded-2xl bg-primary/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="relative w-full h-[300px] md:h-[450px] object-cover rounded-2xl shadow-2xl ring-1 ring-primary/20"
                        />
                    </motion.div>

                    {/* Right Side: Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                            {project.title}
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-3">
                                {project.techStack.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium border border-slate-300 dark:border-slate-700 shadow-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-primary text-white py-3 px-6 rounded-lg font-bold shadow-lg hover:bg-primary/90 transition-all hover:-translate-y-1"
                            >
                                <FaExternalLinkAlt /> Live Site
                            </a>
                            <a
                                href={project.githubClient}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-slate-800 dark:bg-slate-700 text-white py-3 px-6 rounded-lg font-bold shadow-lg hover:bg-slate-900 dark:hover:bg-slate-600 transition-all hover:-translate-y-1"
                            >
                                <FaGithub /> Client Repo
                            </a>
                            <a
                                href={project.githubServer}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-slate-800 dark:bg-slate-700 text-white py-3 px-6 rounded-lg font-bold shadow-lg hover:bg-slate-900 dark:hover:bg-slate-600 transition-all hover:-translate-y-1"
                            >
                                <FaServer /> Server Repo
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Features Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 bg-slate-100 dark:bg-slate-900/50 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800"
                >
                    <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 border-b border-primary/30 pb-4 inline-block">
                        Main Features
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm">
                                    {index + 1}
                                </span>
                                <span className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                                    {feature}
                                </span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectDetails;

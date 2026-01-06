
import React, { useState } from 'react';
import { NavHashLink as HashLink } from 'react-router-hash-link';
import { FaHome, FaUser, FaTools, FaBriefcase, FaEnvelope, FaCode, FaDownload } from 'react-icons/fa';
import image from "../assets/Sumi.png"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navLinks = [
        { name: 'Home', href: '/#hero', icon: <FaHome /> },
        { name: 'About', href: '/#about', icon: <FaUser /> },
        { name: 'Services', href: '/#services', icon: <FaTools /> },
        { name: 'Skills', href: '/#skills', icon: <FaCode /> },
        { name: 'Project', href: '/#projects', icon: <FaBriefcase /> },
        { name: 'Contact', href: '/#contact', icon: <FaEnvelope /> },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm shadow-sm transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-20 xl:px-24">
                <div className="flex justify-between items-center py-4">
                    <HashLink className="flex items-center space-x-3" to="/#hero" onClick={closeMenu}>
                        <img alt="Sumi Akter profile picture" className="h-10 w-10 rounded-full object-cover" src={image} />
                        <span className="text-xl font-bold text-gray-900 dark:text-white">Sumi Akter</span>
                    </HashLink>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <HashLink
                                key={link.name}
                                smooth
                                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-300"
                                to={link.href}
                            >
                                <span className="text-lg">{link.icon}</span>
                                <span>{link.name}</span>
                            </HashLink>
                        ))}
                        <a
                            className="flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors duration-300"
                            href="https://drive.google.com/uc?export=download&id=1p1B1sLYe7NF_Kxbx1GlK-330hNYGOQ26"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaDownload />
                            <span>Resume</span>
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700 dark:text-white focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <span className="material-icons text-3xl">close</span>
                        ) : (
                            <span className="material-icons text-3xl">menu</span>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800 absolute w-full left-0 shadow-lg">
                    <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <HashLink
                                key={link.name}
                                smooth
                                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-300 block"
                                to={link.href}
                                onClick={closeMenu}
                            >
                                <span className="text-xl">{link.icon}</span>
                                <span>{link.name}</span>
                            </HashLink>
                        ))}
                        <a
                            className="flex items-center gap-3 text-primary font-medium hover:text-primary/80 transition-colors duration-300 block"
                            href="https://drive.google.com/uc?export=download&id=1p1B1sLYe7NF_Kxbx1GlK-330hNYGOQ26"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                        >
                            <FaDownload className="text-xl" />
                            <span>Resume</span>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;

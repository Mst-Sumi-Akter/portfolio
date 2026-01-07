
import React, { useState } from 'react';
import { NavHashLink as HashLink } from 'react-router-hash-link';
import { FaHome, FaUser, FaTools, FaBriefcase, FaEnvelope, FaCode, FaDownload } from 'react-icons/fa';
import logoSource from '../assets/logo_source.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        <header className={`sticky top-0 z-50 w-full backdrop-blur-sm shadow-sm transition-all duration-300 ${isScrolled ? 'bg-background-light/95 dark:bg-background-dark/95 shadow-md' : 'bg-transparent shadow-none'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-20 xl:px-24">
                <div className="flex justify-between items-center py-4">
                    <HashLink className="flex items-center group" to="/#hero" onClick={closeMenu}>
                        <div className="relative h-14 w-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                            <img
                                src={logoSource}
                                alt="S"
                                className="h-full w-auto object-contain mix-blend-multiply dark:invert dark:mix-blend-screen contrast-[2.5] brightness-90 saturate-[2.5] drop-shadow-[0_0_1px_#003d7a] drop-shadow-[0_0_2px_#003d7a] drop-shadow-[0_0_12px_rgba(0,191,255,0.9)]"
                            />
                        </div>
                        <span className="text-lg font-semibold font-title text-[#003d7a] dark:text-white hidden sm:block -ml-1 mt-2">
                            UMI AKTER
                        </span>
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
                            href="https://drive.google.com/uc?export=download&id=1X4M0vxZmLW8KZiXLuXRDvLyY8vTp8tdl"
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
                            href="https://drive.google.com/uc?export=download&id=1X4M0vxZmLW8KZiXLuXRDvLyY8vTp8tdl"
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

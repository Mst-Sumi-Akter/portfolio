
import React, { useState } from 'react';
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
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Skills', href: '#skills' },
        { name: 'Project', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm shadow-sm transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-20 xl:px-24">
                <div className="flex justify-between items-center py-4">
                    <a className="flex items-center space-x-3" href="#hero" onClick={closeMenu}>
                        <img alt="Sumi Akter profile picture" className="h-10 w-10 rounded-full object-cover" src={image} />
                        <span className="text-xl font-bold text-gray-900 dark:text-white">Sumi Akter</span>
                    </a>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-300"
                                href={link.href}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a className="text-primary font-medium hover:text-primary/80 transition-colors duration-300" href="#">Resume</a>
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
                            <a
                                key={link.name}
                                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-300 block"
                                href={link.href}
                                onClick={closeMenu}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a className="text-primary font-medium hover:text-primary/80 transition-colors duration-300 block" href="#" onClick={closeMenu}>Resume</a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;

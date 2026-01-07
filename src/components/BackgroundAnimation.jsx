import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
    const [particles] = useState(() => {
        return [...Array(30)].map((_, i) => ({
            id: i,
            initialX: Math.random() * 100, // %
            initialY: Math.random() * 100, // %
            initialScale: Math.random() * 0.5 + 0.5,
            animateX: Math.random() * 100, // %
            animateY: Math.random() * 100, // %
            duration: Math.random() * 20 + 20,
            size: Math.random() * 5 + 2,
        }));
    });

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-background-light dark:bg-background-dark transition-colors duration-300"></div>

            {/* Gradient Orb 1 */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
                className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50"
            />

            {/* Gradient Orb 2 */}
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.5, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute top-[20%] right-[-10%] w-[30rem] h-[30rem] bg-purple-500/20 rounded-full blur-3xl opacity-50"
            />

            {/* Gradient Orb 3 */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 5
                }}
                className="absolute bottom-[-10%] left-[20%] w-[25rem] h-[25rem] bg-cyan-500/20 rounded-full blur-3xl opacity-50"
            />
            {/* Gradient Orb 4 - Dark mode accent */}
            <motion.div
                animate={{
                    x: [0, -50, 0],
                    y: [0, -50, 0],
                    rotate: [0, 180, 0]
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
                className="absolute bottom-[10%] right-[10%] w-80 h-80 bg-pink-500/10 rounded-full blur-3xl opacity-30"
            />

            {/* Floating Particles */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute bg-white dark:bg-primary rounded-full opacity-20 dark:opacity-40"
                    initial={{
                        left: `${p.initialX}%`,
                        top: `${p.initialY}%`,
                        scale: p.initialScale,
                    }}
                    animate={{
                        left: `${p.animateX}%`,
                        top: `${p.animateY}%`,
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                    }}
                    style={{
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                    }}
                />
            ))}

        </div>
    );
};

export default BackgroundAnimation;

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const letters = "ERICK".split("");

const Preloader = ({ onComplete }) => {
    useEffect(() => {
        // Precise 5-second timer as requested
        const timer = setTimeout(() => {
            onComplete();
        }, 5000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    const letterVariants = {
        initial: {
            y: 80,
            opacity: 0,
            filter: "blur(12px)"
        },
        animate: (i) => ({
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                duration: 1,
                delay: i * 0.1,
                ease: [0.2, 0, 0.2, 1]
            }
        })
    };

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                scale: 1.1,
                filter: "blur(20px)",
                transition: { duration: 0.6, ease: "circIn" }
            }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617] overflow-hidden"
        >
            {/* Background Layer */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute inset-0 cyber-grid opacity-20" />
            </div>

            <div className="relative flex flex-col items-center">
                <div className="flex mb-10">
                    {letters.map((letter, i) => (
                        <motion.span
                            key={i}
                            custom={i}
                            variants={letterVariants}
                            initial="initial"
                            animate="animate"
                            className="text-8xl md:text-[12rem] font-black text-white tracking-widest inline-block"
                            style={{
                                textShadow: '0 0 40px rgba(59, 130, 246, 0.4)'
                            }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>

                {/* Progress bar logic - matches the 5s timer */}
                <div className="w-64 md:w-96 h-[2px] bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 4.5, ease: "linear" }}
                        className="w-full h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0.5] }}
                    transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                    className="mt-10 text-blue-400 font-bold uppercase tracking-[0.8em] text-[10px] md:text-xs"
                >
                    Loading Portfolio
                </motion.div>
            </div>

            {/* Cinematic Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
        </motion.div>
    );
};

export default Preloader;

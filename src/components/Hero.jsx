import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ChevronRight, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import profile from '../images/random/profile.png';
import socialLinks from '../link_media/link.json';

const Hero = () => {
    const socialIcons = [
        { icon: <Github className="w-6 h-6" />, link: socialLinks.github },
        { icon: <Linkedin className="w-6 h-6" />, link: socialLinks.linkedin },
        { icon: <Instagram className="w-6 h-6" />, link: socialLinks.instagram },
        { icon: <Mail className="w-6 h-6" />, link: `mailto:${socialLinks.mail}` }
    ];

    return (
        <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden py-32 px-6 bg-transparent transition-colors duration-300">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                    className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-sky-600/10 blur-[120px] rounded-full"
                />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full gap-12 lg:gap-20">
                {/* Text Content (Left Side) */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-4"
                    >
                        <span className="px-5 py-2 glass rounded-full text-blue-400 text-xs md:text-sm font-black tracking-[0.4em] uppercase border border-blue-500/20 shadow-2xl">
                            Frontend Architect
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="mb-8"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tight text-slate-900 dark:text-white leading-[1] mb-6 transition-colors">
                            ERICK <br className="hidden lg:block" />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-sky-600 to-blue-800 dark:from-blue-400 dark:via-sky-400 dark:to-blue-600 animate-gradient-x underline decoration-blue-500/20 underline-offset-8">
                                HAIDAR
                            </span>
                        </h1>

                        <div className="text-2xl md:text-4xl font-bold text-slate-700 dark:text-slate-300 min-h-[1.5em] transition-colors">
                            <TypeAnimation
                                sequence={[
                                    'Building Digital Futures', 2000,
                                    'Crafting Clean Code', 2000,
                                    'Modern Web Experiences', 2000,
                                ]}
                                speed={50}
                                repeat={Infinity}
                                className="text-blue-600 dark:text-blue-200/90"
                            />
                        </div>
                    </motion.div>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="max-w-xl text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-12 transition-colors"
                    >
                        Specializing in high-performance react applications with cutting-edge visual aesthetics and seamless user interactions.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-6 mb-16 w-full lg:justify-start justify-center"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05, translateY: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-10 py-5 bg-blue-600 text-white rounded-2xl font-black md:text-lg overflow-hidden transition-all shadow-[0_20px_40px_rgba(37,99,235,0.2)] dark:shadow-[0_0_40px_rgba(37,99,235,0.4)]"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                VIEW PROJECTS <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.a>

                        <motion.button
                            whileHover={{ scale: 1.05, translateY: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 bg-slate-900/5 dark:bg-white/10 backdrop-blur-xl border border-slate-900/10 dark:border-white/10 text-slate-900 dark:text-white rounded-2xl font-black md:text-lg flex items-center justify-center gap-3 shadow-2xl transition-colors"
                        >
                            <Download className="w-6 h-6" /> DOWNLOAD CV
                        </motion.button>
                    </motion.div>

                    {/* Social Hub */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex gap-10 items-center justify-center lg:justify-start"
                    >
                        {socialIcons.map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.link}
                                whileHover={{ y: -8, scale: 1.2, color: '#60a5fa' }}
                                className="text-slate-500 transition-all filter drop-shadow-2xl"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {/* Hero Image Container */}
                <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, type: 'spring', damping: 20 }}
                        className="relative group"
                    >
                        {/* Interactive Aura */}
                        <div className="absolute -inset-10 bg-blue-600/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                        <motion.div
                            animate={{
                                y: [-15, 15, -15],
                                rotate: [-1, 1, -1]
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px]"
                        >
                            {/* Rotating Frame */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-[3rem] border-2 border-dashed border-blue-500/30"
                            />

                            <div className="absolute inset-4 rounded-[2.5rem] bg-gradient-to-tr from-blue-600 via-sky-400 to-blue-400 p-[2px] shadow-2xl transform group-hover:rotate-2 transition-transform duration-700">
                                <div className="w-full h-full rounded-[2.4rem] bg-white dark:bg-[#020617] flex items-center justify-center overflow-hidden border border-slate-900/10 dark:border-white/5 relative">
                                    {/* Shimmer Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                    <img
                                        src={profile}
                                        alt="Erick Haidar Rahmat"
                                        className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0"
                                    />
                                </div>
                            </div>

                            {/* Floating Tech Badges */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 p-4 glass rounded-3xl border border-white/10 shadow-2xl hidden md:block"
                            >
                                <span className="text-xl font-black text-blue-400">REACT</span>
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                                className="absolute -bottom-8 -left-8 p-4 glass rounded-3xl border border-white/10 shadow-2xl hidden md:block"
                            >
                                <span className="text-xl font-black text-sky-400">EXPERT</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

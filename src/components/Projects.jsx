import { motion } from 'framer-motion';
import { FolderCode, ExternalLink, Github, ChevronRight, Sparkles } from 'lucide-react';
import projects from '../images/project/project.json';

const Projects = () => {
    return (
        <section id="projects" className="py-32 px-6 relative overflow-hidden transition-colors duration-300">
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-32">
                <div className="flex flex-col items-center text-center space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-9xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter uppercase italic transition-colors"
                    >
                        My <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-sky-600 to-blue-800 dark:from-blue-400 dark:via-sky-400 dark:to-blue-600">
                            Projects.
                        </span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1.5 bg-blue-500 rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {Object.values(projects).map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                            className="group relative flex flex-col items-center"
                        >
                            <div className="relative w-full aspect-[16/10] rounded-[3.5rem] overflow-hidden bg-slate-900/5 dark:bg-[#0b1224]/80 backdrop-blur-xl border border-slate-900/10 dark:border-blue-500/10 shadow-2xl transition-all duration-700 hover:border-blue-500/50 group-hover:-translate-y-4">
                                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60 dark:opacity-60" />

                                <img
                                    src={new URL(`../images/project/${p.image}`, import.meta.url).href}
                                    alt={p.title}
                                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000"
                                />

                                <div className="absolute top-8 right-8 z-20 flex gap-3">
                                    <motion.a
                                        href={p.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="p-4 bg-white/40 dark:bg-white/10 backdrop-blur-xl rounded-2xl border border-slate-900/10 dark:border-white/10 text-slate-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-all shadow-2xl"
                                    >
                                        <ExternalLink className="w-6 h-6" />
                                    </motion.a>
                                </div>

                                <div className="absolute bottom-10 left-10 right-10 z-20 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                        <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em] transition-colors">Featured Project</span>
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic leading-none group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                                        {p.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Decorative Glow under card */}
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-blue-600/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex justify-center pt-20"
                >
                    <a href="#contact" className="flex items-center gap-6 px-12 py-6 bg-white/40 dark:bg-white/10 backdrop-blur-xl border border-slate-900/10 dark:border-white/10 rounded-full font-black text-slate-900 dark:text-white uppercase tracking-[0.4em] hover:border-blue-500/50 transition-all group shadow-2xl">
                        Start a Project <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

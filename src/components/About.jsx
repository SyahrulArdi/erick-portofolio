import { motion } from 'framer-motion';
import { User, Code2, Rocket, Award } from 'lucide-react';

const About = () => {

    return (
        <section id="about" className="py-32 px-6 relative overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="absolute -inset-6 bg-gradient-to-br from-blue-600/20 to-sky-600/20 blur-3xl opacity-50 animate-pulse" />
                        <div className="relative z-10 p-3 glass rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden group">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">
                                <img
                                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000"
                                    alt="Workspace"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
                            </div>

                            <div className="absolute bottom-10 left-10 right-10">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="p-6 bg-white/40 dark:bg-white/10 backdrop-blur-xl border border-slate-900/10 dark:border-white/10 rounded-3xl shadow-2xl transition-colors"
                                >
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                            <Award className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest transition-colors">Experience</p>
                                            <p className="text-sm font-bold text-slate-900 dark:text-white transition-colors">Front-End & UI/UX</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <div className="w-full lg:w-1/2 space-y-10 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white leading-tight uppercase tracking-tighter italic transition-colors">
                                ABOUT <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-sky-600 dark:from-blue-400 dark:via-blue-500 dark:to-sky-400">
                                    ME.
                                </span>
                            </h2>

                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 transition-colors">
                                Saya adalah seorang pengembang front-end dan desainer UI/UX yang berdedikasi untuk menciptakan pengalaman web yang tidak hanya indah secara visual, tetapi juga sangat fungsional dan responsif. Berbasis di Indonesia, saya mengkhususkan diri dalam pengembangan menggunakan React, Tailwind CSS, dan ekosistem JavaScript modern untuk membangun identitas digital yang berkesan.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="pt-6"
                        >
                            <a href="#contact" className="inline-flex items-center gap-4 text-blue-400 font-black text-sm uppercase tracking-[0.3em] group">
                                Let's build something great
                                <span className="w-12 h-[2px] bg-blue-500 transition-all group-hover:w-20" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

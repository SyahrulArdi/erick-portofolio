import { motion } from 'framer-motion';
import { Code2, Github as GithubIcon, Globe, Cpu, Layers, Terminal } from 'lucide-react';

const TechStack = () => {
    const skills = [
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 'Expert' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 'Expert' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 'Expert' },
        { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg', level: 'Advanced' },
        { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', level: 'Advanced' },
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', level: 'Advanced' },
        { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', level: 'Advanced' },
    ];

    // Splitting skills for a more dynamic "wow" grid
    const row1 = skills.slice(0, 3);
    const row2 = skills.slice(3);

    return (
        <section id="skills" className="py-32 bg-transparent overflow-hidden relative transition-colors duration-300">
            {/* Background Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
                <div className="flex flex-col items-center text-center space-y-6">

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white uppercase tracking-tighter transition-colors"
                    >
                        Technical <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-sky-600 to-blue-800 dark:from-blue-400 dark:via-sky-400 dark:to-blue-600 italic">
                            Toolkit.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl text-slate-600 dark:text-slate-400 text-lg transition-colors"
                    >
                        Menguasai berbagai teknologi modern untuk menghadirkan solusi digital yang inovatif dan efisien.
                    </motion.p>
                </div>
            </div>

            <div className="relative flex flex-col gap-8 md:gap-12">
                {/* Rolling Rows Effect */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-wrap justify-center gap-6 px-10"
                >
                    {row1.map((skill, i) => (
                        <SkillCard key={i} skill={skill} index={i} />
                    ))}
                </motion.div>

                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-wrap justify-center gap-6 px-10"
                >
                    {row2.map((skill, i) => (
                        <SkillCard key={i} skill={skill} index={i} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const SkillCard = ({ skill, index }) => (
    <motion.div
        whileHover={{ y: -10, scale: 1.02 }}
        className="group relative w-full sm:w-[280px] p-8 bg-slate-900/5 dark:bg-[#0b1224]/80 backdrop-blur-xl rounded-[2.5rem] border border-slate-900/10 dark:border-blue-500/10 flex flex-col items-center gap-6 transition-all hover:bg-slate-900/10 dark:hover:bg-[#0b1224] hover:border-blue-500/40 overflow-hidden"
    >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative w-20 h-20 flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <img src={skill.icon} alt={skill.name} className="w-14 h-14 object-contain relative z-10 group-hover:scale-110 transition-transform duration-500" />
        </div>

        <div className="text-center relative z-10">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-widest italic group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">{skill.name}</h3>
            <div className="mt-2 text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                {skill.level}
            </div>
        </div>

        <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
            <Cpu className="w-12 h-12 text-blue-500" />
        </div>
    </motion.div>
);

export default TechStack;

import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, ArrowUpCircle } from 'lucide-react';
import socialData from '../link_media/link.json';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <Github className="w-6 h-6" />, href: socialData.github, color: "hover:text-white" },
        { icon: <Linkedin className="w-6 h-6" />, href: socialData.linkedin, color: "hover:text-blue-400" },
        { icon: <Instagram className="w-6 h-6" />, href: socialData.instagram, color: "hover:text-pink-500" },
        { icon: <Mail className="w-6 h-6" />, href: `mailto:${socialData.mail}`, color: "hover:text-blue-400" },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative py-24 px-6 overflow-hidden bg-transparent border-t border-white/5">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-16">
                <motion.div
                    onClick={scrollToTop}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-20 h-20 rounded-3xl bg-white dark:bg-[#0b1224] border border-slate-900/10 dark:border-blue-500/20 flex items-center justify-center cursor-pointer hover:border-blue-500 transition-all text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 group shadow-2xl relative overflow-hidden transition-colors"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <ArrowUpCircle className="w-10 h-10 transition-all relative z-10" />
                </motion.div>

                <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-12 lg:gap-0">
                    <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
                        <div className="flex flex-col">
                            <span className="text-4xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none transition-colors">
                                MCreal
                            </span>
                            <span className="text-[10px] font-black text-blue-600 dark:text-blue-500 uppercase tracking-[0.4em] mt-1 ml-1 transition-colors">
                                Digital Enterprise
                            </span>
                        </div>
                        <p className="text-slate-500 text-[10px] max-w-xs leading-relaxed font-bold uppercase tracking-widest">
                            Crafting high-end digital experiences with precision and speed from Sidoarjo, Indonesia.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-8">
                        <div className="flex gap-8">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5, scale: 1.2 }}
                                    className={`text-slate-500 transition-all ${social.color}`}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                        <div className="text-[9px] font-black text-slate-600 uppercase tracking-[0.5em]">
                            © {currentYear} Created by <span className="text-slate-900 dark:text-white">Erick Haidar</span>
                        </div>
                    </div>

                    <div className="hidden lg:flex flex-col items-end gap-2 text-right">
                        <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold hover:text-blue-500 cursor-pointer transition-colors">Privacy Policy</p>
                        <p className="text-slate-900 dark:text-white text-[10px] font-black uppercase tracking-[0.2em] italic underline decoration-blue-500/30 underline-offset-4 hover:decoration-blue-500 cursor-pointer transition-all">Terms of Service</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

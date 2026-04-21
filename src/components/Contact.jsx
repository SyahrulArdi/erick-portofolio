import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, Github, Instagram, ArrowRight } from 'lucide-react';
import socialLinks from '../link_media/link.json';

const Contact = () => {
    const contactInfo = [
        { icon: <Mail className="w-6 h-6" />, title: 'Email', value: socialLinks.mail, color: 'text-blue-400', bg: 'bg-blue-500/10' },
        { icon: <Phone className="w-6 h-6" />, title: 'Phone', value: '+62 812 3456 7890', color: 'text-sky-400', bg: 'bg-sky-500/10' },
        { icon: <MapPin className="w-6 h-6" />, title: 'Location', value: 'Sidoarjo, Jawa Timur, ID', color: 'text-blue-400', bg: 'bg-blue-500/10' }
    ];

    const socialPlatforms = [
        { Icon: Github, link: socialLinks.github },
        { Icon: Linkedin, link: socialLinks.linkedin },
        { Icon: Instagram, link: socialLinks.instagram }
    ];

    return (
        <section id="contact" className="py-32 px-6 relative overflow-hidden transition-colors duration-300">
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-32 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-6 py-2 bg-white/40 dark:bg-white/10 backdrop-blur-xl rounded-full border border-slate-900/10 dark:border-white/10 text-blue-600 dark:text-blue-400 font-black text-xs uppercase tracking-[0.4em] shadow-2xl transition-colors"
                    >
                        <MessageSquare className="w-5 h-5 transition-colors" />
                        <span>Ready to Talk</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-9xl font-black text-slate-900 dark:text-white leading-none uppercase tracking-tighter italic transition-colors"
                    >
                        Let's <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-sky-600 dark:from-blue-400 dark:to-sky-400">
                            Innovate.
                        </span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Contact Info */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight transition-colors">Mission Control</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed transition-colors">
                                Apakah Anda memiliki ide revolusioner atau sekadar ingin berdiskusi? Tim "satu orang" saya siap membantu Anda mewujudkannya.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 15 }}
                                    className="flex items-center gap-8 p-8 bg-slate-900/5 dark:bg-[#0b1224]/80 backdrop-blur-xl rounded-[2.5rem] border border-slate-900/10 dark:border-blue-500/10 group transition-all"
                                >
                                    <div className={`w-16 h-16 rounded-3xl ${item.bg} ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl`}>
                                        {item.icon}
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">{item.title}</h4>
                                        <p className="text-slate-900 dark:text-white text-lg font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="p-10 bg-slate-900/5 dark:bg-[#0b1224]/80 backdrop-blur-xl border border-slate-900/10 dark:border-blue-500/10 rounded-[3rem] shadow-2xl space-y-8 transition-colors">
                            <h4 className="text-slate-900 dark:text-white font-black text-sm uppercase tracking-[0.3em] transition-colors">Join The Network</h4>
                            <div className="flex gap-6">
                                {socialPlatforms.map(({ Icon, link }, idx) => (
                                    <motion.a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        key={idx}
                                        whileHover={{ y: -8, scale: 1.15 }}
                                        className="w-16 h-16 bg-white dark:bg-[#0b1224] rounded-2xl border border-slate-900/10 dark:border-blue-500/20 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600/50 dark:hover:border-blue-500/50 shadow-2xl transition-all"
                                    >
                                        <Icon className="w-8 h-8" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <form className="p-10 md:p-16 bg-white dark:bg-[#0b1224]/80 backdrop-blur-xl rounded-[4rem] border border-slate-900/10 dark:border-blue-500/10 shadow-2xl space-y-10 relative overflow-hidden group transition-colors">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-4">Commander Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Carter"
                                        className="w-full px-8 py-5 rounded-3xl bg-slate-900/5 dark:bg-white/[0.03] border border-slate-900/10 dark:border-white/10 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all text-slate-900 dark:text-white outline-none font-bold placeholder:text-slate-400 dark:placeholder:text-slate-600 shadow-inner"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-4">Frequency (Email)</label>
                                    <input
                                        type="email"
                                        placeholder="john@mars.com"
                                        className="w-full px-8 py-5 rounded-3xl bg-slate-900/5 dark:bg-white/[0.03] border border-slate-900/10 dark:border-white/10 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all text-slate-900 dark:text-white outline-none font-bold placeholder:text-slate-400 dark:placeholder:text-slate-600 shadow-inner"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4 relative z-10">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-4">Transmission</label>
                                <textarea
                                    rows="5"
                                    placeholder="I have a mission for you..."
                                    className="w-full px-8 py-6 rounded-3xl bg-slate-900/5 dark:bg-white/[0.03] border border-slate-900/10 dark:border-white/10 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all text-slate-900 dark:text-white outline-none font-bold placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none shadow-inner"
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02, translateY: -5 }}
                                whileTap={{ scale: 0.98 }}
                                className="relative z-10 w-full py-6 bg-blue-600 text-white font-black rounded-3xl text-xl uppercase tracking-[0.3em] shadow-[0_20px_50px_rgba(37,99,235,0.4)] hover:bg-blue-500 transition-all flex items-center justify-center gap-4 group/btn"
                            >
                                START TRANSMISSION <Send className="w-7 h-7 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

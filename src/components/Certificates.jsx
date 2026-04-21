import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, ChevronRight, ChevronLeft, ShieldCheck, Maximize2, Layers, Download } from 'lucide-react';
import certData from '../images/certificate/certificate.json';

const getCertImage = (fileName) => {
    return new URL(`../images/certificate/${fileName}`, import.meta.url).href;
};

const Certificates = () => {
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const certificateGroups = Object.entries(certData).map(([key, fileName], index) => ({
        id: index + 1,
        title: key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        issuer: index === 0 ? 'PT Garuda Telekomunikasi Indonesia' : 'Professional Certification',
        year: '2023',
        count: 1,
        coverImage: getCertImage(fileName),
        description: `Official digital credential for ${key.replace(/_/g, ' ')}. This certificate verifies the completion of specialized professional training as part of our premium development roadmap.`,
        images: [
            {
                src: getCertImage(fileName),
                title: key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                subtitle: 'Verified Achievement'
            }
        ]
    }));

    const openModal = (group) => {
        setSelectedGroup(group);
        setCurrentImgIndex(0);
    };

    return (
        <section id="certificates" className="py-32 px-6 relative overflow-hidden transition-colors duration-300">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-32 space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-9xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic transition-colors"
                    >
                        My <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-sky-400 to-blue-800 dark:from-blue-400 dark:via-sky-400 dark:to-blue-600">
                            Certificate.
                        </span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1.5 bg-blue-500 rounded-full mx-auto"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-medium px-4 transition-colors"
                    >
                        Bukti kompetensi dan pengalaman profesional yang telah diverifikasi oleh instansi ternama dalam industri teknologi.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto px-2 md:px-0">
                    {certificateGroups.map((group, index) => (
                        <motion.div
                            key={group.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            onClick={() => openModal(group)}
                            className="group relative w-full cursor-pointer"
                        >
                            {/* Advanced Stacking Decoration */}
                            <div className="absolute -top-6 -right-6 w-full h-full bg-slate-900/10 dark:bg-[#0b1224]/40 border border-slate-900/5 dark:border-blue-500/5 rounded-[2.5rem] transition-transform duration-700 group-hover:translate-x-4 group-hover:-translate-y-4 opacity-40 group-hover:opacity-100" />
                            <div className="absolute -top-3 -right-3 w-full h-full bg-slate-900/20 dark:bg-[#0b1224]/60 border border-slate-900/10 dark:border-blue-500/10 rounded-[2.5rem] transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2 opacity-60" />

                            <div className="relative bg-white dark:bg-[#0b1224]/80 backdrop-blur-xl rounded-[2.5rem] border border-slate-900/10 dark:border-blue-500/10 overflow-hidden shadow-2xl transition-all duration-500 hover:border-blue-500/40">
                                <div className="aspect-[16/11] relative overflow-hidden">
                                    <img
                                        src={group.coverImage}
                                        alt={group.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] dark:via-[#020617]/20 to-transparent" />

                                    <div className="absolute top-8 right-8">
                                        <div className="px-5 py-2 bg-white/40 dark:bg-white/10 rounded-2xl border border-slate-900/10 dark:border-white/10 flex items-center gap-3 backdrop-blur-3xl">
                                            <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                            <span className="text-xs font-black text-slate-900 dark:text-white transition-colors">{group.count} Items</span>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                                        <div className="space-y-3">
                                            <p className="text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] transition-colors">{group.issuer}</p>
                                            <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight uppercase tracking-tighter italic transition-colors">
                                                {group.title}
                                            </h3>
                                        </div>
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="w-16 h-16 rounded-3xl bg-blue-500 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.6)]"
                                        >
                                            <Maximize2 className="w-8 h-8 text-white" />
                                        </motion.div>
                                    </div>
                                </div>

                                <div className="p-8 bg-slate-900/[0.03] dark:bg-white/[0.03] border-t border-slate-200 dark:border-white/5 transition-colors">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-bold text-xs transition-colors">
                                            <Award className="w-5 h-5 text-blue-600 dark:text-blue-500" />
                                            {group.year} Verified Credential
                                        </div>
                                        <span className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.2em] text-[10px] transition-colors">View Detail</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Premium Cinematic Modal */}
            <AnimatePresence>
                {selectedGroup && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-white/95 dark:bg-[#020617]/95 backdrop-blur-3xl overflow-y-auto transition-colors"
                    >
                        <motion.button
                            initial={{ scale: 0, rotate: -90 }}
                            animate={{ scale: 1, rotate: 0 }}
                            onClick={() => setSelectedGroup(null)}
                            className="fixed top-8 right-8 md:top-12 md:right-12 p-5 bg-white/40 dark:bg-white/10 backdrop-blur-xl rounded-3xl border border-slate-900/10 dark:border-white/10 text-slate-900 dark:text-white hover:border-blue-500 transition-all z-[110]"
                        >
                            <X className="w-8 h-8" />
                        </motion.button>

                        <div className="relative w-full max-w-6xl flex flex-col items-center gap-12 py-24">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ type: 'spring', damping: 20 }}
                                className="w-full relative shadow-[0_50px_100px_rgba(0,0,0,0.5),0_0_100px_rgba(59,130,246,0.1)] rounded-[3rem] overflow-hidden bg-white/40 dark:bg-white/10 backdrop-blur-xl border border-slate-900/10 dark:border-white/10"
                            >
                                <div className="bg-slate-100 dark:bg-[#020617] p-4 md:p-8 transition-colors">
                                    <img
                                        src={selectedGroup.images[currentImgIndex].src}
                                        alt={selectedGroup.images[currentImgIndex].title}
                                        className="w-full h-auto max-h-[80vh] object-contain rounded-3xl shadow-2xl"
                                    />
                                </div>
                                <div className="p-8 md:p-12 bg-white/40 dark:bg-white/10 backdrop-blur-xl border-t border-slate-900/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 transition-colors">
                                    <div className="text-center md:text-left space-y-4">
                                        <h4 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter transition-colors">{selectedGroup.title}</h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-lg transition-colors">{selectedGroup.description}</p>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-4 px-10 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest shadow-2xl"
                                    >
                                        <Download className="w-6 h-6" /> Download Certificate
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;

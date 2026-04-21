import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, CheckCircle } from 'lucide-react';

const experiences = [
    {
        id: 1,
        title: "Mahasiswa Teknik Informatika",
        company: "Politeknik Elektronika Negeri Surabaya",
        date: "2024 - Sekarang",
        description: "Sedang menempuh pendidikan sarjana terapan di jurusan Teknik Informatika, fokus pada pengembangan perangkat lunak dan arsitektur sistem.",
        type: "education",
        tasks: [
            "Mempelajari algoritma dan struktur data",
            "Pengembangan aplikasi berbasis web dan mobile",
            "Kolaborasi dalam proyek pengembangan sistem"
        ]
    },
    {
        id: 2,
        title: "Magang - Kameramen & Editor",
        company: "DISKOMINFO (Wika TV)",
        date: "Magang 4 Bulan",
        description: "Pengalaman profesional sebagai kameramen live event bupati dan editor video untuk konten digital kominfo.",
        type: "work",
        tasks: [
            "Kameramen live event Bupati",
            "Editor podcast YouTube Wika TV",
            "Manajemen konten multimedia"
        ]
    },
    {
        id: 3,
        title: "Lulusan Multimedia",
        company: "SMK Negeri 1 Pungging",
        date: "Lulusan",
        description: "Menyelesaikan pendidikan kejuruan dengan fokus pada desain grafis, videografi, dan multimedia interaktif.",
        type: "education",
        tasks: [
            "Dasar-dasar desain multimedia",
            "Produksi konten video dan animasi",
            "Pengembangan grafis dan aset visual"
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-32 px-6 relative overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto space-y-24">
                <div className="flex flex-col items-center text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 bg-gradient-to-r from-blue-600 via-sky-400 to-transparent rounded-full"
                    />
                    <h2 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white leading-tight uppercase tracking-tighter transition-colors">
                        Riwayat <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-sky-600 dark:from-blue-400 dark:to-sky-400">
                            Pendidikan & Pengalaman
                        </span>
                    </h2>
                    <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-lg transition-colors">
                        Eksplorasi perjalanan profesional dan akademik saya dalam membangun fondasi karir di dunia teknologi.
                    </p>
                </div>

                <div className="relative space-y-16">
                    {/* Center Line for Desktop */}
                    <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-600/50 via-sky-400/20 to-blue-600/50 -translate-x-1/2" />

                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className={`relative flex flex-col lg:flex-row items-center gap-12 ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Timeline Node */}
                            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-[#0b1224] border-2 border-slate-900/10 dark:border-white/5 items-center justify-center z-20 group hover:border-blue-500 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                            </div>

                            <div className="w-full lg:w-[45%] group perspective-1000">
                                <motion.div
                                    whileHover={{ rotateY: idx % 2 === 0 ? -5 : 5, translateY: -10 }}
                                    className="relative p-10 rounded-[3rem] bg-slate-900/5 dark:bg-[#0b1224]/80 backdrop-blur-xl border border-slate-900/10 dark:border-blue-500/10 shadow-2xl transition-all duration-500 hover:border-blue-500/40 overflow-hidden"
                                >
                                    {/* Ambient Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    <div className="relative z-10 flex flex-col gap-6">
                                        <div className="flex justify-between items-start">
                                            <div className="flex items-center gap-3 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
                                                <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                                <span className="text-[10px] font-black text-blue-700 dark:text-blue-200 uppercase tracking-widest">{exp.date}</span>
                                            </div>
                                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                                {exp.type === 'work' ? <Briefcase className="w-7 h-7" /> : <GraduationCap className="w-7 h-7" />}
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors uppercase tracking-tight italic">{exp.title}</h3>
                                            <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{exp.company}</p>
                                        </div>

                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-l-2 border-blue-500/30 pl-4 py-1 italic">
                                            {exp.description}
                                        </p>

                                        <div className="pt-4 space-y-3">
                                            {exp.tasks.map((task, i) => (
                                                <div key={i} className="flex items-start gap-4 group/item">
                                                    <div className="mt-1 w-5 h-5 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 group-hover/item:border-blue-500 transition-all">
                                                        <CheckCircle className="w-3 h-3 text-blue-400" />
                                                    </div>
                                                    <span className="text-xs text-slate-400 group-hover/item:text-blue-200 transition-all leading-relaxed font-bold">{task}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Empty side for layout on desktop */}
                            <div className="hidden lg:block w-[45%]" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

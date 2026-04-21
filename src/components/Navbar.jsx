import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import myLogo from '../images/random/circular_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'CERTIFICATE', href: '#certificates' },
    { name: 'WORKS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className={`relative flex justify-between items-center transition-all duration-500 rounded-3xl ${scrolled ? 'glass px-8 py-4 shadow-2xl border border-white/5' : 'bg-transparent px-0 py-0'}`}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className={`relative transition-all duration-500 ${scrolled ? 'w-10 h-10' : 'w-14 h-14'} bg-gradient-to-tr from-blue-600 to-sky-400 p-[2px] rounded-2xl shadow-2xl rotate-3 group-hover:rotate-0`}>
              <div className="w-full h-full bg-white dark:bg-[#020617] rounded-[calc(1rem-1px)] flex items-center justify-center overflow-hidden">
                <img src={myLogo} alt="Logo" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col gap-0">
              <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white uppercase italic leading-none transition-colors">MCreal</span>
              <span className="text-[8px] font-bold text-blue-600 dark:text-blue-400 tracking-[0.4em] uppercase transition-colors">Digital Studio</span>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-[10px] font-black text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-all uppercase tracking-[0.3em] relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              </motion.a>
            ))}

            <div className="h-6 w-px bg-slate-900/10 dark:bg-white/10 mx-2" />

            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/40 dark:bg-white/10 backdrop-blur-xl rounded-2xl border border-slate-900/10 dark:border-white/10 text-slate-900 dark:text-white hover:border-blue-500/50 transition-all shadow-xl"
            >
              {!isDarkMode ? <Moon className="w-5 h-5 text-blue-600" /> : <Sun className="w-5 h-5 text-yellow-400" />}
            </motion.button>
          </div>

          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-3 bg-white/40 dark:bg-white/10 backdrop-blur-xl rounded-2xl text-slate-900 dark:text-white border border-slate-900/10 dark:border-white/10"
            >
              {!isDarkMode ? <Moon className="w-5 h-5 text-blue-600" /> : <Sun className="w-5 h-5" />}
            </button>
            <button
              className="p-3 bg-white/40 dark:bg-white/10 backdrop-blur-xl rounded-2xl text-slate-900 dark:text-white border border-slate-900/10 dark:border-white/10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="lg:hidden absolute top-full left-6 right-6 mt-4 glass rounded-3xl border border-white/5 overflow-hidden shadow-2xl p-8"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-black text-slate-400 hover:text-white transition-colors uppercase tracking-[0.4em] py-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

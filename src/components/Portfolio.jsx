import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import About from './About.jsx';
import TechStack from './TechStack.jsx';
import Experience from './Experience.jsx';
import Certificates from './Certificates.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';

const Portfolio = () => {
    useEffect(() => {
        const handleAnchorClick = (e) => {
            const href = e.currentTarget.getAttribute('href');
            if (href?.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offset = 80;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = target.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        };

        const anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach(anchor => {
            anchor.addEventListener('click', handleAnchorClick);
        });

        return () => {
            anchors.forEach(anchor => {
                anchor.removeEventListener('click', handleAnchorClick);
            });
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="min-h-screen selection:bg-blue-500/30 selection:text-blue-400 transition-colors duration-500 bg-white dark:bg-[#020617] relative"
        >
            {/* Global Background Mesh */}
            <div className="bg-mesh opacity-50" />
            <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

            <Navbar />
            <main className="text-slate-900 dark:text-white transition-colors duration-300">
                <Hero />
                <About />
                <TechStack />

                <Experience />
                <Certificates />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </motion.div>
    );
};

export default Portfolio;

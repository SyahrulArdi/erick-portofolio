import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import Portfolio from './components/Portfolio.jsx';
import Preloader from './components/Preloader.jsx';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Double check theme on mount (after blocking script in index.html)
        const savedTheme = localStorage.getItem('theme') || 'dark';
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    // Ensure the loading state doesn't reset unexpectedly
    const handleLoadingComplete = useCallback(() => {
        setIsLoading(false);
    }, []);

    return (
        <div className="bg-white dark:bg-[#020617] min-h-screen transition-colors duration-500">
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <Preloader key="loader" onComplete={handleLoadingComplete} />
                ) : (
                    <Portfolio key="portfolio" />
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ThreeBackground from './components/ThreeBackground.tsx';
import Home from './pages/Home.tsx';
import Events from './pages/Events.tsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle navigation with scroll reset
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    // Smooth transition for page changes
    window.history.pushState(null, '', `/${currentPage === 'home' ? '' : currentPage}`);
  }, [currentPage]);

  return (
    <div className="relative min-h-screen">
      {/* 3D Static Background - stays always */}
      <ThreeBackground />

      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Home onNavigate={handleNavigate} />
          </motion.div>
        ) : (
          <motion.div
            key="events"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Events onBack={() => handleNavigate('home')} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

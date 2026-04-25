import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ThreeBackground from './components/ThreeBackground';
import Home from './pages/Home';
import Events from './pages/Events';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    console.log('App component mounted');
    // We rely on ErrorBoundary components for targeted recovery
    // rather than a global window listener which is too sensitive
    // to search engine crawlers and browser extensions.
  }, []);

  // Handle navigation with scroll reset
  const handleNavigate = (page: string) => {
    console.log('Navigating to:', page);
    setCurrentPage(page);
    window.scrollTo({ top: 0 });
  };

  if (hasError) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white p-10 font-mono">
        <div className="max-w-md">
          <h1 className="text-2xl text-red-500 mb-4">CRITICAL ARCHIVE ERROR</h1>
          <p className="text-sm text-zinc-400">The application encountered a runtime exception. Please check the browser console for details.</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-6 px-4 py-2 border border-white/20 hover:bg-white/10 transition-colors"
          >
            Re-Initialize Archive
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      {/* 3D Static Background - stays always */}
      <ErrorBoundary fallback={<div className="fixed inset-0 bg-[#040406] -z-10" />}>
        <ThreeBackground />
      </ErrorBoundary>

      <ErrorBoundary fallback={
        <div className="min-h-screen bg-black flex items-center justify-center text-white">
          <p>Failed to load Archive Intelligence. Please refresh.</p>
        </div>
      }>
        <div className="relative z-10">
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
      </ErrorBoundary>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ThreeBackground from './components/ThreeBackground';
import Home from './pages/Home';
import Events from './pages/Events';
import Contact from './pages/Contact';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [hasError, setHasError] = useState(false);
  const [isCyberpunk, setIsCyberpunk] = useState(false);
  const [isShiny, setIsShiny] = useState(false);
  const [isUnown, setIsUnown] = useState(false);
  const [isSleeping, setIsSleeping] = useState(false);

  useEffect(() => {
    console.log('App component mounted');
    // Shiny encounter check (1/4096 chance)
    if (Math.random() < 1 / 4096) {
      setIsShiny(true);
      console.log('✨ Shiny encounter triggered! ✨');
    }

    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          setIsCyberpunk(prev => !prev);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    let sleepTimeoutId: ReturnType<typeof setTimeout>;
    
    const resetTimer = () => {
      setIsSleeping(false);
      clearTimeout(sleepTimeoutId);
      sleepTimeoutId = setTimeout(() => setIsSleeping(true), 5 * 60 * 1000); // 5 minutes!!!
    };

    resetTimer();

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keydown', resetTimer);
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('mousedown', resetTimer);
    window.addEventListener('touchmove', resetTimer);
    window.addEventListener('scroll', resetTimer);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keydown', resetTimer);
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('mousedown', resetTimer);
      window.removeEventListener('touchmove', resetTimer);
      window.removeEventListener('scroll', resetTimer);
      clearTimeout(sleepTimeoutId);
    };
  }, []);

  const handleNavigate = (page: string) => {
    if (page === 'shop') {
      window.open('https://www.cardmarket.com/en/Pokemon/Users/PokeMonitor', '_blank');
      return;
    }
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
    <div className={`relative min-h-screen ${isCyberpunk ? 'cyberpunk-mode' : ''} ${isShiny ? 'shiny-mode' : ''} ${isUnown ? 'unown-mode' : ''}`}>
      {/* 3D Static Background - stays always */}
      <ErrorBoundary fallback={<div className="fixed inset-0 bg-[#040406] -z-10" />}>
        <ThreeBackground />
      </ErrorBoundary>

      <ErrorBoundary fallback={
        <div className="min-h-screen bg-black flex items-center justify-center text-white">
          <p>Failed to load Archive Intelligence. Please refresh.</p>
        </div>
      }>
        <div className="relative z-10 font-sans">
          {/* Top Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-50 px-6 pt-6 pb-20 flex justify-between items-center bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>
            {/* Home Button */}
            <button 
              onClick={() => handleNavigate('home')} 
              className="hover:opacity-80 transition-opacity pointer-events-auto shrink-0"
              aria-label="Home"
            >
              <img src="/logo.png" alt="Home Logo" className="w-10 h-10 md:w-16 md:h-16 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
            </button>

            <div className="flex gap-6 md:gap-10 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-zinc-300 pointer-events-auto">
              <button onClick={() => handleNavigate('shop')} className="hover:text-premium-gold transition-colors">Shop</button>
              <button onClick={() => handleNavigate('events')} className={`hover:text-premium-gold transition-colors ${currentPage === 'events' ? 'text-premium-gold' : ''}`}>Events</button>
              <button onClick={() => handleNavigate('contact')} className={`hover:text-premium-gold transition-colors ${currentPage === 'contact' ? 'text-premium-gold' : ''}`}>Contact</button>
            </div>
          </nav>

          <div className="pt-24"> {/* Padding for Fixed Nav */}
            <AnimatePresence mode="wait">
              {currentPage === 'home' && (
                <motion.div
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Home onNavigate={handleNavigate} onUnown={() => { setIsUnown(true); handleNavigate('home'); }} isUnown={isUnown} />
                </motion.div>
              )}
              {currentPage === 'events' && (
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
              {currentPage === 'contact' && (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Contact onBack={() => handleNavigate('home')} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </ErrorBoundary>

      {/* Jigglypuff Sleep Mode */}
      <AnimatePresence>
        {isSleeping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className="fixed inset-0 z-[100] pointer-events-none overflow-hidden"
          >
            <div className="absolute inset-0 bg-pink-500/20 backdrop-blur-[2px]" />
            <audio src="https://www.myinstants.com/media/sounds/marimuzzle-jigglypuff.mp3" autoPlay loop className="hidden" />
            <motion.img
              src="https://archives.bulbagarden.net/media/upload/thumb/3/3a/0039Jigglypuff.png/800px-0039Jigglypuff.png"
              alt="Jigglypuff"
              initial={{ y: '100%', opacity: 0, x: '-50%' }}
              animate={{ y: 0, opacity: 1, x: '-50%' }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute bottom-0 left-1/2 w-48 md:w-64 drop-shadow-[0_0_20px_rgba(255,105,180,0.5)] z-10 origin-bottom"
              style={{ objectFit: 'contain' }}
            />
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-white font-mono font-bold drop-shadow-[0_0_8px_rgba(255,192,203,0.8)]"
                initial={{ 
                  opacity: 0, 
                  y: '100vh', 
                  x: `${Math.random() * 100}vw`,
                  scale: 0.5 
                }}
                animate={{ 
                  opacity: [0, 0.8, 0], 
                  y: '-10vh',
                  x: `calc(${Math.random() * 100}vw + ${Math.random() * 200 - 100}px)`,
                  scale: 1.5 + Math.random()
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut"
                }}
              >
                Zzz
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Instagram, Mail, ShoppingBag, Video, Check, Youtube } from 'lucide-react';

export default function Contact({ onBack }: { onBack: () => void }) {
  const [copied, setCopied] = useState(false);
  const [isHoldingPhoto, setIsHoldingPhoto] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('jonathanraihhelgauz35@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    window.location.href = 'mailto:jonathanraihhelgauz35@gmail.com';
  };

  return (
    <div className="min-h-screen p-6 md:p-12 relative z-10 text-white pb-32">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-zinc-100 hover:text-white transition-colors mb-12 uppercase text-xs font-bold tracking-[0.2em]"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Terminal
        </button>

        <header className="mb-20">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-white">
            Connect <br />
            <span className="text-premium-gold">With The Archive</span>
          </h1>
          <p className="text-xl text-zinc-100 max-w-2xl leading-tight font-bold uppercase tracking-widest italic">
            Direct communications. Reach out for high-end acquisitions, market intel, or event scheduling.
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="liquid-glass rounded-[2rem] p-4 border border-white/10 relative group">
              <div className="absolute inset-0 bg-premium-gold/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
              <div 
                className="w-full aspect-[4/5] rounded-xl overflow-hidden cursor-pointer select-none"
                onMouseDown={() => setIsHoldingPhoto(true)}
                onMouseUp={() => setIsHoldingPhoto(false)}
                onMouseLeave={() => setIsHoldingPhoto(false)}
                onTouchStart={() => setIsHoldingPhoto(true)}
                onTouchEnd={() => setIsHoldingPhoto(false)}
              >
                <img 
                  src={isHoldingPhoto ? "https://upload.wikimedia.org/wikipedia/commons/3/3b/MissingNo.svg" : "/contact-profile.jpg.png"} 
                  alt="Alt Art Archive Founder" 
                  className={`w-full h-full transition-all duration-700 ${isHoldingPhoto ? 'object-contain scale-[0.9] translate-y-0 filter-none [image-rendering:pixelated]' : 'object-cover scale-[1.3] translate-y-[12%] filter grayscale contrast-125 group-hover:grayscale-0'}`}
                  draggable="false"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black text-premium-gold uppercase tracking-tighter italic">Jonathan Raihhelgauz</h3>
                <p className="text-zinc-300 font-bold uppercase text-xs tracking-widest mt-2">Founder & Curator</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 flex flex-col gap-6"
          >
            <a 
              href="https://www.tiktok.com/@altart_archive" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-8 liquid-glass rounded-2xl border border-white/5 hover:border-premium-gold/50 group transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-premium-gold/10 group-hover:scale-110 transition-all">
                <Video className="w-8 h-8 text-white group-hover:text-premium-gold" />
              </div>
              <div>
                <span className="text-[10px] text-zinc-300 font-bold uppercase block tracking-[0.3em] mb-1">Visual Log</span>
                <span className="text-2xl font-black text-white hover:text-white uppercase tracking-tighter italic">TikTok</span>
              </div>
            </a>

            <a 
              href="https://www.youtube.com/@altart_archive" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-8 liquid-glass rounded-2xl border border-white/5 hover:border-premium-gold/50 group transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-premium-gold/10 group-hover:scale-110 transition-all">
                <Youtube className="w-8 h-8 text-white group-hover:text-premium-gold" />
              </div>
              <div>
                <span className="text-[10px] text-zinc-300 font-bold uppercase block tracking-[0.3em] mb-1">Broadcasts</span>
                <span className="text-2xl font-black text-white hover:text-white uppercase tracking-tighter italic">YouTube</span>
              </div>
            </a>

            <a 
              href="https://www.instagram.com/altart_archive/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-8 liquid-glass rounded-2xl border border-white/5 hover:border-premium-gold/50 group transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-premium-gold/10 group-hover:scale-110 transition-all">
                <Instagram className="w-8 h-8 text-white group-hover:text-premium-gold" />
              </div>
              <div>
                <span className="text-[10px] text-zinc-300 font-bold uppercase block tracking-[0.3em] mb-1">Portfolio</span>
                <span className="text-2xl font-black text-white hover:text-white uppercase tracking-tighter italic">Instagram</span>
              </div>
            </a>

            <a 
              href="https://www.cardmarket.com/en/Pokemon/Users/altartarchive" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-8 liquid-glass rounded-2xl border border-white/5 hover:border-premium-gold/50 group transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-premium-gold/10 group-hover:scale-110 transition-all">
                <ShoppingBag className="w-8 h-8 text-white group-hover:text-premium-gold" />
              </div>
              <div>
                <span className="text-[10px] text-zinc-300 font-bold uppercase block tracking-[0.3em] mb-1">Inventory</span>
                <span className="text-2xl font-black text-white hover:text-white uppercase tracking-tighter italic">Cardmarket</span>
              </div>
            </a>

            <button 
              onClick={handleEmailClick}
              className="w-full text-left flex items-center gap-6 p-8 liquid-glass rounded-2xl border border-white/5 hover:border-premium-gold/50 group transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-premium-gold/10 group-hover:scale-110 transition-all shrink-0">
                {copied ? <Check className="w-8 h-8 text-green-400" /> : <Mail className="w-8 h-8 text-white group-hover:text-premium-gold" />}
              </div>
              <div>
                <span className="text-[10px] text-zinc-300 font-bold uppercase block tracking-[0.3em] mb-1">
                  {copied ? 'Copied to clipboard' : 'Direct Line'}
                </span>
                <span className="text-sm md:text-lg font-black text-white hover:text-white tracking-widest break-all">
                  {copied ? 'Address Copied!' : 'Email Dispatch'}
                </span>
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

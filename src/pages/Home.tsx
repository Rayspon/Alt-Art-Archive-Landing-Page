import { motion } from 'motion/react';
import { ExternalLink, MessageCircle, Calendar as CalendarIcon, ArrowRight, Star, ShoppingBag, ShieldCheck } from 'lucide-react';

const Section = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <motion.section
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
    viewport={{ once: false, amount: 0.2 }}
    className={`min-h-screen flex items-center justify-center px-6 py-24 relative z-10 ${className}`}
  >
    <div className="liquid-glass p-10 md:p-20 rounded-[3rem] max-w-5xl w-full border border-white/5 shadow-2xl">
      {children}
    </div>
  </motion.section>
);

export default function Home({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter text-white gold-glow">
            ALT ART <br className="hidden md:block" />
            <span className="text-premium-gold">ARCHIVE</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-200 max-w-2xl mb-12 font-bold tracking-widest uppercase bg-black/40 backdrop-blur-sm py-2 px-4 inline-block rounded-sm border-l-2 border-premium-gold mt-2">
            A vendor with some elite ball knowledge
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://www.cardmarket.com/en/Pokemon/Users/PokeMonitor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white text-obsidian font-black rounded-sm transition-all flex items-center justify-center gap-3 group hover:bg-premium-gold shadow-[0_0_30px_rgba(212,175,55,0.2)] uppercase tracking-tighter"
            >
              Start Shopping <ShoppingBag className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://www.tiktok.com/@altart_archive" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 border border-white/20 hover:border-white text-white font-black rounded-sm transition-all flex items-center justify-center gap-3 group uppercase tracking-tighter"
            >
              Contact <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600 hidden md:block"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-premium-gold to-transparent mx-auto" />
          <p className="text-[10px] uppercase tracking-[0.5em] mt-4 font-bold">Descend into the Collection</p>
        </motion.div>
      </section>

      {/* About Me Section */}
      <Section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-[2px] w-12 bg-premium-gold" />
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-premium-gold">The Beginning</h2>
        </div>
        <p className="text-xl md:text-2xl text-zinc-100 leading-tight mb-12 font-bold">
          Straight from the digital heart of <span className="text-premium-gold">Estonia</span>, 
          I am an up-and-coming Pokemon vendor, who aims to deliver the TCG hobby to all. What began as an early childhood obsession 
          has evolved into an international business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-bold">
          <div className="group">
            <h3 className="font-black text-white mb-3 uppercase text-xs tracking-[0.3em]">We are taking off!</h3>
            <p className="text-zinc-500 group-hover:text-zinc-300 transition-colors">From tiny Estonia to expos in <span className="text-white">Finland</span> and shipping all across Europe.</p>
          </div>
          <div className="group">
            <h3 className="font-black text-white mb-3 uppercase text-xs tracking-[0.3em]">Market Precision</h3>
            <p className="text-zinc-500 group-hover:text-zinc-300 transition-colors">Top rated on <span className="text-white">Cardmarket</span> and loved at card shows. All my products are authentic gems.</p>
          </div>
        </div>
      </Section>

      {/* Inventory Section */}
      <Section className="text-right">
        <div className="flex items-center gap-3 mb-8 justify-end">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-premium-crimson">The Holdings</h2>
          <div className="h-[2px] w-12 bg-premium-crimson" />
        </div>
        <p className="text-xl md:text-2xl text-zinc-100 leading-tight mb-12 font-bold">
          Alt Art Archive™ has a vast selection of <span className="text-premium-crimson italic">Ultra-Modern SIRs</span>. 
          You'll never see a bad card at our table. All the cards are 100% authentic, confirmed by professionals with years of experience. 
        </p>
        <div className="space-y-6">
          <div className="inline-block py-2 border-b border-white/10 ml-auto">
            <span className="text-zinc-500 text-sm uppercase tracking-widest mr-4">Buying Rate:</span>
            <span className="text-white font-bold text-lg">Up to 85%</span>
          </div>
          <br />
          <div className="inline-block py-2 border-b border-white/10 ml-auto">
            <span className="text-zinc-500 text-sm uppercase tracking-widest mr-4">Prices:</span>
            <span className="text-white font-bold text-lg">Always the lowest (seriously, you'll never find a better deal)</span>
          </div>
          <br />
          <div className="inline-block py-2 border-b border-white/10 ml-auto">
            <span className="text-zinc-500 text-sm uppercase tracking-widest mr-4">Investments:</span>
            <span className="text-white font-bold text-lg">I'll offer you my help and personal advice</span>
          </div>
        </div>
      </Section>

      {/* Start Collecting Section */}
      <Section>
        <span className="text-premium-gold font-black uppercase text-xs tracking-[0.5em] block mb-4">Phase Three</span>
        <h2 className="text-4xl md:text-7xl font-black mb-10 leading-[0.85] uppercase tracking-tighter">
          SECURE YOUR <br />
          <span className="text-premium-gold">FUTURE ASSET</span>
        </h2>
        <p className="text-lg text-zinc-400 leading-relaxed mb-12 max-w-2xl font-bold">
          The TCG market waits for no one. At Alt Art Archive provides the assets that define portfolios. 
          Your journey into high-end collecting begins with a single transaction. Let's fil our binders and expand our portfolios!
        </p>
        <div className="flex flex-col gap-6">
          <button
            onClick={() => onNavigate('events')}
            className="w-full bg-premium-gold/10 border border-premium-gold/30 p-10 rounded-sm group hover:bg-premium-gold/20 transition-all text-left"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-premium-gold text-2xl font-black uppercase italic">Deployment Calendar</span>
                <p className="text-zinc-500 mt-2">See where the Archive will be appearing next.</p>
              </div>
              <CalendarIcon className="w-8 h-8 text-premium-gold group-hover:scale-110 transition-transform" />
            </div>
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="https://www.cardmarket.com/en/Pokemon/Users/PokeMonitor" target="_blank" className="bg-white p-10 group hover:opacity-90 transition-all">
              <span className="text-obsidian text-2xl font-black uppercase italic">Marketplace</span>
              <ArrowRight className="text-obsidian mt-4 group-hover:translate-x-2 transition-transform" />
            </a>
            <a href="https://www.tiktok.com/@altart_archive" target="_blank" className="bg-premium-crimson p-10 group hover:opacity-90 transition-all">
              <span className="text-white text-2xl font-black uppercase italic">Visual Log</span>
              <MessageCircle className="text-white mt-4 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <span className="text-3xl font-black tracking-tighter text-premium-gold">ALTART ARCHIVE</span>
            <p className="text-zinc-600 text-sm mt-4 font-bold uppercase tracking-[0.2em]">Curated in Estonia • Serving the Nordics</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">Reset View</button>
            <button onClick={() => onNavigate('events')} className="hover:text-white transition-colors">Intelligence / Events</button>
            <a href="https://www.tiktok.com/@altart_archive" target="_blank" className="hover:text-white transition-colors">Internal Comms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

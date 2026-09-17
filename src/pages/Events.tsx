import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar as CalendarIcon, MapPin, ArrowLeft, Trophy, Users, MoveRight, Camera, ZoomIn, X } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  icon: React.ReactNode;
  type: 'Tournament' | 'Trade Night' | 'Convention';
  status: string;
  link?: string;
  photos?: { src: string; caption: string }[];
}

const events: Event[] = [
  {
    id: 1,
    title: "*complete* FINLAND CARD EXPO MEGA Tampereen Messukeskus Lauantai",
    date: "June 27th, 2026",
    location: "Tampere, Finland",
    description: "The legendary Tampere Exhibition and Sports Centre. The 3,600 square meter D-hall was filled with trading card excitement!",
    icon: <Trophy className="w-5 h-5 text-pokemon-yellow" />,
    type: 'Convention',
    status: 'Completed Event',
    link: 'https://www.finlandcardexpo.fi/tampereen-messukeskus',
    photos: [
      { src: '/IMG-20260630-WA0002.jpg', caption: 'Live Booth & Showcase Table • Tampere Mega' },
      { src: '/IMG-20260630-WA0003.jpg', caption: 'The Vault: Graded Slabs & SIR Binders • Tampere Mega' }
    ]
  },
  {
    id: 2,
    title: "FINLAND CARD EXPO MEGA CABLE FACTORY",
    date: "Sat-Sun 19-20.9.2026",
    location: "Helsinki, Finland",
    description: "Finland Card Expo Mega arrives at Kaapelitehdas (Cable Factory) in Helsinki! An entire weekend filled with Pokémon TCG, rare collectibles, and community trading.",
    icon: <Users className="w-5 h-5 text-pokemon-red" />,
    type: 'Convention',
    status: 'Confirmed Deployment',
    link: 'https://www.finlandcardexpo.fi/kaapelitehdas-hki'
  },
  {
    id: 3,
    title: "Pokémon TCG: Trade & Play @ Mabrik",
    date: "TBD",
    location: "Tallinn, Estonia",
    description: "The Pokémon community is quite scattered, and many fans struggle to find others to play with. Let's change that! Whether you're a collector, a casual fan, or a competitive player, this is the perfect chance to meet fellow Trainers and maybe even set up future battles!",
    icon: <Trophy className="w-5 h-5 text-pokemon-yellow" />,
    type: 'Trade Night',
    status: 'Unconfirmed'
  }
];

export default function Events({ onBack }: { onBack: () => void }) {
  const [activePhoto, setActivePhoto] = useState<{ src: string; caption: string } | null>(null);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-zinc-100 hover:text-white transition-colors mb-12 uppercase text-xs font-bold tracking-[0.2em]"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Terminal
        </button>

        <header className="mb-20">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 uppercase leading-[0.85]">
            Archive <br />
            <span className="text-premium-gold">Intelligence</span>
          </h1>
          <p className="text-xl text-zinc-100 max-w-2xl leading-tight font-bold uppercase tracking-widest italic">
            Deployment Log: Where the Archive meets the community. Join us at these upcoming exhibits across the Baltics.
          </p>
        </header>

        <div className="space-y-4">
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="liquid-glass p-6 md:p-10 group border-white/[0.05] hover:border-premium-gold/30 transition-all cursor-default"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-white text-obsidian text-[10px] font-black uppercase tracking-[0.2em]">
                      {event.type}
                    </span>
                    <span className="text-premium-gold flex items-center gap-2 text-sm font-black italic">
                      <CalendarIcon className="w-4 h-4" /> {event.date}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3 uppercase tracking-tighter italic">{event.title}</h3>
                  <p className="text-zinc-200 mb-6 font-bold leading-relaxed">{event.description}</p>
                  <div className="flex items-center gap-2 text-zinc-100 font-black uppercase text-xs tracking-widest">
                    <MapPin className="w-4 h-4 text-premium-crimson shrink-0" />
                    {event.location}
                  </div>

                  {event.photos && event.photos.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-white/10">
                      <div className="flex items-center gap-2 text-[10px] text-zinc-300 font-bold uppercase tracking-[0.25em] mb-3">
                        <Camera className="w-3.5 h-3.5 text-premium-gold" />
                        <span>On-Site Event Gallery</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 max-w-sm">
                        {event.photos.map((photo, pIdx) => (
                          <div
                            key={pIdx}
                            onClick={() => setActivePhoto(photo)}
                            className="group/photo relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-black/50 cursor-pointer shadow-md"
                          >
                            <img
                              src={photo.src}
                              alt={photo.caption}
                              className="w-full h-full object-cover group-hover/photo:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover/photo:bg-black/0 transition-colors" />
                            <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/photo:opacity-100 transition-all">
                              <ZoomIn className="w-3 h-3" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col gap-4 md:gap-6 bg-white/[0.03] p-6 md:p-8 border border-white/5 rounded-xl md:rounded-none">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-premium-gold/10 rounded-sm">
                      {event.icon}
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-300 font-bold uppercase block tracking-[0.3em] mb-1">Status</span>
                      <span className="text-premium-gold text-sm font-black uppercase italic tracking-widest">{event.status}</span>
                    </div>
                  </div>
                  {event.link && (
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white text-obsidian text-xs font-black uppercase tracking-[0.2em] hover:bg-premium-gold transition-colors"
                    >
                      Explore Details <MoveRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 p-8 md:p-12 rounded-[2rem] border border-dashed border-white/10 flex flex-col items-center justify-center text-center">
          <MoveRight className="w-12 h-12 text-zinc-400 mb-6" />
          <h2 className="text-2xl font-bold text-zinc-200 uppercase tracking-widest">More Events TBA</h2>
          <p className="text-zinc-300 mt-2 max-w-xs">Connecting collectors, one show at a time. Follow my TikTok for live venue updates.</p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full liquid-glass rounded-2xl overflow-hidden border border-white/20 cursor-default shadow-2xl"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all"
                aria-label="Close photo"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="max-h-[70vh] w-full flex items-center justify-center bg-black/60 overflow-hidden">
                <img
                  src={activePhoto.src}
                  alt={activePhoto.caption}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              </div>
              <div className="p-6 bg-black/90 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight">{activePhoto.caption}</h3>
                  <p className="text-xs text-zinc-300 font-bold mt-1 uppercase tracking-widest">Tampere Exhibition & Sports Centre • Card Expo Mega</p>
                </div>
                <button
                  onClick={() => setActivePhoto(null)}
                  className="px-5 py-2.5 bg-white text-obsidian text-xs font-black uppercase tracking-widest hover:bg-premium-gold transition-colors rounded-sm self-start sm:self-auto"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
